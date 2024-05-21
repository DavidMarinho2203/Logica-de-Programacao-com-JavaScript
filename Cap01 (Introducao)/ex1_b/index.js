// Obtendo valores
const valorDaConta = Number(prompt('Valor da conta R$: ')).toFixed(2)
const numeroDeCliente = Number(prompt('Número de cliente: '))
// calculando os valores por cliente.
const valorPorCliente = (valorDaConta / numeroDeCliente).toFixed(2)
// Mostrar os respectivos valores na tela.
alert(`Valor da conta R$: ${valorDaConta}
Número de cliente(s): ${numeroDeCliente}
Valor por cliente(s) R$: ${valorPorCliente}`)