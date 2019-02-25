function power(x, n) {
    let result = 1;
    if(x == 1) {
        return 1;
    }
    else {
        for(var i=1;i<=n;i++) {
            result *=x;
        }
    }

    return result;
}

let ik = power(3, 3);
console.log(ik);