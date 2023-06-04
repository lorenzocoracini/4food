import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1685825366649 implements MigrationInterface {
    name = 'Default1685825366649'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "produtos" ("id" SERIAL NOT NULL, "name" text NOT NULL, "quantity" integer NOT NULL DEFAULT '1', "description" text, "price" numeric NOT NULL, CONSTRAINT "PK_a5d976312809192261ed96174f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "combos" ("id" SERIAL NOT NULL, "name" text NOT NULL, "description" text, CONSTRAINT "PK_5b4bab633aee439e2bade42cc3c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pedidos" ("id" SERIAL NOT NULL, "client_name" text NOT NULL, CONSTRAINT "PK_ebb5680ed29a24efdc586846725" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" text NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "produtos_do_combo" ("combosId" integer NOT NULL, "produtosId" integer NOT NULL, CONSTRAINT "PK_2faa90fbcc3e350ed13f916ebac" PRIMARY KEY ("combosId", "produtosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_807bcf6c15e87972fa0613409a" ON "produtos_do_combo" ("combosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_995f4f1eda837f416fa752a610" ON "produtos_do_combo" ("produtosId") `);
        await queryRunner.query(`CREATE TABLE "produtos_do_pedido" ("pedidosId" integer NOT NULL, "produtosId" integer NOT NULL, CONSTRAINT "PK_3436e963847f3fd32996a73b2e5" PRIMARY KEY ("pedidosId", "produtosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_efb7fa191af4d4e3f82933a1f1" ON "produtos_do_pedido" ("pedidosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9add3f6836cbf5285e849692fc" ON "produtos_do_pedido" ("produtosId") `);
        await queryRunner.query(`CREATE TABLE "combos_do_pedido" ("pedidosId" integer NOT NULL, "combosId" integer NOT NULL, CONSTRAINT "PK_ae3d4842507bbb9b63194398802" PRIMARY KEY ("pedidosId", "combosId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c1fed0d0d2e07ea163b64d5200" ON "combos_do_pedido" ("pedidosId") `);
        await queryRunner.query(`CREATE INDEX "IDX_36e88e3005c18a222a56da1867" ON "combos_do_pedido" ("combosId") `);
        await queryRunner.query(`ALTER TABLE "produtos_do_combo" ADD CONSTRAINT "FK_807bcf6c15e87972fa0613409ae" FOREIGN KEY ("combosId") REFERENCES "combos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "produtos_do_combo" ADD CONSTRAINT "FK_995f4f1eda837f416fa752a610e" FOREIGN KEY ("produtosId") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "produtos_do_pedido" ADD CONSTRAINT "FK_efb7fa191af4d4e3f82933a1f13" FOREIGN KEY ("pedidosId") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "produtos_do_pedido" ADD CONSTRAINT "FK_9add3f6836cbf5285e849692fc3" FOREIGN KEY ("produtosId") REFERENCES "produtos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "combos_do_pedido" ADD CONSTRAINT "FK_c1fed0d0d2e07ea163b64d5200a" FOREIGN KEY ("pedidosId") REFERENCES "pedidos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "combos_do_pedido" ADD CONSTRAINT "FK_36e88e3005c18a222a56da18674" FOREIGN KEY ("combosId") REFERENCES "combos"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "combos_do_pedido" DROP CONSTRAINT "FK_36e88e3005c18a222a56da18674"`);
        await queryRunner.query(`ALTER TABLE "combos_do_pedido" DROP CONSTRAINT "FK_c1fed0d0d2e07ea163b64d5200a"`);
        await queryRunner.query(`ALTER TABLE "produtos_do_pedido" DROP CONSTRAINT "FK_9add3f6836cbf5285e849692fc3"`);
        await queryRunner.query(`ALTER TABLE "produtos_do_pedido" DROP CONSTRAINT "FK_efb7fa191af4d4e3f82933a1f13"`);
        await queryRunner.query(`ALTER TABLE "produtos_do_combo" DROP CONSTRAINT "FK_995f4f1eda837f416fa752a610e"`);
        await queryRunner.query(`ALTER TABLE "produtos_do_combo" DROP CONSTRAINT "FK_807bcf6c15e87972fa0613409ae"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_36e88e3005c18a222a56da1867"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c1fed0d0d2e07ea163b64d5200"`);
        await queryRunner.query(`DROP TABLE "combos_do_pedido"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9add3f6836cbf5285e849692fc"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_efb7fa191af4d4e3f82933a1f1"`);
        await queryRunner.query(`DROP TABLE "produtos_do_pedido"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_995f4f1eda837f416fa752a610"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_807bcf6c15e87972fa0613409a"`);
        await queryRunner.query(`DROP TABLE "produtos_do_combo"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "pedidos"`);
        await queryRunner.query(`DROP TABLE "combos"`);
        await queryRunner.query(`DROP TABLE "produtos"`);
    }

}
