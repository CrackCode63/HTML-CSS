let random=Math.random()
// console.log(random)
let a = prompt("enter the number:")
let c = prompt("enter the operator:")
let b = prompt("enter the number:")

let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if(random>0.1){
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c=obj[c]
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)

}

