/*
Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto
que o segundo será o número de vezes que haverá repetição. Um array será retornado.
Exemplos:
repetir("código", 2) // retornará ["código", "código"]
repetir(7, 3) // retornará [7, 7, 7]

*/

function repeticao(rep, repx) {
    let loop = []

    for (let i = 0; i < repx; i++) {
        loop.push(rep)
    }

    console.log(loop)
}

repeticao('ok', 3)