import {Request, Response} from "express";
import {container} from "tsyringe";
import { NovaCategoriaUseCase } from "./NovaCategoriaUseCase";

class NovaCategoriaController{
    async handle(request: Request, response: Response): Promise<Response>{
        const {name, description} = request.body;
        const novaCategoriaUseCase = container.resolve(NovaCategoriaUseCase);
        await novaCategoriaUseCase.execute({name, description});
        return  response.status(201).send("OK");

    }

}

export {NovaCategoriaController}