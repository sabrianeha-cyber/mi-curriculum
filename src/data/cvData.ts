export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  sector: 'limpieza' | 'logistica' | 'hosteleria' | 'comercio';
  sectorLabel: string;
  summary: string;
  responsibilities: string[];
  toolsAndTech: string[];
  keyHighlights: string[];
}

export interface Education {
  id: string;
  title: string;
  institution: string;
  location: string;
  description: string;
  type: 'formal' | 'voluntariado' | 'ofimatica';
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level?: string; description?: string }[];
}

export interface CVData {
  personalInfo: {
    fullName: string;
    headline: string;
    phone: string;
    phoneFormatted: string;
    email: string;
    location: string;
    region: string;
    languages: { language: string; level: string; note: string }[];
    summary: string;
    availability: string;
  };
  experiences: Experience[];
  education: Education[];
  skillsCategories: SkillCategory[];
  keyMetrics: { label: string; value: string; detail: string }[];
}

export const cvDataEs: CVData = {
  personalInfo: {
    fullName: "SABRIYAH DAWOOD SHAH",
    headline: "Operaria de Limpieza Industrial & Mozo de Almacén",
    phone: "631 69 52 41",
    phoneFormatted: "+34 631 69 52 41",
    email: "sabrianeha@gmail.com",
    location: "Torrijos, Toledo (España)",
    region: "Disponibilidad: Comarca de Torrijos, Toledo, Seseña, Illescas y Zona Sur de Madrid",
    languages: [
      { language: "Español", level: "Nivel C1 (Avanzado / Profesional)", note: "Fluidez oral y escrita completa para instrucciones técnicas y atención al cliente" },
      { language: "Persa / Farsi", level: "Nativo (Lengua materna)", note: "Dominio nativo; experiencia en mediación lingüística e interpretación con Cruz Roja" }
    ],
    summary: "Profesional polivalente y comprometida, con experiencia contrastada en limpieza industrial y desinfección técnica de maquinaria en el sector agroalimentario, así como en operativa logística y almacén textil. Con gran soltura en el manejo de pistola de radiofrecuencia (picking/packing), uso de maquinaria industrial (mangueras de agua a presión y desinfección) y gestión precisa de inventarios. Destaco por mi rapidez de aprendizaje, capacidad para resolver incidencias con autonomía, rigor en seguridad e higiene y excelente trabajo en equipo.",
    availability: "Incorporación inmediata · Disponibilidad de turnos rotativos y fines de semana"
  },
  keyMetrics: [
    { label: "Experiencia en Grandes Plantas", value: "Navidul / Campofrío", detail: "Limpieza técnica e higiene agroalimentaria" },
    { label: "Logística y Almacén Textil", value: "Logisfashion", detail: "Picking RF, etiquetado y preparación masiva" },
    { label: "Idiomas", value: "Español (C1) · Persa (Nativo)", detail: "Excelente comunicación y mediación" },
    { label: "Formación Sanitaria", value: "Enfermería", detail: "Rigor bioseguridad y esterilización" }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Operaria de Limpieza Industrial",
      company: "Navidul / Campofrío",
      location: "Toledo",
      period: "Experiencia contrastada",
      sector: "limpieza",
      sectorLabel: "Limpieza Industrial & Agroalimentaria",
      summary: "Labores especializadas de desinfección técnica y saneamiento en una de las mayores industrias cárnicas de Europa, con cumplimiento estricto de estándares de calidad alimentaria.",
      responsibilities: [
        "Tareas de limpieza profunda y desinfección técnica de maquinaria e instalaciones industriales de procesado cárnico.",
        "Manejo de maquinaria industrial especializada: mangueras de agua a alta presión y espumadoras para eliminación de residuos biológicos.",
        "Aplicación rigurosa de productos químicos detergentes y desinfectantes según fichas técnicas de seguridad y dosificación adecuada.",
        "Cumplimiento meticuloso de protocolos de higiene, bioseguridad agroalimentaria y normativa APPCC (Análisis de Peligros y Puntos de Control Crítico).",
        "Mantenimiento del orden y desinfección en líneas de producción, cámaras frigoríficas y zonas de envasado."
      ],
      toolsAndTech: ["Mangueras de agua a presión", "Químicos de desinfección industrial", "Protocolos APPCC", "EPIs de protección química", "Maquinaria agroalimentaria"],
      keyHighlights: ["Cero incidencias en inspecciones higiénicas", "Dominio de protocolos en salas limpias y cámaras de frío", "Rápida adaptación al ritmo intensivo de planta"]
    },
    {
      id: "exp-2",
      role: "Mozo de Almacén",
      company: "Logisfashion",
      location: "Toledo",
      period: "Experiencia contrastada",
      sector: "logistica",
      sectorLabel: "Logística & Almacén Textil",
      summary: "Operativa logística integral en uno de los centros de distribución textil y moda de referencia en Castilla-La Mancha.",
      responsibilities: [
        "Manejo diario de pistola de radiofrecuencia (RF) para preparación de pedidos unitarios y masivos (picking) sin margen de error.",
        "Control exhaustivo de stock, verificación de referencias, tallas y lotes en el sistema de gestión de almacén.",
        "Labores completas de packing: doblado, empaquetado, envasado al vacío o protección para transporte según requisitos de marca.",
        "Desalarmado, colocación de dispositivos de seguridad y etiquetado con código de barras de prendas textiles para distribución en tienda y e-commerce.",
        "Ubicación de mercancía en estanterías, reposición de líneas de preparación y mantenimiento del área de trabajo libre de obstáculos."
      ],
      toolsAndTech: ["Pistola de radiofrecuencia (RF)", "SGA / Terminal móvil", "Lectura de códigos de barras", "Sistemas de desalarmado textil", "Etiquetadoras industriales"],
      keyHighlights: ["Alto rendimiento en ratios de preparación de pedidos", "Manejo ágil de referencias textiles complejas", "Trabajo coordinado en equipo en campañas de alta demanda (Black Friday / Rebajas)"]
    },
    {
      id: "exp-3",
      role: "Ayudante de Cocina",
      company: "Restaurantes San Luis 1",
      location: "Seseña, Toledo",
      period: "Experiencia contrastada",
      sector: "hosteleria",
      sectorLabel: "Hostelería & Manipulación de Alimentos",
      summary: "Apoyo operativo en cocina profesional con alta rotación de comensales, gestión de despensa y control de calidad alimentaria.",
      responsibilities: [
        "Preparación, corte y manipulación higiénica de materias primas y productos alimenticios.",
        "Recepción de mercancías de proveedores, cotejo de albaranes, control de caducidades y almacenamiento en cámaras frigoríficas.",
        "Realización de inventarios periódicos de ingredientes y reposición de partidas.",
        "Mantenimiento, limpieza profunda y desinfección integral del área de trabajo, fogones, cámaras y tren de lavado.",
        "Cumplimiento de las directrices sanitarias de manipulación de alimentos y prevención de contaminación cruzada."
      ],
      toolsAndTech: ["Manipulación higiénica de alimentos", "Control de cámaras frigoríficas", "Gestión de albaranes e inventario", "Maquinaria de hostelería"],
      keyHighlights: ["Organización metódica en picos de servicio", "Estricto control de conservación de producto", "Limpieza impecable de zonas de trabajo"]
    },
    {
      id: "exp-4",
      role: "Dependienta y Atención al Cliente",
      company: "Tienda de Alimentación (Madrid) / Piña Natural (Huelva)",
      location: "Madrid & Huelva",
      period: "Experiencia contrastada",
      sector: "comercio",
      sectorLabel: "Comercio & Atención al Cliente",
      summary: "Atención comercial al público y gestión operativa de tienda en entornos dinámicos de alimentación y retail.",
      responsibilities: [
        "Atención personalizada, amable y resolutiva a clientes en tienda.",
        "Control de stock, recepción de mercancías, reposición continuada en lineales y colocación estética orientada a la venta.",
        "Operaciones de cobro en caja (TPV / efectivo), arqueo diario de caja, cierre y resolución de incidencias en cobros.",
        "Facturación básica y emisión de tickets y comprobantes.",
        "Mantenimiento diario de la limpieza, higiene y presentación atractiva del establecimiento."
      ],
      toolsAndTech: ["TPV y datáfono", "Gestión de caja y arqueo", "Control de stock en tienda", "Técnicas de venta y servicio"],
      keyHighlights: ["Fidelización de clientes por trato cercano y educado", "Exactitud en arqueos de caja al cierre de jornada", "Gestión eficiente de colas en horas punta"]
    }
  ],
  education: [
    {
      id: "edu-1",
      title: "Grado / Estudios en Enfermería",
      institution: "Instituto Ghalib de Educación Superior",
      location: "Herat, Afganistán",
      description: "Formación superior en ciencias de la salud. Aporta un sólido conocimiento en asepsia, microbiología, desinfección, bioseguridad, primeros auxilios y una alta disciplina de trabajo bajo presión.",
      type: "formal"
    },
    {
      id: "edu-2",
      title: "Voluntariado: Traductora e Intérprete",
      institution: "Cruz Roja",
      location: "España",
      description: "Labor humanitaria como traductora e intérprete (Español - Persa/Dari). Acompañamiento en mediación lingüística y cultural para personas en acogida, facilitando trámites sanitarios y sociales con gran empatía y discreción.",
      type: "voluntariado"
    },
    {
      id: "edu-3",
      title: "Informática & Ofimática",
      institution: "Capacitación Técnica",
      location: "Nivel Usuario",
      description: "Manejo de Microsoft Word y Excel (nivel usuario para reportes e inventarios), PowerPoint (nivel básico). Soltura en uso de dispositivos móviles de empresa, tablets de control y pistolas de radiofrecuencia.",
      type: "ofimatica"
    }
  ],
  skillsCategories: [
    {
      title: "Limpieza Técnica e Industrial",
      skills: [
        { name: "Desinfección técnica de maquinaria", level: "Avanzado", description: "Protocolos en plantas cárnicas y salas de procesamiento" },
        { name: "Mangueras de agua a alta presión", level: "Avanzado", description: "Manejo seguro de lanzas industriales y detergentes" },
        { name: "Normativa higiénica y APPCC", level: "Avanzado", description: "Prevención de contaminación y cumplimiento de estándares sanitarios" },
        { name: "Uso de químicos y dosificación", level: "Avanzado", description: "Manejo seguro de fichas técnicas y EPIs correspondientes" }
      ]
    },
    {
      title: "Operativa de Almacén y Logística",
      skills: [
        { name: "Pistola de radiofrecuencia (RF)", level: "Avanzado", description: "Preparación ágil de pedidos (picking) sin errores de referencia" },
        { name: "Packing y empaquetado", level: "Avanzado", description: "Embalaje cuidadoso de prendas textiles y pedidos e-commerce" },
        { name: "Etiquetado y desalarmado textil", level: "Avanzado", description: "Tratamiento de producto para distribución en tienda física" },
        { name: "Control de stock e inventarios", level: "Avanzado", description: "Cotejo de referencias, recuento de mercancía y reposición" }
      ]
    },
    {
      title: "Atención al Cliente y Hostelería",
      skills: [
        { name: "Manipulación de alimentos", level: "Avanzado", description: "Cuidado higiénico en materias primas y conservación en frío" },
        { name: "Cobro en caja y arqueo (TPV)", level: "Competente", description: "Cuadre de caja, facturación y cobro en mostrador" },
        { name: "Recepción de mercancías y albaranes", level: "Avanzado", description: "Comprobación de pedidos y control de caducidades" },
        { name: "Atención comercial al público", level: "Avanzado", description: "Trato amable, resolución de incidencias y asesoramiento" }
      ]
    },
    {
      title: "Competencias Profesionales Clave",
      skills: [
        { name: "Rápida adaptación y aprendizaje", level: "Destacado", description: "Capacidad contrastada para asimilar procedimientos nuevos en pocos días" },
        { name: "Resolución de incidencias", level: "Destacado", description: "Actitud proactiva para solucionar problemas imprevistos en turno" },
        { name: "Excelente trabajo en equipo", level: "Destacado", description: "Colaboración constante con compañeros y mandos intermedios" },
        { name: "Rigor, higiene y minuciosidad", level: "Destacado", description: "Máxima atención al detalle en limpiezas y preparaciones" }
      ]
    }
  ]
};

