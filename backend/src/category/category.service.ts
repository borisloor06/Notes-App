import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}

  async create({ name }: CreateCategoryDto) {
    return this.categoryRepository.save({ name });
  }

  async findAll() {
    return this.categoryRepository.find();
  }

  async findOne(id: number) {
    return this.categoryRepository.findOneOrFail({ where: { id } });
  }

  async update(id: number, { name }: UpdateCategoryDto) {
    await this.findOne(id);
    return this.categoryRepository.update(id, { name });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.categoryRepository.delete(id);
  }
}
