import {container} from "tsyringe";
import { CategoriasRepository } from "../modules/categorias/repositories/CategoriasRepository";
import { ICategoriasRepository } from "../modules/categorias/repositories/ICategoriasRepository";

container.registerSingleton<ICategoriasRepository>(
    "CategoriasRepository",
    CategoriasRepository,
    
);