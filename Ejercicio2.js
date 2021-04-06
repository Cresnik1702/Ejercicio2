// El ejercicio consiste en crear un codigo que pidiéndole al usuario
// dos número, el programa te de el resultado de la suma, resta, 
// multiplicación y división de dichos números.

// El ejercicio en pseudocódigo es:

//  Proceso Ejercicio_3
	
//  	Definir numero1 Como Real; 
//  	Definir numero2 Como Real; 
//  	Definir Suma Como Real;
//  	Definir Resta Como Real;
//  	Definir Multi Como Real;
//  	Definir Division Como Real;
	
//  	Escribir "Dame el Primer número";
//  	Leer numero1;
//  	Escribir "Dame el Segundo número";
//  	Leer numero2;
//  	Suma<-numero1+numero2;
//  	Resta<-numero1-numero2;
//  	Multi<-numero1*numero2;
//  	Division<-numero1/numero2;
	
//  	Escribir "- El resultado de su suma es ", Suma;
//  	Escribir "- El resultado de su resta es ", Resta;
//  	Escribir "- El resultado de su multiplicación es ", Multi;
//  	Escribir "- El resultado de su División es ", Division;
	
//  FinProceso

let num1 = parseInt (prompt("Dame el primero número"));   //parseInt lo que nos va a hacer es transformar la entrada que nos de el usuario que en un principio es un string o cadena por una variable de tipo number.

    console.log ("El primer número seleccionado es: " + (num1));

let num2 = parseInt (prompt ("Dame el segundo número"));

    console.log ("El segundo número seleccionado es: " + (num2));

let suma = num1 + num2;
let resta = num1 - num2;
let multi = num1 * num2;
let divi = num1 / num2;


    console.log ("El resultado de la suma es: " + (suma));
    console.log ("El resultado de la resta es: " + (resta));
    console.log ("El resultado de la multiplicación es: " + (multi));
    console.log ("El resultado de la división es: " + (divi));
