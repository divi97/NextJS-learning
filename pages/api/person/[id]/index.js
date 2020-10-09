import sqlite from 'sqlite';

export default async function getPersonById(req, res) {
    if(req.method !== 'GET') {
        res.status(500).json({message: "Sorry this API serves only POST requests"})
    }

    const db = await sqlite.open('./mydb.sqlite');

    if (req.method === 'PUT') {
        const statement = await db.prepare('UPDATE person SET name = ?, email= ? WHERE id = ?');
        const result = await statement.run( req.body.name, req.body.email, req.body.id);
        result.finalize();
    }
    const person = await db.get('SELECT * FROM person WHERE id = ? ', [req.query.id]);

    res.json(person);
}