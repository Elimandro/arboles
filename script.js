// Variables globales para almacenar datos de donaciones y árboles plantados
let totalDonated = parseFloat(localStorage.getItem('totalDonated')) || 0; // Total de dinero donado
let treesPlanted = Math.floor(totalDonated); // Total de árboles plantados
const goal = 1000; // Objetivo de árboles a plantar

// Función para actualizar la barra de progreso y los contadores
function updateProgress() {
    let progressPercent = (treesPlanted / goal) * 100; // Calcular el porcentaje de progreso

    // Asegúrate de que no supere el 100%
    if (progressPercent > 100) {
        progressPercent = 100;
    }

    // Actualizar la barra de progreso
    const progressBar = document.getElementById('progressBar');
    progressBar.style.width = progressPercent + '%';

    // Actualizar los textos en la interfaz
    document.getElementById('progressText').innerText = `${treesPlanted} árboles plantados`;
    document.getElementById('totalDonated').innerText = totalDonated.toFixed(2);
}

// Llamar a la función para actualizar la interfaz cuando se carga la página
document.addEventListener('DOMContentLoaded', updateProgress); // Asegúrate de que el DOM esté completamente cargado

// Función para redirigir a las páginas de pago
function redirectTo(page) {
    window.location.href = page; // Redirigir a la página deseada
}

// Función para manejar donaciones
function donate(amount) {
    totalDonated += amount; // Aumenta el total donado
    localStorage.setItem('totalDonated', totalDonated); // Guarda el nuevo total en localStorage
    treesPlanted = Math.floor(totalDonated); // Actualiza el total de árboles plantados
    updateProgress(); // Actualiza la interfaz
}

// Agregar listener para el scroll
window.addEventListener('scroll', function() {
    document.body.classList.toggle('scrolled', window.scrollY > 50);
});
