import Vehiculo from "./Vehiculo";

export default class Camioneta extends Vehiculo {
    private capacidad: number = 0;

    constructor(marca: string, dominio: string, modelo: string, año: number, precio: number, capacidad: number) {
        super(marca, dominio, modelo, año, precio, 'Camioneta');
        if (capacidad) this.capacidad = capacidad;
    }

    public getCapacidad(): number { return this.capacidad; }
    public setCapacidad(capacidad: number): void { this.capacidad = capacidad; }
    public mostrar(): string {
        return `Camioneta { Dominio: ${this.dominio} es un ${this.marca}-${this.modelo} modelo ${this.año} - precio ${this.precio}, posee ${this.capacidad} de capacidad}`;
    }

    public getTipo() : string {
        return 'Camioneta';
    }

    public guardar(): string {
        let datos: string;
        datos = `${super.getMarca()},${super.getDominio()},${super.getModelo()},${super.getAño().toString()},${super.getPrecio().toString()}`;
        return datos;
    }
}