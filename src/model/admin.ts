import { Schema, Document, model, models, Model} from "mongoose";
import { ProjectSchemaType } from "./project";

export interface UserSchemaType extends Document{
    name: string;
    email: string;
    role: string;
    password: string;
    projects: Array<ProjectSchemaType>;
}


const userSchema: Schema<UserSchemaType> = new Schema({
    name:{
        type: String
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    role:{
        type: String
    },
    password:{
        type: String,
        required: true
    },
    projects: []
},{
    timestamps: true,
});

const UserSchema = ( models.User as Model<UserSchemaType> ) || ( model("User", userSchema) );
export default UserSchema;