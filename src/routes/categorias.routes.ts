import {Router} from "express";
import { NovaCategoriaController } from "../modules/categorias/useCases/novaCategoria/NovaCategoriaController";

const categoriasRoutes = Router();

const novaCategoriaController = new NovaCategoriaController();

categoriasRoutes.post("/", novaCategoriaController.handle);

export { categoriasRoutes}