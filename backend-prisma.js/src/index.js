import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
const port = 6969;
app.use(express());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on port  http://localhost:${port}`);
});
