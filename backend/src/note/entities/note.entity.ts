import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('notes')
export class Note {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: false })
  title: string;

  @Column('text', { nullable: false })
  content: string;

  @Column('boolean', { default: true })
  state: boolean;

  @Column('timestamptz')
  created: Date;

  @Column('timestamptz', { default: () => 'CURRENT_TIMESTAMP' })
  updated: Date;
}
