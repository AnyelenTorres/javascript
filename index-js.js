import{cuentaCorriente} from "./cuentaCorriente"
import{Cliente} from "./cliente"

const cuentaDeLeonardo = new cuentaCorriente(cliente,"1","001");
const cuentaDeMaria = new cuentaCorriente(cliente2,"2","002");
const cliente = new Cliente("Leonardo","33344444","4444");
const cliente2 = new Cliente("Maria","44.55666","555");
console.log(cliente);
console.log(cliente2);

console.log(cuentaCorriente.cantCuenta);


cuentaDeLeonardo.transferirParaCuenta(100,cuentaDeMaria);
console.log("cuenta de Maria",cuentaDeMaria)

const saldoMaria = cuentaDeMaria.verSaldo();
console.log("el saldo actual es"+ saldoMaria);


let saldo=cuentaDeLeonardo.verSaldo;
console.log("el saldo actual es"+ saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log("el saldo actual de la cuenta es                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "+saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100)
console.log("El saldo actual es de" + saldo);


cuentaDeLeonardo = new cuentaCorriente()
{
    cuentaDeLeonardo = 0;
    cuentaDeLeonardo.depositoEnCuenta(200);
    cuentaDeLeonardo.retirarDeCuenta(100);
    console.log(cuentaDeLeonardo);
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "Jose";
cliente1.dniCliente = "23.354566";


const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numero= "2345";
cuentaCorriente1.saldo = 20000; 

const cliente2 = new Cliente();

cliente2.nombreCliente ="Leonardo";
cliente2.dniCliente = "33444555";

const cuentaCorriente2 = new cuentaCorriente();

cuentaCorriente2.numero = "2346"
cuentaCorriente2.saldo = "22305";

const cliente3 = new Cliente();

cliente3.nombreCliente = "Lorena";
cliente3.dniCliente = "22.444777";

const cuentaCorriente3 = new cuentaCorriente();

cuentaCorriente3.numero ="2233";
cuentaCorriente3.saldo = "12000";


console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);

cuentaCorriente2.depositoEnCuenta(200);
console.log(cuentaCorriente2.depositoEnCuenta);

