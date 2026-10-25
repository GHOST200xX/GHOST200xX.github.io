/* ============================================================
   ✏️  EDITA SOLO ESTE ARCHIVO PARA PERSONALIZAR TU PORTAFOLIO
   Todo lo que ves en la página sale de aquí.
   ============================================================ */

window.PORTFOLIO = {
  nombre: "Andrés Chiriboga",
  iniciales: "AC",
  // Frases que se escriben solas en la portada
  roles: [
    "Ingeniero en Ciencias de la Computación",
    "Soporte IT y Mesa de Ayuda",
    "Desarrollador Web",
    "Auditoría Informática",
    "Consultor IT independiente",
  ],
  ubicacion: "Quito, Ecuador",
  disponible: true, // muestra el indicador "Disponible para trabajar"
  email: "andres53salazar@gmail.com",
  cv: "", // ej: "cv.pdf" — usa una versión SIN las referencias laborales (tienen teléfonos de otras personas)
  foto: "img/foto.jpg",

  bio: "Soy Ingeniero en Ciencias de la Computación y me muevo entre dos mundos: el soporte técnico y el desarrollo web. He atendido a usuarios corporativos en ERP SAP, resuelvo incidentes de hardware, software y redes como consultor independiente, y he construido plataformas web completas desde cero. Me formé en Auditoría Informática, cuido la seguridad de la información y explico cada solución de forma clara, para que la persona entienda qué pasó y cómo evitarlo.",

  redes: {
    github: "https://github.com/GHOST200xX",
    linkedin: "https://www.linkedin.com/in/andres-chiriboga-947b37240/",
    instagram: "",
    whatsapp: "https://wa.me/593998067919",
  },

  // Números grandes animados
  stats: [
    { valor: 3, sufijo: "", texto: "Años de experiencia en IT" },
    { valor: 4, sufijo: "", texto: "Proyectos web publicados" },
    { valor: 4, sufijo: "", texto: "Certificaciones" },
    { valor: 100, sufijo: "+", texto: "Horas de formación certificada" },
  ],

  habilidades: [
    { grupo: "Soporte IT", items: ["Mesa de Ayuda", "Hardware y Software", "Sistemas operativos y drivers", "Redes LAN/WLAN", "ERP SAP (nociones)"] },
    { grupo: "Desarrollo web", items: ["React", "Vite", "Next.js", "TypeScript", "Python", "Tailwind"] },
    { grupo: "Datos y auditoría", items: ["Auditoría Informática", "SQL", "PostgreSQL", "Supabase", "Excel avanzado", "Control de inventario"] },
    { grupo: "Habilidades personales", items: ["Comunicación clara", "Paciencia", "Trabajo bajo presión", "Atención al detalle", "Resolución de problemas", "Trabajo en equipo", "Inglés B1"] },
  ],

  experiencia: [
    {
      cargo: "Desarrollador Web y Logística",
      empresa: "Alta Pinta (e-commerce)",
      fecha: "Feb 2026 — Ago 2026",
      puntos: [
        "Diseñé y programé la tienda completa desde cero con React y Vite, con vista de productos en 3D.",
        "Administré la base de datos (PostgreSQL, Supabase) y el panel de administración del catálogo.",
        "Automaticé el procesamiento de pedidos y el control exacto de inventario, con registro de cada operación.",
      ],
    },
    {
      cargo: "Consultor de Soporte y Reparación IT",
      empresa: "Independiente",
      fecha: "2024 — Presente",
      puntos: [
        "Soporte nivel 2: diagnóstico y reparación de laptops, desktops e impresoras, incluidas mejoras de RAM y SSD.",
        "Instalación y configuración de sistemas operativos, drivers y redes locales (LAN/WLAN).",
        "Explico cada solución de forma clara al cliente.",
      ],
    },
    {
      cargo: "Asistente de Soporte IT (Pasante)",
      empresa: "Sucesores S.A.",
      fecha: "Nov 2023 — May 2024",
      puntos: [
        "Mesa de ayuda para usuarios corporativos en ERP SAP y otros sistemas.",
        "Resolución de fallas de software, hardware y periféricos.",
        "Apoyo en la auditoría y el acondicionamiento del inventario tecnológico.",
      ],
    },
  ],

  educacion: [
    {
      titulo: "Ingeniería en Ciencias de la Computación",
      lugar: "Universidad Politécnica Salesiana",
      fecha: "Oct 2020 — Ene 2025",
      desc: "Título de Ingeniero. Desarrollo de software, bases de datos, redes y seguridad de la información.",
    },
    {
      titulo: "Bachillerato",
      lugar: "Colegio La Salle",
      fecha: "",
      desc: "",
    },
  ],

  // Lo más destacado de tu perfil (aparece junto a la educación)
  logros: [
    { icono: "🛒", titulo: "E-commerce completo desde cero", desc: "Alta Pinta: tienda, 3D, carrito, reservas y panel de inventario hechos por mí.", fecha: "2026" },
    { icono: "🛠️", titulo: "Mi propio servicio de soporte IT", desc: "Atiendo clientes como consultor independiente desde 2024.", fecha: "2024 — hoy" },
    { icono: "🏢", titulo: "Experiencia corporativa con SAP", desc: "Mesa de ayuda para usuarios de empresa en Sucesores S.A.", fecha: "2023 — 2024" },
    { icono: "🎓", titulo: "Ingeniero titulado", desc: "Universidad Politécnica Salesiana.", fecha: "2025" },
  ],

  certificaciones: [
    { nombre: "Full Stack Next.js — Drizzle ORM, Better Auth, AI SDK y TS", emisor: "Udemy", fecha: "Oct 2026", horas: 24.5, url: "https://www.udemy.com/certificate/UC-bc6b29aa-ae0b-4d43-93a7-4784c1dca1e7/" },
    { nombre: "Auditoría Informática — Guía práctica, desde cero a experto", emisor: "Udemy", fecha: "May 2026", horas: 7.5, url: "https://www.udemy.com/certificate/UC-a6f981a4-7bd4-4fe0-978e-95633f1bb2fa/" },
    { nombre: "Excel TOTAL — Excel completo de cero a avanzado", emisor: "Udemy", fecha: "Ene 2026", horas: 37.5, url: "https://www.udemy.com/certificate/UC-d2225042-2653-4a09-bec2-4508ba52cfbe/" },
    { nombre: "Python TOTAL — Programador avanzado", emisor: "Udemy", fecha: "Ene 2026", horas: 31, url: "https://www.udemy.com/certificate/UC-0766b23b-2bc2-4c29-95ce-c67eaf43b058/" },
  ],

  // categoria: se usa para los filtros. destacado: true = tarjeta grande
  proyectos: [
    {
      titulo: "Alta Pinta",
      desc: "Tienda online de ropa y zapatos de outlets de EE. UU. Catálogo con filtros, vista de productos en 3D, armador de packs, carrito con reserva por anticipo, pedidos por courier y panel de administración de inventario.",
      tags: ["React", "Vite", "Supabase", "PostgreSQL", "3D", "Zod"],
      categoria: "E-commerce",
      imagen: "img/altapinta.jpg",
      demo: "",
      codigo: "",
      destacado: true,
    },
    {
      titulo: "Galería María Eufracia Piedra",
      desc: "Galería de arte para vender obra original. Cada cuadro se muestra a escala real en una sala, pasillo o dormitorio. Incluye asistente estilo WhatsApp, cotizador de talleres infantiles y panel con estadísticas de visitas.",
      tags: ["React", "Vite", "Tailwind", "Supabase"],
      categoria: "Web",
      imagen: "img/galeria.jpg",
      demo: "",
      codigo: "",
      destacado: true,
    },
    {
      titulo: "Monolito — Inventario vivo",
      desc: "Plataforma de gestión de inventario y vitrina comercial en tiempo real, con panel de administración, roles y seguridad a nivel de base de datos.",
      tags: ["React 19", "TypeScript", "Tailwind", "Supabase Realtime"],
      categoria: "Web",
      imagen: "img/monolito.jpg",
      demo: "",
      codigo: "",
    },
    {
      titulo: "App Tarjetas",
      desc: "App Android de finanzas personales con un asesor para salir de deudas: arma un plan de pagos y captura gastos desde las notificaciones de los bancos.",
      tags: ["React Native", "Expo", "Kotlin", "Supabase"],
      categoria: "App móvil",
      imagen: "",
      demo: "",
      codigo: "",
    },
  ],
};
