// Hash salting

import { scryptSync, randomBytes, BinaryLike, timingSafeEqual } from "crypto";

interface User {
    email: string,
    password: string,
}

export namespace salt {
    let users: User[] = [];

    // Generate hashed password that is salted.
    // Salts are always random.
    export const signup = (email: string, password: BinaryLike) => {
        const salt = randomBytes(16).toString("hex");
        const hashedPassword = scryptSync(password, salt, 64).toString("hex");
    
        const user: User = { email, password: `${salt}:${hashedPassword}` };
        users.push(user);
    
        console.log("Random salt:", salt);
        console.log("Hashed password with salt:", hashedPassword);
        console.log(user);

        return user;
    }
    
    export const login = (email: string, password: BinaryLike): string => {
        const user: User | undefined = users.find(v => v.email === email);

        if (user !== undefined) {
            const [salt, key] = user.password.split(":");
            const hashedBuffer = scryptSync(password, salt, 64);

            const keyBuffer = Buffer.from(key, "hex");
            // Prevent timing attacks
            const match = timingSafeEqual(hashedBuffer, keyBuffer);

            console.log("Login hashedBuffer:", hashedBuffer);
            console.log("Login keyBuffer:", keyBuffer);

            if (match) {
                return "Login success!";
            } else {
                return "Login failed!";
            }

        } else {
            return "No user found with this email!";
        }
    }
}