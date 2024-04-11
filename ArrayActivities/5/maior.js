var n = [5, 1, 45, 2, 65, 46];
var maiorN = n[0];

for (var i = 1; i < n.length; i++) {
    if (n[i] > maiorN) {
        maiorN = n[i]
    }
}
console.log(`O maior valor é ${maiorN}`)