import sqlite from 'sqlite';

export default async function getPeople(req, res) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: "Sorry this API serves only POST requests" })
    }

    const db = await sqlite.open('./mydb.sqlite');
    const people = await db.all('SELECT * FROM person');

    res.json(people);
}