/*
Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo.
Exemplos:
maiorOuIgual(0, 0) // retornará true
maiorOuIgual(0, "0") // retornará false
maiorOuIgual(5, 1) // retornará false
*/

function igualoumaior(num1, num2){
    if ( num1 >= num2 ){
        console.log(true)
    }
    else{
        console.log(false)
    }
}

igualoumaior(0,5)