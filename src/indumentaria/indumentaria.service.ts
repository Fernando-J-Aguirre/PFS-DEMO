import { Injectable } from '@nestjs/common';
import Indumentaria from './indumentaria';

@Injectable()
export class IndumentariaService {
    private static readonly CANTIDAD_PRENDAS = 5;
    private listaPrendas: Indumentaria[] = [];

    public getPrendas(): any {
        this.listaPrendas = [];
        let indumentaria: Indumentaria;
        let prendasJson = [
            { prenda: "Remera", marca: "Nike", precio: 2500, talle: "S", tipo: "Deportiva" },
            { prenda: "Short", marca: "Adidas", precio: 2700, talle: "L", tipo: "Deportiva" },
            { prenda: "Campera", marca: "Puma", precio: 2250, talle: "XL", tipo: "Casual" },
            { prenda: "Musculosa", marca: "Reebok", precio: 2100, talle: "M", tipo: "Deportiva" },
            { prenda: "Jean", marca: "Legacy", precio: 8500, talle: "S", tipo: "Clasica" },
            { prenda: "Camisa", marca: "Kevingston", precio: 5200, talle: "L", tipo: "Elegante" },
            { prenda: "Pantalon", marca: "Levis", precio: 9800, talle: "XL", tipo: "Elegante" },
            { prenda: "Chomba", marca: "Kevingston", precio: 11700, talle: "M", tipo: "Casual" },
            { prenda: "Cinto", marca: "Kevingston", precio: 4500, talle: "M", tipo: "Elegante" }
        ];
        for (let i = 0; i < IndumentariaService.CANTIDAD_PRENDAS; i++) {
            let prenda = prendasJson[Math.floor(Math.random() * prendasJson.length)];
            this.listaPrendas.forEach(element => {
                while (element.getPrenda() === prenda.prenda) {                
                    prenda = prendasJson[Math.floor(Math.random() * prendasJson.length)];
                }
            })
            indumentaria = new Indumentaria(prenda.prenda, prenda.marca, prenda.precio, prenda.talle, prenda.tipo);
            this.listaPrendas.push(indumentaria);
            console.log(indumentaria);
        }
        return this.listaPrendas;
    }
}
