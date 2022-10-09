import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import Indumentaria from './indumentaria';
import { IndumentariaService } from './indumentaria.service';

@Controller('indumentaria')
export class IndumentariaController {
    constructor(private indumentariaService: IndumentariaService) { }

    @Get()
    public getPrendas(): Indumentaria[] {
        return this.indumentariaService.getPrendas();
    }

    @Get(':identificador')
    public getPrenda(@Param('identificador') id: number): Indumentaria {
        return this.indumentariaService.getPrenda(id);
    }

    @Get('/tipo/:tipo')
    public getPrendasXTipo(@Param('tipo') tipo: string): Indumentaria[] {
        return this.indumentariaService.getPrendasXTipo(tipo);
    }

    @Post()
    public addPrenda(@Body() prenda: any): string {
        return this.indumentariaService.addPrenda(prenda);
    }

    @Delete('/:id')
    public delPrenda(@Param('id') id: number): string {
        return this.indumentariaService.delPrenda(id);
    }
    
    @Put('/:id')
    public modificarPrendas(@Param('id') id : number, @Body() datos : any) : string {
        return this.indumentariaService.modificarPrendas(id, datos);
    }
}   
