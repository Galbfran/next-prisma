import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        message: "debuelve todas las notas"
    })
}

export function POST() {
    return NextResponse.json({
        message: "creando nota"
    })
}