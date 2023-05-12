const botoes = document.querySelectorAll("button");
botoes.forEach((bnt) => bnt.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const elementoBnt = document.getElementById(this.id);
  const categoria = elementoBnt.value;
  console.log(listalivrosnovos);
  let livrosFiltrados =
    categoria == "disponivel"
      ? filtrarPorDisponibilidade()
      : filtrarPorCategoria();
  criarElementos(livrosFiltrados);
  if (categoria == "disponivel") {
    const valorTotal = valorTotalLivros(livrosFiltrados);
    console.log(valorTotal);
    criarValorTotalNaTela(valorTotal);
  }
}
function filtrarPorDisponibilidade() {
  return livros.filter((listalivrosnovos) => listalivrosnovos.quantidade > 0);
}

function filtrarPorCategoria() {
  livros.filter((listalivrosnovos) => listalivrosnovos.categoria == categoria);
}

function criarValorTotalNaTela(valorTotal) {
  divValorTotal.innerHTML = `
  <div class="livros__disponiveis">
  <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `;
}
