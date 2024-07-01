/*Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.
Exemplos:
filtrarNumeros(["Javascript", 1, "3", "Web", 20]) // retornará [1, 20]
filtrarNumeros(["a", "c"]) // retornará */

function remov (param){
    let a = []
    for( let i =0; i < param.length; i++){
        if(typeof param[i] == "number"){
            a.push(param[i])
        }    
    }

    return a
}

let result = remov([1,2,3,"ola","ok"])
console.log(result)