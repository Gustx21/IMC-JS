function calcularIMC() {
    const altura = window.document.getElementById('altura').value;
    const peso = window.document.getElementById('peso').value;
    
    detectarError(altura, peso);

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    exibirIMC(valorIMC)
};

function detectarError(altura, peso) {
    // Mensagem de erro para valores inválidos
    if (altura > 2.20 || peso > 200) {
        alert("Insira um valor válido.");
        return;
    };
}

function exibirIMC(valorIMC) {
    const resultado = window.document.getElementById('resultado');
    let grau;

    if (valorIMC < 18.5) {
        grau = 'abaixo do peso.';
    } else if (valorIMC < 25) {
        grau = 'com peso ideal. Parabéns!';
    } else if (valorIMC < 30) {
        grau = 'levemente acima do peso.';
    } else if (valorIMC < 35) {
        grau = 'com obesidade grau I.';
    } else if (valorIMC < 40) {
        grau = 'com obesidade grau II.';
    } else {
        grau = 'com obesidade grau III. Cuidado!!!';
    }

    resultado.textContent = `Seu IMC é ${valorIMC} e você está ${grau}`;
}