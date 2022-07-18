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
  
let arr1= Array.from(map);

arr1.sort((a,b)=>{
    if(a[1]>b[1]){
      return -1;
    }else if(a[1]<b[1]){
      return 1;
    }
    else{
      return 0;
    }
})

console.log(arr1);
// console.log(map);