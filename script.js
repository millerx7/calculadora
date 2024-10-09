function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    const resultFild = document.getElementById('result');
    resultFild.value = resultFild.value.slice(0, -1);
}

function calculateResult() {
    const resultFild = document.getElementById('result');
    try {
        resultFild.value = eval(resultFild.value);
    } catch (error) {
        resultFild.value = 'Erro';
    }
}







