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

1] what is AJAX 
2] what is Jquery 
3] what is higher order function and example 
4] what is dom element and example 
5] what is type of dom 
6] adventage of react 
7] difference between var and let 
8] difference bet undefined and null 
9] what is virtual dom 
10] advantage of virtual dom 
11] what is difference for and forEach loop 
12] what is datatype ? how many datatype present in javascript ?
13] difference between float and doubble
14] Find the Vowels  and Consonent
15] what is component in react? difference between functional component and class component?
16] difference between local storage session storage  and cookies?
