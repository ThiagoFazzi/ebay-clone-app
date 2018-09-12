// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'
//import { IsString, Length, MinLength } from 'class-validator'

@Entity()
export default class Advertisement extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  //@IsString()
  //@Length(5, 25)
  @Column('text', { nullable: false })
  title: string

  //@IsString()
  //@MinLength(10)
  @Column('text', { nullable: true })
  description: string

  @Column('text', { nullable: true })
  photoUrl: string

  @Column('integer', { nullable: false })
  price: number

  @Column('text', { nullable: false })
  email: string 

  @Column('text', { nullable: false })
  phone: string 
}
