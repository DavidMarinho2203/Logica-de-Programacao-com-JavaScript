// Obtendo o form e o local de resposta
const form = document.querySelector('form'),
respTempo = document.getElementById('outTempo'),
respTroco = document.getElementById('outTroco')

// adicionando evento ao botao submit do form
form.addEventListener('submit', (e) => {
    // Usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const valor = Number(form.inValor.value)
    
    // Calculando o tempo e o troco de acordo com o valor pago.
    // if...else... ternário
    const tempo = valor < 1.75 ? 30 : valor >= 1.75 && valor < 3 ? 60 : 120
    const troco = valor < 1.75 ? valor % 1 : valor >= 1.75 && valor < 3 ? valor % 1.75 : valor % 3

    // Mostrando valores no local de resposta.
    respTempo.textContent = `Tempo : ${tempo} min`
    respTroco.textContent = troco == 0 ? "" : `Troco: R$${troco.toFixed(2)}`

})