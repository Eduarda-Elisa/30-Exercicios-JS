/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo
array:
Exemplos:
receberPrimeiroEUltimoElemento([7,14,"olá"]) // retornará [7, "olá"]
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]) // retornará [-100, 16]
*/

function posiction (arr){
    let a = []
        a.push(arr [0])
        a.push(arr [arr.length - 1])
    

    console.log(a)
}
   

posiction([1,2,3,4])

