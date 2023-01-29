import { Empleado } from "./Empleados.js";

export class Director extends Empleado{
    contructor(nombre,dni){
        super(nombre,dni);
    }
    verBonificacion(bono){
        const bono = 10;
        return super._verBonificacion(bono);

    }

}