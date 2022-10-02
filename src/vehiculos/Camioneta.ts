import Vehiculo from "./Vehiculo";

export default class Camioneta extends Vehiculo {
    private capacidad: number = 0;

    constructor(marca: string, patente: string, modelo: string, año: number, precio: number, capacidad: number) {
        super(marca, patente, modelo, año, precio);
        if (capacidad) this.capacidad = capacidad;
    }

    public getCapacidad(): number { return this.capacidad; }
    public setCapacidad(capacidad: number): void { this.capacidad = capacidad; }
    public mostrar(): string {
        return `Camioneta { Patente: ${this.patente} es un ${this.marca}-${this.modelo} modelo ${this.año} - precio ${this.precio}, posee ${this.capacidad} de capacidad}`;
    }
}