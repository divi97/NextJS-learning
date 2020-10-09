import sqlite from 'sqlite';

export default async function getAllVehiclesByPersonId(req, res) {
    if(req.method !== 'GET') {
        res.status(500).json({message: "Sorry this API serves only POST requests"})
    }
    const db = await sqlite.open('./mydb.sqlite');
    const allVehicles = await db.all('SELECT * FROM vehicle WHERE ownerId = ? ', [req.query.id]);
    // const allVehicles = await db.all('SELECT v.*, p.name FROM vehicle INNER JOIN person AS p ON p.id = v.ownerId WHERE ownerId = ? ', [req.query.id]);

    res.json(allVehicles);
}  