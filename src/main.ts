// Use and test different cryptography concepts

import { hash } from "./hash"
import { salt } from "./salt"

hash.hashAction();
console.log();

salt.signup("random@random.com", "password123");