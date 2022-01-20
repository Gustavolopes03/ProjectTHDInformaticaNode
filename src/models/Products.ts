import { Column, Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export default class Products {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  sell_price: number;

  @Column()
  buy_price: number;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  provider: string;

  @Column()
  code: string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
