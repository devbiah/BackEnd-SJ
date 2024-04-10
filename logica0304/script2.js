var nome = "", acumulador = ""
while (nome !="stop"){
    nome = prompt ("Digite um nome ou stop para sair")
    
    if(nome == "stop"){
        nome = acumulador
        break
    }
    acumulador += nome + ", " 
}
    alert("Bem-vindo"+acumulador +"!")