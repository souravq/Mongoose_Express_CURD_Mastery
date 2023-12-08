import express, { Request, Response } from 'express'
import { userRouter } from './modules/User/user.route'

const app = express()

// Parser
app.use(express.json())

// User Route
app.use('/api/users', userRouter.router)

//Base Url
app.get('/', (req: Request, res: Response) => {
  res.send('Mongoose Express Crud Mastery App Is Running !!!')
})

export default app
