// 1. Obtener ID de la URL
const params = new URLSearchParams(window.location.search);
const idProducto = params.get('id');

// 2. Buscar producto
const producto = productos.find(p => p.id == idProducto);

if (producto) {
    // --- A. LLENAR TEXTOS ---
    const titulo = document.getElementById('detalle-titulo');
    const descripcion = document.getElementById('detalle-descripcion');
    if(titulo) titulo.innerText = producto.titulo;
    if(descripcion) descripcion.innerText = producto.detalle || producto.descripcion;

    // --- B. LLENAR CARACTERÍSTICAS ---
    const lista = document.getElementById('detalle-caracteristicas');
    if (lista) {
        lista.innerHTML = "";
        if (producto.caracteristicas) {
            producto.caracteristicas.forEach(item => {
                lista.innerHTML += `<li class="mb-2">✔ ${item}</li>`;
            });
        }
    }

    // --- C. CARRUSEL DE IMÁGENES ---
    const contenedorCarrusel = document.getElementById('contenedor-carrusel');
    
    if (contenedorCarrusel) {
        if (producto.imagenes && producto.imagenes.length > 0) {
            // TIENE VARIAS FOTOS -> ARMAMOS CARRUSEL
            let indicadoresHTML = "";
            let slidesHTML = "";
            
            producto.imagenes.forEach((img, index) => {
                const claseActive = index === 0 ? "active" : "";
                const ariaCurrent = index === 0 ? 'aria-current="true"' : "";
                
                indicadoresHTML += `<button type="button" data-bs-target="#carruselEstetico" data-bs-slide-to="${index}" class="${claseActive}" ${ariaCurrent} aria-label="Slide ${index + 1}"></button>`;
                
                slidesHTML += `
                    <div class="carousel-item ${claseActive}">
                        <img src="${img}" class="d-block w-100" alt="Foto ${index}" style="height: 450px; object-fit: contain;">
                    </div>`;
            });

            contenedorCarrusel.innerHTML = `
                <div id="carruselEstetico" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">${indicadoresHTML}</div>
                    <div class="carousel-inner">${slidesHTML}</div>
                    ${producto.imagenes.length > 1 ? `
                        <button class="carousel-control-prev" type="button" data-bs-target="#carruselEstetico" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Anterior</span></button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carruselEstetico" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Siguiente</span></button>
                    ` : ''}
                </div>`;
        } else {
            // SOLO UNA FOTO
            contenedorCarrusel.innerHTML = `<img src="${producto.imagen}" class="img-fluid w-100" style="height: 450px; object-fit: contain;" alt="${producto.titulo}">`;
        }
    }

    // --- D. PRODUCTOS RELACIONADOS ---
    const relacionados = productos.filter(p => p.categoria === producto.categoria && p.id !== producto.id);

    if (relacionados.length > 0) {
        const seccionRelacionados = document.getElementById('seccion-relacionados');
        const contenedorRelacionados = document.getElementById('contenedor-relacionados');

        if (seccionRelacionados && contenedorRelacionados) {
            seccionRelacionados.classList.remove('d-none');
            contenedorRelacionados.innerHTML = "";

            relacionados.forEach(rel => {
                contenedorRelacionados.innerHTML += `
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                            <div class="bg-white p-3 text-center">
                                <img src="${rel.imagen}" class="card-img-top img-fluid" alt="${rel.titulo}" style="max-height: 150px; object-fit: contain;">
                            </div>
                            <div class="card-body d-flex flex-column p-3">
                                <h6 class="card-title fw-bold text-dark" style="font-size: 1rem;">${rel.titulo}</h6>
                                <a href="detalles-productos.html?id=${rel.id}" class="btn btn-danger text-white mt-auto rounded-pill btn-sm">Ver más</a>
                            </div>
                        </div>
                    </div>`;
            });
        }
    }

} else {
    document.body.innerHTML = "<div class='container mt-5 text-center'><h1>Producto no encontrado</h1><a href='index.html' class='btn btn-primary'>Volver</a></div>";
}