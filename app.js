// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre) {
        amigos.push(nombre);
        input.value = ''; // Limpiar el campo de entrada
        actualizarListaAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos dos amigos para realizar el sorteo.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultados anteriores

    // Mezclar el array de amigos
    const amigosMezclados = mezclarArray([...amigos]);

    // Asignar a cada amigo un amigo secreto
    for (let i = 0; i < amigosMezclados.length; i++) {
        const amigoSecreto = amigosMezclados[(i + 1) % amigosMezclados.length];
        const li = document.createElement('li');
        li.textContent = `${amigosMezclados[i]} ➔ ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}

// Función para mezclar un array (algoritmo de Fisher-Yates)
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}