const productos = [
    {
      id: 1,
      categoria: "modulares",
      titulo: "Cepillo Modulares",
      descripcion: "blablabla",
      mostrarEnHome: true,
      imagen: "../image/categoria/cepillos/modulares/WhatsApp Image 2026-03-12 at 11.02.24 AM.jpeg",
      detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
      caracteristicas: [ 
        "Cuerpo de aluminio extruido.",
        "Filamentos de alta densidad.",
        "Montaje en caras de 8mm o 10mm.",
        "Ángulos disponibles: 90° o 180°."
        ],
      imagenes: [
        "../image/categoria/cepillos/modulares/WhatsApp Image 2026-03-12 at 11.02.23 AM.jpeg",
        "../image/categoria/cepillos/modulares/Cepillo 10a.png",
        "../image/categoria/cepillos/modulares/Gemini_Generated_Image_71lncr71lncr71ln (1).png", 
        
    ],
      
    },
    {
      id: 2,
      categoria: "media-cania",
      titulo: "Cepillo Media Caña",
      descripcion: "media caña...",
      mostrarEnHome: true,
      imagen: "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_55722t55722t5572.png",
      detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
      caracteristicas: [ 
        "Cuerpo de aluminio extruido.",
        "Filamentos de alta densidad.",
        "Montaje en caras de 8mm o 10mm.",
        "Ángulos disponibles: 90° o 180°."
        ],
      imagenes: [
        "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_55722t55722t5572.png", 
        "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_8hee8j8hee8j8hee.png",
        "../image/categoria/cepillos/media-cania/media.jpeg",
    ],
    },
    {
      id: 3,
      categoria: "construcciones-especiales",
      titulo: "Construcciones Especiales",
      descripcion: "construcciones especiales...",
      mostrarEnHome: true,
      imagen: "../image/categoria/cepillos/construcciones-especiales/Cepillo 1a.png",
      detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
      caracteristicas: [ 
        "Cuerpo de aluminio extruido.",
        "Filamentos de alta densidad.",
        "Montaje en caras de 8mm o 10mm.",
        "Ángulos disponibles: 90° o 180°."
        ],
      imagenes: [
        "../image/categoria/cepillos/construcciones-especiales/Cepillo 1a.png", 
        "../image/categoria/cepillos/construcciones-especiales/Cepillo 3a.png",
        "../image/categoria/cepillos/construcciones-especiales/Cepillo 13a.png",
        "../image/categoria/cepillos/construcciones-especiales/Cepillo 14a.png",
    ],
    },
    {
        id: 4,
        categoria: "lineal",
        titulo: "Cepillos Lineales",
        descripcion: "lineales...",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/lineales/Cepillo 16a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
        "Cuerpo de aluminio extruido.",
        "Filamentos de alta densidad.",
        "Montaje en caras de 8mm o 10mm.",
        "Ángulos disponibles: 90° o 180°."
        ],
        imagenes: [
          "../image/categoria/cepillos/lineales/Cepillo 16a.png", // Foto 1
          "../image/categoria/cepillos/lineales/Cepillo 20a.png", // Foto 2
          "../image/categoria/cepillos/lineales/Cepillo 6a.png",
          "../image/categoria/cepillos/lineales/Cepillo 8a.png"
      ],
      },
      { 
        id: 5,
        categoria: "perfil-l",
        titulo: "Cepillos Perfil L",
        descripcion: "Cepillo perfil L...",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/perfil-l/Cepillo 18b.png",
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/perfil-l/Cepillo 18b.png", // Foto 1
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_11o3n511o3n511o3.png", // Foto 2
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_f49knmf49knmf49k.png",
      ], 
      },


      {
        id: 6,
        categoria: "tipo-placa",
        titulo: "Cepillos Tipo Placa",
        descripcion: "Cepillos Tipo Placa...",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/tipo-placa/Cepillo16a.png",
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/tipo-placa/Cepillo16a.png", // Foto 1
          "../image/categoria/cepillos/tipo-placa/Cepillo17a.png", // Foto 2
          "../image/categoria/cepillos/tipo-placa/Cepillo15a.png",
      ], 
      },
      {
        id: 7,
        categoria: "circulares",
        titulo: "Cepillos Circulares",
        descripcion: "Circulares...",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/circulares/Cepillo 7a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/circulares/Cepillo 7a.png", // Foto 1
          "../image/categoria/cepillos/circulares/Cepillo 9c.png", // Foto 2
          "../image/categoria/cepillos/circulares/Cepillo 19b.png",
      ], 
      },
      {
        id: 8,
        categoria: "banda-lineal",
        titulo: "Cepillos Banda Lineal",
        descripcion: "Banda Lineal...",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/banda-lineal/Cepillo1a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/banda-lineal/Cepillo1a.png", // Foto 1
          "../image/categoria/cepillos/banda-lineal/Cepillo2a.png", // Foto 2
          "../image/categoria/cepillos/banda-lineal/cepillo3a.png",
      ], 
      },

      {
        id: 9,
        categoria: "retorcidos",
        titulo: "Cepillos Retorcidos",
        descripcion: "Estos incluyen todos los cepillos fabricados a partir del alambre retorcido como baquetas, pinceles mecánicos, limpia...",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/retorcidos/Cepillo 2a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/retorcidos/Cepillo 2a.png", // Foto 1
          "../image/categoria/cepillos/retorcidos/Cepillo 5a.png", // Foto 2
          "../image/categoria/cepillos/retorcidos/Cepillo 11e.jpg",
      ], 
      },
      {
        id: 10,
        categoria: "hogar",
        titulo: "Cepillos de Hogar",
        descripcion: "Hogar",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/hogar/asd.jpeg" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/hogar/asd.jpeg", // Foto 1
          "../image/categoria/cepillos/hogar/personal4.png", // Foto 2
          "../image/categoria/cepillos/hogar/WhatsApp Image 2026-03-10 at 9.19.40 PM.jpeg",
      ], 
      },
      {
        id: 11,
        categoria: "con-mango",
        titulo: "Cepillos con Mango",
        descripcion: "Cepillos con mango...",
        mostrarEnHome: true,
        imagen: "../image/categoria/cepillos/con-mango/Cepillo 12a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/con-mango/Cepillo 12a.png", // Foto 1
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_6vmr086vmr086vmr.png", // Foto 2
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_kd0vu2kd0vu2kd0v.png",
      ], 
      },



