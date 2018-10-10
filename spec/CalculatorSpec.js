describe('calcfunction', function () {

    let calculator;
    

    beforeEach(function (){
        let calculator = new Calculator();
        
})

    it('adds x and y', function (){
        expect(calculator.addNumbers(10,5)).toBe(15);

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