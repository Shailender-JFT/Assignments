var arr= ["c","cpp","java","python","java","c"];

var map = new Map();

var count=0;

// for(let i=0;i<arr.length-1;i++){
//     if(map.has(arr[i])){
//         count++;
//         map.set(key,count+1);
//     }
//     else{
//         map.set(arr[i],1)
//     }
// }
arr.forEach((num)=>{
    if(map.has(num)){
      count=map.get(num)+1;
      map.set(num,count);
    }
    else{
      map.set(num,1);
    }
  })
  
const arr1= Array.from(map.keys());
console.log(arr1);
console.log(map);