export default abstract class Vehiculo {
    protected patente: string;
    protected titular: string;
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected precio: number;

    constructor(marca: string, patente: string, modelo: string, año: number, precio: number) {
        this.patente = patente;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
    }

    public getDominio(): string { return this.patente; }
    public setDominio(patente: string): void { this.patente = patente; }

    public getMarca(): string { return this.marca; }
    public setMarca(marca: string): void { this.marca = marca; }

    public getModelo(): string { return this.modelo; }
    public setModelo(modelo: string): void { this.modelo = modelo; }

    public getAñO(): number { return this.año; }
    public setAñO(año: number): void { this.año = año; }

    public getPrecio(): number { return this.precio; }
    public setPrecio(precio: number): void { this.precio = precio; }

    abstract mostrar(): string;
}