function formulario() {
    let form = document.querySelector('form');
    let container = document.querySelector('.container');
    let nome = document.querySelector('#nome').value;
    let mensalidade = document.querySelector('#mensalidade').value;
    let tempo = document.querySelector('#ano').value;

    if (container.style.display = 'none') {
        container.style.display = 'block';
    }

    // let composto = 0;
    // composto = mensalidade * Math.pow((1.02), tempo);

    // let conta = 0;
    // conta = composto * (tempo * 12);

    form.innerHTML = `Olá ${nome} voce guardando R$${mensalidade} todo mês, em ${tempo} anos, terá o valor de ${'undefined'} com juros compostos de 2% ao ano`

}                   
