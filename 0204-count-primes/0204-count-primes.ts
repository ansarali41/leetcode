function countPrimes(n: number): number {
    const isPrimes = new Array(n).fill(true);

    //0, and 1 is not prime so
    isPrimes[0] = false;
    isPrimes[1] = false;
    // now check primes from 2 to n of sqrt(n)
    for (let p = 2; p * p <= n; p++) {
        if (isPrimes[p]) {
            //if first one is prime then is multiple is not prime so make multiple of it not prime
            for (let multiple = p * p; multiple <= n; multiple += p) {
                isPrimes[multiple] = false;
            }
        }
    }
    console.log(isPrimes)
    return isPrimes.filter(p => p === true).length;
};