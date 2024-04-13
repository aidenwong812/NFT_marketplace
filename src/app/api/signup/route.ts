import { NextRequest, NextResponse } from 'next/server';
import { addDoc, collection } from 'firebase/firestore';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { db } from '../../../lib/firebase';

const saltRounds = 10;

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const {
        name,
        email,
        password,
        phoneNumber,
        avatar,
        wallet,
        chatHistory,
        isSignedIn,
    } = body;
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log(hashedPassword);
    console.log(phoneNumber);
    const payload = { email: email };
    const token = jwt.sign( payload, "SOFT COQ INU", {expiresIn: "1h"} );
    try {
        const docRef = await addDoc(collection(db, "users"), {
            name: name || "",
            email: email || "",
            password: hashedPassword || "",
            phoneNumber: phoneNumber || "",
            avatar: avatar || "",
            wallet: wallet || [],
            chatHistory: chatHistory || [],
            isSignedIn: isSignedIn || false,
            accessToken: token,
            expiresIn: "1h",
        });
        return Response.json({ message: "user registered successfully" });
    } catch (error) {
        console.log(name);
        console.error("Error registering user.");
        return Response.json({ message: "user registered failed" });
    }
}