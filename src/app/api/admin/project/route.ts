import MongoConnect from "@/db/mongoDBConnent";
import { ApiResponse } from "@/lib/ApiResponce";
import ProjectModel from "@/model/project";


export async function DELETE(request: Request) {
    await MongoConnect();
    try {
        const { id } = await request.json()

        await ProjectModel.deleteOne({_id:id});
        return ApiResponse.success("Successfully delete the project.",200);

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something was wrong! on deleting the project", 500);
    }
}