const bntOrdenar = document.getElementById("btnOrdenarPorPreco");
bntOrdenar.addEventListener("click", ordenarlivros);

function ordenarlivros() {
  let livrosOrdenados = listalivrosnovos.sort((a,b)=>a.preco-b.preco);
  criarElementos(livrosOrdenados);
}
