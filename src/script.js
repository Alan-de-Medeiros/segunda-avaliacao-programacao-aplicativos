document.getElementById('cadastrar').addEventListener('click', function(event) {
    event.preventDefault(); 

    const marca = document.getElementById('carro-marca').value;
    const modelo = document.getElementById('carro-modelo').value;
    const ano = document.getElementById('carro-ano').value;
    const placa = document.getElementById('carro-placa').value;
    
    const img = document.createElement('img');
                img.src = 'https://st.depositphotos.com/1163717/3353/i/450/depositphotos_33536719-stock-photo-yellow-sports-car.jpg'
                img.alt = ''
    


    const li = document.createElement('li');
    li.textContent = `${marca} ${modelo} (${ano}) - Placa: ${placa}`
    li.appendChild(img);
    
    
    document.getElementById('lista-veiculo').appendChild(li);

    
    document.getElementById('div-carro').reset();
});
