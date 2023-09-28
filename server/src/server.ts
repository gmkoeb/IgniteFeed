import Fastify  from 'fastify'
import { Login } from './routes/login'
import cors from '@fastify/cors'
const dotenv = require('dotenv');
dotenv.config();
import { accountCreation } from './routes/account-creation'

const app = Fastify()

app.register(cors)

app.register(require('@fastify/jwt'), {
  secret: process.env.SECRET,
});

app.register(Login)
app.register(accountCreation)

app.listen({
    port: 3333,
    host: '0.0.0.0',
  }).then(() => {
    console.log('HTTP Server running!')
})