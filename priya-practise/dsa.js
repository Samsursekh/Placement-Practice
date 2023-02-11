// // 1] find the largest element in an array 

// //approach 1 ==>

// let arr = [8,3,7,4,9,3,6,1]

// let max =0;
// for(let p=0; p<arr.length; p++){
//     if(max < arr[p]){
//         max = arr[p]
//     }
// }
// console.log(max, "max")  //p

// //approach 2 ==> 

// var array = [3 , 6, 2, 56, 32, 5],
//  lar = array.sort((a,b)=>a-b).reverse()[0];
// console.log(lar)

// // //approach 3 ==> 

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

// const funct2 = () => {
//     setTimeout(() => {
//         console.log("func2 is starting")
//     }, 3000);
// }

// const func1 = () => {
//     console.log('func1 is starting')
//     funct2();
//     console.log("func1 is ending");
// }

// func1();


// greddy 

// fractonal knapsack problem 




let arr = [3,7,1,2,5,9,6]
// let max =0;

// for(let p=0; p<arr.length; p++){
//     if(arr[p]> max){
//         max= arr[p]
//     } 
// }
// console.log(max)
// let arrh = [3,7,1,2,5,9,6]
// let largest = arrh.sort((a,b) => a-b).reverse()[0]
// console.log(largest)


// let mini = Math.min(...arrh)
//  console.log(mini)
 
// let maxi = Math.max(...arrh)
// console.log(maxi)

// let max =-Infinity
// for(let p=0; p<arr.length; p++){
//   if(arr[p]>max){
//   max=arr[p]
// }
// }
// console.log(max)

// let min =Infinity
// for(let p=0; p<arr.length; p++){
//   if(arr[p]<min){
//   min=arr[p]
// }
// }
// console.log(min)


// 1] what is dp 

// DP is a method for solving problems by breaking them down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solutions. The next time the same subproblem occurs, instead of recomputing its solution, you simply look up the previously computed solution.


// what is base case ?

// Recursive functions are functions that calls itself. It is always made up of 2 portions, the base case and the recursive case. The base case is the condition to stop the recursion. The recursive case is the part where the function calls on itself.


//2 ] what is recurssion 
 
// the function call itself is called recurssion 

//Techniques to solve Dynamic Programming Problems:
// type of approaches ==>

// 1] Top-Down(Memoization):
// uses memoization 
// In this approach we move top to bottom of a program 
// here function is the basic unit 
// this approach is used when we have a good idea of final result but we have very less detail about each section.
//this approach mainly focus on how the task done in procedure 


// 2] Bottom-Up(Dynamic Programming):
// uses Tabulation
 // in this approach we have bottom to top of our program 
 // here data object and classs is basic unit 
 //this approach is used when we have enough idea about each section/ module program but have less idea of overall program 
 //this approach mainly focus on how data secure 

 // writing recurssive code for array problems 

 function findSum(a,n){
    if(n==0)
    return 0;
    else
    return findSum(a, n-1)+ a[n-1]
 }