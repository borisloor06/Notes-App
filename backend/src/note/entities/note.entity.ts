import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @Column('text')
  content: string;

  @Column('boolean', { default: true })
  state: string;

  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('timestamptz')
  updated: Date;
}
