// @ts-nocheck
import { prisma } from '../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function Login(app: FastifyInstance){
    app.post('/login', async (request, reply) => {
        const username = request.body.username
        const password = request.body.password
        const user = await prisma.user.findUnique({
                where: {
                    username: username,
                    password: password,
                },
            })
        if (!user){
            console.log(reply.status(400).send({ error: 'Usuário não encontrado' }))
        }

        const token = app.jwt.sign({ userId: user?.id });
        reply.send({ token });
    })
}