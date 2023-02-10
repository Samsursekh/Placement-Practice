// 1] find the largest element in an array 

//approach 1 ==>

// let arr = [8,3,7,4,9,3,6,1]

// let max =0;
// for(let p=0; p<arr.length; p++){
//     if(max < arr[p]){
//         max = arr[p]
//     }
// }
// console.log(max, "max")  //p

//approach 2 ==> 

// var array = [3 , 6, 2, 56, 32, 5],
// largest = array.sort((a,b)=>a-b).reverse[0];
// console.log(largest)

// //approach 3 ==> 

// let larg = array.sort((a,b)=>a-b)[array.length - 1];
// console.log(larg)


//find the minimum element in an array 

//1] approach 1 ==>

// const arr = [14, 58, 20, 77, 66, 82, 42, 67, 42, 4]
// let min = Math.min(...arr)
// console.log(min)

// //2] approach 2 ==> 

// let small = arr.sort((a,b) => a-b)[0]
// console.log(small)

// // 3] approach 3 ==>

// const mini = arr.reduce((a,b) => Math.min(a,b));
// console.log(mini)


// sort the str in alphbetically order ==> 

// approach 1 ==> 

// let array = ["priya", "priti","ganu", "vaishu", "ayna", "riya"]

// let str = array.sort((a,b) => {
//     let nameA = a.toLowerCase();
//     let nameB = b.toLowerCase();

//     if(nameA < nameB){
//         return -1;
//     }else if(nameA >nameB){
//         return 1;
//     }
// })
// console.log(str)

// Approach 2 

// let array = ["priya", "priti","ganu", "vaishu", "ayna", "riya"]
// let str = array.sort((a,b) => {
//     if(a < b){
//         return -1;
//     }else if(a>b){
//         return 1;
//     }
// })
// console.log(str)

