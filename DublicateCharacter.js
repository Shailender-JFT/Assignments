var name="shailender yadav";
var set=new Set();

for(let i=0;i<name.length-1;i++){
    for(let j=i+1; j<name.length-1;j++){
        if(name[i]===name[j]){
            set.add(name[i]);
        //    console.log(set);
        }
    }
}

console.log(set);

// for(let i=0;i<name.length;i++){
//     set.add(name[i]);
// }
// console.log(set);