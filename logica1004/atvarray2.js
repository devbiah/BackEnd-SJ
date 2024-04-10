oper = 1
var nomes = []

while (oper != 0) {
    oper = prompt("====== Menu ======.\n(1)Cadastrar \n(2)Excluir \n(3)Editar \n(4)Pesquisar se um nome está cadastrado\n(5)Listar os nomes cadastrados em ordem alfabética\n(0)Sair do programa")
    switch (oper) {
        case '1':
            nomes.push(prompt("Digite um nome:"))
            alert("Os nomes " + nomes + " foram adicionados!")
            break
        case '2':
            nomes.pop(prompt("Exclua um nome: "))
            alert("O nome foi excluído!")
            break
        case '4':
            if (nomes.includes(prompt("Qual o nome você procura?")))
            alert("Ele existe")
            else
            alert("Ele não existe")
            break
        case '5':
            alert(nomes.sort( ))
            break
    }
}