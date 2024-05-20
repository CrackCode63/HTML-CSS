let a=[1,99,65,44]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
    
}

a.forEach((value,index,arr) => {
    console.log(arr)
});