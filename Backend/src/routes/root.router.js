import express from "express";
import { PrismaClient } from "@prisma/client";
const rootRouter = express.Router();
const prisma = new PrismaClient();

rootRouter.get(
  `/get-data`,
  async(req, res, next) => {
    //req.duLieuTruyenDi = payload
    
    const result = await prisma.projects.findMany();
    console.log(result);
    res.send(result);
    return result;
  }
  // (req, res, next) => {
  //  console.log(2);
  //  req.duLieuTruyenDi += `+ 1`;
  //  next();
  // },
  // (req, res, next) => {
  //  console.log(3);
  //  req.duLieuTruyenDi += `+ 2`;
  //  next();
  // },
  // (request, respone, next) => {
  //   respone.json(request.duLieuTruyenDi);
  // }
);

rootRouter.use("/", () => {});

export default rootRouter;
