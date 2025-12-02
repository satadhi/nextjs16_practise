import { Router } from "express";
import { getPermission } from "./controller";

const router: Router = Router();

router.get("/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

router.get("/permission/:type", getPermission);

export default router;
