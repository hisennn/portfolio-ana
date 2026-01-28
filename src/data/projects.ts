export interface Project {
  id: string;
  title: { en: string; pt: string };
  description: { en: string; pt: string };
  role: { en: string; pt: string };
  company: string;
  technologies: string[];
  mainImage: string;
  mainImageAspect?: "square" | "video" | "4/3" | "portrait";
  gallery: {
    type: "render" | "technical" | "sketchup";
    url: string;
    caption: { en: string; pt: string };
    aspect?: "square" | "video" | "4/3" | "portrait";
  }[];
}

export const projects: Project[] = [
  {
    id: "compact-office",
    title: { en: "Compact Home Office", pt: "Home Office Compacto" },
    description: { 
      en: "Personal project exploring efficient workspace design in small spaces.", 
      pt: "Projeto pessoal explorando design de espaço de trabalho em ambientes pequenos." 
    },
    role: { en: "Design, Visualization & Floor Plan", pt: "Design, Visualização e Planta" },
    company: "Personal Project",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/compact-office/office-view.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/compact-office/office-view.png",
        caption: { en: "Workspace View", pt: "Vista do Espaço" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/compact-office/office-iso.png",
        caption: { en: "Isometric Layout", pt: "Layout Isométrico" },
        aspect: "4/3"
      }
    ]
  },
  {
    id: "social-living",
    title: { en: "Social Area & Balcony", pt: "Área Social e Varanda" },
    description: { 
      en: "Living room, dining area, and gourmet balcony designed for gatherings.", 
      pt: "Sala de estar, jantar e varanda gourmet." 
    },
    role: { en: "3D Modeling & Rendering", pt: "Modelagem 3D e Renderização" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/social-living/living-01.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/social-living/living-01.png",
        caption: { en: "Living Room", pt: "Sala de Estar" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/living-02.png",
        caption: { en: "TV Wall Detail", pt: "Detalhe Painel TV" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/dining.png",
        caption: { en: "Dining Area", pt: "Sala de Jantar" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/kitchen.png",
        caption: { en: "Kitchen", pt: "Cozinha" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/balcony-01.png",
        caption: { en: "Gourmet Balcony", pt: "Varanda Gourmet" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/balcony-02.png",
        caption: { en: "Balcony Seating", pt: "Área de Estar Varanda" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/balcony-03.png",
        caption: { en: "Balcony Detail", pt: "Detalhe Varanda" },
        aspect: "4/3"
      }
    ]
  },
  {
    id: "private-suites",
    title: { en: "Master & Guest Suites", pt: "Suíte Master e Hóspedes" },
    description: { 
      en: "Master suite and guest bedroom with custom woodwork.", 
      pt: "Suíte master e quarto de hóspedes com marcenaria sob medida." 
    },
    role: { en: "3D Modeling & Rendering", pt: "Modelagem 3D e Renderização" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/private-suites/master-01.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/private-suites/master-01.png",
        caption: { en: "Master Bedroom", pt: "Suíte Master" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/private-suites/master-02.png",
        caption: { en: "Master Bedroom View 2", pt: "Suíte Master Vista 2" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/private-suites/guest-01.png",
        caption: { en: "Guest Bedroom", pt: "Quarto de Hóspedes" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/private-suites/guest-02.png",
        caption: { en: "Guest Bedroom Workspace", pt: "Área de Trabalho Hóspedes" },
        aspect: "4/3"
      }
    ]
  },
  {
    id: "outdoor-gourmet",
    title: { en: "Outdoor Gourmet Area", pt: "Área Gourmet Externa" },
    description: { 
      en: "Outdoor area with rustic materials and modern layout.", 
      pt: "Área externa com materiais rústicos e layout moderno." 
    },
    role: { en: "3D Rendering", pt: "Renderização 3D" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/area-gourmet/gourmet-01.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/area-gourmet/gourmet-01.png",
        caption: { en: "Overview", pt: "Vista Geral" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/area-gourmet/gourmet-02.png",
        caption: { en: "Counter Detail", pt: "Detalhe Bancada" },
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/area-gourmet/gourmet-03.png",
        caption: { en: "Dining Setup", pt: "Mesa de Jantar" },
        aspect: "4/3"
      }
    ]
  },
  {
    id: "area-gourmet-technical",
    title: { en: "Indoor Gourmet Area", pt: "Área Gourmet Interna" },
    description: { 
      en: "Technical drawings and interior details for a gourmet area.", 
      pt: "Desenhos técnicos e detalhamento de interiores para área gourmet." 
    },
    role: { en: "Technical Drawing", pt: "Desenho Técnico" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["AutoCAD"],
    mainImage: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/ÁreaGourmet.png",
    gallery: [
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/Planta.png",
        caption: { en: "Floor Plan", pt: "Planta Baixa" }
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/Cozinha.png",
        caption: { en: "Kitchen Detail", pt: "Detalhe Cozinha" }
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/Iluminação.png",
        caption: { en: "Lighting Plan", pt: "Planta de Iluminação" }
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/VistaCozinha1.png",
        caption: { en: "Kitchen Elevation 1", pt: "Vista Cozinha 1" }
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/VistaCozinha2.png",
        caption: { en: "Kitchen Elevation 2", pt: "Vista Cozinha 2" }
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/VistaCozinha3.png",
        caption: { en: "Kitchen Elevation 3", pt: "Vista Cozinha 3" }
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/ÁreaGourmet.png",
        caption: { en: "Gourmet Area Overview", pt: "Vista Geral Área Gourmet" }
      }
    ]
  },
  {
    id: "kids-room",
    title: { en: "Playful Kids Room", pt: "Quarto Infantil" },
    description: { 
      en: "Bedroom design with storage solutions and study area.", 
      pt: "Quarto com soluções de armazenamento e área de estudo." 
    },
    role: { en: "3D Rendering", pt: "Renderização 3D" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/kids-room/view-01.png",
    mainImageAspect: "square",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/kids-room/view-01.png",
        caption: { en: "Bed Area", pt: "Área da Cama" },
        aspect: "square"
      },
      {
        type: "render",
        url: "/img/projetos/kids-room/view-02.png",
        caption: { en: "Study Desk", pt: "Mesa de Estudo" },
        aspect: "square"
      },
      {
        type: "render",
        url: "/img/projetos/kids-room/view-03.png",
        caption: { en: "Storage View", pt: "Vista Armários" },
        aspect: "square"
      }
    ]
  },
  {
    id: "closet-office",
    title: { en: "Walk-in Closet", pt: "Closet" },
    description: { 
      en: "Custom closet design with dressing area.", 
      pt: "Closet sob medida com área de vestir." 
    },
    role: { en: "3D Modeling & Rendering", pt: "Modelagem 3D e Renderização" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/closet-office/closet-open.png",
    mainImageAspect: "portrait",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/closet-office/closet-open.png",
        caption: { en: "Open Closet", pt: "Closet Aberto" },
        aspect: "portrait"
      },
      {
        type: "render",
        url: "/img/projetos/closet-office/closet-closed.png",
        caption: { en: "Closed Closet", pt: "Closet Fechado" },
        aspect: "portrait"
      },
      {
        type: "render",
        url: "/img/projetos/closet-office/desk.png",
        caption: { en: "Dressing Area", pt: "Área de Vestir" },
        aspect: "portrait"
      }
    ]
  }
];
