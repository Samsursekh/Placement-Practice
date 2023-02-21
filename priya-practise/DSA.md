# what is linked list?


# Generate a random number?

# Assign random numbers to the name given in the array.
- array = [priya, priti, vaishu]
- output = [priya012, priti321, vaishu453]
#  find the 2nd largest number in the array.
# rotate the matrix in clockwise direction.
# Balanced parentheses problem 
# Count the frequency of a given character in the given string.
# Explain the concept behind Circular queue

# # print the largest number present in an array?==>
 let arr = [1,5,2,7,9,0]
 let max = 0;
 for(let p=0; p<arr.length; p++){
    if(arr[p]>max){
        max=arr[p]
    }
 }
 console.log(max, "maxnumber")

# approach 2 => 
let arr = [1,0,4,9,2,7,4,7]
let maxi = Math.max(...arr)
console.log(maxi)

# approach 3 => 
 let arrh = [3,7,1,2,5,9,6]
 let largest = arrh.sort((a,b) => a-b).reverse()[1]
 console.log(largest) //7

 
 # print smallest element in array ==>
 let arr = [1,5,2,7,9,0]
 let min = 0
 for(let p=0; p<arr.length; p++){
    if(arr[p]<min){
        min=arr[p]
    }
 }
 console.log(min, "minnumber")

 # approach 2 =>
 let arr = [1,0,4,9,2,7,4,7]
let mini = Math.min(...arr)
 console.log(mini)
 
 
 
# 6] bubble sort  =>

- Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order.
- Space Complexity: O(1)
- time complexity: O(n2)

let arr = [3,6,1,9,4,0,35,3,7,4,4,3,2]
let N=arr.length;
for(let p=0; p<N; p++){
    for(let q=0; q<N; q++){
        if(arr[q]>arr[q+1]){
           swap(arr,q, q+1)
        }
    }
}
console.log(arr.join(" ));
function swap(arr,p, q){
    [arr[p], arr[q]]= [arr[q], arr[p]]
}


# 7] selection sort =>

- Selection sort is a sorting algorithm that selects the smallest element from an unsorted list in each iteration and places that element at the beginning of the unsorted list.
- Space Complexity: O(1)
- time complexity: O(n2)

let arr = [3,6,1,9,4,0,35,3,7,4,4,3,2]
let N=arr.length;
for(let p=0; p<N; p++){
    let min =p;
    for(let q=p+1; q<N; q++){
        if(arr[min]>arr[q]){
            min = q; 
        }
    }swap(arr,p, min)
}
console.log(arr.join(" "))
function swap(arr,p, q){
    [arr[p], arr[q]]= [arr[q], arr[p]]
}



 # 8] print duplicate element /

# approach 1 =>

 let arr = ["apple", "mango", "apple", 
            "orange", "mango", "mango"]
let N= arr.length;
let obj ={};
for(let p=0; p<N; p++){
    if(!obj[arr[p]]){
        obj[arr[p]]=1;
    }else{
        obj[arr[p]]++;
    }
}
// console.log(obj)
let arr2=[];
for(let k in obj){
    if(obj[k]>1){
       arr2.push(k);
}
}
 console.log(arr2.join(" "))


# 9]  remove duplicate elements 

 # approach1 =>
let arr = [1,7,6,4,5,6,7,1,0]
let newarr= new Set(arr)
console.log(...newarr)

# approach2 =>

let arr = [1,7,6,4,5,6,7,1,0]
let N= arr.length;
let obj ={};
for(let p=0; p<N; p++){
    if(!obj[arr[p]]){
        obj[arr[p]]=1;
    }else{
        obj[arr[p]]++;
    }
}
// console.log(obj)
for(let k in obj){
    console.log(k)
}

# Find the Vowels  and Consonent => 

let vowels="aeiou";
let str = "priyanka";
let vow=[];
let consonent =[];

for(let p=0; p<str.length; p++){
    if(vowels.includes(str[p])){
        vow=vow+str[p];
    }else{
        consonent=consonent+str[p];
    }
}

tc => O(n)
sp => O(n)

# Approach 2 => 

console.log(vow, consonent);
console.log(vow, vow.length);


let vowels="aeiou";
let str = "priyanka";
const vowels = str.match(/[aeiou]/gi); 

const consonants = str.match(/[^aeiou]/gi); 

console.log(vowels, consonent);

tc => O(n)
sp => O(n)

# missing number using without sort

let input= [0,4,3,1]
let N=input.length

var total = N*(N+1)/2
let sum=0;
for(let p=0; p<input.length; p++){
    sum=sum+input[p]
}
console.log(total-sum)  //2

<!-- Time Complexity: O(N) where N is the size of the array.
Space Complexity: O(1) because no extra space is needed. -->

#   merge them and make one object => 

# approach 1 ==> 

let a = {6: 1, 3: 1, 9: 1, 2: 1};
let b = {4: 1, 8: 1, 6: 1, 1: 1};
let c = {...a, ...b}; // merge a and b into c
console.log(c)

# approach 2 ==> 
let a = {6:1,3:1,9:1,2:1};
let b = {1:1,4:1,7:1,8:1};

let merged ={}

for(let key in a){
    merged[key] =a[key]
}
for(let key in b){
    merged[key] =b[key]
}
console.log(merged)

// Output: { '1': 1, '2': 1, '3': 1, '4': 1, '6': 1, '7': 1, '8': 1, '9': 1 }


# Find the longest string => 
# approach 1 =>
const arr = ["apple", "banana", "orange", "pear", "kiwi"];
 let bag ="";
 for(let p=0; p<arr.length; p++){
     if(arr[p].length>bag.length){
         bag = arr[p]
     }
 }
 console.log(bag) //banana

# approach 2 => 
const strings = ["apple", "banana", "cherry", "date", "elderberry"];
let longest = strings.reduce((accl, curr) => curr.length>accl.length ? curr:accl)
console.log(longest)
