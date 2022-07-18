var arr =[11,21,24,45,13];

var max1=0;
var max2=0;
var max3=0;

for(let i=0; i<arr.length;i++){
    if(arr[i]>max1){
        max1=arr[i];
        console.log(max1);
    }
}

for(let i=0; i<arr.length;i++){
    if(arr[i]>max2 && arr[i]<max1){
        max2=arr[i];
        console.log(max2);
    }
}

for(let i=0; i<arr.length;i++){
    if(arr[i]>max3 && arr[i]<max2){
        max3=arr[i];
        console.log(max3);
    }
}


console.log("third largest ",max3);

// for(let i=0;i<arr.length-1;i++){
//     // for(let j=i+1; j<arr.length-1;j++){
//           if(arr[i]>max1){
//             max1=arr[i];
//             if(max1>max2 && arr[i]>max2){
//                 max2=max1;
//                 if(max1>max2 && max2>max3 && arr[i]){
//                     max3=max2;
//                 }
//             }
//           }
//     // }
// }