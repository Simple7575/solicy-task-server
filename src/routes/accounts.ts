import { Router } from "express";
import { getAccounts, getAccount } from "../controllers/accounts.js";

const router = Router();

router.get("/", getAccounts);
router.get("/:id", getAccount);

export default router;
