import { IsNumber } from 'class-validator';

export class CreateNoteCategoryDto {
  @IsNumber()
  id_category: number;

  @IsNumber()
  id_note: number;
}
