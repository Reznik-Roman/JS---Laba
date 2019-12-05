// LABA #1
var name = "Roman";
const date = 2000;
function show(name){
    console.log("Hello, ",name);
}
show("Roman");
show( name );
show(date);

console.log("");
var st=15
do {
    if ( st % 2 == 1 )console.log(st);
    st++;
}while ( st <= 30 )

console.log("");
function range(start,end)
{
    do
    {
        if ( start % 2 == 1 )console.log(start);
        start++;
    }while ( start <= end )
}
range(15,30)

console.log("");
function average(a,b){
    return ( a + b ) / 2;
}
function square(x){
    return x * x ;
}
function cube(x){
    return x * x * x ;
}

for(var i = 0; i <= 10; i++){
    console.log( average( square(i) , cube(i) ));
}

console.log("");
var log = "REZ"
const object1 = {name: "Roman"};
var  object2 = {name: "Reznik"};
console.log(object1);
console.log(object2);
object1.name = "Romario";
object2.name = "Karlitos";
console.log(object1);
console.log(object2);
var object3 = {log};
object1.name = object3;
object2 = object3;
console.log(object1);
console.log(object2);

function createUser(name, city) {
    var user = {name, city  };
    return user;

}
console.log(createUser("Roman", "Vinnitsa"))

console.log("");
var array = [ {name: "Roman Reznik", phone: "+380976666666"},
    {name: "Zloy Ded", phone: "+380976669996"},
    {name: "Black Man", phone: "+380971111111"}];
function findPhoneByName(name) {
    for (var i=0; i<array.length;i++) {

        if (name === array[i].name)
            var rez = array[i].phone;
    }
    return rez
}
console.log(findPhoneByName("Zloy Ded"));
