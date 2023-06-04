import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const emailExists = await userRepository.findOneBy({ email });

    if (emailExists) {
      throw new BadRequestError("Email already registered");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      email,
      password: hashPassword,
    });

    await userRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestError("Email or Password invalids");
    }

    const verifyPassword = await bcrypt.compare(password, user.password);

    if (!verifyPassword) {
      throw new BadRequestError("Email or Password invalids");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_PASS ?? "", {
      expiresIn: "8h",
    });

    const { password: _, ...userLogin } = user;

    return res.json({
      user: userLogin,
      token: token,
    });
  }
  async getProfile(req: Request, res: Response) {
    /// função de verificar a autenticação do usuário logado
    /// tem que passar no headers da requisição o token do Usuario que é gerado no login

    return res.json(req.user);
  }
}
