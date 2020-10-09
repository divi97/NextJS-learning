// import { NextApiRequest, NextApiResponse } from 'next';           //USED FOR typescript files
import sqlite from 'sqlite';

export default async function getVehicleById(req, res) {
    if(req.method !== 'GET') {
        res.status(500).json({message: "Sorry this API serves only POST requests"})
    }

    const db = await sqlite.open('./mydb.sqlite');
    const vehicle = await db.get('SELECT * FROM vehicle WHERE id = ? ', [req.query.id]);

    res.json(vehicle);
}