"use strict"

//1-
const bills=[22,295,176,440,37,105,10,1100,86,52]
console.log(bills)
//2-
let tips=[]
let totals=[]
//3-
function calcTip (bill){
 const tip= (bill>=50 && bill <=300)   ?  bill*0.15:  bill*0.2;
 return  tip
}

for (let i= 0;i < bills.length;i++) {
    //1-
    
//   tips [ i ] = calcTip(bills[i])
//     totals[i] =bills[i]+calcTip(bills[i])   
//2-
tips.push( calcTip(bills[i]))
totals.push(bills[i]+tips[i] )
}
   console.log(tips)
      console.log(totals)

    //4-
    const calcAverage = arr => {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {

            sum += arr[i]
  }
  return sum / arr.length;


    }

console.log(calcAverage(totals))