// Função para gerar um número aleatório entre min (incluído) e max (excluído)
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Seleciona o elemento body
var body = document.querySelector('body');

// Loop para adicionar 100 gotas de chuva com números aleatórios
for (var i = 0; i < 200; i++) {
  // Cria uma nova div para a gota de chuva
  var raindrop = document.createElement('div');
  // Adiciona a classe "raindrop" à div
  raindrop.classList.add('raindrop');
  // Define o atributo "--n" com um número aleatório entre 0 e 200
  raindrop.style.setProperty('--n', randomInt(0, 200));
  // Define a posição horizontal (left) da gota de chuva
  raindrop.style.left = randomInt(0, window.innerWidth) + 'px';
  // Adiciona a gota de chuva ao corpo da página
  body.appendChild(raindrop);
}