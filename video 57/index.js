let a=1;
for(let i=0;i<100;i++){
    console.log(a+i);
}

let obj={
    name:"abhi",
    class:"MCA",
    roll:3

}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
}