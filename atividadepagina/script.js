function formulario() {
    let form = document.querySelector('form'); 
    let container = document.querySelector('.container');
    let nome = document.querySelector('#nome').value;
    let mensalidade = document.querySelector('#mensalidade').value;
    let tempo = document.querySelector('#ano').value; 
    
    if (container.style.display = 'none'){
        container.style.display = 'block';
    }
     
   
    let montante = mensalidade * (Math.pow((1.02), tempo));
    form.innerHTML = `Olá ${nome} voce guardando R$${mensalidade} todo mês, em ${ano.value} anos, terá o valor de ${montante.toFixed(2)} com juros compostos de 2% ao ano`

}
