let helados = [];
let divi = document.getElementById("bocas")
const storedData = localStorage.getItem("Helados");

if (storedData) {
    try {
        helados = JSON.parse(storedData);
    } catch (error) {
        console.error("Error al analizar los datos del almacenamiento local:", error);
        localStorage.removeItem("Helados");
    }
}

function renderHelados() {
    divi.innerHTML = ""; 
    helados.forEach(helado => {
        divi.innerHTML += `<ul><li>${helado}</li></ul>`;
    });
}

renderHelados();

const boton = document.getElementById("enviarBochas");
const valueElement = document.getElementById("numeroBochas");

boton.addEventListener("click", () => {
    const nuevoHelado = valueElement.value.trim(); 

    if (nuevoHelado !== "") {
        if (helados.includes(nuevoHelado)) {
            alert("¡Gusto repetido!");
            return;
        }

        helados.push(nuevoHelado);

        renderHelados();

        localStorage.setItem("Helados", JSON.stringify(helados));

        valueElement.value = "";
    }
});