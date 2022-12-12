import { Controller, Get, Post, Body, Param, Delete, Res, HttpStatus, Put} from '@nestjs/common';
import { MenuService } from './menu.service';
import { Menu } from './entities/menu.entity';


@Controller('menu')
export class MenuController {
  constructor(
    private readonly  menuService: MenuService,
  ) {}

  @Post()
  async create(@Res() res, @Body() menuObject: Menu) {
    const result = await this.menuService.create(menuObject);
    if (!result) return null;
    return res.status(HttpStatus.CREATED).json(result);
  }

  @Get()
  async findAll() {

    const menuList = await this.menuService.findAll();
    if (!menuList) return null;
    return menuList;
  }
  
  @Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    const menuObject = await this.menuService.findOne(id);
    if (!menuObject) return null;
    return res.status(HttpStatus.OK).json(menuObject);


  }
  

  
  @Put(':id')
  async update(@Res() res, @Param('id')id: string,@Body() updatedMenuObj:Menu) {
    const menuObject = await this.menuService.update(id,updatedMenuObj);
    if (!menuObject) return null;
    return res.status(HttpStatus.OK).json(menuObject);
  }

@Delete(':id')
async remove(@Res() res, @Param('id') id: string) {
    const menuObject = await this.menuService.remove(id);
    if (!menuObject) return null;
    return res.status(HttpStatus.OK).json(menuObject);
}


  
}