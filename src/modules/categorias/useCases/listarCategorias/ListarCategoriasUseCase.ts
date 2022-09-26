import { inject, injectable } from "tsyringe";
import { Categoria } from "../../entities/Categoria";
import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";

@injectable()
class ListarCategoriasUseCase{
    constructor(
        @inject("CategoriasRepository")
        private categoriasRepository: ICategoriasRepository
    ){}
    async execute(): Promise<Categoria[]>{
        const categorias = await this.categoriasRepository.list();
        return categorias;
    }
}

export {ListarCategoriasUseCase}