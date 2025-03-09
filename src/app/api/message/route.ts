import MongoConnect from "@/db/mongoDBConnent";
import { ApiResponse } from "@/lib/ApiResponce";
import MessageModel from "@/model/message";

export async function POST(request: Request) {
    await MongoConnect()
    try {
        const { name, email, message } = await request.json();

        // Check for empty fields
        if (!name.trim() || !email.trim() || !message.trim()) {
            return ApiResponse.error("All fields are required!", 400);
        }

        // Email validation using regex
        const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.trim())) {
            return ApiResponse.error("Invalid email address!", 400);
        }

        const messageData = {
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
        };

        const isMessageSend = await MessageModel.create(messageData);
        if (!isMessageSend) return ApiResponse.error("Something went wrong while sending the message", 500);

        return ApiResponse.success("The message was successfully sent.");

    } catch (error) {
        console.error("Error:", error);
        return ApiResponse.error("Something went wrong!", 500);
    }
}
