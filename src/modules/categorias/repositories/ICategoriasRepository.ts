import { Categoria } from "../entities/Categoria";

interface ICreateCategoriaDTO{
    name: string;
    description: string;
}
interface ICategoriasRepository{
    create({name, description}: ICreateCategoriaDTO): Promise<void>;
    findByNome(name: string): Promise<Categoria>;
    list(): Promise<Categoria[]>;
}

export {  ICategoriasRepository, ICreateCategoriaDTO}