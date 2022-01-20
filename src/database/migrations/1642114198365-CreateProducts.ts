import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProducts1642114198365 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'products',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name:'categories',
              type:'uuid',
              isNullable: false,
            },
            {
              name: 'provider',
              type: 'uuid',
              isNullable: false,
            },
            {
              name: 'name',
              type: 'varchar(200)',
              isNullable: false,
            },
            {
              name: 'sell_price',
              type: 'float',
              isNullable: true,
            },
            {
              name: 'buy_price',
              type: 'float',
              isNullable: true,
            },
            {
              name: 'description',
              type: 'varchar',
              isNullable: true,
            },
            {
              name: 'quantity',
              type: 'float',
              isNullable: true,
            },
            {
              name: 'code',
              type: 'float',
              isNullable: true,
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()'
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()'
            }
          ],
        }),
      );
      await queryRunner.createForeignKey(
        'products',
        new TableForeignKey({
          name:'FKProductsCategories',
          columnNames:['categories'],
          referencedTableName:'categories',
          referencedColumnNames:['id']
        }),
      )
      await queryRunner.createForeignKey(
        'products',
        new TableForeignKey({
          name:'FKProductsProviders',
          columnNames:['providers'],
          referencedTableName:'providers',
          referencedColumnNames:['id']
        }),
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
