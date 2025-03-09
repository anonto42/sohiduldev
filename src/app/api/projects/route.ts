import MongoConnect from "@/db/mongoDBConnent";
import { ApiResponse } from "@/lib/ApiResponce";
import ProjectModel from "@/model/project"


export async function GET(request: Request) {
    await MongoConnect();
    try {

        const allProjects = await ProjectModel.find({});
        if(!allProjects) return ApiResponse.error("Somting problem in get projects",500)
        
        return ApiResponse.success("Successfully get all messages.",200,allProjects);

    } catch (error) {
        console.log(error)
        return ApiResponse.error("Something worng on geting project's",500);
    }
}