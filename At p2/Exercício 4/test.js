function Calcular() {
    if (Ano.value >= 2010) {
        var a = parseFloat(Valor.value) * 0.0125;
        Resultado.value =  a.toFixed(2);
        sexo();

    }

    else if (Ano.value <= 2009 && Ano.value >= 2000) {
        var a = parseFloat(Valor.value) * 0.0175;
        Resultado.value =  a.toFixed(2);
        sexo();
    }
    else if (Ano.value <= 1999 && Ano.value >= 1980) {
        var a = parseFloat(Valor.value) * 0.0200;
        Resultado.value =  a.toFixed(2);
        sexo();

    }
    else {
        var a = parseFloat(Valor.value) * 0.0250;
        Resultado.value =  a.toFixed(2);
        sexo();

    }
    function sexo() {
        $(document).ready(function () {
            var value = $("input[type=radio][name=exampleRadios]:checked").val();
            alert(value)
            if (value === 'opcao1') {
                var b = parseFloat(Resultado.value)-(parseFloat(Resultado.value) * 0.05);
                Desconto.value = b;
                idade();
                
            }
            else {
                var b = parseFloat(Resultado.value)-(parseFloat(Resultado.value) * 0.010);
                Desconto.value = b;
                idade();
            }
        })
    };
    function idade() {
        if (Nascimento.value >= 1997) {
            var a = parseFloat(Valor.value) * 0.020;
            Idade.value =  a.toFixed(2);
        }
        else{

        }
    }

   
}
