import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jogar() {
  console.clear();
  const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  console.log('\nTente adivinhar o número entre 1 e 10.');

  function perguntar() {
    rl.question('Digite seu palpite: ', (resposta) => {
      const palpite = Number(resposta);

      if (isNaN(palpite) || palpite < 1 || palpite > 10) {
        console.log('Por favor, digite um número válido entre 1 e 10.');
        perguntar();
        return;
      }

      if (palpite === numeroSecreto) {
        console.log('Parabéns! Você acertou!');
        perguntarJogarNovamente();
      } else {
        console.log('Errado! Tente novamente.');
        perguntar();
      }
    });
  }

  function perguntarJogarNovamente() {
    rl.question('Quer jogar de novo? (s/n): ', (resposta) => {
      const respostaLower = resposta.trim().toLowerCase();
      if (respostaLower === 's' || respostaLower === 'sim') {
        jogar();
      } else if (respostaLower === 'n' || respostaLower === 'não' || respostaLower === 'nao') {
        console.clear();
        console.log('Obrigado por jogar! Até a próxima!');
        rl.close();
      } else {
        console.log('Por favor, responda com "s" ou "n".');
        perguntarJogarNovamente();
      }
    });
  }

  perguntar();
}

jogar();
