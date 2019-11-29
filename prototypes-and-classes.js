class Character{
    constructor(){
        if (new.target === Character){
            throw new TypeError('Cannot instantiate object of type "Character"!')
        }
        Character.numberOfInstances += 1;
    }
    static numberOfInstances = 0;
}

class PlayerCharacter extends Character{
    constructor(){
        super();
        this._x = Math.floor(Math.random()*10);
        this._y = Math.floor(Math.random()*10);
    }

    set x (x) {
        if (x > 9 || x < 0){
            return;
        }
        this._x = x;
    }
    get x () {
        return this._x;
    }
    set y (y) {
        if (y > 9 || y < 0){
            return;
        }
        this._y = y;
    }
    get y () {
        return this._y;
    }

    setBoth (x, y) {
        x(x);
        y(y);
    }

    getPosition(){
        return {x: this._x, y: this._y};
    }
}

class NonPlayerCharacter extends Character{
    constructor(){
        super();
        this._x = Math.floor(Math.random()*10);
        this._y = Math.floor(Math.random()*10);
    }

    set x (x) {
        if (x > 9 || x < 0){
            return;
        }
        this._x = x;
    }
    get x () {
        return this._x;
    }
    set y (y) {
        if (y >9 || y < 0){
            return;
        }
        this._y = y;
    }
    get y () {
        return this._y;
    }

    setBoth (x, y) {
        x(x);
        y(y);
    }
    getPosition(){
        return {x: this._x, y: this._y};
    }
}

let p = new PlayerCharacter();
let n = new NonPlayerCharacter();
console.log('Number of instances: ', Character.numberOfInstances);
console.log('Player character position: ', p.getPosition());
console.log('Nonplayer character position: ', n.getPosition());