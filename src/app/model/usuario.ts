import { Grupo } from './grupo';

export class Usuario {

    id: number;
    nome: string;
    email: string;
    login: string;
    senha: string;
    grupo: Grupo = new Grupo();

    constructor() {}
}
