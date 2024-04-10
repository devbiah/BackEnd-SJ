var produtos = ['caneta', 'borracha', 'lápis', 'caderno', 'régua']
var preco = [25.50, 52.30, 71.80, 119.90, 134.20]

var qtdProdutosMenosde50 = 0
var Prod50e100 = ""
var qtdMaior100 = 0
var mediaMaior100 = 0
var soma = 0

// for (var i = 0; i < 5; i++) {
//     produtos[i] = prompt("Digite um produto: ")
//     preco[i] = Number("Digite o preço: ")
// }
for (var i = 0; i < preco.length; i++) {
    if (preco[i] < 50) {
        qtdProdutosMenosde50++
    }

if (preco[i] > 50 && preco[i] < 100) {
    Prod50e100 += produtos[i] + " "
}
if (preco[i] > 100) {
    soma += preco[i];
    qtdMaior100++
}
mediaMaior100 = soma / qtdMaior100    ;
}
console.log(qtdProdutosMenosde50)
console.log(Prod50e100)
console.log(mediaMaior100)

    
//         var media = totalPreco / Sup100;
