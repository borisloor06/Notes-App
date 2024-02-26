import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteCategoryDto } from './create-note_category.dto';

export class UpdateNoteCategoryDto extends PartialType(CreateNoteCategoryDto) {}
