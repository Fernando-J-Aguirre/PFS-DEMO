import { Injectable } from '@nestjs/common';

@Injectable()
export class ClienteService {
    private static readonly CANTIDAD_CLIENTES = 5;
    private listaClientes = [];

    public getClientes(): any {
        this.listaClientes = [
            { nombre: "Fernando", apellido: "Aguirre", domicilio: "Chile 500", mail: "fernandoj_aguirre@hotmail.com"},
            { nombre: "Marcelo", apellido: "Rodriguez", domicilio: "San Martín 700", mail: "mrodriguez@hotmail.com"},
            { nombre: "Rodrigo", apellido: "Bandi", domicilio: "Alvear 330", mail: "rbandi@hotmail.com"},
            { nombre: "Juan", apellido: "Pérez", domicilio: "Alberdi 880", mail: "jperez@hotmail.com"},
            { nombre: "Pablo", apellido: "Díaz", domicilio: "España 660", mail: "pdiaz@hotmail.com"},
        ];
        return this.listaClientes;
    }
}

