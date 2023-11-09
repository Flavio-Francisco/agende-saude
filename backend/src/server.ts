import { app } from "./app";

const port = 3000;

const server = app.listen(port, () =>
  console.log(`http://localhost:${port}`)
);

process.on("SIGINT", () => {
  server.close();
  console.log("servidor finalizado");
});
