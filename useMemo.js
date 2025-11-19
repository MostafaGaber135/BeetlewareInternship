const memoSum = () => {
    const casheData = {}
    return function (fn, x) {
        if (casheData[x] !== undefined) {
            console.log("from cashe---", x)
            // value found
            return casheData[x]
        }
        // calculate new value
        console.log("from new calculate---", x)
        const result = fn(x);
        casheData[x] = result;
        return result;
    }
}

const sum = memoSum()

function sumX(x) {
    return x + 10;
}
console.log(sum(sumX, 3))
console.log(sum(sumX, 4))
console.log(sum(sumX, 3))









// ------------------------------------------------


