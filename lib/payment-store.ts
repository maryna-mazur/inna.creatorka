import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
});

const TTL = 24 * 60 * 60; // 24 hours

export async function createPayment(orderReference: string): Promise<void> {
  await redis.set(`payment:${orderReference}`, "pending", { ex: TTL });
}

export async function approvePayment(orderReference: string): Promise<void> {
  await redis.set(`payment:${orderReference}`, "approved", { ex: TTL });
}

export async function isPaymentApproved(orderReference: string): Promise<boolean> {
  const status = await redis.get(`payment:${orderReference}`);
  return status === "approved";
}
