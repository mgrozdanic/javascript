var personJs = {firstName: 'Milan', lastName: 'Grozdanic', age: 23};
var personJSON = '{"firstName":"Milan", "lastName":"Grozdanic", "age":23}';
console.log(JSON.stringify(personJs));
console.log(JSON.parse(personJSON));

var arrayJs = [1, 2, 3, 4, 5];
var arrayJSON = '[1, 2, 3, 4, 5]';
var JSONToJs = JSON.parse(arrayJSON);

for(let i = 0; i < JSONToJs.length; i++){
    console.log(JSONToJs[i]);
}
