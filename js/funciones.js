alert ("Bienvenido a LaDeportista.com");
alert ( "Queres correr 10k ? Te vamos a pedir tus tres mejores tiempos de 1000m");
alert ( "Los tiempos ingresalos con el siguiente formato 00.00 ( dos digitos para los minutos, punto, dos digitos para los segundos ) ");

let tiempo1=  parseInt ( prompt ("Ingresá tu mejor tiempo en 1000m: ")) ;
let tiempo2=  parseInt (  prompt ( " Ingresá tu segundo mejor tiempo en 1000m: "));
let tiempo3=  parseInt (  prompt ( " Ingresá tu tercer mejor tiempo en 1000m: "));

let promedio=   (( tiempo1 + tiempo2 + tiempo3 ) / 3).toFixed(2)  ;



console.log ("Tu promedio de pasadas es de : " + promedio + " minutos");

let Km1= promedio;
let Km3= (( promedio * 1.01 ) * 3).toFixed(2);
let Km5= (( promedio * 1.02 ) * 5).toFixed(2);
let Km7= (( promedio * 1.03 ) * 7).toFixed(2);
let Km8= (( promedio * 1.04 ) * 8).toFixed(2);
let Km9= (( promedio * 1.044 ) * 9).toFixed(2);
let Km10= (( promedio * 1.052 ) * 10).toFixed(2);


console.log ("Tu ritmo de carrera a los 1 Km debería ser de : " + Km1 + " minutos" );

console.log ("Tu ritmo de carrera a los 3 Km debería ser de : "+ Km3 + " minutos"  );

console.log ("Tu ritmo de carrera a los 5 Km debería ser de : " + Km5 + " minutos"  );

console.log ("Tu ritmo de carrera a los 7 Km debería ser de : " + Km7 + " minutos" );

console.log ("Tu ritmo de carrera a los 7 Km debería ser de : " + Km8 + " minutos" );

console.log ("Tu ritmo de carrera a los 9 Km debería ser de : " + Km9 + " minutos" );



if ( Km10 <= 33.50 ) { 
alert ( " Tu tiempo pronosticado para los 10k es: " + Km10 + " minutos" +  "   ----->>>> Que gran tiempo!" + "Estás para correr en la Elite!" );
}else if ( Km10 <= 44.50 ) {
    alert ( " Tu tiempo pronosticado para los 10k es: " + Km10 +  " minutos" + "   ----->>>> Bien! "  + " Vas por el buen camino, segui asi!");
}else { 
    alert ( " Tu tiempo pronosticado para los 10k es: " + Km10 +  " minutos" + "   ----->>>> Tranqui! "  + " De a poco vas a ir mejorando los tiempos!");

}