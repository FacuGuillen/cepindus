

// 1. Obtener ID de la URL
const params = new URLSearchParams(window.location.search);
const idProducto = params.get('id');

// 2. Buscar producto
const producto = productos.find(p => p.id == idProducto);

if (producto) {
    // --- LLENAR TEXTOS ---
    document.getElementById('detalle-titulo').innerText = producto.titulo;
    document.getElementById('detalle-descripcion').innerText = producto.detalle || producto.descripcion;

    // --- LLENAR LISTA DE CARACTERÍSTICAS ---
    const lista = document.getElementById('detalle-caracteristicas');
    lista.innerHTML = "";
    if (producto.caracteristicas) {
        producto.caracteristicas.forEach(item => {
            lista.innerHTML += `<li class="mb-2">✔ ${item}</li>`;
        });
    }

    // --- CONSTRUIR EL CARRUSEL ---
  

  const contenedorCarrusel = document.getElementById('contenedor-carrusel');

  // Verificamos si tiene el array 'imagenes'
  if (producto.imagenes && producto.imagenes.length > 0) {
      
      let indicadoresHTML = ""; // Aquí guardaremos los puntitos <button>
      let slidesHTML = "";      // Aquí guardaremos las fotos <img>
      
      // RECORREMOS LAS FOTOS
      producto.imagenes.forEach((img, index) => {
          
          // Lógica para que el PRIMERO (índice 0) esté activo
          const claseActive = index === 0 ? "active" : "";
          const ariaCurrent = index === 0 ? 'aria-current="true"' : "";

          // 1. CREAMOS LOS INDICADORES (Los puntitos de abajo)
          
          indicadoresHTML += `
              <button type="button" 
                      data-bs-target="#carruselEstetico" 
                      data-bs-slide-to="${index}" 
                      class="${claseActive}" 
                      ${ariaCurrent} 
                      aria-label="Slide ${index + 1}"></button>
          `;

          
          slidesHTML += `
              <div class="carousel-item ${claseActive}">
                  <img src="${img}" class="d-block w-100" alt="Foto ${index}" style="height: 450px; object-fit: contain;">
              </div>
          `;
      });

      // ARMAMOS EL CARRUSEL COMPLETO
      
      contenedorCarrusel.innerHTML = `
          <div id="carruselEstetico" class="carousel carousel-dark slide" data-bs-ride="carousel">
              
              <div class="carousel-indicators">
                  ${indicadoresHTML}
              </div>
              
              <div class="carousel-inner">
                  ${slidesHTML}
              </div>
              
              ${producto.imagenes.length > 1 ? `
                  <button class="carousel-control-prev" type="button" data-bs-target="#carruselEstetico" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Anterior</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carruselEstetico" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Siguiente</span>
                  </button>
              ` : ''}
          </div>
      `;

  } else {
      // SI SOLO TIENE 1 IMAGEN (Sin carrusel)
      contenedorCarrusel.innerHTML = `
          <img src="${producto.imagen}" class="img-fluid w-100" style="height: 450px; object-fit: contain;" alt="${producto.titulo}">
      `;
  }

} else {
    document.body.innerHTML = "<h1 class='text-center mt-5'>Producto no encontrado</h1>";
}