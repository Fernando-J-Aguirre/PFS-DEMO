import { Controller, Get } from '@nestjs/common';
import { IndumentariaService } from './indumentaria.service';

@Controller('indumentaria')
export class IndumentariaController {
    constructor(private indumentariaService: IndumentariaService) {}

    @Get()
    public getPrendas() : any {
        return this.indumentariaService.getPrendas();
    }
}
