import crypto from "crypto";

export function generateWayForPaySignature(
  fields: string[],
  secret: string
): string {
  const data = fields.join(";");
  return crypto.createHmac("md5", secret).update(data).digest("hex");
}

export function createAccessToken(
  orderRef: string,
  secret: string
): string {
  const timestamp = Date.now().toString();
  const nonce = crypto.randomBytes(16).toString("hex");
  const payload = `${orderRef}:${timestamp}:${nonce}`;
  const signature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex");
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

export function verifyAccessToken(
  token: string,
  secret: string
): { valid: boolean; orderRef?: string } {
  try {
    const decoded = Buffer.from(token, "base64url").toString();
    const parts = decoded.split(":");
    if (parts.length !== 4) return { valid: false };

    const [orderRef, timestamp, nonce, signature] = parts;
    const payload = `${orderRef}:${timestamp}:${nonce}`;
    const expected = crypto
      .createHmac("sha256", secret)
      .update(payload)
      .digest("hex");

    if (signature !== expected) return { valid: false };

    const age = Date.now() - parseInt(timestamp, 10);
    const ONE_HOUR = 60 * 60 * 1000;
    if (age > ONE_HOUR) return { valid: false };

    return { valid: true, orderRef };
  } catch {
    return { valid: false };
  }
}
