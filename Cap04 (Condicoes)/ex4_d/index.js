// obtendo o form e o local de resposta
const form = document.querySelector('form'),
respTriangulo = document.getElementById('outTriangulo'),
respTipoTriangulo = document.getElementById('outTipoTriangulo')

// adicionando evento ao submit do form
form.addEventListener('submit', (e) =>{
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const ladoA = Number(form.inValorLadoA.value),
    ladoB = Number(form.inValorLadoB.value),
    ladoC = Number(form.inValorLadoC.value)

    // verificando se tem algum lado do triângulo maior que todos os lados.
    if(ladoA > (ladoB + ladoC) || ladoB > (ladoA + ladoC) || ladoC > (ladoA + ladoB)){
        alert('Não é um triângulo')
        form.reset()
        form.inValorLadoA.focus()
        return
    }

    // verificando o tipo do triângulo
    const tipo = ladoA == ladoB && ladoA == ladoC ? "Tipo: Equilátero" : ladoA == ladoB || ladoB == ladoC || ladoA == ladoC ? "Tipo: Isósceles" : "Tipo: Escaleno"

    // mostrando valores no local de resposta
    respTriangulo.textContent = "Lados podem formar um triângulo"
    respTipoTriangulo.textContent = ` ${tipo}`

})