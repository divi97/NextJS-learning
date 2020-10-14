import sqlite from 'sqlite';
import { verify } from 'jsonwebtoken'

export const authenticated = (fn) => async (req, res) => {
    // verify(req.headers.authorization, process.env.SECRET, function (err, decoded) {
    verify(req.cookies.auth, process.env.SECRET, function (err, decoded) {

        if (!err && decoded) {
            return fn(req, res)
        }
        res.status(401).json({ message: 'Sorry you are not authenticated' });
    })
}

export default authenticated(async function getPeople(req, res) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: "Sorry this API serves only GET requests" })
    }

    const db = await sqlite.open('./mydb.sqlite');
    const people = await db.all('SELECT id, email, name FROM person');

    res.json(people);
})