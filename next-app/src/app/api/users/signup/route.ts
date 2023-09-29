
import { NextRouter } from 'next/router';
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        console.log(reqBody);
        const { username, email, password } = reqBody;

        //check if user already exist
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User already exist" }, { status: 400 })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username, email, password: hashedPassword
        });

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json(
            {
                message: "User Created successfully.",
                success: true,
                savedUser
            });

    } catch (error: any) {
        return
    }
}