import prisma from "../src/shared/prisma";

async function main() {
  await prisma.user.create({
    data: {
      name: "admin",
      email: "admin@ad23min.com",
      password: "$2b$08$AANVX./JWlp.u1ukVZXYKe7MTETPzz7RWSeU3iWxVX6D1HTqhfooy",
      role: "ADMIN",
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
