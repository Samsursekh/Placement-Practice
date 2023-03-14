# Assignment presention and explain
0. Login,Logout (JWT)
1. Create a Product Service
2. Create a Buyer Service
3. Create Role Base Access control(buyer can buy the product and admin can add/modify product)
4. Create a Upload Product functionality
5. Buyer Profile  Image
6. change header and footer themes based on Buyer logged in
-- Use Bootstrap Library, reactive and responsive ----- 

# TechStack
----------
React
NodejS/ExpresJs
MongoDB

---------------------------------

# Using Quicksort 
----------------------


let Input = { 9, -3, 5, 2, 6, 8, -6, 1, 3 };
// Output = [-6, -3, 1, 2, 3, 5, 6, 8, 9]


# Bubble sort

let Input = [ 9, -3, 5, 2, 6, 8, -6, 1, 3 ];
// Output = [-6, -3, 1, 2, 3, 5, 6, 8, 9]
let N=Input.length;
for(let p=0; p<N; p++){
    for(let q=0; q<N; q++){
        if(Input[q]>Input[q+1]){
           swap(Input,q, q+1)
        }
    }
}
console.log(Input.join(" "));
function swap(Input,p, q){
    [Input[p], Input[q]]= [Input[q], Input[p]]
}

// time compexity  and space complexity of this code  
tc = o(n)2
sc = o(1)

8 9 0 3 1
1. 9 8 0 3 1
2. 9 8 0 3 1
3. 9 8 3 0 1
4. 9 8 3 1 0

# secetion sort 

let Input = [ 9, -3, 5, 2, 6, 8, -6, 1, 3 ];
// // Output = [-6, -3, 1, 2, 3, 5, 6, 8, 9]
// let N=Input.length;

// for(let p=0; p<N; p++){
//     let min =p;
//     for(let q=p+1; q<N; q++){
//         if(Input[min]>Input[q]){
//           min = q;
//         }
//     }swap(Input, p, min)
// }
// console.log(Input.join(" "));
// function swap(arr,p, q){
//     [Input[p], Input[q]]= [Input[q], Input[p]]
// }

# what is the output

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); 
//   }, 1000);   // -------------------------------3 3 3 
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(function log(i) {
//     console.log(i); 
//   }, 1000);   //------------------------ undefined undefined undefined
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function log() {
//     console.log(i); 
//   }, 1000);   // -------------------------------  0 1 2
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(function log(i) {
//     console.log(i); 
//   }, 1000);   //--------------------- undefined undefined undefined
// }

# 2.what is the output

 let x;
 console.log(typeof x)  //--------------------- undefined


var x;
 console.log(typeof x)  //---------------------undefined


const x;
console.log(typeof x)  //---------------------SyntaxError: Missing initializer in const declaration 

