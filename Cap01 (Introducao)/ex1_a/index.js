// Pedindo um número ao usuário e obtendo o valor posterior e anterior.
const numero = Number(prompt('Digite um número: '))
const posterior = numero + 1
const anterior = numero - 1
// Mostrando na tela os respectivos valores.
alert(`Número: ${numero}
Vizinhos: ${anterior} e ${posterior}`)