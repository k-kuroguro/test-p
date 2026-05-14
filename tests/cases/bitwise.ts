import { assertEqual } from '../assert';

export function runBitwiseCase(): void {
   const a = 5;

   assertEqual(a & 3, 1, 'band');
   assertEqual(a | 8, 13, 'bor');
   assertEqual(a ^ 6, 3, 'bxor');
   assertEqual(a << 2, 20, 'lshift');
   assertEqual(a >> 1, 2, 'arshift');
   assertEqual(a >>> 1, 2, 'rshift');
   assertEqual(~a, 4294967290, 'bnot');
   assertEqual((a >>> 1) & (a << 1), 2, 'combination');
}
