// mais de uma valor
const x = 23
const y = 'Gabriel'
const z = [1, 2]

console.log(x, y, z)

// contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

// variável entre string
console.log('O nome é %s, ele é estudante', y);

// limpando console
setTimeout(() => {
    console.clear();
  }, 2000);