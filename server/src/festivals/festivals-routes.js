import express from "express";
import controller from "./festivals-controller";

const router = express.Router();

router.get("/", controller.getAll);

export default router;
