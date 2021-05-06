import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Animal } from './animals.entity';

@Injectable()
export class AnimalsService {
    constructor(
        @InjectRepository(Animal)
        private animalsRepository: Repository<Animal>,
      ) {}
    
      findAll(): Promise<Animal[]> {
        return this.animalsRepository.find();
      }
    
      findOne(id: string): Promise<Animal> {
        return this.animalsRepository.findOne(id);
      }
    
      async remove(id: string): Promise<void> {
        await this.animalsRepository.delete(id);
      }
}
