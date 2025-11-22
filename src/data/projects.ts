export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  company: string;
  technologies: string[];
  mainImage: string;
  mainImageAspect?: "square" | "video" | "4/3" | "portrait";
  gallery: {
    type: "render" | "technical" | "sketchup";
    url: string;
    caption: string;
    aspect?: "square" | "video" | "4/3" | "portrait";
  }[];
}

export const projects: Project[] = [
  {
    id: "compact-office",
    title: "Compact Home Office",
    description: "Personal project exploring efficient workspace design in compact environments.",
    role: "Design, Visualization & Floor Plan",
    company: "Personal Project",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/compact-office/office-view.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/compact-office/office-view.png",
        caption: "Workspace View",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/compact-office/office-iso.png",
        caption: "Isometric Layout",
        aspect: "4/3"
      }
    ]
  },
  {
    id: "social-living",
    title: "Social Area & Balcony",
    description: "Integrated living room, dining area, and gourmet balcony designed for hosting.",
    role: "3D Modeling & Rendering",
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/social-living/living-01.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/social-living/living-01.png",
        caption: "Living Room",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/living-02.png",
        caption: "TV Wall Detail",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/dining.png",
        caption: "Dining Area",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/kitchen.png",
        caption: "Kitchen",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/balcony-01.png",
        caption: "Gourmet Balcony",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/balcony-02.png",
        caption: "Balcony Seating",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/social-living/balcony-03.png",
        caption: "Balcony Detail",
        aspect: "4/3"
      }
    ]
  },
  {
    id: "private-suites",
    title: "Master & Guest Suites",
    description: "Cozy master suite and guest bedroom with custom joinery.",
    role: "3D Modeling & Rendering",
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/private-suites/master-01.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/private-suites/master-01.png",
        caption: "Master Bedroom",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/private-suites/master-02.png",
        caption: "Master Bedroom View 2",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/private-suites/guest-01.png",
        caption: "Guest Bedroom",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/private-suites/guest-02.png",
        caption: "Guest Bedroom Workspace",
        aspect: "4/3"
      }
    ]
  },
  {
    id: "outdoor-gourmet",
    title: "Outdoor Gourmet Area",
    description: "Outdoor entertainment area featuring rustic materials and modern layout.",
    role: "3D Rendering",
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/area-gourmet/gourmet-01.png",
    mainImageAspect: "4/3",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/area-gourmet/gourmet-01.png",
        caption: "Overview",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/area-gourmet/gourmet-02.png",
        caption: "Counter Detail",
        aspect: "4/3"
      },
      {
        type: "render",
        url: "/img/projetos/area-gourmet/gourmet-03.png",
        caption: "Dining Setup",
        aspect: "4/3"
      }
    ]
  },
  {
    id: "area-gourmet-technical",
    title: "Indoor Gourmet Area",
    description: "Technical documentation and interior detailing for the gourmet area project. (Note: Original technical descriptions in Portuguese)",
    role: "Technical Drawing",
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["AutoCAD", "Layout"],
    mainImage: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/ÁreaGourmet.png",
    gallery: [
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/Planta.png",
        caption: "Floor Plan"
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/Cozinha.png",
        caption: "Kitchen Detail"
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/Iluminação.png",
        caption: "Lighting Plan"
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/VistaCozinha1.png",
        caption: "Kitchen Elevation 1"
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/VistaCozinha2.png",
        caption: "Kitchen Elevation 2"
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/VistaCozinha3.png",
        caption: "Kitchen Elevation 3"
      },
      {
        type: "technical",
        url: "/img/projetos/projeto-areagourmet-1-desenhos-tecnicos/ÁreaGourmet.png",
        caption: "Gourmet Area Overview"
      }
    ]
  },
  {
    id: "kids-room",
    title: "Playful Kids Room",
    description: "Creative bedroom design with functional storage and study area.",
    role: "3D Rendering",
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/kids-room/view-01.png",
    mainImageAspect: "square",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/kids-room/view-01.png",
        caption: "Bed Area",
        aspect: "square"
      },
      {
        type: "render",
        url: "/img/projetos/kids-room/view-02.png",
        caption: "Study Desk",
        aspect: "square"
      },
      {
        type: "render",
        url: "/img/projetos/kids-room/view-03.png",
        caption: "Storage View",
        aspect: "square"
      }
    ]
  },
  {
    id: "closet-office",
    title: "Walk-in Closet",
    description: "Custom cabinetry design for a walk-in closet with integrated dressing area.",
    role: "3D Modeling & Rendering",
    company: "Patrícia Ribeiro Design de Interiores",
    technologies: ["SketchUp", "V-Ray"],
    mainImage: "/img/projetos/closet-office/closet-open.png",
    mainImageAspect: "portrait",
    gallery: [
      {
        type: "render",
        url: "/img/projetos/closet-office/closet-open.png",
        caption: "Open Closet",
        aspect: "portrait"
      },
      {
        type: "render",
        url: "/img/projetos/closet-office/closet-closed.png",
        caption: "Closed Closet",
        aspect: "portrait"
      },
      {
        type: "render",
        url: "/img/projetos/closet-office/desk.png",
        caption: "Dressing Area",
        aspect: "portrait"
      }
    ]
  }
];
