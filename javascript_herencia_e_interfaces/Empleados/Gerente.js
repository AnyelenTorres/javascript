import { Empleado } from "./Empleados.js";

export class Gerente extends Empleado{
    contructor(nombre,dni){
        super(nombre,dni);
    }

    verBonificacion(bono){
        const bono = 5;
        return super._verBonificacion(bono);

    }
}