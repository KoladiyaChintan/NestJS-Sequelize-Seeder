import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from "sequelize-typescript";

@Table({
    tableName: "add_Product",
})
export class product extends Model<product>{

    @Column({
        type: DataType.UUID,
        defaultValue: DataType.UUIDV4,
        unique: true,
        primaryKey: true
    })
    id: String;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_name: String;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    product_category: String;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: String;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    image_url: String;

    @CreatedAt
    created_date: Date;

    @UpdatedAt
    updated_date: Date;
}