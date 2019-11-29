

var aquareAllItems = function(array) {
    return array.map(item => Math.pow(item, 2))
}

var arr = [1,2,4,7];
console.log('All items: ', arr);
console.log('All items squared: ', aquareAllItems(arr));

(function(){
    console.log(4+5);
})();

var timesTwo = number => number*2;

console.log(timesTwo(2));