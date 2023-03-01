# what is linked list?
- A linked list is a data structure consisting of a sequence of nodes, where each node stores a reference to an object and a reference to the next node in the list. Each node in a linked list is linked to the next node through a pointer, thus forming a chain of nodes. The first node in the list is called the head, and the last node is called the tail. Linked lists are commonly used to implement other data structures, such as stacks, queues, and hash tables. They are also used to represent sparse data structures and to implement dynamic memory allocation.


# Generate a random number?
- var randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);

2] ex =>
- function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Example usage
const randomNum = generateRandomNumber(1, 10);
console.log(randomNum);

# Assign random numbers to the name given in the array.
- array = [priya, priti, vaishu]
- output = [priya012, priti321, vaishu453]

- ==> const input = ["priya", "priti", "vaishu"];
const op = input.map((e) => e + Math.floor(Math.random() * 1000).toString())
console.log(op)

#  find the 2nd largest number in the array.

let array = [2,5,3,8,9,4,6,4,8];
let largest = -Infinity;
let secondLargest = -Infinity;

for(let i=0; i<array.length; i++){
  if(array[i] > largest){
    secondLargest = largest;
    largest = array[i];
  } else if (array[i] > secondLargest && array[i] !== largest){
    secondLargest = array[i];
  }
}

console.log("Second largest number is: ", secondLargest);


# approach 2 => 
let array = [2,5,3,8,9,4,6,4,8];
array.sort(function(a, b) { return b - a; });
console.log("Second largest number:", array[1]);

# rotate the matrix in clockwise direction.

function rotateMatrix(matrix) {
  const n = matrix.length;
  // transpose the matrix
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  // reverse the rows
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}

# appraoch 2 ==> 

const matrix = [  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
const rotated = rotateMatrix(matrix);
console.log(rotated); // [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

# Balanced parentheses problem 

function isBalanced(str) {
  let stack = [];
  let pairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (pairs[char]) {
      // If the character is an opening bracket, push it onto the stack
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      // If the character is a closing bracket, pop the top of the stack and check if it's a matching opening bracket
      let last = stack.pop();

      if (pairs[last] !== char) {
        // If the last opening bracket doesn't match the current closing bracket, the string is unbalanced
        return false;
      }
    }
  }

  // If the stack is not empty after iterating through the string, the string is unbalanced
  return stack.length === 0;
}

// Test cases
console.log(isBalanced("")); // true
console.log(isBalanced("()")); // true
console.log(isBalanced("()[]{}")); // true
console.log(isBalanced("(]")); // false
console.log(isBalanced("([)]")); // false
console.log(isBalanced("{[]}")); // true


# approach  2 => 

function isBalanced(str) {
  const stack = [];
  const open = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  const closed = {
    ")": true,
    "]": true,
    "}": true,
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (open[char]) {
      stack.push(char);
    } else if (closed[char]) {
      if (open[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Example usage:
console.log(isBalanced("([])")); // true
console.log(isBalanced("([)]")); // false
console.log(isBalanced("()")); // true
console.log(isBalanced("(((((())))))")); // true

# Count the frequency of a given character in the given string.

function countChar(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count++;
    }
  }
  return count;
}

// Example usage
countChar("hello world", "l"); // Output: 3

# approach  2 => 

function countChar(str, char) {
  return str.split("").filter(c => c === char).length;
}

// Example usage
countChar("hello world", "l"); // Output: 3

# approach 3 => 

function countChar(str, char) {
  return str.match(new RegExp(char, "g")).length;
}

// Example usage
countChar("hello world", "l"); // Output: 3



# Explain the concept behind Circular queue
A circular queue, also known as a ring buffer, is a data structure that operates as a circular buffer, where the last element of the queue is connected to the first element of the queue, forming a circular structure.

In a circular queue, the elements are added at the rear end and removed from the front end. When the front and rear pointers meet, it means that the queue is full, even though there might be empty spaces in between the front and rear pointers. To implement a circular queue, we use an array or a linked list and maintain two pointers, namely the front and rear pointers. The front pointer points to the first element of the queue, while the rear pointer points to the last element of the queue.

When an element is added to the queue, it is added at the position pointed to by the rear pointer. After adding the element, the rear pointer is incremented to point to the next available position. Similarly, when an element is removed from the queue, it is removed from the position pointed to by the front pointer. After removing the element, the front pointer is incremented to point to the next available position.

One of the advantages of a circular queue is that it allows us to reuse the empty spaces in the queue when the rear pointer meets the front pointer, making it more efficient in terms of memory usage compared to a simple queue. Another advantage is that it can be used in situations where we need to process a stream of data continuously, such as in real-time systems or multimedia applications.

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


# arrange alphabetically ==> 

let array = ["priya", "priti","ganu", "vaishu", "ayna", "riya"]
let str = array.sort((a,b) => {
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }
})
console.log(str)

# check palindrome number ==> 
function checkPalindrome(N, str) {
    
   let bag="";
   for(let p=N-1; p>=0; p--){
       bag=bag+str[p];
   }
   
   if(str==bag){
       console.log("Yes");
   }else{
       console.log("No");
   }
   
//   console.log(bag);
}


# print the number 100 to 10000 only palindrome

for(let p=100; p<=10000; p++){
    const str = p.toString();
   if(str ==str.split("").reverse().join("")){
    console.log(p)
   };
}

# approach 2

function print(p){
    let str = p+"";
    return str.split("").reverse().join("");
}

for(let p=100; p<=1000; p++){
    if(print(p)){
        console.log(p)
    }
}




