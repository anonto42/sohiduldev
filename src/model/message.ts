import { Model, model, models, Schema,} from "mongoose";

export interface MessageSchemaType extends Document{
    name: string;
    email: string;
    message: string;
}

const messageSchema: Schema<MessageSchemaType> = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
},{
    timestamps:true
});

const MessageModel = ( models.Message as Model<MessageSchemaType> ) || ( model('Message',messageSchema) );

export default MessageModel;