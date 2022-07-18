let num = Math.floor(Math.random()*10);
console.log(num);

function randomPrime(){
    for(let i=2;i<num/2;i++){
        if(num%i===0){
            console.log("not prime");
            return;
        }
    }
    console.log("prime");
}

randomPrime();
