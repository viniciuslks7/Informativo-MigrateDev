let contador = 1;
// Seleciona o lemento radio1 e torna ele ativo.
document.getElementById("radio1").checked = true;

// A cada 5s ele chama o setInterval executando seu conteúdo.
setInterval(function () {
  proxImg();
}, 5000);

// Função para passar as imagens.
function proxImg() {
  contador++;
  // Após o incremento, se o contador for maior que 4, o valor retorna para 1.
  if (contador > 4) {
    contador = 1;
  }
  // Pega o elemento radio + numero e ativa ele.
  document.getElementById("radio" + contador).checked = true;
}
