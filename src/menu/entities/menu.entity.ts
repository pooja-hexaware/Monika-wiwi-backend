import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document ,ObjectId} from 'mongoose';

export type MenuDocument = Menu & Document;


@Schema()
export class Menu {
    @Prop({ required: true })
    foodItem: string;
    
    @Prop()
    description: string;

    @Prop()
    toppings: string[];

    @Prop({ required: true })
    price: number;
    
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
