let num = Math.floor(Math.random()*10);

console.log(num);
function random(){
    if(num%2===0){
        console.log("even")
    }
    else{
        console.log("odd");
    }
}

random();