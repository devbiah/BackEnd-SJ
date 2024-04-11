var n = []
for (var i = 0; i < 10; i++) {
    n.push(parseInt(prompt(`Digite o nº ${(i + 1)} :`)))
}

var imp = []
for (var i = 0; i < n.length; i++) {
    if (n[i] % 2 !== 0) {
        imp.push(n[i])
    }
}
alert(`Numeros ímpares: ${imp.join(', ')}`)