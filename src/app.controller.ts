import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { User } from './users/user.entity';
import { AnimalsService } from './animals/animals.service';
import { Animal } from './animals/animals.entity';
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService,
    private readonly animalsService: AnimalsService,
    ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUserAll(): Promise<User[]>  {
    return this.usersService.findAll();
  }

  @Get('/animals')
  getAnimalsAll(): Promise<Animal[]>  {
    return this.animalsService.findAll();
  }
}
