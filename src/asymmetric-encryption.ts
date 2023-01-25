// Asymmetric encryption uses keypair.
// Public key is used to encrypt data.
// Private key is used to decrypt data.

// HTTPS protocol is a great example of
// asymmetric encryption

import { publicEncrypt, privateDecrypt } from "crypto";
import { createAsymmetricKeyPair } from "./keypair";

export const asymmetricEncryption = () => {
    const { publicKey, privateKey } = createAsymmetricKeyPair();
    
    const message = "AI is coming for you!";

    console.log("Message:", message);
    
    const encryptedData = publicEncrypt(
        publicKey,
        Buffer.from(message),
    );
    
    console.log("Message encrypted:", encryptedData.toString("hex"));
    
    const decryptedData = privateDecrypt(
        privateKey,
        encryptedData,
    );
    
    console.log("Message decrypted:", decryptedData.toString("utf8"));
}