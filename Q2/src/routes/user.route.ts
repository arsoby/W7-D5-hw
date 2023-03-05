import express, { Router } from "express";
import {
  addUser,
  checkPasswordAndEmil,
  deleteUser,
  findAllUser,
  findUserByEmail,
  findUserByID,
  findUserByJY,
  findUsersByAge,
  findUsersByJy,
  findUsersByRole,
  updatePassword,
  updateUser,
} from "../controller/user.controller";
const router = express.Router();
import validates from "../middleware/validates";
import { userType } from "../zod.schema/zod.user";

//read
router.get("", findAllUser);

router.get("/id", findUserByID);
//create
router.post("", validates(userType), addUser);

//update
router.put("/:id", validates(userType), updateUser);

//delete
router.delete("/:id", deleteUser);

router.post("/byEmail", findUserByEmail);

router.post("/byage/all", findUsersByAge);

router.post("/byRole/all", findUsersByRole);

router.post("/check", checkPasswordAndEmil);

router.put("/:id", updatePassword);

router.post("/jy/", findUserByJY);

router.post("/jy/all", findUsersByJy);
export default router;
