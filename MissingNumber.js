var arr=[1,2,3,4,5,6,7,8,9,10,11,12,0,14,15];
var arr1=[];

for(let i=0;i<arr.length;i++){
    // console.log(arr[i])
    if(arr[i]===0){
        arr[i]=arr[i-1]+1;
        arr1.push(arr[i]);
    }
    else{
        arr1.push(arr[i]);
    }
}

console.log(arr1);