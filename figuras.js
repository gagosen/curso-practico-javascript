// Código del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm"); */

function perimetroCuadrado (lado) {
    return lado * 4;
}
/* perimetroCuadrado(); */
/* console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm"); */

/* const areaCuadrado = ladoCuadrado * ladoCuadrado; */
/* console.log("El área del cuadrado es: " + areaCuadrado + "cm2"); */
function areaCuadrado(lado) {
    return lado * lado;
}
console.groupEnd();

console.group("Triangulos");

// Código del triángulo
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triángulo miden: " 
    + ladoTriangulo1 
    + "cm, " 
    + ladoTriangulo2 
    + "cm, "
    + baseTriangulo 
    + "cm"
); */

/* const alturaTriangulo = 5.5;
console.log("La altura del triángulo mide: " + alturaTriangulo + "cm"); */

/* const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm"); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

/* const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + "cm2"); */
function areaTriangulo(base, altura) {
    return (base * altura)/2;
}

console.groupEnd();


// Código del círculo
console.group("Circulos");

// Radio
/* const radioCirculo = 4;
console.log("El radio del círculo mide: " + radioCirculo + "cm"); */

// Diámetro
/* const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo mide: " + diametroCirculo + "cm"); */
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
/* const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del círculo mide: " + perimetroCirculo + "cm"); */
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return PI * diametro;
}

// Área
/* const areaCirculo = PI * (radioCirculo * radioCirculo)
console.log("El área del círculo mide: " + areaCirculo + "cm2"); */
function areaCirculo(radio) {
    return PI * (radio * radio);
}

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value)
        alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value)
        alert(area);
}
