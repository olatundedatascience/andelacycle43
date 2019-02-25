function numberToOrdinal(n) {
    let last = (String(n))[(String(n).length -1)];
    let nlast = Number(last);
    let ord ="";
    if( n == 0) {
       return n;
    }
    else if(n == 111 )
        {
            ord = "th"
        }
        
    else if( n > 10 && n <=20 && nlast == 1) {
        ord = "th";
    }
    else if( n > 10 && n <=20 && nlast == 2) {
        ord = "th";
    }
    else if( n > 10 && n <=20 && nlast == 3) {
        ord = "th";
    }

        else if(n <= 200 && nlast == 1) {
            ord = "st"
        }
        else if(n <= 200 && nlast == 2) {
            ord ="nd";
        }
        else if(n <= 200 && nlast == 3) {
            ord = "rd";
        }
   
        else if(n <= 200 && (nlast !=3 || nlast != 2 || nlast != 1)) {
            ord = "th";
        }
        else if(n > 200 && (nlast == 1 || (nlast > 2 || nlast > 3))) {
            ord = "th";
        }
        else if(n > 200 && nlast == 2) {
            ord = "nd"
        }
        else if( n > 200 && nlast == 3) {
            ord = "rd"
        }
       
    // Finish me
    return n+ord;
  }




  let last = numberToOrdinal(111);
  console.log(last);