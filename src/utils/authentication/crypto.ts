import crypto from 'crypto';

export function CreateHash(password: string): string {
  return crypto
    .createHash('md5')
    .update(password)
    .digest('hex');
}

export function CompareHash(password: string, hashToCompare: string): boolean {
  const passwordHash = CreateHash(password);
  return passwordHash === hashToCompare;
}
