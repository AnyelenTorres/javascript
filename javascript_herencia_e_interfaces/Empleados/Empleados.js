export class Empleados{
        #nombre;
        #dni;
        #salario;
        #clave;
    constructor(nombre,dni,salario,clave){
        this.#nombre = nombre;
        this.#dni = dni;
        this.#salario = salario;
        this.#clave = "";
    }
    asignarClave(clave){
       return clave == this.clave;
    }
     autenticable(){
        return this.#clave
    }
    _verBonificacion(){
        return this.#salario;
    }

    _verBonificacion(bono){
        return this.salario + this.salario*bono/100;
    }
}