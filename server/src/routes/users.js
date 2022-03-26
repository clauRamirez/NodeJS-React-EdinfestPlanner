import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
    res.send("<h1>Test</h1>");
});

export default router;
