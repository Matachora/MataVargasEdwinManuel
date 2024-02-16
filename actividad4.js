function act1()
    {
        let nombre = document.getElementById("nombre").value;
        nombre.innerHTML = "<h1>Hola " + nombre + "</h1>";
        let text = document.getElementById("act1text").innerHTML = nombre;
    }

    function act2()
    {
        let n1 = parseInt(document.getElementById("act2n1").value);
        let n2 = parseInt(document.getElementById("act2n2").value);
        let sum = n1 + n2;
        let r = document.getElementById("act2result").innerHTML = sum;
    }

    function act3()
    {
        let n1 = parseInt(document.getElementById("act3n1").value);
        let r = document.getElementById("act3result").innerHTML = ((n1**2)/2);
    }
    function act6()
    {
        let n1 = parseInt(document.getElementById("act6n1").value);
        let r = document.getElementById("act6result");
        if (n1 === 0)
        {
            r.innerHTML = "EL CERO";
        }
        else if (n1 % 2 === 0)
        {
            r.innerHTML = "PAR";
        }
        else
        {
            r.innerHTML = "IMPAR";
        }
    }