import { Test, TestingModule } from '@nestjs/testing';
import { Menu } from './entities/menu.entity';
import { menuId, menuStub } from './mocks/menu.stub';
import { MenuRepositoryMock } from './mocks/menuMockRepo';
import { MenuRepo } from './menu.repository';
import { MenuService } from './menu.service';


describe('MenuController', () => {
  let menuService: MenuService;
  let menurepo: MenuRepo;
  var httpMocks = require('node-mocks-http');
  const res = httpMocks.createResponse()
  
  beforeEach(async () => {
        const MenuRepositoryProvider = {
            provide: MenuRepo,
            useFactory: MenuRepositoryMock,    
          }
          const module: TestingModule = await Test.createTestingModule({
            providers: [
              MenuService,
              MenuRepositoryProvider
            ],
          }).compile();

    menuService = module.get<MenuService>(MenuService);
    menurepo = module.get<MenuRepo>(MenuRepo);
  });

  it('should be defined', () => {
    expect(menuService).toBeDefined();
  });

  describe('create', () => {
    describe('when create is called', () => {
      beforeEach(async () => {
        menuService.create(menuStub());
      });

      it('then it should be routed to roleService.create', () => {
        expect(menuService.create).toBeDefined();
      });
    });
  });

describe('findAll', () => {
    describe('when findAll is called', () => {
      let menu: any;

      beforeAll(async () => {
        menu = await menuService.findAll();
      });

      it('then it should call roleRepository.getAll', () => {
        expect(menurepo.findAll).toBeCalled();
      });
    });
  });
  
  describe('findOne', () => {
    describe('when findOne is called', () => {
      let menu: Menu;

      beforeAll(async () => {
        menu = await menuService.findOne(menuId());
      });

      it('then it should call roleRepository.getById', () => {
        expect(menurepo.findById).toBeCalled();
      });

      it('then it should return the role based on given id', () => {
        expect(menu).toEqual(menuStub());
      });
    });
  }); 

  describe('update', () => {
    describe('when update is called', () => {
      beforeEach(async () => {
        await menuService.update( menuId(), menuStub());
      });

      it('then it should be routed to roleService.update', () => {
        expect(menurepo.update).toBeCalled();
      });
    });
  });

  describe('remove', () => {
    describe('when remove is called', () => {
      beforeEach(async () => {
        await menuService.remove(menuId());
      });

      it('then it should be routed to roleService.remove', () => {
        expect(menurepo.delete).toBeCalled();
      });
    });
  });
})