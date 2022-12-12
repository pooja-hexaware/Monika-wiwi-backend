import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu, MenuDocument } from "./entities/menu.entity";


@Injectable()
export class MenuRepo {
    constructor(
        @InjectModel(Menu.name)
        private readonly menuModel: Model<MenuDocument>,
    ) { }
    async create(data) {
        return new this.menuModel(data).save();
    }

    async findAll(): Promise<Menu[]> {
        return this.menuModel.find({}).exec();
    }

    async findById(id) {
        const filter = { _id: id };
        return this.menuModel.findOne(filter).exec();
    }
    async update(id, data): Promise<Menu> {
        const filter = { _id: id };
        return this.menuModel.findOneAndUpdate(filter, data).exec();
    }
    
    async delete(id): Promise<Menu> {
        return this.menuModel.findByIdAndDelete(id);
    }
    
    }

   
    
   
  
    
