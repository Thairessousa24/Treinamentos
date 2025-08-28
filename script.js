let idade = parseInt(prompt("Digite sua idade"))
let ingresso = prompt("Você possue ingresso? [S/N] ").toLowerCase()

if (ingresso === "s") {
    ingresso = true
    if (idade >= 18 && ingresso == true) {
        alert("Você pode entrar! Pois possui ingresso!")
    } else {
        alert("Você não pode entrar, pois não possui idade suficiente")
    }

} else if (ingresso === "n") {
    ingresso = false
    alert("Você não possue ingresso")
} else {
    alert("Você digitou algo errado. Fim do Programa.")
}