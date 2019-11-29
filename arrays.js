var arrayOfColors = ['Red', 'Green', 'Blue', 'Yellow', 'Black', 'White', 'Orange', 'Purple', 'Brown', 'Pink'];

console.log('For:');
for(let i = 0; i < arrayOfColors.length; i++){
    console.log(arrayOfColors[i]);
}

console.log('ForEach:');
arrayOfColors.forEach(function(item, number, array){
    console.log(item);
});

function rotate(array, steps){
    steps = steps >= 0 ? steps : 0;
    let rotatedArray = new Array(array.length);
    let length = array.length;
    for(let i = 0; i < length; i++){
        if (i+steps >= length){
            rotatedArray[i+steps-length] = array[i];
        } else {
            rotatedArray[i+steps] = array[i];
        }
    }
    return rotatedArray;
}

console.log("Rotated array:");
var rotated = rotate(arrayOfColors, 2);
rotated.forEach(function(item, index, array){
    console.log(item);
})

const reduceer = (accumulator, currentVal) => accumulator + currentVal;

var numbers = [1,2, 1, 3, 4];

console.log('Result: ', numbers.reduce(reduceer, 50));

function upAndDown(limit){
    length = 2*limit;
    let retArray = new Array(length);
    
    for(let i = 0; i < limit; i++){
        retArray[i] = i;
        retArray[length-i] = i;
    }
    retArray[limit] = limit;
    return retArray;
}

console.log("Up and Down: ", upAndDown(5));

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
  ];

  function zooInventory(myZoo){
      let zooArray = [];
      for(let i = 0; i < myZoo.length; i++){
          zooArray[i] = myZoo[i][0] + ' the ' + myZoo[i][1][0] + ' is ' + myZoo[i][1][1];
      }
      return zooArray;
  }

  console.log("Zoo thing:", zooInventory(myZoo));