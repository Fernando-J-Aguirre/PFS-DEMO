import { Controller, Get, Param } from '@nestjs/common';
import Indumentaria from './indumentaria';
import { IndumentariaService } from './indumentaria.service';

@Controller('indumentaria')
export class IndumentariaController {
    constructor(private indumentariaService: IndumentariaService) {}

    @Get()
    public getPrendas() : any {
        return this.indumentariaService.getPrendas();
    }
    @Get(':identificador')
    public getPrenda(@Param('identificador') id: number) : Indumentaria {
        return this.indumentariaService.getPrenda(id);
    }
}
