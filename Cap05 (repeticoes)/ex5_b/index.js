// Obtendo o form e local de resposta
const form = document.querySelector('form'),
respPrevisao = document.getElementById('respPrevisaoDeChinchilas')

// adicionando evento no submit do form
form.addEventListener('submit', (e) => {
    // usado para não recarregar a página
    e.preventDefault()

    // obtendo valores mandado pelo form
    const numeroChinchilas = form.inChinchilas.value,
    anos = form.inAnos.value

    let chinchilas = numeroChinchilas
    let textPrevisao = ""
    // repetindo e somando todos os chinchilas até chegar na quantidade de anos exigida.
    for (let i = 0; i < anos; i++) {
        textPrevisao += `${1 + i}° Ano: ${chinchilas} Chinchilas\n`
        chinchilas *= 3
    }

    // monstrando os valores no local de resposta
    respPrevisao.textContent = textPrevisao
})