export const cvDataEn: CVData = {
  personalInfo: {
    fullName: "SABRIYAH DAWOOD SHAH",
    headline: "Industrial Cleaning Specialist & Warehouse Logistics Operator",
    phone: "631 69 52 41",
    phoneFormatted: "+34 631 69 52 41",
    email: "sabrianeha@gmail.com",
    location: "Torrijos, Toledo (Spain)",
    region: "Available in: Torrijos area, Toledo, Seseña, Illescas & South Madrid",
    languages: [
      { language: "Spanish", level: "Level C1 (Advanced / Professional)", note: "Full oral and written fluency for technical instructions and customer relations" },
      { language: "Persian / Farsi", level: "Native (Mother tongue)", note: "Native proficiency; experience in linguistic mediation with Red Cross" }
    ],
    summary: "Versatile, highly committed professional with proven track record in industrial cleaning and technical machinery disinfection in the agrifood sector, as well as textile warehouse and logistics operations. Highly proficient with radiofrequency (RF) scanners for picking and packing, high-pressure industrial water machinery, and inventory management. Known for rapid learning curve, autonomous incident resolution, strict hygiene/safety compliance, and outstanding teamwork.",
    availability: "Immediate availability · Flexible with rotating shifts and weekends"
  },
  keyMetrics: [
    { label: "Major Industrial Plants", value: "Navidul / Campofrío", detail: "Agrifood technical disinfection" },
    { label: "Textile Logistics Hub", value: "Logisfashion", detail: "RF picking, tagging & packing" },
    { label: "Languages", value: "Spanish (C1) · Persian (Native)", detail: "High communication & mediation" },
    { label: "Health Sciences Background", value: "Nursing", detail: "Biosecurity & sterilization rigor" }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Industrial Cleaning Operator",
      company: "Navidul / Campofrío",
      location: "Toledo, Spain",
      period: "Proven experience",
      sector: "limpieza",
      sectorLabel: "Industrial & Agrifood Cleaning",
      summary: "Specialized technical sanitation and disinfection duties in one of Europe's leading meat and food production facilities, ensuring strict compliance with agrifood hygiene standards.",
      responsibilities: [
        "In-depth technical cleaning and disinfection of industrial machinery and food processing facilities.",
        "Operation of specialized industrial machinery: high-pressure water hoses and foaming equipment for removing biological residues.",
        "Strict application of specialized industrial detergents and sanitizers adhering to safety data sheets and dosage guidelines.",
        "Thorough compliance with hygiene, biosecurity protocols, and HACCP (Hazard Analysis Critical Control Points) regulations.",
        "Maintenance of hygiene standards in production rooms, cold storage units, and packaging lines."
      ],
      toolsAndTech: ["High-pressure water hoses", "Industrial chemical sanitizers", "HACCP protocols", "Chemical PPE", "Agrifood machinery"],
      keyHighlights: ["Zero hygiene audit flags", "Mastery of cleanroom and cold-room sanitation", "Rapid adaptation to high-output plant environments"]
    },
    {
      id: "exp-2",
      role: "Warehouse Logistics Operator",
      company: "Logisfashion",
      location: "Toledo, Spain",
      period: "Proven experience",
      sector: "logistica",
      sectorLabel: "Logistics & Textile Warehousing",
      summary: "Comprehensive warehouse operations at a major European fashion logistics hub.",
      responsibilities: [
        "Daily operation of radiofrequency (RF) barcode scanners for precision order preparation (picking).",
        "Stock control, item verification, size and batch checking within the Warehouse Management System.",
        "Comprehensive packing operations: folding, packaging, bagging, and dispatch staging according to brand standards.",
        "De-tagging (alarm removal), security tag installation, and barcode labeling for retail distribution and e-commerce.",
        "Warehouse replenishment, product put-away, and maintaining clean, unobstructed work aisles."
      ],
      toolsAndTech: ["RF Handheld Barcode Scanners", "WMS / Handheld terminals", "Barcode labeling systems", "Textile alarm security systems"],
      keyHighlights: ["High pick-rate productivity", "Flawless item reference handling", "Collaborative coordination in peak retail volume periods"]
    },
    {
      id: "exp-3",
      role: "Kitchen Assistant",
      company: "Restaurantes San Luis 1",
      location: "Seseña, Toledo, Spain",
      period: "Proven experience",
      sector: "hosteleria",
      sectorLabel: "Food Preparation & Kitchen Operations",
      summary: "Operational support in a high-volume professional kitchen with stock management and food safety control.",
      responsibilities: [
        "Hygienic prep and handling of food ingredients and supplies.",
        "Receiving supplier deliveries, verifying delivery notes, checking expiration dates, and cold storage upkeep.",
        "Regular pantry stock counts and replenishment of preparation stations.",
        "Deep sanitation of kitchen equipment, cookers, walk-in fridges, and dishwashing lines.",
        "Adherence to food safety standards and cross-contamination prevention."
      ],
      toolsAndTech: ["Food hygiene compliance", "Cold room management", "Delivery verification", "Commercial kitchen equipment"],
      keyHighlights: ["Methodical kitchen organization during peak rushes", "Strict product freshness preservation", "Impeccable sanitary conditions"]
    },
    {
      id: "exp-4",
      role: "Sales Associate & Customer Service",
      company: "Food Retail (Madrid) / Piña Natural (Huelva)",
      location: "Madrid & Huelva, Spain",
      period: "Proven experience",
      sector: "comercio",
      sectorLabel: "Retail & Customer Service",
      summary: "Customer service and retail store operations in dynamic food and goods retail stores.",
      responsibilities: [
        "Friendly, personalized, and attentive customer service.",
        "Stock reception, continuous shelf replenishment, and visual merchandising.",
        "Point of sale (POS) cash and card register handling, daily cash drawer tallying, and billing.",
        "Basic invoicing, customer receipts, and return handling.",
        "Store cleanliness, sanitary organization, and aesthetic layout."
      ],
      toolsAndTech: ["POS cash register", "Card terminals", "Inventory replenishment", "Customer service"],
      keyHighlights: ["High customer retention through attentive care", "100% accurate daily cash closing", "Fast queue management"]
    }
  ],
  education: [
    {
      id: "edu-1",
      title: "Nursing Studies",
      institution: "Ghalib Institute of Higher Education",
      location: "Herat, Afghanistan",
      description: "Higher education in healthcare sciences. Provides deep foundational understanding in asepsis, microbiology, disinfection protocols, biosecurity, first aid, and methodical discipline under pressure.",
      type: "formal"
    },
    {
      id: "edu-2",
      title: "Volunteer Translator & Interpreter",
      institution: "Spanish Red Cross (Cruz Roja)",
      location: "Spain",
      description: "Humanitarian volunteer translation (Spanish - Persian/Dari). Cultural and linguistic mediation for refugees and beneficiaries, aiding in administrative, social, and healthcare navigation with empathy and discretion.",
      type: "voluntariado"
    },
    {
      id: "edu-3",
      title: "IT & Office Systems",
      institution: "Technical Proficiency",
      location: "User Level",
      description: "Proficient with Microsoft Word and Excel (for logs and stock lists), PowerPoint. Fast comfort with enterprise mobile devices, tablets, and RF scanning guns.",
      type: "ofimatica"
    }
  ],
  skillsCategories: [
    {
      title: "Technical & Industrial Cleaning",
      skills: [
        { name: "Industrial machinery disinfection", level: "Advanced", description: "Food manufacturing and production lines" },
        { name: "High-pressure water hoses", level: "Advanced", description: "Safe operation of power washers and chemical foamers" },
        { name: "HACCP & biosecurity protocols", level: "Advanced", description: "Contamination prevention in agrifood facilities" },
        { name: "Chemical agents & dosage", level: "Advanced", description: "Safety compliance with industrial sanitation sheets" }
      ]
    },
    {
      title: "Warehouse Operations & Logistics",
      skills: [
        { name: "RF Handheld Scanner", level: "Advanced", description: "Rapid and zero-error order picking" },
        { name: "Packing & Dispatch preparation", level: "Advanced", description: "Careful packaging of textiles and e-commerce orders" },
        { name: "Textile tagging & security pins", level: "Advanced", description: "Garment preparation for retail distribution" },
        { name: "Inventory count & stock audit", level: "Advanced", description: "Item matching, shelf replenishment, and cycle counts" }
      ]
    },
    {
      title: "Food Prep & Retail Service",
      skills: [
        { name: "Food safety handling", level: "Advanced", description: "Cold-chain preservation and clean food prep" },
        { name: "POS checkout & cash tally", level: "Competent", description: "Till reconciliation and billing" },
        { name: "Stock intake & delivery notes", level: "Advanced", description: "Verification of incoming goods and expiry dates" },
        { name: "Customer communication", level: "Advanced", description: "Warm, polite, and effective customer attention" }
      ]
    },
    {
      title: "Core Professional Competencies",
      skills: [
        { name: "Fast learning curve & adaptability", level: "High", description: "Quickly masters new procedures and machinery" },
        { name: "Autonomous problem solving", level: "High", description: "Proactive mindset during unexpected shift obstacles" },
        { name: "Team collaboration", level: "High", description: "Seamless coordination with colleagues and supervisors" },
        { name: "Meticulous hygiene & rigor", level: "High", description: "Highest attention to detail in sanitation and logistics" }
      ]
    }
  ]
};

