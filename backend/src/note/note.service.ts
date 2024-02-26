import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { ActiveOrArchiveDto, UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
    private readonly categoryService: CategoryService,
  ) {}
  async create({ title, content, categories }: CreateNoteDto) {
    const created = new Date();
    let noteCategories = [];
    try {
      if (categories)
        noteCategories = await this.categoryService.findMany(categories);
    } catch (error) {
      noteCategories = [];
    }

    const note = await this.noteRepository.save({
      title,
      content,
      created,
      state: true,
      categories: noteCategories,
    });
    return note;
  }

  async findActives() {
    return this.noteRepository.find({
      where: { state: true },
      order: { id: 'DESC' },
      relations: ['categories'],
    });
  }

  async findArchives() {
    return this.noteRepository.find({
      where: { state: false },
      order: { id: 'DESC' },
      relations: ['categories'],
    });
  }

  async findAll() {
    return this.noteRepository.find();
  }

  async findOne(id: number) {
    return this.noteRepository.findOneOrFail({
      where: { id },
      relations: ['categories'],
    });
  }

  async update(id: number, { categories, ...updateNote }: UpdateNoteDto) {
    await this.findOne(id);
    let noteCategories = [];
    try {
      if (categories)
        noteCategories = await this.categoryService.findMany(categories);
    } catch (error) {
      noteCategories = [];
    }

    return this.noteRepository.save({
      id,
      ...updateNote,
      categories: noteCategories,
    });
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.noteRepository.delete(id);
  }

  async activeOrArchive(id: number, archive: ActiveOrArchiveDto) {
    await this.findOne(id);
    return this.noteRepository.update(id, archive);
  }
}
