import { auth } from "@/auth";
import MongoConnect from "@/db/mongoDBConnent";
import { ApiResponse } from "@/lib/ApiResponce";
import MessageModel from "@/model/message";
import { NextRequest } from "next/server";


export async function GET(request: Request) {
    await MongoConnect();
    try {

        const section = await auth();
        if (section?.user?.email !== "anonto1080@gmail.com") {
            return ApiResponse.error("This route is only for admin",408)
        }

        const messages = await MessageModel.find({});
        return ApiResponse.success("Successfully get all the messages.",200,messages);

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something went wrong!", 500);
    }
}

export async function DELETE(request: NextRequest) {
    await MongoConnect();
    try {

        const section = await auth();
        if (section?.user?.email !== "anonto1080@gmail.com") {
            return ApiResponse.error("This route is only for admin",408)
        }

        const params = request.nextUrl.searchParams
        const id = params.get("id")

        if (id == "") return ApiResponse.error("Select an id for delete a message.")

        await MessageModel.deleteOne({_id:id});
        return ApiResponse.success("Successfully delete the message.",200);

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something was wrong! on deleting the message", 500);
    }
}