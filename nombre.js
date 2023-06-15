export class Persona{

    constructor(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}

//ES6
/* export{
    Persona
} */

//ES5
/* module.exports = {
    Persona
} */