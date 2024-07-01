/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]

*/

function repet (a,b){
    let arr = []
    
    for(let i = 0; i < b; i++){
        arr.push(a)
    }
    console.log(arr)
}

repet('lucas',12)



