import express from "express";
import cors from "cors";
import logger from "morgan";
import createUser from "./controller/user";
import auth from "./controller/auth";

// criando app

export const app = express();

// configuração dos middlewares

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

// integrando endponit

app.use("/",createUser);
app.use("/",auth);
