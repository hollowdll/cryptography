// Symmetric encryption encrypts text with one key.
// That same key is used to decrypt it.

// Uses initialization vector to make the produced cipher
// different every time, even though the message is same.

import { createCipheriv, randomBytes, createDecipheriv } from "crypto";

export const symmetricEncryption = () => {
    const message = "Very secret message";
    const key = randomBytes(32);
    const iv = randomBytes(16);
    
    // Encrypt
    const cipher = createCipheriv("aes256", key, iv);
    const encyptedMessage = cipher.update(message, "utf8", "hex")
                            + cipher.final("hex");
    
    // Decrypt
    const decipher = createDecipheriv("aes256", key, iv);
    const decryptedMessage = decipher.update(encyptedMessage, "hex", "utf8")
                            + decipher.final("utf8");
    
    console.log("Message:", message);
    console.log("Encrypted:", encyptedMessage);
    console.log("Decrypted:", decryptedMessage);
}
