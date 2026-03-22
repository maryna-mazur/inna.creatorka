interface TokenEntry {
  usedAt: number;
  orderRef: string;
}

const store = new Map<string, TokenEntry>();

const CLEANUP_INTERVAL = 10 * 60 * 1000; // 10 minutes
const MAX_AGE = 24 * 60 * 60 * 1000; // 24 hours

if (typeof globalThis !== "undefined") {
  const key = "__tokenStoreCleanup";
  if (!(globalThis as Record<string, unknown>)[key]) {
    (globalThis as Record<string, unknown>)[key] = setInterval(() => {
      const cutoff = Date.now() - MAX_AGE;
      for (const [token, entry] of store) {
        if (entry.usedAt < cutoff) {
          store.delete(token);
        }
      }
    }, CLEANUP_INTERVAL);
  }
}

export function markAsUsed(token: string, orderRef: string): void {
  store.set(token, { usedAt: Date.now(), orderRef });
}

export function isUsed(token: string): boolean {
  return store.has(token);
}
