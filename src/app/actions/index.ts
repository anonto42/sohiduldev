"use server"
import { signIn } from "@/auth"

export async function gitHubLogin(formData:any){
    const action = formData.get("action")
    await signIn(action,{ redirectTo:"/dashboard" })
}

export async function logOut(formData:any){}