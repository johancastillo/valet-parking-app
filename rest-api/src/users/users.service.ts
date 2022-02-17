import { Injectable } from '@nestjs/common';
import { CreateUserTDO } from './dto/users.dto';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import { User } from './interfaces/users.interface';

@Injectable()
export class UsersService {

    constructor(@InjectModel("User") private userModel:Model<User>) {}

    async createUser(createUserTDO: CreateUserTDO){
        const user = await new this.userModel(createUserTDO);
        return await user.save();
    }

}
