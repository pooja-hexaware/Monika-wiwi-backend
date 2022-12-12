import {Injectable} from '@nestjs/common';
import { Menu } from './entities/menu.entity';
import { MenuRepo } from './menu.repository';

@Injectable()
export class MenuService {

  constructor(
    private readonly menuRepo: MenuRepo,
  ) {}
  async create(menuObject: Menu) {
    return this.menuRepo.create(menuObject);
  }

  async findAll() {
    return this.menuRepo.findAll();
  }

  async findOne(id: string) {
    return this.menuRepo.findById(id);
  }

  async update(id: string, updateMenuObject: Menu) {
    return this.menuRepo.update(id, updateMenuObject);
  }

  async remove(id: string) {
    return this.menuRepo.delete(id);
  }
}
