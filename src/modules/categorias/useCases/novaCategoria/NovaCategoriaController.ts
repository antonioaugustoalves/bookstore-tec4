import {Request, Response} from "express";
import {container} from "tsyringe";
import { NovaCategoriaUseCase } from "./NovaCategoriaUseCase";

class NovaCategoriaController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {nome, descricao} = request.body;
        const novaCategoriaUseCase = container.resolve(NovaCategoriaUseCase);
        await novaCategoriaUseCase.execute({nome, descricao});
        return  response.status(201).send("OK");

    }

}

export {NovaCategoriaController}