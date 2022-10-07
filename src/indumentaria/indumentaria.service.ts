import { Injectable } from '@nestjs/common';
import Indumentaria from './indumentaria';
import * as FS from 'fs'

@Injectable()
export class IndumentariaService {
    // private static readonly CANTIDAD_PRENDAS = 5;
    private listaPrendas: Indumentaria[] = [];

    // public getPrendas(): Indumentaria[] {
    //     this.listaPrendas = [];
    //     let indumentaria: Indumentaria; 
    //     let prendasJson = [
    //         { id: 1, prenda: "Remera", marca: "Nike", precio: 2500, talle: "S", tipo: "Deportiva" },
    //         { id: 2, prenda: "Short", marca: "Adidas", precio: 2700, talle: "L", tipo: "Deportiva" },
    //         { id: 3, prenda: "Campera", marca: "Puma", precio: 2250, talle: "XL", tipo: "Casual" },
    //         { id: 4, prenda: "Musculosa", marca: "Reebok", precio: 2100, talle: "M", tipo: "Deportiva" },
    //         { id: 5, prenda: "Jean", marca: "Legacy", precio: 8500, talle: "S", tipo: "Clasica" },
    //         { id: 6, prenda: "Camisa", marca: "Kevingston", precio: 5200, talle: "L", tipo: "Elegante" },
    //         { id: 7, prenda: "Pantalon", marca: "Levis", precio: 9800, talle: "XL", tipo: "Elegante" },
    //         { id: 8, prenda: "Chomba", marca: "Kevingston", precio: 11700, talle: "M", tipo: "Casual" },
    //         { id: 9, prenda: "Cinto", marca: "Kevingston", precio: 4500, talle: "M", tipo: "Elegante" }
    //     ];
    //     for (let i = 0; i < IndumentariaService.CANTIDAD_PRENDAS; i++) {
    //         let prenda = prendasJson[Math.floor(Math.random() * prendasJson.length)];
    //         this.listaPrendas.forEach(element => {
    //             while (element.getPrenda() === prenda.prenda) {        
    //                 prenda = prendasJson[Math.floor(Math.random() * prendasJson.length)];
    //             }
    //         })
    //         indumentaria = new Indumentaria(prenda.id, prenda.prenda, prenda.marca, prenda.precio, prenda.talle, prenda.tipo);
    //         this.listaPrendas.push(indumentaria);
    //         console.log(indumentaria);
    //     }
    //     return this.listaPrendas;
    // }


    constructor() {
        this.loadPrendas();
    }

    public getPrendas(): Indumentaria[] {
        return this.listaPrendas;
    }

    public getPrenda(identificador: number): Indumentaria {
        for (let i = 0; i < this.listaPrendas.length; i++) {
            if (this.listaPrendas[i].getId() == identificador)
                return this.listaPrendas[i];
        }
    }

    public getPrendasXTipo(tipo: string): Indumentaria[] {
        let listaPrendas: Indumentaria[] = [];
        this.listaPrendas.forEach(element => {
            if (element.getTipo() == tipo) {  
                listaPrendas.push(element);
            }
        })
        return listaPrendas;
    }

    public addPrenda(prendaNueva: any): string {
        let prenda = new Indumentaria(prendaNueva.id, prendaNueva.prenda, prendaNueva.marca, prendaNueva.precio, prendaNueva.talle, prendaNueva.tipo);
        if (prenda.getId() && prenda.getPrenda() && prenda.getMarca() && prenda.getPrecio() && prenda.getTalle() && prenda.getTipo()) {
            this.listaPrendas.push(prenda);
            this.savePrendas();
            this.loadPrendas();
            return 'ok';
        } else {     
            return 'Parametros incorrectos'
        }
    }

    public delPrenda(id: number): string {
        for(let i = 0; i < this.listaPrendas.length; i++) {
            if(this.listaPrendas[i].getId()==id) {
                this.listaPrendas.splice(i,1);
                this.savePrendas();
                this.loadPrendas();
                return 'ok';
            }
        }
        return 'No se encuentra el id';
    } 

    public modificarPrendas(id: number, datos: any): string {
        for (let i = 0; i < this.listaPrendas.length; i++) {
            if(this.listaPrendas[i].getId() == id) {
                let indumentaria: Indumentaria;
                let cantidad = datos.cantidad;              
                for(let j = 0; j < cantidad; j++) {
                    let prenda = datos.listaPrendas[j];
                    indumentaria = new Indumentaria(prenda.id, prenda.prenda, prenda.marca, prenda.precio, prenda.talle, prenda.tipo);
                }
                this.listaPrendas[i] = indumentaria;
                this.savePrendas();
                this.loadPrendas();
                return 'ok';
            }
        }
        return 'No se encuentra id';
    }

    ///////////////////

    private loadPrendas() {
        let prenda: Indumentaria;
        let texto: string = FS.readFileSync('C:\\PFS2022\\4-BE\\pfs-demo\\src\\indumentaria\\prendasMock.txt', 'utf8');
        if (texto) {
            this.listaPrendas = [];
            let registros = texto.split('\n');
            for (let i = 0; i < registros.length; i++) {
                let registro = registros[i].split(',');
                prenda = new Indumentaria(parseInt(registro[0]), registro[1], registro[2], parseInt(registro[3]), registro[4], registro[5])
                this.listaPrendas.push(prenda);
            }
        }
    }

    private savePrendas() {
        FS.writeFileSync('C:\\PFS2022\\4-BE\\pfs-demo\\src\\indumentaria\\prendasMock.txt', '');
        for (let i = 0; i < this.listaPrendas.length; i++) {
            let prenda = this.listaPrendas[i];
            FS.appendFileSync('C:\\PFS2022\\4-BE\\pfs-demo\\src\\indumentaria\\prendasMock.txt',
                `${i == 0 ? '' : '\n'}${prenda.getId()},${prenda.getPrenda()},${prenda.getMarca()},${prenda.getPrecio()},${prenda.getTalle()},${prenda.getTipo()}`
            );
        }
    }
}