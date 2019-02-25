function mySort(listOfNumbers) {
    let finalSortOdd =[];
    let finalSortEven =[];
    if(Array.isArray(listOfNumbers)) {
            for(var i=0;i<=listOfNumbers.length;i++) {
                if(typeof(listOfNumbers[i]) !== 'string') {
                    if(!Number.isInteger(listOfNumbers[i])) {
                        let ijk = Math.floor(listOfNumbers[i]);
                        if(ijk % 2 == 0) {
                            finalSortEven.push(ijk)
                        }
                        else {
                            finalSortOdd.push(ijk);
                        }
                    }
        else {
            if(listOfNumbers[i] % 2 == 1) {
                let curent = listOfNumbers[i] ;
                   if(!Number.isInteger(curent)) {
                        //finalSortOdd.push(curent)
                        curent = curent;

                   }
                   else{
                      //  finalSortOdd.push(Math.ceil(curent));
                      curent = Math.ceil(curent);
                   }
                   finalSortOdd.push(curent);
                }
                else if(listOfNumbers[i] % 2 == 0) {
                    let curent = listOfNumbers[i] ;
                    if(!Number.isInteger(curent)) {
                         //finalSortOdd.push(curent)
                         curent = curent;
 
                    }
                    else{
                       //  finalSortOdd.push(Math.ceil(curent));
                       curent = Math.ceil(curent);
                    }
                    finalSortEven.push(curent);
                }
            }
        }

            }

            return (finalSortOdd.concat(finalSortEven)).sort(sortMe);
    }
    else {
        return false;
    }
}


function sortMe(a, b) {
    if(a < b) {
        return -1
    }
    else if(a > b ){
        return 1;
    }
    else {
        return 0;
    }
}
let ik = mySort([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
console.log(ik);