// var num = [1,2,3,1,5];
// var num2=[];

// for(let i=0; i<num.length-1; i++){
//     for(let j=i+1; j<num.length-1; j++){
//         if(num[i]===num[j]){
//             console.log(num[i]);
//             // num2[i]=num[i];
//             num.splice(i,1);
            
//             console.log(num);
//         }
//     }
    
// }


var num = [1,2,3,1,5,1,1];

var set=new Set();

for(let i=0;i<num.length;i++){
    set.add(num[i]);
}
console.log(set);