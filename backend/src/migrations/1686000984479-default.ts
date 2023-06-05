import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1686000984479 implements MigrationInterface {
    name = 'Default1686000984479'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_eace73d764c798d99fd8cb2d59d"`);
        await queryRunner.query(`ALTER TABLE "pedidos" RENAME COLUMN "userId" TO "clientId"`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_6e9a377a550795213ebdc486208" FOREIGN KEY ("clientId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pedidos" DROP CONSTRAINT "FK_6e9a377a550795213ebdc486208"`);
        await queryRunner.query(`ALTER TABLE "pedidos" RENAME COLUMN "clientId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "pedidos" ADD CONSTRAINT "FK_eace73d764c798d99fd8cb2d59d" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
