module.exports = function toReadable (number) {
   let units = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    let tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let secondTen =["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];

    let arrNumberInWords = [];

    let arrOfDigits = number.toString();
    let amountOfDigits = arrOfDigits.length;

    let i = 0;

    if(number == 0){
        return "zero";
    }

    if (amountOfDigits == 3) {

        arrNumberInWords.push(units[+arrOfDigits[i]] + " hundred");
        i++; 
    }

    if (amountOfDigits >=2 ) {
        if (+arrOfDigits[i] !== 1 && +arrOfDigits[i] !== 0) {
           arrNumberInWords.push(tens[+arrOfDigits[i]]);
           
        } else if (+arrOfDigits[i] == 1){ 
           i++;
          
            arrNumberInWords.push(secondTen[+arrOfDigits[i]]);
             return arrNumberInWords.join(" ");
        }
        i++;
    }
    if (+arrOfDigits[i] > 0) {
       arrNumberInWords.push(units[+arrOfDigits[i]]); 
    }
     
      return arrNumberInWords.join(" ");
}
