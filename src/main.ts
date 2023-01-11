// Use and test different cryptography concepts

// NodeJS has built-in crypto module
import * as crypto from "crypto";

// Take a word and generate a hash value
const hash = (input: crypto.BinaryLike): string => {
    return crypto.createHash("sha256").update(input).digest("hex");
}

const weakPassword = "password123";
const weakPasswordHash = hash(weakPassword);

// View generated hash
console.log(weakPasswordHash);