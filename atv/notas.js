var n1,n2,n3
n1= parseInt(prompt("Digite a primeira nota:"))
n2= parseInt(prompt("Digite a segunda nota:"))
n3= parseInt(prompt("Digite a terceira nota:"))
mediaa = (n1+n2+n3)/3
if(mediaa>=7)
alert("Aprovado!")
else if(mediaa<7 && mediaa>3)
alert("Recuperação!")
else
alert("Reprovado!")