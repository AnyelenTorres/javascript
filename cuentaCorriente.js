import { Cliente } from "./cliente";


export class cuentaCorriente
{
    #cliente;
    numero;
    #saldo;
    agencia;
    static cantCuenta = 0;

    set cliente(valor){
        if (valor instanceof Cliente)
    this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente,numero,agencia){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        cuentaCorriente.cantCuenta++;

    }
    depositoEnCuenta(valor){
        if (valor =0);
        this.#saldo += valor;

        return this.#saldo;
    }
    retirarDeCuenta(valor){
        if (valor <= this.saldo)
        this.#saldo -= valor;

        return this.#saldo;
    }
    verSaldo(){
        return this.#saldo
    }
    transferirParaCuenta(valor,cuentaDestino){
        this.retirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
    }
}

