// HMAC (Hash-based message authentication code)
// Hashes a message with a given key/token
// If the same key is used for the same message,
// generated hash will be the same!

import { createHmac } from "crypto";

export const hmacAction = () => {
    const key = "secret-token";
    const message = "lol";
    
    const hmac = createHmac("sha256", key).update(message).digest("hex");
    console.log("Hmac hash with key1:", hmac);
    
    const key2 = "other-secret";
    const hmac2 = createHmac("sha256", key2).update(message).digest("hex");
    console.log("Hmac hash with key2:", hmac2);
}