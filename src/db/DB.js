import mongoose from 'mongoose';


const DBConnection = async ()=> {

    mongoose.set('strictQuery',true);

    try {
        const DB = await mongoose.connect(
            `${process.env.MONGO_DB_URL_LOCAL_HOST}/${process.env.DB_NAME}`
        );

        console.log(`your DB is connected on : ${DB.connection.host}`);
        
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export default DBConnection