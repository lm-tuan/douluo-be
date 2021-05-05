import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { AppModule } from './../app.module';
// import { UsersController } from './users.controller';
import { User } from './user.entity';
import { AppService } from 'src/app.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    forwardRef(() => AppModule),
  ],
  providers: [UsersService],
  exports: [UsersService]

//   controllers: [UsersController],
})
export class UsersModule {}