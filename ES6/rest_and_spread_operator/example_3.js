const MathLibrary = {
    calculateProduct(...rest) {
        console.log('Use the multiply method instead');
        return this.multiply(...rest);
    },
    multiply(a, b) {
        return a * b;
    }
};