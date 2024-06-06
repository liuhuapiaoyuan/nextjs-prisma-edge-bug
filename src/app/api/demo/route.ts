import { prisma } from "@/lib/prisma"



export const runtime = "edge"


export async function GET(){


    const list = await prisma.account.findMany()
    return Response.json({message: "Hello from Edge!" , list})
}