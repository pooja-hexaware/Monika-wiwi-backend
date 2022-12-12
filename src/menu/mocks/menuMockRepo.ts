import { menuStub, menusStub } from "./menu.stub";

export const MenuRepositoryMock = jest.fn().mockReturnValue({
    create: jest.fn().mockResolvedValue(menuStub()),
    update: jest.fn().mockResolvedValue(menuStub()),
    delete: jest.fn().mockResolvedValue(true),
    findAll: jest.fn().mockResolvedValue(menusStub()),
    findById: jest.fn().mockResolvedValue(menuStub())
});