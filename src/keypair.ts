// Keypair is about using public key
// and private key to encrypt data.

// Public key will be sent
// and private key will be kept

import { generateKeyPairSync } from "crypto";

export const createAsymmetricKeyPair = () => {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
        modulusLength: 2048,    // Length of key in bits
        publicKeyEncoding: {
            type: "spki",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem",
            // cipher: "aes-256-cbc",
            // passphrase: "top secret",
        }
    });
    
    console.log(publicKey);
    console.log(privateKey);

    return {
        publicKey,
        privateKey,
    }
}