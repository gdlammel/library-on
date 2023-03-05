import Service from "../../../shared/abstract_classes/service";
import CustomError from "../../../shared/customError";
import prisma from "../../../shared/prisma";
import ICreateUserRequestDTO from "../dtos/createUserRequest.dto";
import {hash} from "bcrypt";
import {sign} from "jsonwebtoken";
import jwtConfig from "../../../configurations/jwt.config";

export default class CreateUserService implements Service {
  async execute(data: ICreateUserRequestDTO) {
    if (!data.name || !data.email || !data.password) {
      throw new CustomError({
        status: 400,
        message: "Information is missing",
      });
    }

    const emailAlreadyExists = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (emailAlreadyExists) {
      throw new CustomError({
        status: 400,
        message: "Email already registered",
      });
    }

    const encryptedPassword = await hash(data.password, 8);

    try {
      const newUser = await prisma.user.create({
        data: {
          name: data.name,
          email: data.email,
          password: encryptedPassword,
        },
        select: {
          id: true,
        },
      });
      const token = sign({info: newUser.id}, jwtConfig.secret, {
        subject: newUser.id,
        expiresIn: jwtConfig.expiresIn,
      });

      return token;
    } catch (error) {
      throw new CustomError({
        status: 400,
        message: "Error creating new user",
      });
    }
  }
}
