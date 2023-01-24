function validarDescricao() {
  if (Nome.value.trim() === "") {
    Nome.style.background = "red";
    Nome.placeholder = "Preencha a descrição do produto!";
    addErro($("#Nome"));
  }
  

  else if (Email.value.trim() === "") {
    Nome.style.background = "white";
    Email.style.background = "red";
    Email.placeholder = "Preencha a descrição do produto!";
    addErro($("#Email"));
  }
  else if (Data.value.trim() === "") {
    Email.style.background = "white";
    Data.style.background = "red";
    Data.placeholder = "Preencha a descrição do produto!";
    addErro($("#Data"));
  }
  else if (Marca.value.trim() === "") {
    Data.style.background = "white";
    Marca.style.background = "red";
    Marca.placeholder = "Preencha a descrição do produto!";
    addErro($("#Marca"));
  }
  else if (Modelo.value.trim() === "") {
    Marca.style.background = "white";
    Modelo.style.background = "red";
    Modelo.placeholder = "Preencha a descrição do produto!";
    addErro($("#Modelo"));
  }
  else if (Valor.value.trim() === "") {
    Modelo.style.background = "white";
    Valor.style.background = "red";
    Valor.placeholder = "Preencha a descrição do produto!";
    addErro($("#Valor"));
  }
  else if (Ano.value.trim() === "") {
    Valor.style.background = "white";
    Ano.style.background = "red";
    Ano.placeholder = "Preencha a descrição do produto!";
    addErro($("#Ano"));
  }
  else if (Porcentagem.value >25 || Porcentagem.value.trim() === "") {
    Ano.style.background = "white";
    Porcentagem.style.background = "red";
    Porcentagem.placeholder = "Preencha a descrição do produto!";
    addErro($("#Porcentagem"));
  }
  else if (Porcentagem.value >=26 || Porcentagem.value.trim() === "") {
    Ano.style.background = "white";
    Porcentagem.style.background = "red";
    Porcentagem.value = "Preencha a descrição do produto!";
    addErro($("#Porcentagem"));}

    else{
      Porcentagem.style.background = "white";
    function calcular() {
      if (validarDescricao() && validarQuantidade() && validarPreco()) {
        var nTotal = parseFloat(unit.value) * parseInt(qtd.value);
        total.value = nTotal.toFixed(2);
      }
    }
  }
}
