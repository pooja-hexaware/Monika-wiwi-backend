import { Test, TestingModule } from '@nestjs/testing';
import { Menu } from './entities/menu.entity';
import { menuId, menuStub } from './mocks/menu.stub';
import { MenuRepositoryMock } from './mocks/menuMockRepo';
import { MenuMockService } from './mocks/menuMockService';
import { MenuController } from './menu.controller';
import { MenuRepo } from './menu.repository';
import { MenuService } from './menu.service';


describe('MenuController', () => {
  let menuController: MenuController;
  let menuService: MenuService;
  let menurepo: MenuRepo;
  var httpMocks = require('node-mocks-http');
  const res = httpMocks.createResponse()
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenuController],
      providers: [
        {
          provide: MenuService,
          useFactory: MenuMockService,
        },
        {
          provide: MenuRepo,
          useFactory: MenuRepositoryMock,
        },
      ],
    })
     .compile();

    menuService = module.get<MenuService>(MenuService);
    menurepo = module.get<MenuRepo>(MenuRepo);
    menuController = module.get<MenuController>(MenuController);
  });

  it('should be defined', () => {
    expect(menuController).toBeDefined();
  });

  describe('create', () => {
    describe('when create is called', () => {
      beforeEach(async () => {
        menuController.create(res, menuStub());
      });

      it('then it should be routed to menuService.create', () => {
        expect(menuService.create).toBeCalled();
      });
    });
  });

  describe('findAll', () => {
    describe('when findAll is called', () => {
      let menu: Menu[];

      beforeEach(async () => {
        menu = await menuController.findAll();
      });

      it('it should be routed to menuService.findAll', () => {
        expect(menuService.findAll).toBeCalled();
      });

      it('it should return list of roles', () => {
        expect(menu).toEqual(menuStub());
      });
    });
  });
  describe('findOne', () => {
    describe('when findOne is called', () => {
      let menu: any;

      beforeEach(async () => {
        menu = await menuController.findOne(res, menuId());
      });

      it('it should be routed to roleService.findAll', () => {
        expect(menuService.findOne).toBeCalled();
      });

      it('it should return list of menu', () => {
        expect(menu.statusCode).toEqual(200);
      });
    });
  });
  describe('update', () => {
    describe('when update is called', () => {
      beforeEach(async () => {
        await menuController.update(res, menuId(), menuStub());
      });

      it('then it should be routed to menuService.update', () => {
        expect(menuService.update).toBeCalled();
      });
    });
  });

  describe('remove', () => {
    describe('when remove is called', () => {
      beforeEach(async () => {
        await menuController.remove(res, menuId());
      });

      it('then it should be routed to roleService.remove', () => {
        expect(menuService.remove).toBeCalled();
      });
    });
  });
})