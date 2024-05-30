// obtendo o form e o local de resposta
const form = document.querySelector('form'),
    respDivisores = document.getElementById('outRespDivisores'),
    respSeEPerfeito = document.getElementById('outRespSeEPerfeito')

// adicionando evento no submit do form
form.addEventListener('submit', (e) => {
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores madado pelo form
    const numero = form.inNumero.value

    // armazenando os valores das (somadosDivisores e os divisores)
    let somaDosDivisores = 0
    let divisores = ""
    divisores += `Divisores de ${numero}: `

    // passsando por todos os numeros menores que o "numero"
    for (let i = 1; i < numero; i++) {

        // verificando se o numero que está passando no momento é divisivel com o numero escolhido
        if (numero % i == 0) {
            divisores += `${i}, `
            somaDosDivisores += i
        }
    }

    // verifica se o tamanho do divisores é maior que 0
    // reatribuindo o valor, tirando os espaços do (inicio e fim) da string e pegando todo o conteúdo até a última posição. que nesse caso seria a vírgula.
    divisores = divisores.length > 0 ? divisores.trim().slice(0, -1) : "1"

    // estou incluindo a soma dentro dos divisores
    divisores += ` (soma: ${somaDosDivisores})`

    // mostrando valores no local de resposta
    respDivisores.textContent = divisores
    respSeEPerfeito.textContent = somaDosDivisores == numero ? `${numero} É um número perfeito` : `${numero} Não é um número perfeito`

})