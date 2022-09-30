import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculadoraService {

    public suma(a: number, b: number): number { return a + b }
    public resta(a: number, b: number): number { return a - b }

}
