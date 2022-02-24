import { Router } from "express";
import { crear } from "../controller/categoria_producto.controller.js";

export const CategoriaProductoRouter = Router();

CategoriaProductoRouter.post("/categoria-producto", crear);