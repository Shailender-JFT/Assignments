var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,20,21,22,23,24,25,26,27,28,29,0];
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