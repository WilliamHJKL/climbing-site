
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Route {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({name:'name', length: 30 })
  name: string;

  @Column({name:'location', length: 30 })
  location: string;

  @Column({name: 'description', length: 255})
  description: string;

  @Column({name: 'level', length: 3})
  level: string;

  @Column()
  created: number;

  @Column()
  updated: number;

  @Column({name: 'opener', length: 50})
  opener: string;

  @Column({name: 'openerclub', length: 50})
  opener_club: string;
}

// id MEDIUMINT NOT NULL AUTO_INCREMENT,
// location CHAR(30),
// name CHAR(30) NOT NULL,
// description CHAR(255),
// level char(3) NOT NULL,
// created BIGINT NOT NULL,
// updated BIGINT NOT NULL,
// opener CHAR(50),
// openerclub CHAR(50),
// PRIMARY KEY (id)