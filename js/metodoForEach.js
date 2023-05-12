const divElementos = document.getElementById("livros");
const divValorTotal = document.getElementById("valor_total_livros_disponiveis");

function criarElementos(listaLivros) {
  divElementos.innerHTML = "";

  listaLivros.forEach((element) => {
    const disponibilidade = element.quantidade > 0 ? "livro_images" : "livro_imagens indisponivel" ;
    divElementos.innerHTML += `
        <div class="livro">
      <img class="${disponibilidade}" src="${element.imagem}" />
      <h2 class="livro__titulo">
        ${element.titulo}
      </h2>
      <p class="livro__descricao">${element.autor}</p>
      <p class="livro__preco" id="preco">R$${element.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${element.categoria}</span>
      </div>
    </div>
        `;
  });
}
