$(document).ready(function(){
  $('.center').slick({
    centerMode: true,           // Destaca el del medio
    centerPadding: '60px',      // Cuánto se ve de los costados
    slidesToShow: 3,            // PC: Se ven 3
    autoplay: true,             // Se mueve solo
    autoplaySpeed: 2000,        // Velocidad (2 segundos)
    arrows: true,               // Flechas en PC
    dots: true,                 // Puntitos abajo (opcional)
    
    responsive: [
      {
        breakpoint: 992,        // Laptops chicas / Tablets grandes
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2       // <--- CAMBIO: Aquí bajamos a 2
        }
      },
      {
        breakpoint: 768,        // Tablets
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1       // <--- CAMBIO: Tablet modo vertical o celular grande
        }
      },
      {
        breakpoint: 480,        // Celulares
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '20px', // Menos padding para que entre bien la card
          slidesToShow: 1       // Celular: 1 sola card
        }
      }
    ]
  });
});