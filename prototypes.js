var Character = function() {
    if (new.target === Character){
        throw new TypeError('Cannot instantiate object of type "Character"!');
    }
    Character.numberOfInstances ++;
}

Character.numberOfInstances = 0;

var PlayerCharacter = function() {
    Character.call(this); 
    this._x = Math.floor(Math.random()*10);
    this._y = Math.floor(Math.random()*10);
    
}

PlayerCharacter.prototype = Object.create(Character.prototype);
PlayerCharacter.prototype.setBoth = function(x, y){
    if (x <= 9 && x >= 0){
        this._x = Math.floor(x);    
    }
    if (y <= 9 && y >= 0){
        this._y = Math.floor(y);    
    }
}
PlayerCharacter.prototype.getPosition = function(){
    return {x: this._x, y: this._y};
}

var NonPlayerCharacter = function(x, y) {
    Character.call(this);
    this._x = Math.floor(Math.random()*10);
    this._y = Math.floor(Math.random()*10);
}

NonPlayerCharacter.prototype = Object.create(Character.prototype);
NonPlayerCharacter.prototype.setBoth = function(x, y){
    if (x <= 9 && x >= 0){
        this._x = Math.floor(x);    
    }
    if (y <= 9 && y >= 0){
        this._y = Math.floor(y);    
    }
}
NonPlayerCharacter.prototype.getPosition = function(){
    return {x: this._x, y: this._y};
}

let p = new PlayerCharacter();
let n = new NonPlayerCharacter();

console.log('Number of instances: ', Character.numberOfInstances);
console.log('Player character position', p.getPosition());
console.log('Non player character position', n.getPosition());