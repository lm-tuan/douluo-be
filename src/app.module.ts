import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { DatabaseModule } from './config/database.module';
import { AnimalsService } from './animals/animals.service';
import { AnimalsModule } from './animals/animals.module';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    DatabaseModule,
    UsersModule,
    AnimalsModule
  ],
})
export class AppModule {}
