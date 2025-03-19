-- CreateTable
CREATE TABLE "tecnologias" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "imagem" TEXT NOT NULL,
    "detaque" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tecnologias_pkey" PRIMARY KEY ("id")
);
