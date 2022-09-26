import { container } from "tsyringe"
import { ListarCategoriasUseCase } from "./ListarCategoriasUseCase";
import {Request, Response } from "express";

class ListarCategoriasController{
    async handle(request: Request, response: Response): Promise<Response>{
        const listarCategorias = container.resolve(ListarCategoriasUseCase);
        const lista = await listarCategorias.execute();
        return response.json(lista);

    }
}

export {ListarCategoriasController}