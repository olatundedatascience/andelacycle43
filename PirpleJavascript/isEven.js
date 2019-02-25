const number_game = (x, y) => {
        let ret =[];
        if( x > y) {
            for(var i=y;i<x;i++) {
                if(i == 0) {
                    continue;
                }
                else if(i % 2 == 0) {
                    ret.push(i);
                }
            }
        }
        else {
            for(var i=y;i<x;i++) {
                if(i == 0) {
                    continue;
                }
                else if(i % 2 == 1) {
                    ret.push(i);
                }
            } 
        }
        
        return Array.from(ret);
}

let ik = number_game(0, 0);
console.log(ik);