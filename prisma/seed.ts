import prisma from "../src/shared/prisma";

async function main() {
  await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@admin.com",
      password: "123",
      role: "ADMIN",
    },
  });
}

main()
  .catch((e) => {
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
