function digitize(n) {
    const digit =[];
    if(typeof(n) !== 'number') {
        return false;
    }
    else {
        let ik = String(n);
        let ki = ik.split('');
        for(var i=0;i<ki.length;i++) {
            digit.push(Number(ki[i]));
        }
    }

    return digit;
}

const ik = digitize(123);
console.log(ik)