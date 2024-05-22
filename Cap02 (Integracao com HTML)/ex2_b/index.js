// obtendo o form e local de resposta
const form = document.querySelector('form')
const respValorAPagar = document.getElementById('outValorAPagar')

form.addEventListener('submit', (e) => {
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const valorDeUso = form.inValorDeUso.value
    const tempoDeUso = form.inTempoDeUso.value

    // Calculando o tempo / 15 e o valor a pagar.
    const tempoDivididoPor15 = Math.ceil(tempoDeUso / 15)
    const valorAPagar = tempoDivididoPor15 * valorDeUso

    // Mostrando os valores no local de resposta
    respValorAPagar.textContent = `Valor a Pagar R$: ${valorAPagar.toFixed(2)}`
})