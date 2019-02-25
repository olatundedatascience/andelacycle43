function countChange (money,coins) {
    if(Array.isArray(coins)) {
        let sum = 0;
        let many =[1];
        for(var i=0;i<coins.length;i++) {
                sum += coins[i];
        }

        let max = Math.max(coins);
        for(var i=0;i<coins.length;i++) {
            if(coins[i]+max == money) {
                many.push(1);
            }
            if((max - coins[i]) + coins[i+1] == money) {
                    many.push(1);
            }
        }
       return many.length; 
    }
    else {
        return 0;
    }
}

let ik = countChange(4, [1,2]);
console.log(ik)