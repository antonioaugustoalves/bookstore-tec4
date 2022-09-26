import { getRepository, Repository } from "typeorm";
import { Categoria } from "../entities/Categoria";
import { ICategoriasRepository, ICreateCategoriaDTO } from "./ICategoriasRepository";



class CategoriasRepository implements ICategoriasRepository{
    private categoriaRepository: Repository<Categoria>;

    constructor(){
        this.categoriaRepository = getRepository(Categoria);
    }
    async create({ name, description }: ICreateCategoriaDTO): Promise<void> {
        
        const categoria = this.categoriaRepository.create({name, description });
        await this.categoriaRepository.save(categoria);
    }
    async findByNome(name: string): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({name});
        return categoria;
    }
    async list(): Promise<Categoria[]> {
        const listaCategorias = await this.categoriaRepository.find();
        return listaCategorias;
    }
    
}

export {CategoriasRepository}