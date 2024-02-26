import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;
}
