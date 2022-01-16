import chalk from 'chalk'

function promessa(bool) {
  const x = bool;
  return new Promise((resolve, reject) => {
    if (!x) {
      reject(new Error('Falha na promessa'));
    }
    resolve('sucesso na promessa')
  });
}

function exibeResposta(textoResult) {
  console.log(chalk.green(textoResult));
}

promessa(true)
.then((texto) => exibeResposta(texto));