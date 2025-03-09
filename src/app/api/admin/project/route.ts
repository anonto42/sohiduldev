import { auth } from "@/auth";
import MongoConnect from "@/db/mongoDBConnent";
import { ApiResponse } from "@/lib/ApiResponce";
import ProjectModel from "@/model/project";
import { NextRequest } from "next/server";


export async function POST(request: NextRequest) {
    await MongoConnect();
    try {
        
        const section = await auth();
        if (section?.user?.email !== "anonto1080@gmail.com") {
            return ApiResponse.error("This route is only for admin",408)
        }
        

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something was wrong! on deleting the project", 500);
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

        await ProjectModel.deleteOne({_id:id});
        return ApiResponse.success("Successfully delete the project.",200);

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something was wrong! on deleting the project", 500);
    }
}