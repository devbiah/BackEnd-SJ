start = 1
var sabores = []

while (start != 4) {
    start = prompt("====== Menu ======.\n(1)Adicionar Sabor \n(2)Remover sabor \n(3)Visualizar sorvete \n(4)Finalizar pedido")
    switch (start) {
        case '1':
            if (sabores.length < 3) {
                sabores.push(prompt("Digite um sabor:"))
                alert("Sabor adicionado!")
            }
            else {
                alert("Limite de sabor atingido! Exclua um sabor para adicionar outro.")
            }
            break

        case '2':
            if (sabores.length > 0) {
                indice = prompt("Digite o índice do sabor a ser excluído:");
                sabores.splice(indice, 1);
                alert("Sabor excluído.")
            }
            else {
                alert("Não existem sabores adicionados!")
            }
            break

        case '3':
            if (sabores.length > 0) {
                sabores.forEach((sabor, index) => { alert(`Camada ${index + 1} - Sabor ${sabor}`) })
            }
            else {
                alert(`Seu sorvete não possuí sabores!`)
            }
            break
        
        case '4':
            if (sabores.length > 0)
                alert("Seu pedido foi finalizado! :D ")
            else
                alert("Adicione pelo menos um sabor!")
            break
        }
}