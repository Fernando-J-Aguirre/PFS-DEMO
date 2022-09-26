import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndumentariaController } from './indumentaria/indumentaria.controller';
import { IndumentariaService } from './indumentaria/indumentaria.service';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client')}),
  ],
  controllers: [AppController, IndumentariaController, ClienteController],
  providers: [AppService, IndumentariaService, ClienteService],
})
export class AppModule { }
