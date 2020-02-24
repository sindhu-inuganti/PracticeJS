//function myFunc(a,b)
//function myFunc()
function myFunc(a=10,b=10)
{
    //var a=10, b=20;
    return (a+b)
    
}

//console.log(myFunc())

// console.log(myFunc(7))
// console.log(myFunc(4,5))
// console.log(myFunc(4,5,6))

var data= {x:15,y:15}
console.log(funcVar.call(data,4,5));//call

var arr=[2,3]
console.log(funcVar.apply(data,arr))//apply
console.log(funcVar.apply(data,[4,5]))//apply
