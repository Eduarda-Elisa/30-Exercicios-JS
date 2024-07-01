/*Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
pares e que também tenham índices pares.
💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele
por 2 é zero.
Exemplos:
receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]) // retornará []
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]) // retornará [10, 22]*/

function percorre (a){
    let array = []
    for( let i =0; i < a.length; i++){
        if(a[i]%2==0){
            if(a.indexOf(a[i])){
                array.push(a[i])
            }
        } 
    }

    return array
}
let b =[1,2,3,4,5,6]

let result = percorre(b)
console.log(result)