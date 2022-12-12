import {  Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './entities/menu.entity';
import { MenuRepo } from './menu.repository';
import { MenuController } from './menu.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Menu.name, schema:MenuSchema }]),
  ],
  controllers: [MenuController],
  providers: [
    MenuService, 
    MenuRepo
  ],
})
export class MenuModule {}
