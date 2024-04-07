import {getApps, initializeApp} from 'firebase/app';
import firebaseConfig from '@/config/config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, addDoc, collection, query, where, getDocs } from 'firebase/firestore';


const app = getApps().length < 1 ?
    initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const db = getFirestore(app);

export const validateUser = async (filter: string, field: string, keyword: string): Promise<boolean> => {
    const usersRef = collection(db, field);
    const q = query(usersRef, where(filter, '==', keyword));
    
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.size > 0) {
        // User with the provided email exists in Firestore
        console.log('User with email already exists');
        return true;
    } else {
        // User with the provided email does not exist in Firestore
        console.log('User with email does not exist');
        return false;
    }
}

export const getUser = async (email: string, password: string): Promise<any> => {
    try {
        const usersRef = collection(db, 'users');
        const q = query(usersRef, where('email', '==', email));

        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
            // User with the specified email found
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                const userPassword = userData.password; // Assuming the password is stored in the 'password' field
                console.log('Retrieved user password:', userPassword);

                // Now you can compare the retrieved password with the provided password
                if (userPassword === password) {
                    // Passwords match, user authentication successful
                    console.log('User authenticated successfully');
                } else {
                    // Passwords do not match, handle authentication failure
                    console.log('Incorrect password');
                }
            });
        } else {
            // User with the specified email not found
            console.log('User not found');
        }
    } catch (error) {
        console.error('error occured', error);
    }
}