
function updateText(element) {
    // Remove 'x' de todos os spans dentro da ul pai
    const buttons = element.parentElement.parentElement.querySelectorAll('button span');
    buttons.forEach(span => {
        span.textContent = '   ';
    });

    // Adiciona 'x' ao botão clicado
    element.querySelector('span').textContent = ' x ';
}
let currentNumber = localStorage.getItem('pdfNumber') || 0;
function PDF() {
    var line = document.querySelector('.line').style.display = 'none';

    window.print();

    localStorage.setItem('pdfNumber', ++currentNumber)
}
    document.title = `questionario_${currentNumber}`;
