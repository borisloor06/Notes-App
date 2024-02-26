import { Injectable } from '@nestjs/common';
import { CreateNoteCategoryDto } from './dto/create-note_category.dto';
import { UpdateNoteCategoryDto } from './dto/update-note_category.dto';

@Injectable()
export class NoteCategoryService {
  create(createNoteCategoryDto: CreateNoteCategoryDto) {
    return 'This action adds a new noteCategory';
  }

  findAll() {
    return `This action returns all noteCategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} noteCategory`;
  }

  update(id: number, updateNoteCategoryDto: UpdateNoteCategoryDto) {
    return `This action updates a #${id} noteCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} noteCategory`;
  }
}
