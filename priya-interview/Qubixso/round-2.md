# introduction 
# experience
# what is closure 
# what is overriding  and  overloading
# difference between let var const

# tell the output ==> 

// console.log(10+10+20)
// console.log("10"+10+20)
// console.log(10+"10"+20)
// console.log(10+10+"20")

// console.log(10+10+"S")
// console.log("10"+10+"S")
// console.log("10"+10+10)
// console.log(10+"10"+"10")


# replace dog and  cat  keyword with *** element 

let str = "The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers. A dog saves the life of the master from danger. One can find dogs everywhere in the world. Dogs are a very faithful animal. It has a sharp mind and a strong sense of hearing smelling the things. It also has many qualities";

# approch 1 ==>
str = str.replace(/dog|cat/gi, '***');
console.log(str);

- In this program, we first define a variable str and assign it the given string. Then, we use the replace() method of the string object to replace all occurrences of "dog" and "cat" with the word "pet". We do this by using a regular expression with the g (global) flag, which matches all occurrences of the pattern in the string. Finally, we print the modified string using console.log().

<!-- # question 2 => 

let obj={
    name:"LOREM",
    replacedto:"priya"
}

let str ="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable Lorem  Lorem LOREM"

function fun(obj,str){
    const arr=str.split(" ")
    const {name,replacedto}=obj
    for(let i=0;i<arr.length;i++){
        if(arr[i].toLowerCase() == name.toLowerCase()){
            arr[i]=replacedto
        }
    }
    return arr.join(" ")
}

# approach 2 => 

let test = ["lorem"];

let arr= new Array(...test)

arr.push("priya")

console.log("This is arr",arr)

console.log("Thi is test",test) -->
