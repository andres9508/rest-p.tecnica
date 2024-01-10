import { response, request } from "express";
import Usuario from "../models/user.model.js";
import { validationResult } from "express-validator";

// loscontroladores son solo funciones q se exportan para ser usadas por la ruta

export const getUser = async (req = request, res = response) => {
  const usuarios = await Usuario.find();

  res.json({
    msg: "exito",
    usuarios,
  });
};

//obteniendo datos de los prametros
export const putUser = async (req = request, res = response) => {
  const errors = validationResult(req);
  const id = req.params.id;
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  const { name, birthday, gender } = req.body;
  const usuario = await Usuario.findByIdAndUpdate(
    id,
    { name, birthday, gender },
    { new: true }
  );

  res.json({
    msg: "Usuario actualizado con exito",
    id,
    usuario,
  });
};

export const postUser = async (req = request, res = response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  const body = req.body;

  const usuario = new Usuario(body);
  await usuario.save();

  res.json({
    msg: "Usuario creado con exito",
    usuario,
  });
};

export const deleteUser = async (req, res = response) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }
  const { id } = req.params;
  const usuario = await Usuario.findByIdAndDelete(id);
  res.json({
    msg: "usuario eliminado con exito",
    id,
    usuario,
  });
};
