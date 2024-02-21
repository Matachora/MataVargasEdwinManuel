function generateRandomColor()
{
    let letras = "0123456789ABCDEF";
    let color = "#";
    for ( let i = 0; i < 6; i++ )
    {
        color += letras[ Math.floor( Math.random() * 16 ) ];
    }
    return color;
}
function changeBackgroundColor()
{
    document.body.style.backgroundColor=generateRandomColor();
}
setInterval( changeBackgroundColor, 1000 );