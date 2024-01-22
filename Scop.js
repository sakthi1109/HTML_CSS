// Global Scope

for(var i=0;i<5;i++)
{
    console.log(i)
}
console.log(i)

//Local Scope  -> Temporarily holds the value till the block ends

var a=10
console.log(a)
{
    const a=100
    let b=200
    console.log(a)
    console.log(b)
}
console.log(a)
