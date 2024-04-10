var funcionario = ["Bina", "Ana", "Lari", "Bia", "Leo"]

var salario = []
salario[0] = 1500.50
salario[1] = 2300.87
salario[2] = 4200.18
salario[3] = 3350.14
var maior = 0
for (var i = 0; i < salario.length; i++) {
    if (salario[i] > maior) {
        maior = salario[i]
        indiceMaior = i
    }
}
console.log(funcionario[indiceMaior])
console.log(maior)