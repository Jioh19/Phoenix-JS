// Retornar un string.
function devolverString(str) {
	return str;
}

//Retornar una suma.
function suma(x, y) {
	return x + y;
}

// Retornar una resta.
function resta(x, y) {
	return x - y;
}

// Retornar una multiplicación.
function multiplicar(x, y) {
	return x * y;
}

// Retornar una división.
function dividir(x, y) {
	return x / y;
}

// Comparar números.
function igualdad(x, y) {
	return x === y;
}

// Comparar la longitud de dos strings.
function compararLongitud(str1, str2) {
	return str1.length === str2.length;
}

// Comparar un parámetro I.
function menorQueNoventa(num) {
	return num < 90;
}

// Comparar un parámetro II.
function mayorQueCincuenta(num) {
	return num > 50;
}

// Retornar el módulo o resto.
function obtenerResto(x, y) {
	return x % y;
}

// Comprobar si es par.
function esPar(num) {
	if (num % 2) {
		return false;
	}
	return true;
}

// Comprobar si es impar.
function esImpar(num) {
	if (num % 2) {
		return true;
	}
	return false;
}

// Elevar un número al cuadrado.
function elevarAlCuadrado(num) {
	return num * num;
}

// Elevar un número al cubo.
function elevarAlCubo(num) {
	return num * num * num;
}

// Elevar un número a un exponente.
function elevar(num, exponent) {
	return num ** exponent;
}

// Redondear un número.
function redondearNumero(num) {
	return Math.round(num);
}

// Redondear un número hacia arriba.
function redondearHaciaArriba(num) {
	return Math.ceil(num);
}

// Retornar un número aleatorio.
function numeroRandom() {
	return Math.random();
}

// Comprar si un numero es positivo.
function esPositivo(num) {
	if (num === 0) {
		return false;
	} else if (num > 0) {
		return "Es positivo";
	}
	return "Es negativo";
}

// Concatenar strings I.
function agregarSimboloDeExclamacion(str) {
	return str + "!";
}

// Concatenar strings II.
function combinarNombres(nombre, apellido) {
	return nombre + " " + apellido;
}

// Concatenar strings III.
function retornarSaludo(nombre) {
	return "Hola " + nombre + "!";
}

// Operaciones matemáticas I.
function areaDelRectangulo(alto, ancho) {
	return alto * ancho;
}

// Operaciones matemáticas II.
function perimetroDelCuadrado(lado) {
	return lado * 4;
}

// Operaciones matemáticas III.
function areaDelTriangulo(base, altura) {
	return (base * altura) / 2;
}

// Operaciones matemáticas IV.
function deEuroAdolar(euro) {
	return euro * 1.2;
}

// Condicionales.
function esVocal(letra) {
	if (letra.length !== 1) {
		return "Dato incorrecto";
	}
	c = letra.toLowerCase();
	if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
		return "Es vocal";
	}
	return "No es vocal";
}
