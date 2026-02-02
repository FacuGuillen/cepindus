
const contenedorProductos = document.getElementById("contenedor-productos");

function renderizarProductos(listaProductos) {
    contenedorProductos.innerHTML = "";

    listaProductos.forEach(producto => { 
        const cardHTML = `
            <div class="col-12 col-md-6 col-lg-4 mb-4">
                
                <div class="card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  
                  <div class="bg-white p-3 text-center">
                      <img src="${producto.imagen}" class="card-img-top img-fluid" alt="${producto.titulo}" style="max-height: 200px; object-fit: contain;">
                  </div>
                  
                  <div class="card-body bg-light d-flex flex-column p-4">
                    
                    <h5 class="card-title fw-bold text-dark">${producto.titulo}</h5>
                    
                    <p class="card-text text-secondary small flex-grow-1">${producto.descripcion}</p>
                    
                    <div class="mt-3">
                        <a href="#" class="btn btn-danger text-white px-4 rounded-pill" style=" font-weight: 500;">
                            Ver más
                        </a>
                    </div>
    
                  </div>
                </div>
    
            </div>
        `;
        
        contenedorProductos.innerHTML += cardHTML;
    });
}


renderizarProductos(productos);