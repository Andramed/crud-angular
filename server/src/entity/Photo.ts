import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Photo {

	@PrimaryGeneratedColumn()
	id: number

	@Column({
		length: 200
	}) 
	name: string

	@Column("text")
	description: string

	@Column()
	views: number

	@Column("boolean")
	isPublished: boolean

}