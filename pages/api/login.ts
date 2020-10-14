import { compare } from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import sqlite from 'sqlite';
import { sign } from 'jsonwebtoken';
import cookie from 'cookie'

export default async function login(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === 'POST') {

        const person = await db.get('SELECT * from person WHERE email=?', [req.body.email]);
        console.log(person)
        compare(req.body.password, person.password, function (err, result) {
            if (!err && result) {
                const claims = { sub: person.id, personEmail: person.email }
                const jwt = sign(claims, process.env.SECRET, { expiresIn: '1h' })

                res.setHeader('Set-Cookie', cookie.serialize('auth',jwt, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV !== 'development',
                    sameSite:'strict',
                    maxAge: 3600,
                    path: '/'
                }))
                res.status(200).json({ message: 'Welcome back to the app!!' })
            } else {
                res.json({ message: 'Something went wrong!!' })
            }
        })
    } else {
        res.status(405).json({ message: 'We only support POST' });
    }
}