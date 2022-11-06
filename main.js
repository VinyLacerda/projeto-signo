
function send() {
    const signo = document.querySelector('div#signo')
    let data = document.querySelector('input#data').value.split("-")[2]
    let mes = document.querySelector('input#data').value.split("-")[1]
    let resultado = ''

    if (data >= 22 && mes == 12 || data <= 20 && mes <= 1) {
        resultado = `<b>Capricórnio<b>`
    } else if (data >= 21 && mes == 1 || data <= 18 && mes == 2) {
        resultado = `<b>Aquário<b>`
    } else if (data >= 19 && mes == 2 || data <= 20 && mes == 3) {
        resultado = `<b>Peixes<b>`
    } else if (data >= 21 && mes == 3 || data <= 20 && mes == 4) {
        resultado = `<b>Aries<b>`
    } else if (data >= 21 && mes == 4 || data <= 20 && mes == 5) {
        resultado = `<b>Touro<b>`
    } else if (data >= 21 && mes == 5 || data <= 20 && mes == 6) {
        resultado = `<b>Gêmeos<b>`
    } else if (data >= 21 && mes == 6 || data <= 22 && mes == 7) {
        resultado = `<b>Câncer<b>`
    } else if (data >= 23 && mes == 7 || data <= 22 && mes == 8) {
        resultado = `<b>Leão<b>`
    } else if (data >= 23 && mes == 8 || data <= 22 && mes == 9) {
        resultado = `<b>Virgem<b>`
    } else if (data >= 23 && mes == 9 || data <= 22 && mes == 10) {
        resultado = `<b>Libra<b>`
    } else if (data >= 23 && mes == 10 || data <= 21 && mes == 11) {
        resultado = `<b>Escorpião<b>`
    } else if (data >= 22 && mes == 11 || data <= 21 && mes == 12) {
        resultado = `<b>Escorpião<b>`
    }

    signo.innerHTML = `Seu signo é ${resultado}.`


}
