//1.5
//1.7
//3

var dineroRoberto;
var dineroPedro;
var dineroCofla;

let palitoHelado = 0.6;
let palitoHeladoCrema= 1;
let bombonHeladoHeladix = 1.6;
let bombonHeladoHeladich = 1.7;
let potencitoHeladoConfies = 2.9;
let pote = 2.9;

dineroRoberto = prompt("ingresa la cantidad que tiene roberto");
dineroPedro = prompt("ingresa la cantidad que tiene pedro");
dineroCofla = prompt("ingresa la cantidad que tiene Cofla");

var totalNumero = (parseFloat(dineroRoberto) + parseFloat(dineroPedro)+parseFloat(dineroCofla));

document.write("en total tienen : " + totalNumero);
let heladosCaro = potencitoHeladoConfies + pote;

if (totalNumero >= potencitoHeladoConfies || totalNumero >= pote){
    document.write("les alcanza para el helado marca helardo o para el pote de 1/4 kg");
    totalNumero = totalNumero - potencitoHeladoConfies;
    document.write("el total que les sobra por un helado mas caro es de: " + totalNumero);
}

else if (totalNumero >= heladosCaro){
    document.write("les alcanza para los dos helados mas caros")
    totalNumero = totalNumero - heladosCaro;
    document.write("el cambio va a hacer de: " + totalNumero);
}


else{
    document.write("no les alcanza para el mas caro");
}
