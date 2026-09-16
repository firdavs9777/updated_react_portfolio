import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Node 22+ ships an experimental global `localStorage`/`sessionStorage`
// backed by an on-disk file. Without `--localstorage-file` it resolves to a
// stub with no working methods. Vitest 1.6.1's bundled jsdom environment
// predates this global and only overrides a key with jsdom's own
// implementation when the key is not already present on `global` — so on
// newer Node this stub wins over jsdom's real Storage, breaking every test
// that touches localStorage. Replace both with a small in-memory polyfill so
// storage behaves the same regardless of the Node version running the suite.
class MemoryStorage implements Storage {
  private store = new Map<string, string>();

  get length() {
    return this.store.size;
  }

  clear() {
    this.store.clear();
  }

  getItem(key: string) {
    return this.store.has(key) ? this.store.get(key)! : null;
  }

  key(index: number) {
    return Array.from(this.store.keys())[index] ?? null;
  }

  removeItem(key: string) {
    this.store.delete(key);
  }

  setItem(key: string, value: string) {
    this.store.set(key, String(value));
  }
}

for (const key of ["localStorage", "sessionStorage"] as const) {
  Object.defineProperty(globalThis, key, {
    value: new MemoryStorage(),
    configurable: true,
    writable: true,
  });
}

afterEach(() => {
  cleanup();
});
