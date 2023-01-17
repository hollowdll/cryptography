// Hash salting

import { scryptSync, randomBytes, BinaryLike } from "crypto";

export namespace salt {
    // Generate hashed password that is salted.
    // Salts are always random.
    export const signup = (email: string, password: BinaryLike) => {
        const salt = randomBytes(16).toString("hex");
        const hashedPassword = scryptSync(password, salt, 64).toString("hex");
    
        const user = { email, password: `${salt}:${hashedPassword}` };
    
        console.log(salt);
        console.log(hashedPassword);
        console.log(user);
    }
    
    export const login = (email: string, password: BinaryLike) => {
    
    }
}