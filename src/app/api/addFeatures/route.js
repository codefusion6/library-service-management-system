import { ConnectMongoDb } from "@/lib/MongoConnect"
import Features from "@/models/boodFeatures/FeaturesModel"
import { NextResponse } from "next/server"



// export async function POST(req, res) {
//     res.status(201).send("Hello World")
//     if (req.method !== "POST") {
//         res.status(405).send({ message: "Only Post request are allowed" })
//         return
//     }
//     const { features } = req.body
//     try {
//         await ConnectMongoDb()
//         Features.create({ features }).then((data) => {
//             console.log(data)
//             res.status(201).send(data)
//         })
//     } catch (err) {
//         res.status(400).send({ err, message: "Something went wrong" })
//     }
// }

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