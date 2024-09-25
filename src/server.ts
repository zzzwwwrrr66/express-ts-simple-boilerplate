import express from "express";
import "dotenv/config";
import cors from "cors";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.status(200).send("Hello World");
});

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
