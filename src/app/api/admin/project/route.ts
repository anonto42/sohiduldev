import { auth } from "@/auth";
import MongoConnect from "@/db/mongoDBConnent";
import { ApiResponse } from "@/lib/ApiResponce";
import ProjectModel from "@/model/project";
import { NextRequest, NextResponse } from "next/server";
import streamifier from "streamifier";
import { v2 as cloud } from "cloudinary";

cloud.config({
    cloud_name: process.env.CLD_NAME,
    api_key: process.env.CLD_API_KEY,
    api_secret: process.env.CLD_API_SECRET_KEY,
});

export async function POST(request: NextRequest) {
    await MongoConnect();
    try {
        const session = await auth();
        if (session?.user?.email !== "anonto1080@gmail.com") {
            return ApiResponse.error("This route is only for admin", 408);
        }

        const fData = await request.formData();
        if (!fData) return Response.json({ message: "No file found!" });

        const file = fData.get("image") as unknown as File;
        if (!file) return Response.json({ message: "Invalid file" });

        const bytes = await file.arrayBuffer();
        const bufferFile = Buffer.from(bytes);

        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloud.uploader.upload_stream(
                {
                    folder: "portfolio",
                    resource_type: "image",
                },
                (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }
            );

            streamifier.createReadStream(bufferFile).pipe(uploadStream);
        });

        if (!uploadResult) {
            return NextResponse.json({ error: "Problem in file upload!" }, { status: 500 });
        }

        const project = await ProjectModel.create({
            title: fData.get("title"),
            liveLink: fData.get("liveLink"),
            frontImage: (uploadResult as any).secure_url,
        });

        return NextResponse.json({ message: "Project created", data: project }, { status: 200 });

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something went wrong while creating the project", 500);
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