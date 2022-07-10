export default class FizzBuzz {
    constructor(){}

    isDivisible(numb){
        if(numb % 3 === 0 && numb % 5 === 0) return 'FizzBuzz';
       
        if(numb % 3 === 0) return 'Fizz';
        
        if(numb % 5 === 0) return 'Buzz';
    
    }
    isDivisibleOrContains(numb){
        if(numb % 3 === 0 || numb === 3) return 'Fizz';
        
        if(numb % 5 === 0 || numb === 0)return 'Buzz';
    }
}