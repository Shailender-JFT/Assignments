const map = new Map([["developr", 5], ["designer", 4], ["qa",2], ["manager",1]]);
// var set = new Set();
console.log(map.values());

// var arr=[];

// for(let i=0;i<=map.values();i++){
//     console.log(map[i]);
//    arr+=map.keys(i);
// }

// console.log(arr);
var arr1 =[];


map.forEach(function(value,key){
   var arr2=[];
   // for(let i=0;i<value;i++){
   //    // arr2+=map.keys(i);
   //    arr1.push(key);
   // }
   // // arr1.push(arr2);
   // // console.log(arr2);

   for(let i=0;i<value;i++)   arr2.push(key);
   arr1.push(arr2);
})
console.log(arr1);
// console.log(JSON.stringify(arr1));

// map.forEach((val,key)=>{

//    arr=[...arr,Array(val).fill(key)];
// });

// console.log(arr);

// let arr1=[1,2,3];
// arr1.push(2);
// console.log(arr1);
