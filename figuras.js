// Código del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código del Triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//Código del Circulo
console.group("Círculos");

//Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * Math.PI;
}

//Diametro
function diametroCirculo(radio){
    return radio * 2;
}

//Area
function areaCirculo(radio){
    return (radio * radio) * Math.PI;
}

console.groupEnd();

//Aquí interactuamos con HTML

/*function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}*/

const calcularPerimetroCuadrado = () => {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}