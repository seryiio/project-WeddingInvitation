// Edita los valores de este archivo para actualizar las dos páginas.
// Fechas: AAAA-MM-DD. Horas: HH:MM en formato de 24 horas (hora de Perú).
const datosBoda = {
  pareja: {
    novio: "Humberto",
    novia: "Alexandra"
  },

  familia: {
    padresDelNovio: ["Ingrid Margot Esmir Leandro Briceño", "Humberto Garro Prado"],
    padresDeLaNovia: ["Ruth Esther Nuñez Florian", "Jorge Gonzalo Yarleque Gonzáles"],
    padrinosDeAros: ["Deivid"]
  },

  ceremonia: {
    fecha: "2026-12-13",
    hora: "16:00",
    lugar: "El Bosque Eventos y Restaurante",
    ciudad: "Huacho",
    pais: "Perú"
  },

  mapa: {
    nombre: "El Bosque Eventos y Restaurante",
    localidad: "Huacho, Perú",
    placeId: "c9xrRuHQFDshKUtu7"
  },

  itinerario: {
    recepcion: { hora: "15:30", nombre: "Recepción" },
    ceremonia: { nombre: "Ceremonia" },
    cena: { hora: "19:00", nombre: "Cena" },
    baile: { hora: "21:00", nombre: "Baile" }
  },

  vestimenta: {
    hombres: "Formal",
    mujeres: "Formal",
    nota: "Por favor, evita vestir de blanco y beige."
  },

  confirmacion: {
    fechaLimite: "2026-11-20",
    // Números de WhatsApp con código de país, sin espacios ni el signo +.
    whatsappNovio: "393285424769",
    whatsappNovia: "51933439738",
    // {nombre} se sustituye por el nombre de la persona que recibe el mensaje.
    mensajeWhatsApp: "💍 ¡Hola {nombre}! Confirmo con mucho gusto mi asistencia a tu boda. 🥂✨ ¡Nos vemos en ese día tan especial! ❤️",
    soloAdultos: true,
    avisoAdultos: "La celebración será solo para adultos. Gracias por tu comprensión."
  },

  regalos: {
    banco: "BCP",
    // Mantén las comillas para conservar los ceros iniciales.
    cuenta: "33597718988063",
    cci: "00233519771898806384",
    mensaje: "Tu presencia hace que este día sea inolvidable. Si te nace tener un gesto especial con nosotros, estos son los medios disponibles:"
  },

  musica: {
    titulo: "Te Amo - Umberto Tozzi",
    archivo: "https://res.cloudinary.com/y3rmpmag/video/upload/v1794199388/Umberto_Tozzi_-_Te_Amo_i00w1r.mp3"
  },

  fotos: {
    sobre: "https://res.cloudinary.com/y3rmpmag/image/upload/v1784068595/ImagenBoda_gucsff.jpg",
    portada: "ImagenBoda.jpg",
    // Cuatro fotos en orden. Si archivo está vacío, se usa un recorte de la portada.
    // {pareja} se sustituye por los nombres de los novios.
    carrete: [
      { archivo: "", descripcion: "Primer plano de {pareja}" },
      { archivo: "", descripcion: "{pareja} junto al lago" },
      { archivo: "", descripcion: "Detalle del ramo de novia" },
      { archivo: "", descripcion: "Retrato de la pareja con el paisaje de fondo" }
    ]
  },

  textos: {
    bienvenida: "Con el corazón lleno de alegría y la bendición de nuestras familias, te invitamos a acompañarnos en el día en que uniremos nuestras vidas para siempre. Tu presencia es el regalo que más deseamos.",
    despuesDelCarrete: "Será una alegría compartir con ustedes el día en que uniremos nuestras vidas.",
    cierreItinerario: "Y vivirán felices por siempre…"
  }
};
