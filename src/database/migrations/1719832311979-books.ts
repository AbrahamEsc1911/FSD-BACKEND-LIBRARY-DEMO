import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Books1719832311979 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "books",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "authors_id",
                        type: "int"
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "text"
                    }
                ],
                foreignKeys: [
                    {
                        columnNames: ['authors_id'],
                        referencedTableName: 'authors',
                        referencedColumnNames: ['id']
                    }
                ]
            }),
            true
        );
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('books')
    }
}