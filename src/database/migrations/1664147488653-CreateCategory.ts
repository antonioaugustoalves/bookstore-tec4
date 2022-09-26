import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCategory1664147488653 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table(
                {
                    name: "categorias",
                    columns: [
                        {name: "id", type:"uuid", isPrimary: true},
                        {name: "nome", type:"varchar"},
                        {name: "descricao", type:"varchar"},
                        {name: "created_at", type:"timestamp", default:"now()"},

                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("categorias");
    }

}
