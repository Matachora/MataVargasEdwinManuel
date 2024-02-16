// APUNTES
let numero;
// numero = numero + 2
numero += 2;

// operadores aritméticos
let suma, resta, multiplicacion, division, modulo, potencia;
suma = 2 + 2;
resta = 5 - 3;
multiplicacion = 2 * 2;
division = 10 / 5;
modulo = 10 % 3;
potencia = 2 ** 2;

// operadores de comparación

let n1, n2, n3, n4, n5, n6, n7;
n1 = 18 > 20; // mayor que
n2 = 16 < 20; // menor que
n3 = 18 >= 20; // mayor o igual que
n4 = 10 <= 20; // menor o igual que
n5 = 10 == 20; // es igual
n6 = 10 != 10; // es distinto-diferente
n7 = 10 === "10";  // es igual del mismo tipo
n8 = 10 !== "10"; // es diferente del mismo tipo

// operadores lógicos

let edad, pass1, pass2, pass3;
pass1 = edad >= 18 && edad <= 35; // and
pass2 = edad >= 18 || edad <=35; // or
pass3 = !edad >= 10; // not 

// operadores de control

// operador if - else
if ( 10 > 5 )
{
    //code 
}
else
{
    // not case code
}

// operador for ( iterator i=i+1 )
for ( let i = 0; i < 5; i++ )
{
    //code with iterator
}

// operador while
let i = 0;
while ( i < 5 )
{
    //while iterator code
    //i++ - always
}

// operador do while
let ii = 0;
do {
    //while iterator code
    //ii++ - always
} while ( ii < 20 )