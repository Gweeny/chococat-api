import { Router } from "express";
import {
  addChocolate,
  deleteChocolate,
  getAll,
  getOne,
  updateChocolate,
} from "../controllers/chocolate.controller.js";
const router = Router();

router.post("/", addChocolate);
router.get("/", getAll);
router.get("/:id", getOne);
router.patch("/update/:id", updateChocolate);
router.delete("/delete/:id", deleteChocolate);

export default router;
