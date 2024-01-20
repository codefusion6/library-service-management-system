import { dbConnect } from "@/libs/MongoConnect";
import Feature from "@/models/boodFeatures/FeaturesModel";
import { NextResponse, NextRequest } from "next/server"





export async function POST(request) {
    // console.log("Hello")
    const {
        bookName,
        type,
        createdBy,
        price,
        startMarking,
        image
    } = await request.body;
    // connect to mongodb
    await dbConnect();

    // what i wnat to do
    await Feature.create({
        bookName,
        type,
        createdBy,
        price,
        startMarking,
        image
    })
    // return the response
    return NextResponse.json({ message: "Features Created!" }, { status: 201 });

}