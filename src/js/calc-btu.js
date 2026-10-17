function calcularBTU() {

    const area = Number(document.getElementById('area').value);
    const pessoas = Number(document.getElementById('pessoas').value);
    const eletronicos = Number(document.getElementById('eletronicos').value);
    const sol = Number(document.getElementById('sol').value);

    if (area <= 0) {
        alert('Informe a área do ambiente.');
        return;
    }

    // Fórmula básica
    let btus = area * sol;

    // Pessoas extras (considerando 1 pessoa já incluída)
    if (pessoas > 1) {
        btus += (pessoas - 1) * 600;
    }

    // Eletrônicos
    btus += eletronicos * 600;

    // Arredondar para capacidades comerciais
    let capacidade;

    if (btus <= 9000) {
        capacidade = 9000;
    } else if (btus <= 12000) {
        capacidade = 12000;
    } else if (btus <= 18000) {
        capacidade = 18000;
    } else if (btus <= 24000) {
        capacidade = 24000;
    } else if (btus <= 30000) {
        capacidade = 30000;
    } else {
        capacidade = Math.ceil(btus / 1000) * 1000;
    }

    document.getElementById('valorBTU').innerText =
        capacidade.toLocaleString('pt-BR') + ' BTUs';

    document.getElementById('resultado').style.display = 'flex';
}
