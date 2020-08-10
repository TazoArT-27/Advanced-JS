function stopWatch(){
    let count = 0 ;
    return function (){
        count ++;
        return count;
    }
}
const clock1 = stopWatch();
// clock1();
// clock1();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
// console.log(clock1);

const clock2 = stopWatch();
// clock2();
// clock2();
console.log(clock2());
console.log(clock2());
