import { Router } from "express";
import {
  getUser,
  putUser,
  postUser,
  patchUser,
  deleteUser,
} from "../controllers/user.controller.js";

const users = Router();

//no se ejecuta la funcion se hace una referencia de esta

users.get("/", getUser);

users.put("/:id", putUser);

users.post("/", postUser);

users.delete("/", deleteUser);

users.patch("/", patchUser);

export default users;
