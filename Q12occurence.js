var arr=[1,2,3,1,3,5,3,1];

var map = new Map();

var count=0;

arr.forEach((num)=>{
  if(map.has(num)){
    count=map.get(num)+1;
    map.set(num,count);
  }
  else{
    map.set(num,1);
  }
})

console.log(map);