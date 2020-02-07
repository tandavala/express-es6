import express from "express";
import router from "./routes/index";

const app = express();

app.use(express.json());

app.use("/", router);

app.listen(4000, () => {
  console.log("Example app listengin on port 4000");
});
