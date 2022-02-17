import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';
import { CarsModule } from './cars/cars.module';
import {MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CarsModule, MongooseModule.forRoot('mongodb+srv://jcjohan2707:GameOver2707..@tucanisport.rdetp.mongodb.net/test')],
  controllers: [AppController, UsersController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
