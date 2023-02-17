# introduce yourself =>

- My name is Priyanka Phulmante.  I’m from Latur, Maharashtra. But currently, I have to live in Pune. currently, I am pursuing a full-stack web development course at Masai School and I am also pursuing PGDM in Information technology from MIT-School of Management Pune. I completed my BSc in computer science from Dayanand Science College, Latur. talking g about my hobbies In my free time, I listning a songs.

# Tech you have used 
- Since I am masai School student so I have done many projects In my professional trainning course
- I have worked on this project i used technical stack like html css javascript React, redux , node.js, express.js, mongodb 
I have good knowledge frontend and backend technologies

# 1] Fizz-Bizz problem => 


// divisible by 3 => Fizz
// divisible by 5 => Buzz
// divisible by both 3 and 5 => FizzBuzz
// not divisible by both => just return back the number

function fizzBuzz(input){
  if(input%3==0){
      console.log("Fizz");
  }else if(input%5==0){
       console.log("Buzz");
  }else if(input%3==0 && input%5==0){
       console.log("FizzBuzz")
  }
}
fizzBuzz(3)

# 2] find vowels & constants from string

# approach 1 => 

let str = "priyankaparmeshwarphulmante";
const vowels = str.match(/[aeiou]/gi); 
const consonants = str.match(/[^aeiou]/gi); 

# approach 2 => 

console.log(vowels.join(" "));
console.log(consonants.join(" "));
let str = "priyankaparmeshwarphulmante";
let vowels="aeiou";
let vow=[];
let consonent =[];

for(let p=0; p<str.length; p++){
    if(vowels.includes(str[p])){
        vow=vow+str[p];
    }else{
        consonent=consonent+str[p];
    }
}
console.log(vow, consonent)

# 3] function showNumbers

 function showNumbers(limit) {
  for (p = 0; p <= limit; p++) {
    console.log(`${p} ${p % 2 === 0 ? '"even"' : '"odd"'}`)
  }
}

console.log(showNumbers(5))

# 4]  how to find factorial of a number 

function factorial(n){
    if(n==0){
        return 1;
    }else{
        return n*factorial(n-1)
    }
}
console.log(factorial(5)) //120

# 5] reverse string => 
# approach 1=>

function reversestr(str){
    console.log(str.split("").reverse().join(""))
}
reversestr("PriyaReddy")

# approach 2 => 
function reverse(str){
    let bag="";
    for(let p=str.length-1; p>=0; p--){
        bag+=str[p];
    }console.log(bag);
}
reverse("priyaReddy")

# 6]  Status by like =>

// You are 'popular' if 50 or more likes
// You are 'regular' is 49 of less likes
// above popular limit return fan-points
// for each 5 likes you get 1 point
// 51 - 55 = 1 fan-point
// 56 - 60 = 2 fan-points
// You are a 'Star' if 10 or more fan-points
// tip: may use Math.ceil & start by writing test cases

function statusByLike(likes) {
  let starstatus="";
  let fanpoints=0;
  
  if(likes>50){
      fanpoints=Math.ceil((likes-50)/5)
  }
  if(likes<50){
      starstatus="regular"
  }else if(likes>=50 && fanpoints>=10){
      starstatus="star"
  }else{
      starstatus = "poopular"
  }
  return `You are a ${starstatus} user`
}

// // test cases
console.log(statusByLike(49))  //  'You are a regular user'
console.log(statusByLike(50))  //  'You are a popular user' 
console.log(statusByLike(95))  //  'You are a popular user'
console.log(statusByLike(96))  //  'You are a star user'
console.log(statusByLike(500)) //  'You are a star user

# 7] countTruthy =>

function countTruthy(array) {
let count= array.reduce((accl, item) => {
    if(item){
        accl++;
    }
    return accl;
},0)
return count;
}

// test case
let arr = [undefined, null, NaN, 0, "", false, 1, true, "hello"]
console.log(countTruthy(arr)) //3

# 8] start printing pattern 

let N = 5 // row or column count

let bag="";
for(p=N-1; p>=0; p--){
    for(let q=p+1; q<N; q++){
        bag=bag+"*"
    }
    bag=bag+"\n";
}
console.log(bag)

# 9] avg of marks ==> 

// Hint: calculate average
// 0 - 49: C
// 50 - 79: B
// 80 - 100: A 

function calculateGrade(marks) {
 const sum = marks.reduce((accl, item) => {
     accl=accl+item;
     return accl;
 })
   
   let avg = sum/marks.length ||0
//   console.log(avg)
   
   if(avg <= 49){
       return "C"
   }else if(avg>=50 && avg<=79){
       return "B"
   } else if(avg>=80){
       return "A";
   }
}


console.log(calculateGrade([20, 30, 50])); // C
console.log(calculateGrade([80, 80, 50])); // B
console.log(calculateGrade([80, 80, 90])); // A


# 10] prime numbers =>

function printPrimes(num){
  let arr =[];
   for(let p=2; p<=num; p++){
      let isPrime=true;
      for(let q=2; q<p; q++){
          if(p%q==0){
              isPrime=false;
              break;
          }
      }
    //   console.log(p , isPrime)
    if(isPrime){
        arr.push(p);
    }
   }
      return arr
   }
console.log(printPrimes(20));


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