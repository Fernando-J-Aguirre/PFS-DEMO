import Vehiculo from "./Vehiculo";

export default class Auto extends Vehiculo {
   
    constructor(marca: string, patente: string, modelo: string, año: number, precio: number) {
        super(marca, patente, modelo, año, precio);
    }
    public mostrar() : string {
        return `Auto { Patente: ${this.patente} es un ${this.marca}-${this.modelo} modelo ${this.año} - precio ${this.precio}}`;
    }           
}