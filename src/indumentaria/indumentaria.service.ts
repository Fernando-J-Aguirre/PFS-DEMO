import { Injectable } from '@nestjs/common';
import Indumentaria from './indumentaria';

@Injectable()
export class IndumentariaService {
    private static readonly CANTIDAD_PRENDAS = 5;
    private listaPrendas: Indumentaria[] = [];

    public getPrendas(): Indumentaria[] {
        this.listaPrendas = [];
        let indumentaria: Indumentaria; 
        let prendasJson = [
            { id: 1, prenda: "Remera", marca: "Nike", precio: 2500, talle: "S", tipo: "Deportiva" },
            { id: 2, prenda: "Short", marca: "Adidas", precio: 2700, talle: "L", tipo: "Deportiva" },
            { id: 3, prenda: "Campera", marca: "Puma", precio: 2250, talle: "XL", tipo: "Casual" },
            { id: 4, prenda: "Musculosa", marca: "Reebok", precio: 2100, talle: "M", tipo: "Deportiva" },
            { id: 5, prenda: "Jean", marca: "Legacy", precio: 8500, talle: "S", tipo: "Clasica" },
            { id: 6, prenda: "Camisa", marca: "Kevingston", precio: 5200, talle: "L", tipo: "Elegante" },
            { id: 7, prenda: "Pantalon", marca: "Levis", precio: 9800, talle: "XL", tipo: "Elegante" },
            { id: 8, prenda: "Chomba", marca: "Kevingston", precio: 11700, talle: "M", tipo: "Casual" },
            { id: 9, prenda: "Cinto", marca: "Kevingston", precio: 4500, talle: "M", tipo: "Elegante" }
        ];
        for (let i = 0; i < IndumentariaService.CANTIDAD_PRENDAS; i++) {
            let prenda = prendasJson[Math.floor(Math.random() * prendasJson.length)];
            this.listaPrendas.forEach(element => {
                while (element.getPrenda() === prenda.prenda) {        
                    prenda = prendasJson[Math.floor(Math.random() * prendasJson.length)];
                }
            })
            indumentaria = new Indumentaria(prenda.id, prenda.prenda, prenda.marca, prenda.precio, prenda.talle, prenda.tipo);
            this.listaPrendas.push(indumentaria);
            console.log(indumentaria);
        }
        return this.listaPrendas;
    }

    public getPrenda(identificador: number): Indumentaria {
        for(let i = 0; i < this.listaPrendas.length; i++) {
            if(this.listaPrendas[i].getId() == identificador)
                return this.listaPrendas[i];
        }
    }
}
