import { Category } from 'src/category/entities/category.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false })
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Column('bool', { default: true, nullable: false })
  state: boolean;

  @Column('timestamptz')
  created: Date;

  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;

  @ManyToMany(
    () => Category,
    (category) => category.notes, //optional
    { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' },
  )
  @JoinTable({
    name: 'note_categories',
    joinColumn: {
      name: 'id_note',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_category',
      referencedColumnName: 'id',
    },
  })
  categories?: Category[];
}
