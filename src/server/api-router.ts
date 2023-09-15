import express from "express";
import cors from "cors";
import testData from "../test-data.json";

const router = express.Router();

router.use(cors());

router.get("/contests", (req, res) => {
  //get data from mongoDB
  res.send({ contests: testData });
});

export default router;
