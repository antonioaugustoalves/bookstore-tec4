import {Router} from "express";
import { categoriasRoutes } from "./categorias.routes";

const router = Router();

router.use("/categorias", categoriasRoutes);

export {router}