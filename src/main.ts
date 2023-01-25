// Use and test different cryptography concepts

import { hash } from "./hash"
import { salt } from "./salt"
import { hmacAction } from "./hmac";
import { symmetricEncryption } from "./symmetric-encryption";
import { asymmetricEncryption } from "./asymmetric-encryption";
import { digitalSignature } from "./digital-signature";

/*
hash.hashAction();
console.log();
*/

/*
salt.signup("random@random.com", "password123");
console.log(salt.login("random@random.com", "password123"));
*/

// hmacAction();

// symmetricEncryption();

// asymmetricEncryption();

digitalSignature();