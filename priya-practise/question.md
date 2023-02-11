# what are the closures with examples 

- closures is that the function bundled together with lexical envirnoment is known as closures 

function outer(){
    var a=20;
    function inner(){
        console.log(a)
    }
    console.log(inner);
}
console.log(outer);



# Advantages of Closure:

- Module Design Pattern
- Currying
- Memoize
- Data hiding and encapsulation
- setTimeouts etc.
- event handlers and callback  - - functions, and in partial 

# Disadvantages of Closure:

- Over consumption of memory
- Memory Leak
- Freeze browser



# what is higher-order-funtion ?

- A Higher-Order function is a function that
receives a function as an argument or returns the function as output.

ex: map, filter, reduce

# Map, Filter, Reduce javascript

let myarray = [8,3,7,4,9,3,6,1]
console.log("myarray : ", myarray);

#  map
 - map() transforms every element in an array individually and creates a new array.

let mapArray = myarray.map((e) => {
    return e
})
console.log("mapArray : ", mapArray);

# filter
- filter function is used to filter the value in an array. 

let  filterArray = myArray.filter((e) => {
    if(e>3){
        return true;
    }
    else{
        return flase
    }
    console.log(filterArray, "filterArray")
})
# reduce
- A good example of reduce operation is calculating the sum of an array, where the accumulative operation is the addition of items.

let reducefunc = myarray.reduce((accl, curr) =>accl+curr, 0);

console.log("reduceArray", reducefunc) //43


# difference between let var const ?


