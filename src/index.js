import dotenv from "dotenv";
import express from "express";
import router from "./routes/url.routes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started at: ${process.env.PORT}`);
});
