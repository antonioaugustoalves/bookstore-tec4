import { Categoria } from "../entities/Categoria";
import { ICategoriasRepository, ICreateCategoriaDTO } from "../repositories/ICategoriasRepository";


class CategoriasRepositoryFake implements ICategoriasRepository {
    private categorias:Categoria[] = [];
    async create({ name, description }: ICreateCategoriaDTO): Promise<void> {
        const categoria = new Categoria();
        Object.assign(categoria, { name, description });
        this.categorias.push(categoria);
    }
    async findByNome(name: string): Promise<Categoria> {
        const categoria = await this.categorias.find(categoria => categoria.name === name);
        return categoria;
    }
    async list(): Promise<Categoria[]> {
        const all = await this.categorias;
        return all;

    }

}

export {CategoriasRepositoryFake}