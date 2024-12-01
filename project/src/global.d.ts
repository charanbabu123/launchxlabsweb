export {};

declare global {
  interface Global {
    structuredClone: <T>(obj: T) => T;
  }

  interface globalThis extends Global {}
}
