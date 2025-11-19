//Primero cree una funcion llamada suma 
function suma(a,b){
  return parseFloat(a)+ parseFloat(b); /*aqui le pido que me haga la suma 
entre a  y b para que despues me retorne el resultado
*/
}
let resultado = suma(4, 4); /*creo una variable llamada resultado
y le asigno ala funcion suma dos numeros que me realizara la operacion en la 
funcion
*/ 
console.log("La suma es:"+resultado);/*finalmente lo muestro en consola el 
resultado de la funcion suma entre los dos numeros*/
// ----- FASE 2 -----
let numero1 = "10";
let numero2 = "20";
console.log("La suma con strings fue: " + suma(numero1, numero2));

/*Ahora creo la funcion multiplicacion*/
function multiplicacion(a,b){
   return parseFloat(a)*parseFloat(b) /*aqui se hara la operacion que es la multiplicacion entre los 
dos valores*/
} 
resultado = multiplicacion(5,5);/*Ahora ala variable le asingo la funcion con
los numero que deseo que se haga la multiplicacion*/
console.log("la multiplicacion es: "+resultado);/*Ahora muestro resultado*/
/*Ahora creo la funcion de dividir*/
numero1 = "15";
numero2 = "2";
console.log("La multiplicacion con strings fue: " + multiplicacion(numero1, numero2));

function dividir(a,b){
 return parseFloat(a) / parseFloat(b); /*Aqui se hara la division de los dos valores adentro de la
funcion*/
}
resultado = dividir(2,10);/*Le asigne los numeros que se diviran adentro de 
la funcion que esta en resultado*/
console.log("la division es:"+resultado);/*Ahora se muestra el resultado*/
numero1 = "10";
numero2 = "20";
console.log("La division con strings fue: " + dividir(numero1, numero2));

/*Por ultimo Ahora la funcion de restar la creo*/
function resta(a,b){
 return parseFloat(a)- parseFloat(b); /*Ahora se hace la operacion de restar a menos b adentro de 
la funcion*/
}
resultado = resta(20,5);/*le vuelvo asignar los numeros que se restaran ala 
funcion adentro de la variable*/
console.log("La resta es:"+resultado);
numero1 = "10";
numero2 = "2";
console.log("La resta con strings fue: " + resta(numero1, numero2));




