import Usuario from "../models/user.model.js";

const existeUsuarioPorId = async (id) => {
  const existeUsuario = await Usuario.findById(id);
  if (!existeUsuario) {
    throw new Error(`El usuario no existe`);
  }
};

export { existeUsuarioPorId };
