const chalk = require('chalk')

const nota = 5

if (nota >= 7) {
    console.log(chalk.green('Parabéns, você passou!'));
  } else {
    console.log(chalk.bgRed('Você precisa fazer a prova final!'));
  }