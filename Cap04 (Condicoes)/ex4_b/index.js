// obtendo o form e local de respota
const form = document.querySelector('form'),
respSituacao = document.getElementById('outSituacao')

// adicionando um evento ao botao submit do form
form.addEventListener('submit', (e) => {
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const velocidadePermitida = Number(form.inVelocidadePermitida.value),
    velocidadeDoCondutor = Number(form.inVelocidadeDoCondutor.value)

    // verificando a velocidade e criando a sitação

    // if...else... padrão
    // let situacao
    // if(velocidadeDoCondutor <= velocidadePermitida){
    //     situacao = "Sem Multa"
    // }else if(velocidadeDoCondutor <= (velocidadePermitida * 1.20)){
    //     situacao = "Multa Leve"
    // }else{
    //     situacao = "Multa Grave"
    // }

    // if...else... ternário
    const situacao = velocidadeDoCondutor <= velocidadePermitida ? `Sem Multa` : velocidadeDoCondutor <= (velocidadePermitida * 1.20) ? "Multa Leve" : "Multa Grave"
    // Mostrando valores no local de resposta.
    respSituacao.textContent = `Situação: ${situacao}`
})