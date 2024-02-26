import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    try {
      const category = await this.categoryService.create(createCategoryDto);
      return category;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error creating category');
    }
  }

  @Get()
  async findAll() {
    try {
      const categories = await this.categoryService.findAll();
      return categories;
    } catch (error) {
      throw new BadRequestException('Error fetching categories');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      if (isNaN(+id)) {
        throw new BadRequestException('Invalid id');
      }
      const category = await this.categoryService.findOne(+id);
      return category;
    } catch (error) {
      throw new BadRequestException('Error fetching category');
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ) {
    try {
      if (isNaN(+id)) {
        throw new BadRequestException('Invalid id');
      }
      const category = await this.categoryService.update(
        +id,
        updateCategoryDto,
      );
      return category;
    } catch (error) {
      throw new BadRequestException('Error updating category');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      if (isNaN(+id)) {
        throw new BadRequestException('Invalid id');
      }
      const category = await this.categoryService.remove(+id);
      return category;
    } catch (error) {
      throw new BadRequestException('Error deleting category');
    }
  }
}
