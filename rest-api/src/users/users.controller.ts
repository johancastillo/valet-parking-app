import { Controller, Get, Post, Delete, Put, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateUserTDO } from './dto/users.dto';

@Controller('users')
export class UsersController {

    @Get()
    getUsers(@Res() res){
        return res.status(HttpStatus.OK).json({
            message: 'success',
            data: "users"
        });
    }

    @Post("/create")
    createUser(@Res() res, @Body() createUserTDO:CreateUserTDO){
        console.log(createUserTDO);

        return res.status(HttpStatus.OK).json({
            message: "Success",
            data: "user"
        });
    }

    @Delete()
    deleteUser(){
        return "Delete User"
    }

    @Put()
    editUser(){
        return "Edit User"
    }

}
