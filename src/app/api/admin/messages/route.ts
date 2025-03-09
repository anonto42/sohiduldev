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

export async function DELETE(request: Request) {
    await MongoConnect();
    try {
        
        const { id } = await request.json();
        if (!id || id.trim() === "") return ApiResponse.error("Select an id for delete a message.")

        await MessageModel.deleteOne({_id:id});
        return ApiResponse.success("Successfully delete the message.",200);

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something was wrong! on deleting the message", 500);
    }
}