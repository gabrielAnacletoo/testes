// DELETANDO E ADICIONANDO ITENS E UM OBJETO

let onibus = {
    rodas: 8,
    passageiros: 40,
    portas: 2,
}

delete onibus.rodas;
onibus.janelas = 20;
console.log(onibus);
console.log(onibus.janelas);

