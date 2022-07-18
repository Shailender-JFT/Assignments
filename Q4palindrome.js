var num = 1991;
var temp = num;
var sum=0;
function palindrome(){
while(num>0){
    var rem = num % 10;
    sum = (sum*10)+rem;
    num = Math.floor(num / 10);
}
console.log(sum);

if(temp===sum){
    console.log("palindrome");
}
else{
    console.log("not palindrome");
}
}

palindrome();