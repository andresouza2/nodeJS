import chalk from 'chalk'
import fs from 'fs'

function tratarErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há um arquivo no caminho especificado'));
}

async function pegarArquivo(caminhoDoArquivo) {
  try {
    const encoding = 'utf-8';
  const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
  console.log(chalk.green(texto));
  } catch(erro) {
    tratarErro(erro);
  } finally {
    console.log(chalk.yellow('operação concluída'));
  }
}

/* function pegarArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.promises
  .readFile(caminhoDoArquivo, encoding)
  .then((texto) => console.log(chalk.green(texto)))
  .catch((erro) => tratarErro(erro))
} */

/* function pegarArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8'
  fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
    if (erro) {
      tratarErro(erro);
    }
    console.log(chalk.green(texto));
  })
} */

pegarArquivo('./arquivos/texto1.md');

/* console.log(chalk.blue('vamos começar!'));

const paragrafo = 'Texto retornado por uma função'

function texto(string) {
  return string;
}

console.log(texto(paragrafo));
console.log(chalk.blue.bgWhite.bold('Alura'));
console.log(chalk.blue('curso', 'de', 'NodeJS'));
console.log(chalk.red('vermelho',
 chalk.underline.bgBlue('azul')));
 console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`); */
