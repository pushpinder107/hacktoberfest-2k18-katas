export const approximately = margin => {
   if (typeof margin !== 'number' || margin < 0 || margin === undefined || Number.isNaN(margin)) {
     throw 'Incorrect value for margin';
   }
  return (lhs, rhs) => {
   return Math.abs(lhs - rhs) <= margin;
 }
};

