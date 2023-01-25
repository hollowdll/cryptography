// Digital signature is a way to verify
// authenticity of hashed messages

// Sender uses private key to sign a hashed message.
// Recipient uses public key to validate the 
// authenticity of the message.

import { createSign, createVerify } from "crypto";
import { createAsymmetricKeyPair } from "./keypair";

export const digitalSignature = () => {
    const { publicKey, privateKey } = createAsymmetricKeyPair();

    const message = "digital signature";

    // Sign data

    const signer = createSign("rsa-sha256");
    signer.update(message);
    const signature = signer.sign(privateKey, "hex");

    console.log("Digital signature:", signature);

    // Verify data

    const verifier = createVerify("rsa-sha256");
    verifier.update(message);
    const isVerified = verifier.verify(publicKey, signature, "hex");

    console.log("Original message validated:", isVerified);
}