import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

export async function getRandomHash(): Promise<string> {
  const randomString = randomUUID(); // or Math.random().toString(36)
  return await bcrypt.hash(randomString, 10);
}
