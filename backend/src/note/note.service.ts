import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { ActiveOrArchiveDto, UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private readonly noteRepository: Repository<Note>,
  ) {}
  async create({ title, content }: CreateNoteDto) {
    const created = new Date();
    const note = await this.noteRepository.save({
      title,
      content,
      created,
      state: true,
    });
    return note;
  }

  async findActives() {
    return this.noteRepository.find({
      where: { state: true },
      order: { id: 'DESC' },
    });
  }

  async findArchives() {
    return this.noteRepository.find({
      where: { state: false },
      order: { id: 'DESC' },
    });
  }

  async findAll() {
    return this.noteRepository.find();
  }

  async findOne(id: number) {
    return this.noteRepository.findOneByOrFail({ id });
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    await this.findOne(id);
    return this.noteRepository.update(id, updateNoteDto);
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
