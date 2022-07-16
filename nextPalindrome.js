function palindrome(num){
    var temp = num;
    var sum=0;

while(num>0){
    var rem = num % 10;
    sum = (sum*10)+rem;
    num = Math.floor(num / 10);
}
// console.log(sum);

if(temp===sum){
    // console.log("palindrome");
    return true;
}
else{
    // console.log("not palindrome");
    return false;
}

}

// palindrome(num);

// while(palindrome(num)){
    
//     }

    for(let i=1992; true ;i++){
        if(palindrome(i)){
            console.log(i)
            break;
        }
    }