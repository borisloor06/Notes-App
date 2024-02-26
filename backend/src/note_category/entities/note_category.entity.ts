import { Category } from 'src/category/entities/category.entity';
import { Note } from 'src/note/entities/note.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('note_categories')
export class NoteCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('int', { nullable: false })
  id_category: number;

  @Column('int', { nullable: false })
  id_note: number;

  @ManyToOne(() => Note, (note) => note.categories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'student_id', referencedColumnName: 'id' }])
  students: Note[];

  @ManyToOne(() => Category, (category) => category.notes, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'course_id', referencedColumnName: 'id' }])
  courses: Category[];
}
