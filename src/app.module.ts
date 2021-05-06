import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import * as dotenv from 'dotenv';
import { DatabaseModule } from './config/database.module';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: process.env.HOST,
    //   port: +process.env.PORT,
    //   username: 'root',
    //   password: "123456",
    //   database: 'douluo',
    //   entities: ["dist/**/*.entity{.ts,.js}"],
    //   synchronize: true,
    // }),
    DatabaseModule,
    UsersModule
  ],
})
export class AppModule {
  constructor(){
    dotenv.config();
    console.log(process.env.DB_USER);
  }
}
