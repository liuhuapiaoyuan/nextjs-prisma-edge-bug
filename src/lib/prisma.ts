import { PrismaClient } from "@prisma/client/edge";

const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["query", "info", "warn", "error"],
  })
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export { prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
