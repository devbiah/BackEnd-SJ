var nomes = ["Leo", "Bina", "Nick", "Bia"]

console.log(nomes)
nomes[4] = "Lari"
nomes.push("José")
console.log(nomes)
console.log(nomes.length)
nomes.pop()
console.log(nomes)
console.log(nomes.indexOf("Bina")) //qual a localização de Bina? 1, o array começa no 0
nomes.sort()
console.log(nomes)


// for(var i= 0; i < nomes.length; i++){
//     console.log(nomes[i])
// }
// for(var i = nomes.length -1; i>=0; i--){
//     console.log(nomes[i])
// }