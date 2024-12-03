type Route = {
  name: string;
  en: string;
  hr: string;
};

const routesArray: Route[] = [
  { name: "home", en: "/", hr: "/" },
  { name: "about", en: "/about", hr: "/o-nama" },
  { name: "projects", en: "/projects", hr: "/projekti" },
  { name: "contact", en: "/contact", hr: "/kontakt" },
];

export const getRoutes = (language: "en" | "hr"): Record<string, string> => {
  // If the provided language is invalid or unrecognized
  if (language !== "en" && language !== "hr") {
    language = "en";
  }

  const result = Object.fromEntries(
    routesArray.map((route) => [route.name, route[language]])
  );

  return result;
};

export default getRoutes;
