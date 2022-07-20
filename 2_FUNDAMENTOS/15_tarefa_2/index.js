const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([
        {
            name: 'nome',
            message: 'nome'
        },
        {
            name: 'idade',
            message: 'idade'
        },
    ])
    .then((answers) => {
        const response = `O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos`
        console.log(chalk.bgYellow.black(response))
    })
    .catch((err) => {
        console.log(err)
    })