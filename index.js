//Array may not be used to contain the binary digits : Arrays não podem ser usados para conter os numeros binarios
//User can enter up to 8 binary digits in one input field
//User must be notified if anything other than a 0 or 1 was entered
//User views the results in a single output field containing the decimal (base 10) equivalent of the binary number that was entered


// TO DO LIST
// 1 - Usuario coloca a informação no input
// 2 - Usuario clica no botão
// 3 - Informação é validada se é binario
// ** Informação do usuario vai para o "banco de dados" (BONUS) **
// 4 - Binario é convertido para decimal
// 5 - Binario e o decimal são apresentados na tela

var adicionarBinario = document.querySelector(".add_button");

adicionarBinario.addEventListener('click', function() {
    var binario = document.querySelector('#binario').value;
    var verificaBinario = true;
    var converter = '';
    
    for(var i = 0; i < binario.length; i++) {
        if((binario[i] === '1') || (binario[i] === '0')) {
            converter += binario[i];

        } else {
            verificaBinario = false;
            break;
        }
    }

    if(verificaBinario === false){
        var section = document.querySelector(".adiciona-binario");
        var mensagem = numeroInvalido("Valor inválido", "p", "naoBinario");
        section.appendChild(mensagem);
    } else {
        //Chamando tabela de convertidos
        var p = document.querySelector(".naoBinario");
        
        if(p) {
            p.remove();
        }

        tabela = document.querySelector(".tabela-convertidos");
        var decimal = bin2dec(converter);
        var novaTr = adicionarConversao(decimal, converter);

        tabela.appendChild(novaTr);
        
    }

});

// ----------------------------- FUNCTIONS -----------------------------

function bin2dec (binario) {
    var decimal = 0;
    var lenght = binario.length - 1;

    console.log("Tamanho: " + lenght)
    for (var i = 0; i < binario.length; i++){
        if(binario[i] != '0') {
            decimal += parseInt((binario[i] * (2 ** lenght)));
            lenght -= 1;
        } else {
            lenght -= 1;
        }

    }
    return decimal;
}


function numeroInvalido(mensagem, elementoHTML, classe) {
    
    var newElement = document.createElement(elementoHTML);
    newElement.classList.add(classe);
    newElement.textContent = mensagem;
    return newElement;

}

function adicionarConversao(decimal, binario) {

    var numerosTr = document.createElement("tr");
    var decimalTd = document.createElement("td");
    decimalTd.textContent = decimal;
    var binarioTd = document.createElement("td");
    binarioTd.textContent = binario;

    numerosTr.appendChild(binarioTd);
    numerosTr.appendChild(decimalTd);

    return numerosTr;
}