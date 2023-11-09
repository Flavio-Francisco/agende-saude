import { compare } from "bcrypt";
import { router } from "../routes/routes";
import { prisma } from "../utils/prisma";
import { sign } from "jsonwebtoken";
import { secret } from "../../keys";

const auth = router.post("/auth", async (req, res) => {
  const { card_sus, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { card_sus: card_sus },
  });

  if (!user) {
    return res.json({ error: "usúario não encontrado" });
  }
  const isValuePassword = await compare(password, user.password);
  if (!isValuePassword) {
    return res.json({ error: "senha invalida" });
  }

  const token = sign(
    {
      id: user.id,
    },
    secret,
    {
      expiresIn: "1d",
    }
  );
  return res.send({ user, token });
});

export default auth;
