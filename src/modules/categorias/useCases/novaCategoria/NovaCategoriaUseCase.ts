import {injectable, inject} from "tsyringe";
import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";
interface IRequest{
    nome: string;
    descricao: string;
}
@injectable()
class NovaCategoriaUseCase{

    constructor(
        @inject("CategoriasRepository") 
        private categoriasRepository: ICategoriasRepository){}

    async execute({ nome, descricao}: IRequest): Promise<void>{
        const categoriaExistente = await this.categoriasRepository.findByNome(nome);

        if(categoriaExistente){
            throw new Error("Esta categoria já existe.");
        }

        this.categoriasRepository.create({nome, descricao});
    }

}

export { NovaCategoriaUseCase}

