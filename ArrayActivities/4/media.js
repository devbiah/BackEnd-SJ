var nomes = []

for (var i = 1; i <= 5; i++) {
    var nome = prompt(`Digite o nome do Aluno ${i}:`);
    var nota = parseFloat(prompt(`Digite a nota de ${nome} na prova de matemática:`));

    if (nota > 5.0) {
        nomes.push({ nome, nota });
    }
}

var somaNotas = 0;
for (var aluno of nomes) {
    somaNotas += aluno.nota;
}
const media = somaNotas / nomes.length;

if (nomes.length > 0) {
    alert(`A média das notas acima de 5,0 é: ${media.toFixed(2)}`);
} else {
    alert(`Não há notas acima de 5,0 para calcular a média.`);
}