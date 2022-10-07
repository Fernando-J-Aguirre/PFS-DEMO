import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo {
   
    constructor(marca: string, dominio: string, modelo: string, año: number, precio: number) {
        super(marca, dominio, modelo, año, precio, 'Auto');
    }
    public mostrar() : string {
        return `Auto { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año} - precio ${this.precio}}`;
    }           

    public getTipo() : string {
        return 'Auto';
    }

    public guardar(): string {
        let datos: string;
        datos = `${super.getMarca()},${super.getDominio()},${super.getModelo()},${super.getAño().toString()},${super.getPrecio().toString()}`;
        return datos;
    }

}