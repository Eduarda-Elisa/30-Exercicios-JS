/*
Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
Exemplos:
simboloMais(2) // retornará "++"
simboloMais(4) // retornará "++++"
*/

function repet (a){
    let result = ""

    for(let i =0; i < a; i++){
        result= result+ "+"
    }
    

    console.log(result)
}

repet(3)