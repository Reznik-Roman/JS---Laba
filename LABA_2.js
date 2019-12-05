// LABA #2
var z = 1;
function y() {
    z = 10;
    return ;
    function z() {}
}
y();
console.log(z);

const a = 5;
function inc(n) {
    return --n;
}

const b = inc(a);
console.dir({a,b});


const obj = {
    n : 5
};

function inc2(Num) {
    return Num.n--;
}

inc2(obj);
console.dir({obj});

let array = [true, 'hello', 5, 1.2, -200, false, false];

let types = {
    number: 0,
    string: 0,
    boolean: 0
};

let emptyTypes = {};

for (let item of array) {
    types[typeof item]++;
}

for (let item of array) {
    emptyTypes[typeof item] = 0;
}


console.log(types);

console.log(emptyTypes);