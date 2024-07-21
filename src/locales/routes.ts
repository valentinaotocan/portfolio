type Routes = {
  home: string;
  about: string;
  projects: string;
  contact: string;
};

type Language = "en" | "hr";

const getRoutes = (language: string): Routes => {
  const routes: Record<Language, Routes> = {
    en: {
      home: "/",
      about: "/about",
      projects: "/projects",
      contact: "/contact",
    },
    hr: {
      home: "/",
      about: "/o-nama",
      projects: "/projekti",
      contact: "/kontakt",
    },
  };

  return routes[language as Language] || routes.en;
};

export default getRoutes;
