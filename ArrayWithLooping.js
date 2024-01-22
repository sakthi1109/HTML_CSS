//EX 01
/*
arr=[10,20,30,40]
console.log(arr.length)

for(i=0;i<arr.length;i++)
{
    console.log(arr[i])
}*/

//Ex 04

/* arr=[10,"Sakthi",'%',"%$%",true]

for(i=0;i<arr.length;W++)
{
    console.log(arr[i])
}


arr=[10,"Sakthi",'%',"%$%",true]
for(i=0;i<arr.length;i++)
{
    console.log(arr[i])
}*/


// For in Loop

var array = [1, 2, 3, 4, 5];

for ( var index in array) {
    console.log(array[index]);
}

console.log("\n")

//For each Loop
var array = [1, 2, 3, 4, 5];

for (var value of array) {
    console.log(value);           // for of  and for each to access directly by using value
}

// For of Loop

console.log("\n")

var array = [1, 2, 3, 4, 5];

array.forEach(
    function(element) {
    console.log(element);
});