export interface CoverLetterTemplate {
  id: string;
  roleTitle: string;
  sectorName: string;
  letter: string;
}

export const coverLettersEs: CoverLetterTemplate[] = [
  {
    id: "limpieza-industrial",
    roleTitle: "Operaria de Limpieza Industrial / Maquinaria",
    sectorName: "Industria & Agroalimentario",
    letter: `Estimado/a Responsable de Selección,

Me dirijo a ustedes con gran interés para presentar mi candidatura al puesto de Operaria de Limpieza Industrial. Cuento con experiencia contrastada en limpieza profunda y desinfección técnica de instalaciones y maquinaria en empresas de máxima exigencia higiénico-sanitaria como Navidul / Campofrío.

En mi trayectoria he manejado habitualmente maquinaria industrial especializada, incluyendo mangueras de agua a alta presión y espumadoras, aplicando rigurosamente los productos químicos de desinfección conforme a sus fichas técnicas. Además, mi formación previa en Enfermería me otorga una rigurosa comprensión de la bioseguridad, asepsia y prevención de contaminación cruzada según la normativa APPCC.

Resido en Torrijos (Toledo), dispongo de vehículo para desplazarme por la zona y ofrezco disponibilidad horaria total e inmediata para turnos rotativos. Destaco por mi rapidez de aprendizaje, seriedad, resistencia física y excelente trabajo en equipo.

Agradezco de antemano su tiempo y consideración, quedando a su entera disposición para mantener una entrevista en la que poder ampliar cualquier detalle de mi perfil.

Atentamente,
Sabriyah Dawood Shah
Teléfono: 631 69 52 41 · Email: sabrianeha@gmail.com
Torrijos, Toledo`
  },
  {
    id: "mozo-almacen",
    roleTitle: "Mozo de Almacén / Preparación de Pedidos (Picking & Packing)",
    sectorName: "Logística & Textil",
    letter: `Estimado/a Responsable de Recursos Humanos,

Me pongo en contacto con su departamento para manifestar mi interés en incorporarme a su equipo de logística y almacén. Dispongo de experiencia consolidada en el sector como Mozo de Almacén en Logisfashion (Toledo), donde he desempeñado labores intensivas de preparación de pedidos, packing y gestión de inventario textil.

Estoy plenamente habituada al trabajo con pistola de radiofrecuencia (picking con terminales RF), verificación ágil de stock, empaquetado, envasado, desalarmado y etiquetado con códigos de barras. Me caracterizo por mi rapidez para memorizar ubicaciones, precisión en el recuento de referencias y alta productividad en campañas de gran volumen.

Cuento con un nivel C1 de español, lo que me permite una comunicación fluida y clara con el equipo y supervisores, así como plena disponibilidad para turnos de mañana, tarde o noche e incorporación inmediata en la comarca de Torrijos y provincia de Toledo / Corredor logístico de La Sagra.

Quedo a su disposición para agendar una entrevista laboral y profundizar en mi encaje con el puesto.

Un cordial saludo,
Sabriyah Dawood Shah
Teléfono: 631 69 52 41 · Email: sabrianeha@gmail.com
Torrijos, Toledo`
  },
  {
    id: "ayudante-cocina",
    roleTitle: "Ayudante de Cocina / Manipuladora de Alimentos",
    sectorName: "Hostelería & Colectividades",
    letter: `Estimado/a Responsable del Área de Cocina,

Me dirijo a ustedes para presentar mi candidatura al puesto de Ayudante de Cocina. Cuento con experiencia laboral en restaurantes de alto volumen como Restaurantes San Luis 1 (Seseña, Toledo), llevando a cabo tareas de preparación y manipulación de productos, control de pedidos, inventarios y limpieza técnica de instalaciones.

Aplico de forma constante y escrupulosa las normas de higiene y manipulación de alimentos, asegurando la conservación adecuada en cámaras frigoríficas y la limpieza integral de las partidas de trabajo. Mi formación en el ámbito sanitario refuerza mi compromiso con los más altos estándares de higiene y seguridad.

Soy una persona organizada, enérgica, acostumbrada a los momentos de mayor afluencia y con una gran actitud para colaborar estrechamente con el equipo de cocina. Cuento con disponibilidad inmediata y total flexibilidad horaria.

Agradezco su atención y espero tener la oportunidad de conversar personalmente con ustedes.

Atentamente,
Sabriyah Dawood Shah
Teléfono: 631 69 52 41 · Email: sabrianeha@gmail.com`
  },
  {
    id: "dependienta-comercio",
    roleTitle: "Dependienta / Reponedora / Atención al Cliente",
    sectorName: "Comercio & Retail",
    letter: `Estimado/a Responsable de Tienda,

Les escribo para presentar mi candidatura a su equipo comercial. Poseo experiencia demostrable en atención directa al público, reposición de mercancía en tienda de alimentación y caja en Madrid y Huelva.

Cuento con soltura en el manejo de terminal punto de venta (TPV), datáfono, cobro en efectivo, arqueo diario de caja, facturación y reposición estética de lineales. Asimismo, cuento con un nivel C1 de español y lengua nativa persa, lo que me brinda una excelente capacidad de comunicación y empatía en el trato con el cliente.

Me considero una persona puntual, alegre, resolutiva y con muchas ganas de aportar valor a su establecimiento. Cuento con disponibilidad completa e incorporación inmediata.

Quedo a su disposición para concertar una entrevista.

Atentamente,
Sabriyah Dawood Shah
Teléfono: 631 69 52 41 · Email: sabrianeha@gmail.com`
  }
];

