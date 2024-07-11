import { NextResponse } from 'next/server';
import connectMongo from "../../../libs/mongoDB";
import ResultModel from "../../../models/resultSchema";


connectMongo();

export async function POST(req){
    try {
        const{resultNumber, category , item , firstName , firstUnit , secondName , secondUnit, thirdName , thirdUnit } = await req.json();

        await ResultModel.create(
                {
                category , 
                item , 
                firstName , 
                firstUnit , 
                secondName , 
                secondUnit , 
                thirdName , 
                thirdUnit});
                
                return NextResponse.json({message: 'Result uploaded successfully', status: 202});
    } catch (error) {
        console.log("failed to Upload result", error);
        return NextResponse.json({message: "Failed to Upload result", status:210})
    }
}

export async function GET (req, res) {
    try {
        const results = await ResultModel.find();
        return NextResponse.json({results});
    } catch (error) {
        console.log("failed to Upload result", error);
        return NextResponse.json({message: "Failed to fetch result", status:210});
    }
}