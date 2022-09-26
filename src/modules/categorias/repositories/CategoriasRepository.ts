import { Categoria } from "../entities/Categoria";
import { ICategoriasRepository, ICreateCategoriaDTO } from "./ICategoriasRepository";


class CategoriasRepository implements ICategoriasRepository{
    create({ nome, descricao }: ICreateCategoriaDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
    findByNome(nome: string): Promise<Categoria> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<Categoria[]> {
        throw new Error("Method not implemented.");
    }
    
}

export {CategoriasRepository}