import { assertEqual } from '../assert';

export function runContinueCase(): void {
   let loopSum = 0;

   for (let i = 0; i < 5; i++) {
      if (i % 2 === 0) {
         continue;
      }
      loopSum += i;
   }

   assertEqual(loopSum, 4, 'continue statement');
}
