import tickets from "@/app/database"
import { NextResponse } from "next/server"

export async function GET (){
    return NextResponse.json( tickets)

}
export async function POST (request:Request){
    const  ticket = await request.json()
     await tickets.push({ id : tickets.length + 1 , ...ticket })
    return NextResponse.json(tickets)
}