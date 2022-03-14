function qualQuadrado ( lado1 , lado2 , lado3) {
    if (lado1 == lado2 && lado2 == lado3 ){
       return "Equilatero"
    }else if (lado1 ==lado2 || lado2 ==lado3 || lado1 == lado3){
       return "Isosseles"
    }else {
       return "Escaleno"
    }
}
console.log(qualQuadrado(3,3,3))
console.log(qualQuadrado(3,2,3))
console.log(qualQuadrado(3,4,7))