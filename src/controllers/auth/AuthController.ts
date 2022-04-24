import { Request, Response } from 'express'
import { user } from '../../helpers/utils'
import jwt from 'jsonwebtoken'

export class AuthController {
  authenticate (req: Request, res: Response) {
    const { email, password } = req.body

    if (user.email !== email) return res.status(404).json({ message: 'User not found' })
    if (user.password !== password) return res.status(401).json({ message: 'Incorret password' })
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' })
    return res.status(200).json({ token })
  }
}

export const authController = new AuthController()
