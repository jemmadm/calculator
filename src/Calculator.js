function Calculator(x,y){
this.x = x;
this.y = y;
}

Calculator.prototype.addNumbers = function (x,y){
    return this.x + this.y;
}


Calculator.prototype.subtractNumbers = function (x,y){
    return this.x - this.y;
}

Calculator.prototype.multiplyNumbers = function (x,y){
    return this.x * this.y;
}

Calculator.prototype.divideNumbers = function (x,y){
    return this.x / this.y;
}
