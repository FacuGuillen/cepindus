// Usamos una ruta que suba un nivel si es necesario o 
// simplemente asegurate de cómo la llamás.
fetch('/components/navbar.html') // El "/" inicial intenta ir a la raíz del dominio
    .then(response => response.text())
    .then(data => {
        const placeholder = document.getElementById('navbar-placeholder');
        if (placeholder) {
            placeholder.innerHTML = data;
        }
    })
    .catch(error => console.error('Error cargando el navbar:', error));