import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1687616468635 implements MigrationInterface {
    name = 'Default1687616468635'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "rua" text`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "bairro" text`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "numero" text`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD "complemento" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "phone" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "numero"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "pedidos" DROP COLUMN "rua"`);
    }

}
