import express from "express";

const router = express.Router();

router.get("/contests", (req, res) => {
  //get data from mongoDB
  res.send([]);
});

export default router;
