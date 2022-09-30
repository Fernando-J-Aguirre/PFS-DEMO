import { Injectable } from '@nestjs/common';
import Vehiculo from './Vehiculo';

@Injectable()
export class VehiculosService {
    private listaVehiculos: Vehiculo[] = [];

    public getVehiculos(): Vehiculo[] {
        return this.listaVehiculos;
    }

    
}
