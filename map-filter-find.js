const numbers = [3, 4, 5, 6, 7, 8];

//normal method of getting an array 

const output = [];
for(let i=0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
    
}
console.log(output);

//map = map returns an array

// numbers.map(square);
// function square(element){
//     return element*element;
// }


const result = numbers.map(function(element, index, array){
    console.log(element, index, array);
    return element * element;
});
console.log(result);

//map using fat arrow function

const result = numbers.map( x => x * x);
console.log(result);

//filter

const bigger = numbers.filter( x => x > 5);
console.log(bigger);

//find

const isThere = numbers.find( x => x > 5);
console.log(isThere);

