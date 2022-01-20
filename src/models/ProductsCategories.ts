import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import Products from './Products';

@Entity('categories')
export default class Categories {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
    product_id: string;

  @ManyToOne(() => Products)
  @JoinColumn({ name:'product_id' })
  product: Products;

  @Column()
  name: string;

  @CreateDateColumn()
  create_date: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