// CEPILLOS MODULARES MINI CARDS
      {
        id: 12,
        categoria: "modulares",
        titulo: "Cepillos Modular AAA",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/modulares/Cepillo 10a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/modulares/Cepillo 10a.png",
          "../image/categoria/cepillos/modulares/Cepillo 10b.png", 
          "../image/categoria/cepillos/modulares/Cepillo 10c.png",
      ],
      },

      {
        id: 13,
        categoria: "modulares",
        titulo: "Cepillos Modular BBB",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/modulares/Gemini_Generated_Image_71lncr71lncr71ln (1).png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/modulares/Gemini_Generated_Image_71lncr71lncr71ln (1).png",
          "../image/categoria/cepillos/modulares/Gemini_Generated_Image_kicsglkicsglkics.png", 
          "../image/categoria/cepillos/modulares/Gemini_Generated_Image_u34b01u34b01u34b.png",
      ],
      },
      {
        id: 14,
        categoria: "modulares",
        titulo: "Cepillos Modular CCC",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/modulares/Gemini_Generated_Image_uttzukuttzukuttz.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/modulares/Gemini_Generated_Image_uttzukuttzukuttz.png",
          "../image/categoria/cepillos/modulares/WhatsApp Image 2026-03-12 at 11.02.23 AM.jpeg", 
          "../image/categoria/cepillos/modulares/WhatsApp Image 2026-03-12 at 11.02.24 AM.jpeg",
      ],
      },

     

      // CEPILLOS MEDIA CAÑA MINI CARDS
      {
        id: 15,
        categoria: "media-cania",
        titulo: "Cepillos Media Caña AAA",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_1lluqg1lluqg1llu.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_1lluqg1lluqg1llu.png",
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_8hee8j8hee8j8hee.png", 
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_ira34iira34iira3.png",
      ],
      },

      {
        id: 16,
        categoria: "media-cania",
        titulo: "Cepillos Media Caña BBB",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_55722t55722t5572.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_55722t55722t5572.png",
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_ihrghnihrghnihrg.png", 
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_ntpkk9ntpkk9ntpk.png",
      ],
      },

      {
        id: 17,
        categoria: "media-cania",
        titulo: "Cepillos Media Caña CCC",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_oorx2oorx2oorx2o.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_oorx2oorx2oorx2o.png",
          "../image/categoria/cepillos/media-cania/Gemini_Generated_Image_q6nshkq6nshkq6ns.png", 
          "../image/categoria/cepillos/media-cania/media.jpeg",
      ],
      },

      //MINI CARDS CONSTRUCCIONES ESPECIALES

      {
        id: 18,
        categoria: "construcciones-especiales",
        titulo: "Cepillos Construcciones Especiales AAA",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/construcciones-especiales/Cepillo 1a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 1a.png",
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 1b.png", 
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 1c.png",
      ],
      },

      {
        id: 19,
        categoria: "construcciones-especiales",
        titulo: "Cepillos Construcciones Especiales BBB",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/construcciones-especiales/Cepillo 3a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 3a.png",
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 3b.png", 
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 3c.png",
      ],
      },

      {
        id: 20,
        categoria: "construcciones-especiales",
        titulo: "Cepillos Construcciones Especiales CCC",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/construcciones-especiales/Cepillo 13a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 13a.png",
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 13b.png", 
      ],
      },

      {
        id: 21,
        categoria: "construcciones-especiales",
        titulo: "Cepillos Construcciones Especiales DDD",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/construcciones-especiales/Cepillo 14a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 14a.png",
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 14b.png",
          "../image/categoria/cepillos/construcciones-especiales/Cepillo 14c.png",  
      ],
      },

      //MINI CARDS CEPILLOS LINEALES
      {
        id: 22,
        categoria: "lineal",
        titulo: "Cepillos Lineales AAA",
        descripcion: "Los cepillos lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/lineales/Cepillo 6a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/lineales/Cepillo 6a.png",
          "../image/categoria/cepillos/lineales/Cepillo 6b.png",
          "../image/categoria/cepillos/lineales",  
      ],
      },

      {
        id: 23,
        categoria: "lineal",
        titulo: "Cepillos Lineales BBB",
        descripcion: "Los cepillos lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/lineales/Cepillo 8a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/lineales/Cepillo 8a.png",
          "../image/categoria/cepillos/lineales/Cepillo 8b.png",
          "../image/categoria/cepillos/lineales/Cepillo 8c.png",
      ],
      },

      {
        id: 24,
        categoria: "lineal",
        titulo: "Cepillos Lineales BBB",
        descripcion: "Los cepillos lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/lineales/Cepillo 16a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [

          "../image/categoria/cepillos/lineales/Cepillo 16a.png",
          "../image/categoria/cepillos/lineales/Cepillo 16b.png",
          "../image/categoria/cepillos/lineales/Cepillo 16c.png",
      ],
      },

      {
        id: 25,
        categoria: "lineal",
        titulo: "Cepillos Lineales BBB",
        descripcion: "Los cepillos lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/lineales/Cepillo 20a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/lineales/Cepillo 20a.png",
          "../image/categoria/cepillos/lineales/Cepillo 20b.png",
          "../image/categoria/cepillos/lineales/Cepillo 20c.png",
      ],
      },

      //MINI CARDS PERFIL-L
      {
        id: 26,
        categoria: "perfil-l",
        titulo: "Cepillos Perfil L AAA",
        descripcion: "Los cepillos PERFIL L no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/perfil-l/Cepillo 18a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/perfil-l/Cepillo 18a.png",
          "../image/categoria/cepillos/perfil-l/Cepillo 18b.png",
          "../image/categoria/cepillos/perfil-l/Cepillo 18c.png",
      ],
      },

      {
        id: 27,
        categoria: "perfil-l",
        titulo: "Cepillos Perfil L BBB",
        descripcion: "Los cepillos PERFIL L no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_5f79q55f79q55f79 (1).png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_5f79q55f79q55f79 (1).png",
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_7bo2pm7bo2pm7bo2.png",
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_f49knmf49knmf49k.png",
      ],
      },

      {
        id: 28,
        categoria: "perfil-l",
        titulo: "Cepillos Perfil L CCC",
        descripcion: "Los cepillos PERFIL L no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_11o3n511o3n511o3.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_11o3n511o3n511o3.png",
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_ovlwcjovlwcjovlw.png",
          "../image/categoria/cepillos/perfil-l/Gemini_Generated_Image_x90s57x90s57x90s.png",
      ],
      },

      //MINI CARDS TIPO PLACA

      {
        id: 29,
        categoria: "tipo-placa",
        titulo: "Cepillos Tipo Placa AAA",
        descripcion: "Los cepillos TIPO PLACA no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/tipo-placa/Cepillo15a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/tipo-placa/Cepillo15a.png",
          "../image/categoria/cepillos/tipo-placa/Cepillo 15b.png",
          "../image/categoria/cepillos/tipo-placa/Cepillo15c.png",
      ],
      },

      {
        id: 30,
        categoria: "tipo-placa",
        titulo: "Cepillos Tipo Placa BBB",
        descripcion: "Los cepillos TIPO PLACA no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/tipo-placa/Cepillo16a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/tipo-placa/Cepillo16a.png",
          "../image/categoria/cepillos/tipo-placa/Cepillo16b.png",
          "../image/categoria/cepillos/tipo-placa/Cepillo16c.png",
      ],
      },

      {
        id: 31,
        categoria: "tipo-placa",
        titulo: "Cepillos Tipo Placa CCC",
        descripcion: "Los cepillos TIPO PLACA no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/tipo-placa/Cepillo17a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/tipo-placa/Cepillo17a.png",
          "../image/categoria/cepillos/tipo-placa/Cepillo17b.png",
          "../image/categoria/cepillos/tipo-placa/Cepillo17c.png",
      ],
      },

      //MINI CARDS CIRCULARES

      {
        id: 32,
        categoria: "circulares",
        titulo: "Cepillos Circulares AAA",
        descripcion: "Los cepillos CIRCULARES no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/circulares/Cepillo 9a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/circulares/Cepillo 9a.png",
          "../image/categoria/cepillos/circulares/Cepillo 9b.png",
          "../image/categoria/cepillos/circulares/Cepillo 9c.png",
      ],
      },

      {
        id: 33,
        categoria: "circulares",
        titulo: "Cepillos Circulares BBB",
        descripcion: "Los cepillos CIRCULARES no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/circulares/Cepillo 7a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/circulares/Cepillo 7a.png",
          "../image/categoria/cepillos/circulares/Cepillo 7b.png",
          "../image/categoria/cepillos/circulares/Cepillo 7c.png",
      ],
      },

      {
        id: 34,
        categoria: "circulares",
        titulo: "Cepillos Circulares CCC",
        descripcion: "Los cepillos CIRCULARES no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/circulares/Cepillo 19a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/circulares/Cepillo 19a.png",
          "../image/categoria/cepillos/circulares/Cepillo 19b.png",
          "../image/categoria/cepillos/circulares/Cepillo 19c.png",
      ],
      },

      //MINI CARDS BANDA LINEAL

      {
        id: 35,
        categoria: "banda-lineal",
        titulo: "Cepillos Banda Lineal AAA",
        descripcion: "Los cepillos banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/banda-lineal/Cepillo1a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/banda-lineal/Cepillo1a.png",
          "../image/categoria/cepillos/banda-lineal/Cepillo1b.png",
      ],
      },

      {
        id: 36,
        categoria: "banda-lineal",
        titulo: "Cepillos Banda Lineal BBB",
        descripcion: "Los cepillos banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/banda-lineal/Cepillo2a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/banda-lineal/Cepillo2a.png",
          "../image/categoria/cepillos/banda-lineal/Cepillo2b.png",
          "../image/categoria/cepillos/banda-lineal/Cepillo2c.png",
      ],
      },

      {
        id: 37,
        categoria: "banda-lineal",
        titulo: "Cepillos Banda Lineal CCC",
        descripcion: "Los cepillos banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/banda-lineal/Cepillo3a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/banda-lineal/Cepillo3a.png",
          "../image/categoria/cepillos/banda-lineal/Cepillo3b.png",
      ],
      },

      //MINI CARDS RETORCIDOS

      {
        id: 38,
        categoria: "retorcidos",
        titulo: "Cepillos Retorcidos AAA",
        descripcion: "Estos incluyen todos los cepillos fabricados a partir del alambre retorcido como baquetas, pinceles mecánicos, limpia...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/retorcidos/Cepillo 2a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/retorcidos/Cepillo 2a.png",
          "../image/categoria/cepillos/retorcidos/Cepillo 2b.png",
      ],
      },

      {
        id: 39,
        categoria: "retorcidos",
        titulo: "Cepillos Retorcidos BBB",
        descripcion: "Estos incluyen todos los cepillos fabricados a partir del alambre retorcido como baquetas, pinceles mecánicos, limpia...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/retorcidos/Cepillo 5a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/retorcidos/Cepillo 5a.png",
          "../image/categoria/cepillos/retorcidos/Cepillo 5b.png",
          "../image/categoria/cepillos/retorcidos/Cepillo 5c.png",
      ],
      },

      {
        id: 40,
        categoria: "retorcidos",
        titulo: "Cepillos Retorcidos CCC",
        descripcion: "Estos incluyen todos los cepillos fabricados a partir del alambre retorcido como baquetas, pinceles mecánicos, limpia...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/retorcidos/Cepillo 11e.jpg" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/retorcidos/Cepillo 11e.jpg",
          "../image/categoria/cepillos/retorcidos/Cepillo 11a.jpg",
          "../image/categoria/cepillos/retorcidos/Cepillo 11b.jpg",
          "../image/categoria/cepillos/retorcidos/Cepillo 11c.jpg",
          "../image/categoria/cepillos/retorcidos/Cepillo 11d.jpg",
      ],
      },

      //MINI CARDS HOGAR

      {
        id: 41,
        categoria: "hogar",
        titulo: "Cepillos de Hogar AAA",
        descripcion: "Hogar",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/hogar/personal1.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/hogar/personal1.png",
          "../image/categoria/cepillos/hogar/personal2.png",
          "../image/categoria/cepillos/hogar/personal3.png",
          "../image/categoria/cepillos/hogar/personal4.png",
          "../image/categoria/cepillos/hogar/personal5.png",
          "../image/categoria/cepillos/hogar/personal6.png",
      ],
      },

      {
        id: 42,
        categoria: "hogar",
        titulo: "Cepillos de Hogar BBB",
        descripcion: "Hogar",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/hogar/hogar.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/hogar/hogar.png",
          "../image/categoria/cepillos/hogar/s.png",
          "../image/categoria/cepillos/hogar/WhatsApp Image 2026-03-10 at 9.19.40 PM.jpeg",
      ],
      },

      {
        id: 43,
        categoria: "hogar",
        titulo: "Cepillos de Hogar CCC",
        descripcion: "Hogar",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/hogar/asd.jpeg" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/hogar/asd.jpeg",
          "../image/categoria/cepillos/hogar/Gemini_Generated_Image_r2z28kr2z28kr2z2.png",
          "../image/categoria/cepillos/hogar/sdff.png",
      ],
      },

      //MINI CARDS CON MANGO

      {
        id: 44,
        categoria: "con-mango",
        titulo: "Cepillos con Mango AAA",
        descripcion: "Cepillos con mango...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/con-mango/Cepillo 12a.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/con-mango/Cepillo 12a.png",
          "../image/categoria/cepillos/con-mango/Cepillo 12b.png",
          "../image/categoria/cepillos/con-mango/Cepillo 12c.png",
      ],
      },

      {
        id: 45,
        categoria: "con-mango",
        titulo: "Cepillos con Mango BBB",
        descripcion: "Cepillos con mango...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_6vmr086vmr086vmr.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_6vmr086vmr086vmr.png",
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_bkkm4pbkkm4pbkkm.png",
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_l15rwl15rwl15rwl.png",
      ],
      },

      {
        id: 46,
        categoria: "con-mango",
        titulo: "Cepillos con Mango BBB",
        descripcion: "Cepillos con mango...",
        mostrarEnHome: false,
        imagen: "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_kd0vu2kd0vu2kd0v.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
          "Cuerpo de aluminio extruido.",
          "Filamentos de alta densidad.",
          "Montaje en caras de 8mm o 10mm.",
          "Ángulos disponibles: 90° o 180°."
          ],
        imagenes: [
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_kd0vu2kd0vu2kd0v.png",
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_m975ppm975ppm975.png",
          "../image/categoria/cepillos/con-mango/Gemini_Generated_Image_plhjfyplhjfyplhj (1).png",
      ],
      },
  ];