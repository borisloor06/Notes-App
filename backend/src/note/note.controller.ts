import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { NoteService } from './note.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { ActiveOrArchiveDto, UpdateNoteDto } from './dto/update-note.dto';

@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    try {
      const newNote = await this.noteService.create(createNoteDto);
      return newNote;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error creating note');
    }
  }

  @Get()
  async findAll() {
    try {
      const notes = await this.noteService.findAll();
      return notes;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error fetching notes');
    }
  }

  @Get('active')
  async findActives() {
    try {
      const notes = await this.noteService.findActives();
      return notes;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error fetching active notes');
    }
  }

  @Get('archive')
  async findArchives() {
    try {
      const notes = await this.noteService.findArchives();
      return notes;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error fetching archived notes');
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      if (isNaN(+id)) {
        throw new BadRequestException('Invalid id');
      }
      const note = await this.noteService.findOne(+id);
      if (!note) {
        throw new NotFoundException('Note not found');
      }
      return note;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error fetching note');
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    try {
      if (isNaN(+id)) {
        throw new BadRequestException('Invalid id');
      }
      const note = await this.noteService.update(+id, updateNoteDto);
      return note;
    } catch (error) {
      console.log(error);
      throw new BadRequestException('Error updating note');
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      if (isNaN(+id)) {
        throw new BadRequestException('Invalid id');
      }
      const deletedNote = await this.noteService.remove(+id);
      return deletedNote;
    } catch (error) {
      throw new BadRequestException('Error deleting note');
    }
  }

  @Patch('archive/:id')
  async archive(@Param('id') id: string, @Body() archive: ActiveOrArchiveDto) {
    try {
      if (isNaN(+id)) {
        throw new BadRequestException('Invalid id');
      }
      const archivedNote = await this.noteService.activeOrArchive(+id, archive);
      return archivedNote;
    } catch (error) {
      throw new BadRequestException('Error archiving note');
    }
  }
}
