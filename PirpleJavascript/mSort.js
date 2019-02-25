function mySort(n) {
    let finalSortO =[];
    let finalSortE =[];
    if(Array.isArray(n)) {
        for(var i=0;i<n.length;i++) {
            if(typeof(n[i]) !== 'string') {
                let current = n[i];
                let nk =0;
                if(!Number.isInteger(current)) {
                    nk = Math.floor(current);
                }
                else {
                    nk =current;
                }

                if(nk % 2 == 0) {
                    finalSortE.push(nk);
                }
                else {
                    if(nk % 2 == 1) {
                        finalSortO.push(nk)
                    }
                }
            }
        }
        finalSortE = finalSortE.sort(sortMe);
        finalSortO = finalSortO.sort(sortMe);
        return finalSortO.concat(finalSortE);
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
90, 45, 66, 'bye', 100.5
let ik = mySort([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]);
//let ik = mySort([ 90, 45, 66, 'bye', 100.5 ]);
console.log(ik);