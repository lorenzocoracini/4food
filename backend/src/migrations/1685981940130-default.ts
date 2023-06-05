import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685981940130 implements MigrationInterface {
    name = 'Default1685981940130'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" RENAME COLUMN "client_name" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_eace73d764c798d99fd8cb2d59d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_eace73d764c798d99fd8cb2d59d"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "userId" text NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pedidos" RENAME COLUMN "userId" TO "client_name"`);
    }

}
