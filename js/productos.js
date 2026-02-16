const productos = [
    {
      id: 1,
      categoria: "cilindrico",
      titulo: "Cepillos cilíndricos modulares",
      descripcion: "Se fabrican a partir de bases inyectadas con polipropileno espumado. El sistema modular dentado proporciona un...",
      mostrarEnHome: true,
      imagen: "../images/Cepillos/Cilindricos/Cilindrico1.png",
      imagenes: [
        "../images/Cepillos/Cilindricos/Cilindrico1.png",
        "../images/Cepillos/Cilindricos/Cilindrico2.png", 
        "../images/Cepillos/Cilindricos/Cilindrico3.png",
        "../images/Cepillos/Cilindricos/Cilindrico4.png",
        "../images/Cepillos/Cilindricos/Cilindrico5.png", 
        "../images/Cepillos/Cilindricos/Cilindrico6.png",
        "../images/Cepillos/Cilindricos/Cilindrico7.png",
        "../images/Cepillos/Cilindricos/Cilindrico8.png",
        "../images/Cepillos/Cilindricos/Cilindrico9.png",
        "../images/Cepillos/Cilindricos/Cilindrico10.png",
        "../images/Cepillos/Cilindricos/Cilindrico11.png",
        "../images/Cepillos/Cilindricos/Cilindrico12.png",
    ],
      
    },
    {
      id: 2,
      categoria: "cilindrico-lineal",
      titulo: "Cepillos Cilindrico Banda Lineal",
      descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
      mostrarEnHome: true,
      imagen: "../images/Cepillos/bandaLineal/Lineal1.png",
      imagenes: [
        "../images/Cepillos/bandaLineal/Lineal1.png",
        "../images/Cepillos/bandaLineal/Lineal2.png", 
        "../images/Cepillos/bandaLineal/Lineal3.png",
    ],
    },
    {
      id: 3,
      categoria: "cilindrico-especial",
      titulo: "Cepillos Cilíndricos Especiales",
      descripcion: "En muchos casos no es posible adaptar el sistema modular para la construccion de cilindros, en esos casos se...",
      mostrarEnHome: true,
      imagen: "../images/Cepillos/CepilloCilindricoEspecial.png"
    },
    {
        id: 4,
        categoria: "lineal-modular",
        titulo: "Cepillos Lineales Modulares",
        descripcion: "Este tipo de cepillos se utiliza como barrera o cortina contra polvo, liquidos, insectos, etc. Es un perfil extruido con una...",
        mostrarEnHome: true,
        imagen: "../images/Cepillos/CepilloCilindrico.png" ,
        detalle: "Este tipo de cepillos se utilizan como barrera o cortina contra polvo, líquidos, insectos, etc.",
        caracteristicas: [ 
        "Cuerpo de aluminio extruido.",
        "Filamentos de alta densidad.",
        "Montaje en caras de 8mm o 10mm.",
        "Ángulos disponibles: 90° o 180°."
        ],
        imagenes: [
          "../images/Cepillos/CepilloCilindrico.png", // Foto 1
          "../images/Cepillos/CepilloCable.png"  // Foto 2
      ],
      },
      { 
        id: 5,
        categoria: "lineal-especial",
        titulo: "Cepillos Lineales Especiales",
        descripcion: "Los cepillos lineales se utilizan para tipo de aplicaciones e incluyen tanto los cepillos de banda lineal como los cepillos...",
        mostrarEnHome: true,
        imagen: "../images/Cepillos/CepilloCable.png" 
      },


      {
        id: 6,
        categoria: "otros",
        titulo: "Otros Cepillos",
        descripcion: "Estos incluyen todos los cepillos fabricados a partir del alambre retorcido como baquetas, pinceles mecánicos, limpia...",
        mostrarEnHome: true,
        imagen: "../images/Cepillos/CepilloCilindricoEspecial.png" 
      },
      {
        id: 7,
        titulo: "Otros Cepillos",
        descripcion: "Estos incluyen todos los cepillos fabricados a partir del alambre retorcido como baquetas, pinceles mecánicos, limpia...",
        mostrarEnHome: true,
        imagen: "../images/Cepillos/CepilloCilindricoEspecial.png" 
      },
      {
        id: 8,
        titulo: "Otros Cepillos",
        descripcion: "Estos incluyen todos los cepillos fabricados a partir del alambre retorcido como baquetas, pinceles mecánicos, limpia...",
        mostrarEnHome: true,
        imagen: "../images/Cepillos/CepilloCilindricoEspecial.png" 
      },




      {
        id: 9,
        categoria: "cilindrico-lineal",
        titulo: "Cepillos Cilindrico Banda Lineal RECTO",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../images/Cepillos/bandaLineal/Lineal1.png",
        imagenes: [
          "../images/Cepillos/bandaLineal/Lineal1.png",
          "../images/Cepillos/bandaLineal/Lineal2.png", 
          "../images/Cepillos/bandaLineal/Lineal3.png",
      ],
      },

      {
        id: 10,
        categoria: "cilindrico-lineal",
        titulo: "Cepillos Cilindrico Banda Lineal HORIZONTAL",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../images/Cepillos/bandaLineal/Lineal1.png",
        imagenes: [
          "../images/Cepillos/bandaLineal/Lineal1.png",
          "../images/Cepillos/bandaLineal/Lineal2.png", 
          "../images/Cepillos/bandaLineal/Lineal3.png",
      ],
      },
      {
        id: 11,
        categoria: "cilindrico-lineal",
        titulo: "Cepillos Cilindrico Banda Lineal VERTICAL",
        descripcion: "Los cepillos de banda lineal no poseen un espesor considerable en el alma del cepillo, lo que lo hace muy...",
        mostrarEnHome: false,
        imagen: "../images/Cepillos/bandaLineal/Lineal1.png",
        imagenes: [
          "../images/Cepillos/bandaLineal/Lineal1.png",
          "../images/Cepillos/bandaLineal/Lineal2.png", 
          "../images/Cepillos/bandaLineal/Lineal3.png",
      ],
      },
  ];