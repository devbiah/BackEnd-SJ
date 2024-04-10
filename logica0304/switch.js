n1 = Number(prompt("Digite o primeiro nº: "))
n2 = Number(prompt("Digite o segundo nº: "))
oper = prompt("Escolha um dos operadores a seguir.\n(+)Adição \n(-)Subtração \n(/)Divisão \n(*)Multiplicação")

switch (oper) {
    case '+':
        alert(`${n1}+${n2}=${n1+n2}`)
        break
    case '-':
        alert(`${n1}-${n2}=${n1-n2}`)
        break
    case '/':
        alert(`${n1}/${n2}=${n1/n2}`)
        break
    case '*':
    case 'x':
    case 'X':
        alert(`${n1}x${n2}=${n1*n2}`)
        break
}    