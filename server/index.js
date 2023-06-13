import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
console.log(port, process.env.PUBLIC_URL);

app.use(
  cors({
    orign: [process.env.PUBLIC_URL],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
