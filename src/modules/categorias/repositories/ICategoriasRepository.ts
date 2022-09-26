import { Categoria } from "../entities/Categoria";

interface ICreateCategoriaDTO{
    nome: string;
    descricao: string;
}
interface ICategoriasRepository{
    create({nome, descricao}: ICreateCategoriaDTO): Promise<void>;
    findByNome(nome: string): Promise<Categoria>;
    list(): Promise<Categoria[]>;
}

export { ICreateCategoriaDTO, ICategoriasRepository}