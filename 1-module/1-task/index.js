function factorial(n) {
  //  n! = n * (n - 1) * (n - 2) * ...*1
  let res = 0;
  for (let i = 0; i <= n; i++) {
    if (i === 1 || i === 0) {
      res = 1;
    } else {
      res = res * i;
    }
  }
  return res;
}
