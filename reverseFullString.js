console.log('Script is running');

var str = "shailender yadav";

var m= str.split(" ");
// console.log(m);
var ans=[];
// var input = process.stdin;

// str1=str.split('');
// console.log(str1);
// console.log(str1[str1.length-1]);

function reverse(str){
    var str1="";
    for(let i=str.length-1; i>=0; i--){
        str1+=str.charAt(i);
        // str1+=str[i];
    }
    return str1;
}

for(let i=0;i<m.length;i++){
    ans[i]=reverse(m[i]);   
    // console.log(ans);
}

console.log(ans);
