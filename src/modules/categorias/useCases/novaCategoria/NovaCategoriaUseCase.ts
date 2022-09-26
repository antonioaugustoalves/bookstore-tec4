import {injectable, inject} from "tsyringe";
import { ICategoriasRepository } from "../../repositories/ICategoriasRepository";
interface IRequest{
    name: string;
    description: string;
}
@injectable()
class NovaCategoriaUseCase{

    constructor(
        @inject("CategoriasRepository") 
        private categoriasRepository: ICategoriasRepository){}

    async execute({ name, description}: IRequest): Promise<void>{
        const categoriaExistente = await this.categoriasRepository.findByNome(name);

        if(categoriaExistente){
            throw new Error("Esta categoria já existe.");
        }

        const categoria = this.categoriasRepository.create({name, description});
        console.log(categoria);
    }

}

export { NovaCategoriaUseCase}

