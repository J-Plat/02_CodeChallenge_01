
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Promt-Anforderung eine Zahl ein
Geben Sie über eine Promt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/

var zahl01, zahl02, summe;
var input01, input02;

input01 = prompt("Bitte geben Sie die erste Zahl ein");
input02 = prompt("Bitte geben Sie die zweite Zahl ein");

zahl01 = parseInt(input01);
zahl02 = parseInt(input02);

summe = (zahl01+zahl02);

console.log(typeof input01);
console.log(typeof zahl01);

console.log("Die Summe der Zahlen ist: " + summe);