// Función para cargar contenido dinámico
function loadPage(page) {
    let content = document.getElementById('content');

    switch (page) {
        case 'home':
            content.innerHTML = `<h1>Bienvenido a mi sitio web</h1>
                                 <p>Haz clic en el menú para explorar las secciones.</p>`;
            break;
        case 'about':
            fetch('about.html')
                .then(response => response.text())
                .then(data => content.innerHTML = data)
                .catch(error => console.error('Error al cargar la página:', error));
            break;
        case 'contact':
            fetch('contact.html')
                .then(response => response.text())
                .then(data => content.innerHTML = data)
                .catch(error => console.error('Error al cargar la página:', error));
            break;
        case 'gallery':
            fetch('gallery.html')
                .then(response => response.text())
                .then(data => content.innerHTML = data)
                .catch(error => console.error('Error al cargar la página:', error));
            break;
    }
}
