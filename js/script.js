function calcularIMC() {
    const nome = window.document.getElementById('nome').value;
    const altura = window.document.getElementById('altura').value;
    const peso = window.document.getElementById('peso').value;
    
    // Mensagem de erro para valores inválidos
    if (altura > 2.20 || peso > 200 || /[0-9]/.test(nome)) {
        alert("Insira um valor válido.");
        return;
    };

    const valorIMC = (peso / (altura * altura)).toFixed(1);

    exibirIMC(nome, valorIMC)
};

function exibirIMC(nome, valorIMC) {
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

    resultado.textContent = `Olá, ${nome}! Seu IMC é ${valorIMC} e você está ${grau}`;
}