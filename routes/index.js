const express = require("express");
const router = express.Router();
const Sentry = require("@sentry/node");

const likeRouter = require("./like.routes");
const mapRouter = require("./map.routes");
const mypageRouter = require("./mypage.routes");
const queRouter = require("./que.routes");
const reviewRouter = require("./review.routes");
const socketRouter = require("./socket.routes");
const storeRouter = require("./store.routes");
const userRouter = require("./user.routes");
const whiskyRouter = require("./whisky.routes");
const emailRouter = require("./email.routes");

router.use("/auth", [userRouter, storeRouter, emailRouter]);
router.use("/mypage", mypageRouter);
router.use("/review", reviewRouter);
router.use("/que", queRouter);
router.use("/whisky", whiskyRouter);
router.use("/socket", socketRouter);
router.use("/map", mapRouter);
router.use("/like", likeRouter);

module.exports = router;
