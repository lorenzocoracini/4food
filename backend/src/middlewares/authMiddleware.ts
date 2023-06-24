import { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import jwt from "jsonwebtoken";

type JwtPayload = { 
  id: number;
};

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { authorization } = req.body;

  if (!authorization) {
    throw new UnauthorizedError("Não enviou o token nos headers!");
  }

  const token = authorization.split(" ")[1];

  const { id } = jwt.verify(token, process.env.JWT_PASS ?? "") as JwtPayload;

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new UnauthorizedError("Usuário não encontrado!");
  }

  const { password: _, ...loggedUser } = user;

  req.user = loggedUser;

  next();
};


