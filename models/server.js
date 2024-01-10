import express from "express";
import cors from "cors";
import users from "../routes/users.router.js";
import { dbConecction } from "../db/config.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    //conecatar a la base de datos
    this.connectDB();
    //Middlewares
    this.middlewares();

    this.routes();
  }

  async connectDB() {
    await dbConecction();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use(express.json());
    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use("/api/users", users);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor en puerto : ", this.port);
    });
  }
}

export default Server;
