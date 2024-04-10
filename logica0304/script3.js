contador = 0
total = 0

n = Number(prompt("Digite um nº: "))
vezes = Number(prompt("Digite um nº de vezes a ser repetido: "))
while(contador < n){
    n = Number(prompt("Digite um nº para a soma: "))
    total += n 
    contador++
}
alert("Resultado da soma: " +total)