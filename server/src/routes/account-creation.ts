// @ts-nocheck
import { prisma } from '../lib/prisma'
import { FastifyInstance } from 'fastify'

export async function accountCreation(app: FastifyInstance){
    app.post('/accountCreation', async (request) => {
        const user = await prisma.user.create({
            data:{
                email: request.body.email,
                password: request.body.password,
                username: request.body.username,
            },
        })
        console.log(user)
    })
}