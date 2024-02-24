import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

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
}
