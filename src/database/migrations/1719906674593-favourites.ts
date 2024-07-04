import { MigrationInterface, QueryRunner, Table, TableUnique } from "typeorm";

export class Favourites1719906674593 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "favourites",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "books_id",
                        type: "int"
                    },
                    {
                        name: "user_id",
                        type: "int"
                    },
                ],
                foreignKeys: [
                    {
                        columnNames: ['books_id'],
                        referencedTableName: 'books',
                        referencedColumnNames: ['id']
                    },
                    {
                        columnNames: ['user_id'],
                        referencedTableName: 'users',
                        referencedColumnNames: ['id']
                    }
                ],
                uniques: [
                    new TableUnique({
                        name: "user_book_unique",
                        columnNames: ["User_id", "books_id"],
                    }),
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('favourites')
    }

}
