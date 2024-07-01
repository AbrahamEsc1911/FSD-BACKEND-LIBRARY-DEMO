import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1719825118738 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "User",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        length: "50",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "50",
                        isNullable: false
                    },
                    {
                        name: "is_active",
                        type: "Boolean",
                        default: true,
                        isNullable: false
                    },
                    {
                        name: "role",
                        type: "enum",
                        enum: ['user', 'admin', 'super_admin'],
                        default: "'user'"
                    },
                    {
                        name: "created_at",
                        type: "datetime",
                        default: "now()"

                    },
                    {
                        name: "updated_at",
                        type: "datetime",
                        default: "now()",
                        onUpdate: "now()"
                    },
                ],
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user')
    }

}
