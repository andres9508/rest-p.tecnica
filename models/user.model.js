import { Schema, model } from "mongoose";

const userSchema = Schema({
  name: {
    type: String,
    require: [true, "El nombre es requerido"],
  },
  birthday: {
    type: String,
    require: [true, "La fecha de nacimiento es requerida"],
  },
  gender: {
    type: String,
    require: [true, "El genero es requerido"],
  },
});

export default model("User", userSchema);
