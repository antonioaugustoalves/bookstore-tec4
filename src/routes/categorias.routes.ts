import {Router} from "express";
import { ListarCategoriasController } from "../modules/categorias/useCases/listarCategorias/ListarCategoriasController";
import { NovaCategoriaController } from "../modules/categorias/useCases/novaCategoria/NovaCategoriaController";

const categoriasRoutes = Router();

const novaCategoriaController = new NovaCategoriaController();
const listarCategoriasController = new ListarCategoriasController();

categoriasRoutes.post("/", novaCategoriaController.handle);
categoriasRoutes.get("/", listarCategoriasController.handle);

export { categoriasRoutes}