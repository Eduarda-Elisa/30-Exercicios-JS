/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará true
maiorOuIgual(5, 1) // retornará true
*/

function comparativo (num1,num2){
    if( num1 >= num2 ) {
        console.log(true)
    }
    else {
        console.log(false)
    }
}

comparativo(5,1)