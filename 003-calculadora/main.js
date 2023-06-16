function insert(num) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML += num
}

function clean() {
    let clear = document.getElementById('resultado');
    clear.innerHTML = ''
}

function clearLast() {
    let clearLast = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = clearLast.substring(0, clearLast.length - 1)
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}
