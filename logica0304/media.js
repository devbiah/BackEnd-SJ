
ndiv =  Number(prompt("Digite a quantidade de nº que quer colocar: "))
contador = 0
total = 0

while(contador<ndiv){
    n = Number(prompt("Digite um número para a soma: "))
    total += n 

    contador++
}
var media = total/ndiv

alert(`A média é ${media}`)