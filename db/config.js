import mongoose from "mongoose";

export const dbConecction = async () => {
  try {
    await mongoose.connect(process.env.MONDODB_ATLAS);
    console.log("Conectado a la Base De Datos");
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
  }
};
