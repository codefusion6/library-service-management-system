import { ConnectMongoDb } from "@/lib/MongoConnect"
import Features from "@/models/boodFeatures/FeaturesModel"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req) {
    // console.log("Hello")
    return NextResponse.json({
        message: "Hi, I am from Server",
    },
        {
            status: 201
        }
    )
}