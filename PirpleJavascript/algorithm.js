function isPrime(n) {
  //  var isReal = false;
    if(n <= 1) return false;

    for(var i=2;i<n;i++) {
        if( n% i == 0) {
            return false;
        }
    }

    return true;

}

function primeFactors(n) {

    while( n % 2 == 0) {
        console.log(2)
        n = n/2;
    }

    for(var i=3;i*i < n; i = i+2) {
        if( n % i == 0) {
            console.log(i);
            n = n / i;
        }
    }

    if( n > 2 ) {
        
    }

}


let fn = isPrime(4);
console.log(fn);