import { Request, Response } from "express";
import { BadRequestError } from "../helpers/api-erros";
import { userRepository } from "../repositories/userRepository";
import bcrypt from "bcrypt";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, phone, password } = req.body;

    const emailExists = await userRepository.findOneBy({ email });

    if (emailExists) {
      throw new BadRequestError("Email already registered");
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = userRepository.create({
      name,
      email,
      phone,
      password: hashPassword,
    });

    await userRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json(user);
  }

  async update(req: Request, res: Response) {
    const { name, email, phone, password } = req.body;
    const userId = req.params;

    try {
      const user = await userRepository.findOne(userId);
      if (!user) {
        throw new BadRequestError("User not found");
      }

      user.name = name || user.name;
      user.email = email || user.email;
      user.phone = phone || user.phone;
      if (password) {
        const hashPassword = await bcrypt.hash(password, 10);
        user.password = hashPassword;
      }

      await userRepository.save(user);

      const { password: _, ...updatedUser } = user;
      return res.json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async delete(req: Request, res: Response) {
    const userId = req.params;

    try {
      const user = await userRepository.findOne(userId);
      if (!user) {
        throw new BadRequestError("User not found");
      }

      await userRepository.remove(user);

      return res.json({ message: "User deleted successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}
