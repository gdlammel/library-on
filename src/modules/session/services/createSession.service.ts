import {compare} from "bcrypt";
import {sign} from "jsonwebtoken";
import jwtConfig from "../../../configurations/jwt.config";
import Service from "../../../shared/abstract_classes/service";
import CustomError from "../../../shared/customError";
import prisma from "../../../shared/prisma";
import ICreateSessionRequestDTO from "../dtos/CreateSessionRequest.dto";

export default class CreateSessionService implements Service {
  async execute(data: ICreateSessionRequestDTO) {
    if (!data.email || !data.password) {
      throw new CustomError({
        status: 400,
        message: "Information is missing",
      });
    }
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: data.email,
        },
      });

      if (!user) {
        throw new Error();
      }
      const passwordMatch = await compare(String(data.password), user.password);

      if (!passwordMatch) {
        throw new Error();
      }
      const token = sign({id: user.id}, jwtConfig.secret, {
        subject: user.id,
        expiresIn: jwtConfig.expiresIn,
      });

      return token;
    } catch (error) {
      throw new CustomError({status: 400, message: "User not found"});
    }
  }
}
