import dotenv from "dotenv";
dotenv.config();
import Express, { json } from "express";
import database  from "./database/database";
import router from "./routes";
import errorMiddleware from "./api/middlewares/error-middleware";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileupload from "express-fileupload";
import path from "path";

const app = Express();

const PORT = process.env.PORT;

app.use(cors());
app.use(json());
app.use(Express.static(path.resolve(__dirname, "api", "static")));
app.use(cookieParser());
app.use(fileupload({}));
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  await database.authenticate();
  // await db.sync({alter: true, force: true});
  await database.sync();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
  console.log(process.env.DB_NAME);
};

start();
