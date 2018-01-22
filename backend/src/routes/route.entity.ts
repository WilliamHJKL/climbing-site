import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('routes')
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'name', length: 30 })
  name: string;

  @Column({name:'location', nullable: true, length: 30 })
  location: string;

  @Column({name: 'description', nullable: true, length: 255})
  description: string;

  @Column({name: 'level', length: 3})
  level: string;

  @Column({ type: 'bigint' })
  created: number;

  @Column({ type: 'bigint' })
  updated: number;

  @Column({name: 'opener', nullable: true, length: 50})
  opener: string;

  @Column({name: 'openerclub', nullable: true, length: 50})
  opener_club: string;

  @Column({name: 'color', length: 10})
  color: string;
}
