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
  sections?: {
    id: string;
    title: { en: string; pt: string };
    mainImage: string;
    technologies?: string[];
    gallery: {
      type: "render" | "technical" | "sketchup";
      url: string;
      caption: { en: string; pt: string };
      aspect?: "square" | "video" | "4/3" | "portrait";
    }[];
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
    id: "apartamento-integrado",
    title: { en: "Apartment S&R", pt: "Apartamento S&R" },
    description: { 
      en: "Complete apartment project integrating social area, balcony, and private suites.", 
      pt: "Projeto completo de apartamento integrando área social, varanda e suítes íntimas." 
    },
    role: { en: "3D Modeling & Layout", pt: "Modelagem 3D e Layout" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray", "Layout"],
    mainImage: "/img/projetos/social-living/living-01.png",
    mainImageAspect: "4/3",
    gallery: [],
    sections: [
      {
        id: "social",
        title: { en: "Social Area & Balcony", pt: "Área Social e Varanda" },
        mainImage: "/img/projetos/social-living/living-01.png",
        technologies: ["SketchUp", "V-Ray"],
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
        id: "suites",
        title: { en: "Master & Guest Suites", pt: "Suíte Master e Hóspedes" },
        mainImage: "/img/projetos/private-suites/master-01.png",
        technologies: ["SketchUp", "V-Ray"],
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
        id: "layout",
        title: { en: "Kitchen & Balcony Layout", pt: "Layout Cozinha e Varanda" },
        mainImage: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_01_ISOMÉTRICA - VARANDA E COZINHA.jpg",
        technologies: ["Layout", "SketchUp"],
        gallery: [
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_01_ISOMÉTRICA - VARANDA E COZINHA.jpg",
            caption: { en: "Isometric Overview", pt: "Vista Geral Isométrica" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_02_VISTA FRONTAL - VARANDA E COZINHA.jpg",
            caption: { en: "Front Elevation", pt: "Vista Frontal" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_03_VARANDA - ISOMÉTRICA E VISTA FRONTAL.jpg",
            caption: { en: "Balcony Isometric & Front", pt: "Varanda Isométrica e Vista Frontal" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_04_VARANDA - ARMÁRIO AÉREO E BANCADA.jpg",
            caption: { en: "Balcony Upper Cabinet & Counter", pt: "Varanda Armário Aéreo e Bancada" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_05_VARANDA - ISOMÉTRICA TAMPO.jpg",
            caption: { en: "Balcony Countertop Isometric", pt: "Varanda Tampo Isométrico" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_06_VARANDA - VISTA SUPERIOR E FRONTAL DO TAMPO.jpg",
            caption: { en: "Balcony Countertop Top & Front", pt: "Varanda Tampo Vista Superior e Frontal" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_07_VARANDA - RIPADO LAVA-LOUÇA.jpg",
            caption: { en: "Balcony Sink Slats", pt: "Varanda Ripado Lava-Louça" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_08_COZINHA - ISOMÉTRICA.jpg",
            caption: { en: "Kitchen Isometric", pt: "Cozinha Isométrica" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_09_COZINHA - VISTA FRONTAL.jpg",
            caption: { en: "Kitchen Front Elevation", pt: "Cozinha Vista Frontal" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_10_COZINHA - ARMÁRIO AÉREO.jpg",
            caption: { en: "Kitchen Upper Cabinet", pt: "Cozinha Armário Aéreo" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_11_COZINHA - BANCADA.jpg",
            caption: { en: "Kitchen Counter", pt: "Cozinha Bancada" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_12_COZINHA - RIPADO.jpg",
            caption: { en: "Kitchen Slats", pt: "Cozinha Ripado" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_13_COZINHA - TAMPO.jpg",
            caption: { en: "Kitchen Countertop 1", pt: "Cozinha Tampo 1" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_14_COZINHA - TAMPO.jpg",
            caption: { en: "Kitchen Countertop 2", pt: "Cozinha Tampo 2" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_15_COZINHA - NICHO PARA GELADEIRA.jpg",
            caption: { en: "Fridge Niche", pt: "Cozinha Nicho para Geladeira" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_16_PAINEL DE TV.jpg",
            caption: { en: "TV Panel 1", pt: "Painel de TV 1" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_17_PAINEL DE TV.jpg",
            caption: { en: "TV Panel 2", pt: "Painel de TV 2" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_18_LAVABO.jpg",
            caption: { en: "Powder Room", pt: "Lavabo" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_19_PAINEL DE TV - QUARTO SOLTEIRO.jpg",
            caption: { en: "Single Room TV Panel", pt: "Painel de TV Quarto Solteiro" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_20_VARANDA - NICHO AR CONDICIONADO.jpg",
            caption: { en: "Balcony AC Niche 1", pt: "Varanda Nicho Ar Condicionado 1" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_21_VARANDA - NICHO AR CONDICIONADO.jpg",
            caption: { en: "Balcony AC Niche 2", pt: "Varanda Nicho Ar Condicionado 2" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_22_VARANDA - NICHO AR CONDICIONADO.jpg",
            caption: { en: "Balcony AC Niche 3", pt: "Varanda Nicho Ar Condicionado 3" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_23_VARANDA - PORTA.jpg",
            caption: { en: "Balcony Door", pt: "Varanda Porta" },
            aspect: "4/3"
          },
          {
            type: "technical",
            url: "/img/projetos/layout_co-va/SilviaRicardo_Marcenaria_24_VARANDA - ARMÁRIO.jpg",
            caption: { en: "Balcony Cabinet", pt: "Varanda Armário" },
            aspect: "4/3"
          }
        ]
      }
    ]
  },
  {
    id: "gourmet-completo",
    title: { en: "Complete Gourmet Area", pt: "Área Gourmet Completa" },
    description: {
      en: "Complete project with outdoor and indoor gourmet areas.",
      pt: "Projeto completo com área gourmet externa e interna."
    },
    role: { en: "Complete Design Project", pt: "Projeto Completo" },
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray", "AutoCAD"],
    mainImage: "/img/projetos/area-gourmet/gourmet-01.png",
    mainImageAspect: "4/3",
    gallery: [],
    sections: [
      {
        id: "outdoor",
        title: { en: "Outdoor Area", pt: "Área Externa" },
        mainImage: "/img/projetos/area-gourmet/gourmet-01.png",
        technologies: ["SketchUp", "V-Ray"],
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
            caption: { en: "Pool & Spa View", pt: "Vista Piscina com Spa" },
            aspect: "4/3"
          },
          {
            type: "render",
            url: "/img/projetos/area-gourmet/gourmet-03.png",
            caption: { en: "Spa & Chapel View", pt: "Vista Spa com Capela" },
            aspect: "4/3"
          }
        ]
      },
      {
        id: "indoor",
        title: { en: "Indoor Area", pt: "Área Interna" },
        mainImage: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/ÁreaGourmet.png",
        technologies: ["AutoCAD"],
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
        caption: { en: "Dressing Area", pt: "Penteadeira" },
        aspect: "portrait"
      }
    ]
  }
];