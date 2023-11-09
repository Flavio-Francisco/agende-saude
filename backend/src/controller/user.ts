import { hash } from "bcrypt";
import { router } from "../routes/routes";
import { prisma } from "../utils/prisma";

 const createUser = router.post("/create", async (req, res) => {
    try {
      const { card_sus, password } = req.body;
      const hash_password = await hash(password, 8);
      const user = await prisma.user.create({
        data: {
          card_sus: card_sus,
          password: hash_password,
        },
      
      });
      if (!user) {
        return res.json({ error: "usúario não encontrado" });
      }
      res.send({ user });
    } catch (error) {
      console.log(error);
    }
 
  });

export default createUser;