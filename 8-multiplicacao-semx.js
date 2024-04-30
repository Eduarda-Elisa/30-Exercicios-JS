/*
Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
multiplicação deles. Porém, não utilize o operador de mutiplicação.
Exemplo:
multiplicar(5, 5) // retornará 25
multiplicar(0, 7) // retornará 0

*/

function multiplica(num1,mult){
    let numreplica = 0

    for(let i=0;i<mult;i++){
        numreplica=numreplica+num1
    }

    console.log(numreplica)

}

multiplica(2,3)

