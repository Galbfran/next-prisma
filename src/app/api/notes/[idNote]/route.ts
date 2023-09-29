import { NextResponse } from "next/server"
import {prisma} from "@/libs/prisma"

interface Params {
    params: {
        idNote: String
    }
}
export async function GET(request: Request , {params}: Params){
    try {
        const note = await prisma.note.findFirst({
            where: {
                id: Number(params.idNote)
            }
        })
        if(note === null){
            return NextResponse.json({
                message: "nota no encontrada"
            },{
                status:404
            })
        }
        return NextResponse.json(note)
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json({
                message: error.message
            },{
                status:500
            })
        }
    }
}

export async function DELETE(request: Request , {params}: Params){
    try {
        const noteDelete = await prisma.note.delete({
            where: {
                id: Number(params.idNote)
            }
        })
        if(noteDelete === null){
            return NextResponse.json({
                message: "nota no encontrada"
            },{
                status:404
            })
        }
        return NextResponse.json(noteDelete)
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json({
                message: error.message
            },{
                status:500
            })
        }
    }
}






export async function PUT(request: Request , {params}: Params){
    const {title , content} = await request.json()
    try {
        const noteUpdate = await prisma.note.update({
            where: {
                id: Number(params.idNote)
            },
            data:{
                title,
                content
            }
        })
        if(noteUpdate === null){
            return NextResponse.json({
                message: "nota no encontrada"
            },{
                status:404
            })
        }
        return NextResponse.json(noteUpdate)
    } catch (error) {
        if (error instanceof Error){
            return NextResponse.json({
                message: error.message
            },{
                status:500
            })
        }
    }
}