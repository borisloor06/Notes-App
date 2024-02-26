import { Module } from '@nestjs/common';
import { NoteCategoryService } from './note_category.service';
import { NoteCategoryController } from './note_category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteCategory } from './entities/note_category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoteCategory])],
  controllers: [NoteCategoryController],
  providers: [NoteCategoryService],
})
export class NoteCategoryModule {}
