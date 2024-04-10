import mongoose from "mongoose";

const validateMongoDBId = (id) =>{
    const isValid = mongoose.Schema.Types.ObjectId(id);
    if(!isValid) throw new Error("This id is not valid or not Found");
}

export {validateMongoDBId};