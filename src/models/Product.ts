import { Model, Table, Column, DataType, AllowNull } from 'sequelize-typescript';

@Table({
  tableName: 'products',
  timestamps: true,
  paranoid: true,
})
export class Product extends Model<Product> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  status!: string;
  
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity!: number;
}
