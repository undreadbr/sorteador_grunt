document.addEventListener('DOMContentLoaded',function(){
    document.getElementById('form-sorteador').addEventListener('submit',function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatório =Math.random()*numeroMaximo;
        numeroAleatório = Math.floor(numeroAleatório + 1);
        document.getElementById('resultado-valor').innerText= numeroAleatório;
        document.querySelector('.resultado').style.display ='block';
    })
})