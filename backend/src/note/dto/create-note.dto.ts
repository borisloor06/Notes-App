import {
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';

export class CreateNoteDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsBoolean()
  @IsOptional()
  state?: boolean;

  @IsOptional()
  @IsNumber({ allowNaN: false, allowInfinity: false }, { each: true })
  categories?: number[];
}
