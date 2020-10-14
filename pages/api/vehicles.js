import sqlite from 'sqlite';
import { authenticated } from './people'

export default authenticated(async function getAllVehicle(req, res) {
    if (req.method !== 'GET') {
        res.status(500).json({ message: "Sorry this API serves only GET requests" })
    }

    const db = await sqlite.open('./mydb.sqlite');
    const vehicles = await db.all('SELECT * FROM vehicle');

    res.json(vehicles);
})