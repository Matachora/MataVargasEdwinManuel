const escuelas = ['Cecytem', 'Conalep', 'Cetmar'];



let selectEscuelas = document.getElementById('userSchool');

escuelas.forEach(function(escuela) {
    let option = document.createElement('Option');
    option.value = escuela;
    option.innerHTML = escuela;
    selectEscuelas.add(option);
});

selectEscuelas.addEventListener("change", () => {
    const carreras = [
        ['Carrera 1', 'Carrera 2', 'Carrera 3'],
        ['Carrera A', 'Carrera B', 'Carrera C'],
        ['Carrera I', 'Carrera II', 'Carrera III']
    ];
    const index = selectEscuelas.selectedIndex;
    let selectCarrera = document.getElementById('userCareer');
    selectCarrera.innerHTML = '';
    carreras[index].forEach(function(carrera) {
        let option = document.createElement('Option');
        option.value = carrera;
        option.innerHTML = carrera;
        selectCarrera.add(option);
    });
});

document.getElementById("form1").addEventListener("submit", function(event) {
    event.preventDefault(); //para que no se envie

    let userName = document.getElementById("userName").value;
    let userPhone = document.getElementById("userPhone").value;
    let userMail = document.getElementById("userMail").value;
    let userSchool = document.getElementById("userSchool").value;
    let userCareer = document.getElementById("userCareer").value;

    let outputSection = document.getElementById("outputSection");
    //solo funciona con backSticks
    outputSection.innerHTML = `
        <h2>Datos del Formulario</h2>
        <p><strong>Nombre:</strong> ${userName}</p>
        <p><strong>Teléfono:</strong> ${userPhone}</p>
        <p><strong>Correo:</strong> ${userMail}</p>
        <p><strong>Escuela:</strong> ${userSchool}</p>
        <p><strong>Carrera:</strong> ${userCareer}</p>
    `;
});
