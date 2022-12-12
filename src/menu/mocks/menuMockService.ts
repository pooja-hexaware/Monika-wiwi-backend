import { menusStub, menuStub } from "./menu.stub";


export const MenuMockService = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(menuStub()),
    findAll: jest.fn().mockResolvedValue(menusStub()),
    findOne: jest.fn().mockResolvedValue(menuStub()),
    update: jest.fn().mockResolvedValue(menuStub()),
    remove: jest.fn().mockResolvedValue(true)
});