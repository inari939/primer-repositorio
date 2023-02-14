console.log ('hola mundo')

let mensaje= 'hola!'

alert (mensaje)

let nombre= prompt('ingrese su nombre para darle la bienvenida')
alert('bienvedidx '+ nombre +'!')


//ocultar articulos//
document.getElementById('boton-ocultar').addEventListener('click', function(){
    document.getElementById('articulos').style.display = 'none'
});


//mostrar articulos//
document.getElementById('boton-mostrar').addEventListener('click', function(){
    document.getElementById('articulos').style.display = 'flex'
});