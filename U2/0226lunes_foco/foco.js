function cambiar()
{
    let boton = document.getElementById('boton');
    let foco = document.getElementById('foco');
    let botonStatus = boton.innerHTML;
    if ( botonStatus == "Encender" )
    {
        botonStatus = "Apagar";
        boton.innerHTML = botonStatus;
        foco.src = "focoPic/turnedOn.jpeg"
    }
    else
    {
        botonStatus = "Encender";
        boton.innerHTML = botonStatus;
        foco.src = "focoPic/turnedOff.jpeg"
    }
}