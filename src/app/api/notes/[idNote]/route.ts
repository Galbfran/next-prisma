import { NextResponse } from "next/server"

export function GET(){
    return NextResponse.json({
        message: "pedir nota por id"
    })
}

export function DELETE(){
    return NextResponse.json({
        message: "borrar nota por id"
    })
}

export function PUT(){
    return NextResponse.json({
        message: "actualizar nota por id"
    })
}