let num = document.querySelector("#fnum");
let lista = document.querySelector("#flist");
let res = document.querySelector("#resultado");
let valores = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}
function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    valores.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `valor ${num.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor invalido ou já existente na lista");
  }
  num.value = "";
  num.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("Adicione valores antes de finalizar!");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / total;
    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O número de maior valor foi ${maior}.</p>`;
    res.innerHTML += `<p>O número de menor valor foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}. </p>`;
    res.innerHTML += ` <p>A média entre os numeros é de: ${media} </p> `;
  }
}
