var ano_veiculo
var sex
var idad

function validarDescricao() {
  console.log("iniciou função")
  if (Nome.value.trim() === "") {
    Nome.style.background = "red";
    Nome.placeholder = "Preencha a descrição do produto!";

  }
  else if (Email.value.trim() === "") {
    Nome.style.background = "white";
    Email.style.background = "red";
    Email.placeholder = "Preencha a descrição do produto!";

  }
  else if (Nascimento.value.trim() === "" || Nascimento.value < 1901 || Nascimento.value > 2001) {
    Email.style.background = "white";
    Nascimento.style.background = "red";
    Nascimento.placeholder = "Preencha a descrição do produto!";

  }
  else if (Marca.value.trim() === "") {
    Nascimento.style.background = "white";
    Marca.style.background = "red";
    Marca.placeholder = "Preencha a descrição do produto!";

  }
  else if (Modelo.value.trim() === "") {
    Marca.style.background = "white";
    Modelo.style.background = "red";
    Modelo.placeholder = "Preencha a descrição do produto!";

  }
  else if (Valor.value.trim() === "" || Valor.value < 0) {
    Modelo.style.background = "white";
    Valor.style.background = "red";
    Valor.placeholder = "Preencha a descrição do produto!";

  }
  else if (Ano.value.trim() === "") {
    Valor.style.background = "white";
    Ano.style.background = "red";
    Ano.placeholder = "Preencha a descrição do produto!";

  }
  else if (Porcentagem.value > 25 || Porcentagem.value.trim() === "") {
    Ano.style.background = "white";
    Porcentagem.style.background = "red";
    Porcentagem.placeholder = "Preencha a descrição do produto!";
  }

  else {
    Porcentagem.style.background = "white";
    Nome.style.background = "white";
    Email.style.background = "white";
    Nascimento.style.background = "white";
    Marca.style.background = "white";
    Modelo.style.background = "white";
    Valor.style.background = "white";
    Ano.style.background = "white";
    Calcular();
  }
}
/*função calcular */
function Calcular() {
  console.log("entrou no if do calcular")
  if (Ano.value >= 2010) {
    var a = parseFloat(Valor.value) * 0.0125;
    Resultado.value = a;
    ano_veiculo= a;
    sexo();
  }

  else if (Ano.value <= 2009 && Ano.value >= 2000) {
    var a = parseFloat(Valor.value) * 0.0175;
    Resultado.value = a;
    ano_veiculo= a;
    sexo();
  }
  else if (Ano.value <= 1999 && Ano.value >= 1980) {
    var a = parseFloat(Valor.value) * 0.0200;
    Resultado.value = a;
    ano_veiculo= a;
    sexo();

  }
  else {
    var a = parseFloat(Valor.value) * 0.0250;
    Resultado.value = a;
    ano_veiculo= a;
    sexo();

  }
}
function sexo() {
  console.log("entrou no if do sexo")

  $(document).ready(function () {
    var value = $("input[type=radio][name=exampleRadios]:checked").val();
    if (value === 'opcao1') {
      var b = parseFloat(Resultado.value) * 0.005;
      Desconto.value = b;
      sex =b;
      idade();
    }
    else {
      var b = parseFloat(Resultado.value) * 0.010;
      Desconto.value = b;
      sex =b;
      idade();
    }
  })
};
function idade() {
  console.log("entrou em idade")

  if (Nascimento.value >= 1990 ||Nascimento.value <=1960 ) {
    var c = parseFloat(Valor.value)*0.20;
    Idade.value = c.toFixed(2);
    console.log("entrou no if da idade")
    console.log(c)
    idad =c;
    total();

  }
  else {
    console.log("entrou no else da idade")
    console.log(c)
    idad =c;
    total();


  }
}
function total(){
  var d = ((parseFloat(ano_veiculo)+parseFloat(sex)+parseFloat(idad))*Porcentagem.value)/100
  Total.value = d.toFixed(2)

}


