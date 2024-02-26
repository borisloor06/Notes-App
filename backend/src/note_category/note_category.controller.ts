import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { NoteCategoryService } from './note_category.service';
import { CreateNoteCategoryDto } from './dto/create-note_category.dto';
import { UpdateNoteCategoryDto } from './dto/update-note_category.dto';

@Controller('note-category')
export class NoteCategoryController {
  constructor(private readonly noteCategoryService: NoteCategoryService) {}

  @Post()
  create(@Body() createNoteCategoryDto: CreateNoteCategoryDto) {
    return this.noteCategoryService.create(createNoteCategoryDto);
  }

  @Get()
  findAll() {
    return this.noteCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noteCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNoteCategoryDto: UpdateNoteCategoryDto,
  ) {
    return this.noteCategoryService.update(+id, updateNoteCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noteCategoryService.remove(+id);
  }
}
