function contar() {
  let inicio = document.querySelector("#txti");
  let fim = document.querySelector("#txtf");
  let passo = document.querySelector("#txtp");
  let res = document.querySelector("#res");
  if (
    inicio.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML =
      "Confira se todos os campos estão completos e tente navamente!";
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(inicio.value);
    let f = Number(fim.value);
    let p = Number(passo.value);
    if (p <= 0) {
      window.alert("Passo invalido! Considerando PASSO 1"), (p = 1);
    }
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F4C8}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F4C8}`;
      }
    }
  }
}

function limparForm() {
  document.getElementById("txti").value = "";
  document.getElementById("txtf").value = "";
  document.getElementById("txtp").value = "";
  document.getElementById("res").innerHTML = "Preparando A Contagem...";
}
