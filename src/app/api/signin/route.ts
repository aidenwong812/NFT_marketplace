import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection, query, getDocs, where } from 'firebase/firestore';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { db } from '../../../lib/firebase';

export async function POST(req: NextRequest) {
    const body = await req.json();
    const { email, password } = body;
    try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', email));

        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            // User with the specified email found
            let userAuthenticated = false;
            for (const doc of querySnapshot.docs) {
                const userData = doc.data();
                const userPassword = userData.password; // Assuming the password is stored in the 'password' field
                console.log('Retrieved user password:', userPassword);
                const passwordValidated = await bcrypt.compare(password, userPassword);
                // Now you can compare the retrieved password with the provided password
                if (passwordValidated) {
                    // Passwords match, user authentication successful
                    console.log('User authenticated successfully');
                    userAuthenticated = true;
                    break;
                }
            }
            if (userAuthenticated) {
                const payload = { email: email };
                const token = jwt.sign( payload, "SOFT COQ INU", {expiresIn: "1h"} );
                return Response.json({ status: 200, msg: 'User validated', token: token });

            } else {
                // Passwords do not match, handle authentication failure
                console.log('Incorrect password');
                return Response.json({ status: 204, msg: 'Password is not correct' });
            }
        } else {
            // User with the specified email not found
            console.log('User not found');
            return Response.json({ status: 400, msg: 'User does not exist' });
        }
    } catch (error) {
        console.error('Error occurred', error);
        return Response.json({ status: 500, msg: 'Unauthorized request' });
    }
}