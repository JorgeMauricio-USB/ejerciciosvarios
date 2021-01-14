// 1
function suma() {
	var numero01, numero02, resultado;
	// se desplegar� en pantalla u mensaje al usuario solicitando el numero 1, de igual manera se solicita el numero 2//
	numero01 = Number(prompt("Ingresar el primer numero: ",));
	numero02 = Number (prompt("Ingresar el segundo numero: ",));
	// Ahora se calcula la suma y se fuarda el resultado en la variable resultado//
	resultado = numero01+numero02;
	// por �ltimo desplegar el resultado alamcenado en pantalla//
	alert("El resultado de la suma es: "+ resultado);
}

// 2
function signo() {
	var numero01;
	numero01 = Number(prompt ("Ingresar un número (puede ser positivo o negativo",));
	if (numero01 >= 0) {
		alert("El número ingresado es POSITIVO");
	} else {
		alert("El número ingresado es NEGATIVO");
	}
}


// 3


// Calculadora Suma, Resta, Multiplicación y Divisi�n 
// empleando condicionales si-entonces (IF-THEN)
function calculadora() {
	var numero01, numero02, opcion_num, resultado;
	// Ingresar la opci�n a realizar
	alert("Posibles operaciones a realizar :\n1: Sumar\n2: Restar\n3: Multiplicar\n4: Dividir");

	// De acuerdo a la elecci�n se compara contra cada una de las
	// opciones para realizarla y terminar el programa


	 opcion_num = Number(prompt("¿Que operación deseas realizar? :",));

	// Operación: Suma
	if (opcion_num==1) {
		numero01 = Number(prompt("Ingresar el primer valor",));
		numero02 = Number(prompt("Ingresar el segundo valor",));
		resultado = numero01+numero02;
		alert("La suma es " + resultado,);
	} else {
		// Operaci�n: Resta
		if (opcion_num==2) {
			numero01 = Number(prompt("Ingresar el primer valor",));
			numero02 = Number(prompt("Ingresar el segundo valor",));
			resultado = numero01-numero02;
			alert("La resta es " + resultado,);
		} else {
			// Operaci�n: Multiplicaci�n
			if (opcion_num==3) {
				numero01 = Number(prompt("Ingresar el primer valor",));
				numero02 = Number(prompt("Ingresar el segundo valor",));
				resultado = numero01*numero02;
				alert("La multiplicación es " + resultado,);
			} else {
				// Operaci�n: Divisi�n
				if (opcion_num==4) {
					numero01 = Number(prompt("Ingresar el primer valor",));
					numero02 = Number(prompt("Ingresar el segundo valor",));
					resultado = numero01/numero02;
					alert("La división es " + resultado,);
				} else {
					alert("Error",'<BR/>');
				}
			}
		}
	}
}


//4

// Este es un ejemplo del uso de condicional switch para identificar
// si un n�mero est� dentro de un rango sugerido y visualizar
// el mes del calendario 
function mescalendario() {
	var numeromes;

	numeromes = Number(prompt("Ingresar un número entre el 1 al 12, para visualizar el mes",));
	// Se desplegar� el mes de acuerdo al n�mero elegido
	// En caso que no sea ninguna de las opciones v�lidas
	// se solicitar� reiniciar el programa
	switch (numeromes) {
	case 1:
		alert("Número de mes válido",);
		alert("El mes es ENERO",);
		break;
	case 2:
		alert("Número de mes válido",);
		alert("El mes es FEBRERO",);
		break;
	case 3:
		alert("Número de mes válido",);
		alert("El mes es MARZO",);
		break;
	case 4:
		alert("Número de mes válido",);
		alert("El mes es ABRIL",);
		break;
	case 5:
		alert("Número de mes válido",);
		alert("El mes es MAYO",);
		break;
	case 6:
		alert("Número de mes válido",);
		alert("El mes es JUNIO",);
		break;
	case 7:
		alert("Número de mes válido",);
		alert("El mes es JULIO",);
		break;
	case 8:
		alert("Número de mes válido",);
		alert("El mes es AGOSTO",);
		break;
	case 9:
		alert("Número de mes válido",);
		alert("El mes es SEPTIEMBRE",);
		break;
	case 10:
		alert("Número de mes válido",);
		alert("El mes es OCTUBRE",);
		break;
	case 11:
		alert("Número de mes válido",);
		alert("El mes es NOVIEMBRE",);
		break;
	case 12:
		alert("Número de mes válido",);
		alert("El mes es DICIEMBRE",);
		break;
	default:
		alert("Número de mes válido",);
		alert("Deber� re-iniciar el programa",'<BR/>');
	}
}


//5
// Este es un ejemplo del uso de los condicionales while (mientras)
// y  if-then (si-entonces) para realizar la suma de los n�meros
// pares y los impares
function sumapareseimpares() {
	var i, suma_impar, suma_par;
	// se declaran variables de apoyo para nuestro programa
	// i es nuestro contador principal
	// conviene que se inicie en 1 es decir  i<-1 
	// suma_par llevar� una acumulaci�n de la suma n�meros pares
	// se inicia en 0, suma_par<-0
	// suma_impar llevar� una acumulaci�n de la suma n�meros impares
	// se inicia en 0, suma_impar<-0
	i = 1;
	suma_par = 0;
	suma_impar = 0;
	// se realizar� este proceso del 1 al 100
	while (i<101) {
		// si el residuo de dividir el valor actual de i entre 2
		// es cero, se suma el valor actual de i a la suma_par
		// de lo contrario, se suma a la suma_impar
		if (i%2==0) {
			suma_par = suma_par+i;
		} else {
			suma_impar = suma_impar+i;
		}
		// se incrementa el valor del contador principal
		i = i+1;
	}
	alert("La suma de los números pares entre 0 y 100 es ..",);
	alert(suma_par,);
	alert("La suma de los números impares entre 0 y 100 es ..",);
	alert(suma_impar,);
}



//6
function tablamultiplicar() {
	var contador01, numero01;
	numero01 = Number (prompt("Ingresar un número para generar su tabla de multiplicar"));
	// Con este ciclo se genera la multiplicaci�n del n�mero ingresado
	// en cada iteraci�n por el valor del contador (variable de control)
	// desde 1 hasta llegar a 10 de uno en uno
	for (contador01=1;contador01<=10;contador01++) {
		// Desplegar el valor de la multiplicaci�n actual
		document.write(numero01,"x",contador01,"=",(numero01*contador01),'<BR/>');
	}
}

//7
function salariosemanal() {
	var numero01, horas, salario;
	// Se desplegar� en pantalla un mensaje al usuario solicitando
	// ingresar por teclado el n�mero de horas trabajadas por semana
	// e ingresar por teclado el salario base por hora
	horas = Number(prompt("Ingresar el número de horas trabajadas en la semana ..."));
	numero01 = Number(prompt("Ingresar el salario base por hora ..."));

	// Calcular el salario con los datos ingresados
	salario = horas*numero01;
	// Desplegar el salario semanal
	alert("El salario semanal será de: "+ salario,"pesos");
}

// 8
function jubilacion() {

	alert("Una disculpa no pude :(" );

}