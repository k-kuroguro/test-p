export function assertEqual<T>(actual: T, expected: T, label: string): void {
   if (actual !== expected) {
      throw new Error(`${label}: expected=${expected}, actual=${actual}`);
   }
}
