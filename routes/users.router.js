import { Router } from "express";
import { check } from "express-validator";
import {
  getUser,
  putUser,
  postUser,
  deleteUser,
} from "../controllers/user.controller.js";
import { existeUsuarioPorId } from "../helpers/db-validators.js";

const users = Router();

//no se ejecuta la funcion se hace una referencia de esta

users.get("/", getUser);

users.put("/:id", [check("id", "No es un id valido").isMongoId()], putUser);

users.post(
  "/",
  [
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("birthday", "La fecha de nacimiento es obligatoria").not().isEmpty(),
    check("gender", "El genero es obligatorio").not().isEmpty(),
  ],
  postUser
);

users.delete(
  "/:id",
  [
    check("id", "El usuario no existe").isMongoId(),
    check("id").custom(existeUsuarioPorId),
  ],
  deleteUser
);

export default users;
