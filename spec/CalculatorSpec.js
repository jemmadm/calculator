describe('calcfunction', function () {

    let calculator;
    

    beforeEach(function (){
        calculator = new Calculator(10, 5);
        
})

    it('adds x and y', function (){
        expect(calculator.addNumbers(90,5)).toBe(95);

    })

    it('subtracts x and y', function (){
        expect(calculator.subtractNumbers(10,5)).toBe(5);

    })

    it('multiples x and y', function (){
        expect(calculator.multiplyNumbers(10,5)).toBe(50);

    })


    it('divides x and y', function (){
        expect(calculator.divideNumbers(10,5)).toBe(2);

    })



});