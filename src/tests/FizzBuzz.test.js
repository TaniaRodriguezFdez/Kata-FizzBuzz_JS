import FizzBuzz from "../scripts/FizzBuzz.js";


describe('FizzBuzz', () => {
    test('should return FizzBuzz if the number is divisible for 3 and 5', () => {
        //given
        let numb = 15
        const fizzBuzz = new FizzBuzz()
        //whe
        const result = fizzBuzz.isDivisible(numb)
        //then
        expect(result).toBe('FizzBuzz')
    });
    test('should return Fizz if the number is divisible for 3', () => {
        //given
        let numb = 3
        const fizzBuzz = new FizzBuzz()
        //whe
        const result = fizzBuzz.isDivisible(numb)
        //then
        expect(result).toBe('Fizz')
    });
    test('should return Buzz if the number is divisible for 5', () => {
        //given
        let numb = 5
        const fizzBuzz = new FizzBuzz()
        //whe
        const result = fizzBuzz.isDivisible(numb)
        //then
        expect(result).toBe('Buzz')
    });


    test('should return Fizz if the number is divisible or contains 3', () => {
        //given
        let numb = 33
        const fizzBuzz = new FizzBuzz()
        //whe
        const result = fizzBuzz.isDivisibleOrContains(numb)
        //then
        expect(result).toBe('Fizz')
    });
    test('should return Buzz if the number is divisible or contains 5', () => {
        //given
        let numb = 25
        const fizzBuzz = new FizzBuzz()
        //whe
        const result = fizzBuzz.isDivisibleOrContains(numb)
        //then
        expect(result).toBe('Buzz')
    });

})