import express from "express";
import cors from "cors";
import cookie from "cookie-parser";

const app = express();
const port = 6969;

app.use(express());
app.use(cors());
app.use(cookie());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
