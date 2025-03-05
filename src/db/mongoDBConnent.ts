import mongoose from "mongoose";

let connection: boolean = false;

export default async function MongoConnect() {
    if (connection) {
        return console.log("Your DB is also connected.")
    };
    try {

        const db = await mongoose.connect( process.env.MONGODB_URI?.toString() || "" );
        console.log(db)
        connection = true;
        
    } catch (error) {
        console.log("Somting was wrong on DB connection")
        process.exit(1)
    };
};