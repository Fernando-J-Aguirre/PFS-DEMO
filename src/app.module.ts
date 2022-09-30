import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndumentariaController } from './indumentaria/indumentaria.controller';
import { IndumentariaService } from './indumentaria/indumentaria.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';
import { CalculadoraController } from './calculadora/calculadora.controller';
import { CalculadoraService } from './calculadora/calculadora.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { VehiculosService } from './vehiculos/vehiculos.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client')}),
  ],
  controllers: [AppController, IndumentariaController, ClienteController, CalculadoraController, VehiculosController],
  providers: [AppService, IndumentariaService, ClienteService, CalculadoraService, VehiculosService],
})
export class AppModule { }