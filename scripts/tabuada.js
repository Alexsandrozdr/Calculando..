function tabuada() {
  let num = document.querySelector("#txtn");
  let tab = document.querySelector("#seltab");

  if (num.value.length == 0) {
    window.alert("Por favor, digite um numero!");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = ` ${n} X ${c} = ${num.value * c} `;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}

function limparTab() {
  document.getElementById("txtn").value = "";
  document.getElementById(
    "seltab"
  ).innerHTML = ` <option>Digite um número no campo acima!</option>`;
}
