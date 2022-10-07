export default abstract class Vehiculo {
    protected dominio: string;
    protected titular: string;
    protected marca: string;
    protected modelo: string;
    protected año: number;
    protected precio: number;
    protected tipo: string;

    constructor(marca: string, dominio: string, modelo: string, año: number, precio: number, tipo: string) {
        this.dominio = dominio;
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precio = precio;
        this.tipo = tipo;
    }

    public getDominio(): string { return this.dominio; }
    public setDominio(dominio: string): void { this.dominio = dominio; }

    public getMarca(): string { return this.marca; }
    public setMarca(marca: string): void { this.marca = marca; }

    public getModelo(): string { return this.modelo; }
    public setModelo(modelo: string): void { this.modelo = modelo; }

    public getAño(): number { return this.año; }
    public setAño(año: number): void { this.año = año; }

    public getPrecio(): number { return this.precio; }
    public setPrecio(precio: number): void { this.precio = precio; }

    abstract mostrar(): string;
    abstract getTipo(): string;
    abstract guardar(): string;
}