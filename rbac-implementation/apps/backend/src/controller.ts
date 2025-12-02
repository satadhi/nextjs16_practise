import { Request, Response } from "express";
import { ROLE_PERMISSIONS } from "@rbac/shared";
export const getPermission = (req: Request, res: Response) => {
  const { type } = req.params;
  const permissons = ROLE_PERMISSIONS[type];
  res.status(200).json(permissons);
};
