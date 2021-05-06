import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from './../app.module';
// import { UsersController } from './users.controller';
import { Animal } from './animals.entity';
import { AppService } from 'src/app.service';
import { AnimalsService } from './animals.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Animal]),
    forwardRef(() => AppModule),
  ],
  providers: [AnimalsService],
  exports: [AnimalsService]

})
export class AnimalsModule {}