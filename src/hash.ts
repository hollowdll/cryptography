// Input hashing

import { createHash, BinaryLike } from "crypto";

export namespace hash {
    // Generate a hash value
    const hash = (input: BinaryLike): string => {
        return createHash("sha256").update(input).digest("hex");
    }
    
    export const hashAction = () => {
        let password = "password123";
        const passwordHash = hash(password);
        console.log("Hashed password is:", passwordHash);
        
        password = "password1234";
        const passwordHash2 = hash(password);
        console.log("New hashed password is:", passwordHash2)
        const match = passwordHash === passwordHash2;
        
        console.log(match ? "good password" : "password does not match");
    }
}
