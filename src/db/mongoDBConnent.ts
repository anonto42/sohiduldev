import mongoose from "mongoose";

let connection: boolean = false;

export default async function MongoConnect() {
    if (connection) {
        return;
    };
    try {

        await mongoose.connect( process.env.MONGODB_URI?.toString() || "" );
        connection = true;
        
    } catch (error) {
        console.log("Somting was wrong on DB connection")
        process.exit(1)
    };
};