import express from "express";

const server = express();

server.use(express.static("dist"));

server.use("/", (req, res) => {
  res.send("Hello Express!");
});

server.listen("8080", "localhost", () => {
  console.info("Express server is listening at http://localhost:8080");
});