export interface JobRequirement {
  id: string;
  category: string;
  name: string;
  matches: boolean;
  justification: string;
}

export const defaultRequirementsList: JobRequirement[] = [
  {
    id: "req-1",
    category: "Logística",
    name: "Manejo de Pistola de Radiofrecuencia (RF)",
    matches: true,
    justification: "Experiencia directa en Logisfashion para picking y control de referencias."
  },
  {
    id: "req-2",
    category: "Limpieza",
    name: "Manejo de mangueras de agua a alta presión",
    matches: true,
    justification: "Uso diario en plantas agroalimentarias de Navidul / Campofrío."
  },
  {
    id: "req-3",
    category: "Limpieza",
    name: "Desinfección técnica y protocolos de bioseguridad / APPCC",
    matches: true,
    justification: "Saneamiento de maquinaria cárnica y formación de base en Enfermería."
  },
  {
    id: "req-4",
    category: "Logística",
    name: "Picking, packing y etiquetado textil",
    matches: true,
    justification: "Desalarmado, doblado, empaque y trazabilidad en almacén logístico."
  },
  {
    id: "req-5",
    category: "Idiomas",
    name: "Español fluido para trabajo en equipo y órdenes técnicas (C1)",
    matches: true,
    justification: "Nivel C1 acreditado; además experiencia como traductora en Cruz Roja."
  },
  {
    id: "req-6",
    category: "Disponibilidad",
    name: "Incorporación inmediata y flexibilidad horaria",
    matches: true,
    justification: "Disponible de inmediato en Torrijos, comarca de Toledo y zona sur de Madrid."
  },
  {
    id: "req-7",
    category: "Inventarios",
    name: "Control de stock, albaranes y reposición",
    matches: true,
    justification: "Verificación de mercancías en almacén, tienda y hostelería."
  },
  {
    id: "req-8",
    category: "Caja y Comercio",
    name: "Cobro TPV, arqueo y atención al cliente",
    matches: true,
    justification: "Experiencia en caja, arqueos y atención personalizada en Madrid y Huelva."
  }
];
