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
}
