import { Menu } from "../entities/menu.entity";

export const menuStub = (): Menu => {
    return {
        FoodItem: 'loaded veggie',
        description: "",
        Price: 300,
        Toppings:[]
    };
};

export const menusStub = (): Menu[] => {
    return [
        {
            FoodItem: 'Falafel',
        description: "",
        Price: 200,
        Toppings:[]

    }

    ]
};

export const menuId = () => {
    return "633fa20d6fc14472332e16ce";
}
