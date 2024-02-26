import { Note } from 'src/note/entities/note.entity';
import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @ManyToMany(() => Note, (note) => note.categories, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  notes?: Note[];
}
