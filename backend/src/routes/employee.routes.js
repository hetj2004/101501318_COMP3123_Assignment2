import { Router } from "express";
import {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee
} from "../controllers/employee.controller.js";
import upload from "../middleware/multer.js";

const router = Router();

router.post("/", upload.single("profilePicture"), createEmployee);
router.get("/", getAllEmployees);
router.get("/:id", getEmployeeById);
router.put("/:id", upload.single("profilePicture"), updateEmployee);
router.delete("/:id", deleteEmployee);

export default router;
