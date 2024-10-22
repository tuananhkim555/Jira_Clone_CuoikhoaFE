import express from "express";

const rootRouter = express.Router();

rootRouter.get(
  `/`,
  (req, res, next) => {
   console.log(1);
   const payload = `ok`;
   req.duLieuTruyenDi = payload;
   next();
  },
  (req, res, next) => {
   console.log(2);
   req.duLieuTruyenDi += `+ 1`;
   next();
  },
  (req, res, next) => {
   console.log(3);
   req.duLieuTruyenDi += `+ 2`;
   next();
  },
  (request, respone, next) => {
    respone.json(request.duLieuTruyenDi);
  }
);

rootRouter.use("/");


export default rootRouter;
