import { MongoClient } from 'mongodb';
const url = 'mongodb+srv://tsokuptshiamo:Lovelifes@carselection.2ekkh7f.mongodb.net/'
const dbName = 'myVehicles';
const client = new MongoClient(url); 

async function connect() {
    try {
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db(dbName);
        return db;
    } catch (error) {
        console.error("Error connecting to database:", error);
        throw error;
    }
}

module.exports = { connect };

