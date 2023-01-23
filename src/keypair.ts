// Keypair is about using public key
// and private key to encrypt data.

// Public key will be sent
// and private key will be kept

import { generateKeyPairSync } from "crypto";

export const asymmetricKeyPair = () => {
    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
        modulusLength: 2048,    // Length of key in bits
        publicKeyEncoding: {
            type: "spki",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem",
            cipher: "aes-256-cbc",
            passphrase: "very secret, yet top secret",
        }
    });
    
    console.log(publicKey);
    console.log(privateKey);


}
