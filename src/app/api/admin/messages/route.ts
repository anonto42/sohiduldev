import MongoConnect from "@/db/mongoDBConnent";
import { ApiResponse } from "@/lib/ApiResponce";
import MessageModel from "@/model/message";


export async function GET(request: Request) {
    await MongoConnect();
    try {

        const messages = await MessageModel.find({});
        return ApiResponse.success("Successfully get all the messages.",200,messages);

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something went wrong!", 500);
    }
}