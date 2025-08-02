const navLinks = [
  {
    id: "menu",
    title: "Menu",
  },
  {
    id: "about",
    title: "Over Ons",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const contactInfo = [
  {
    icon: "/images/icons/phone.svg",
    label: "Telefoon",
    value: "03/778.06.26",
  },
  {
    icon: "/images/icons/address.svg",
    label: "Adres",
    value: "Grote Markt 10, 9100 Sint-Niklaas",
  },
  {
    icon: "/images/icons/document.svg",
    label: "Ondernemingsnummer",
    value: "BE0448.955.887",
  },
];

const socials = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/pages/Fortune-Garden/157180564338734",
    icon: "/images/icons/facebook.svg",
  },
];

const openingHours = [
  { day: "MAANDAG", hours: "Gesloten" },
  { day: "DINSDAG", hours: "12u00 tot 14u30", hours2: "17u30 tot 23u00" },
  {
    day: "WOENSDAG",
    hours: "'s Middags gesloten",
    hours2: "17u30 tot 23u00",
  },
  { day: "DONDERDAG", hours: "12u00 tot 14u30", hours2: "17u30 tot 23u00" },
  { day: "VRIJDAG", hours: "12u00 tot 14u30", hours2: "17u30 tot 23u00" },
  { day: "ZATERDAG", hours: "12u00 tot 14u30", hours2: "17u30 tot 23u00" },
  { day: "ZONDAG", hours: "12u00 tot 22u30", continuous: true },
  { day: "FEESTDAGEN", hours: "Wij zijn doorlopend geopend!" },
];

const seoConfig = {
  // Algemene website-informatie
  siteName: "Chinees restaurant Fortune Garden",
  tagline:
    "Authentieke Kantonese keuken en Chinese specialiteiten aan de Grote Markt in Sint-Niklaas",

  main: {
    title:
      "Chinees restaurant Fortune Garden - Authentieke Kantonese keuken Sint-Niklaas",
    description:
      "Welkom bij Fortune Garden, al meer dan 20 jaar dé plek voor authentieke Kantonese en Chinese specialiteiten aan de Grote Markt in Sint-Niklaas. Kom gezellig tafelen of haal uw favoriete gerechten af.",
    canonical: "https://www.fortunegarden.be/",
    keywords:
      "Chinees restaurant Sint-Niklaas, Kantonees restaurant Sint-Niklaas, afhaal Chinees Sint-Niklaas, Grote Markt Sint-Niklaas, Fortune Garden Sint-Niklaas, authentieke Chinese keuken Waasland, Chinees eten Sint-Niklaas, dim sum Sint-Niklaas, menu Fortune Garden, online reserveren Sint-Niklaas",
    og: {
      type: "website",
      title:
        "Chinees restaurant Fortune Garden - Authentieke Kantonese keuken Sint-Niklaas",
      description:
        "Welkom bij Fortune Garden, al meer dan 20 jaar dé plek voor authentieke Kantonese en Chinese specialiteiten aan de Grote Markt in Sint-Niklaas. Kom gezellig tafelen of haal uw favoriete gerechten af.",
      url: "https://www.fortunegarden.be/",
      image: "https://www.fortunegarden.be/images/logo.jpg",
    },
  },

  // Lokale SEO-informatie (voor Google My Business / Schema Markup)
  localBusiness: {
    name: "Fortune Garden",
    address: {
      streetAddress: "Grote Markt 10",
      addressLocality: "Sint-Niklaas",
      addressRegion: "Oost-Vlaanderen",
      postalCode: "9100",
      addressCountry: "BE",
    },
    geo: {
      latitude: "51.16408131133241",
      longitude: "4.13917483265829",
    },
    telephone: "+3237780626",
    priceRange: "$$",
    servesCuisine: ["Kantonees", "Chinees"],
    url: "https://www.fortunegarden.be/",
    image: "https://www.fortunegarden.be/images/logo.jpg",
    openingHours: [
      "Mo Closed",
      "Tu 12:00-14:30",
      "Tu 17:30-23:00",
      "We 17:30-23:00",
      "Th 12:00-14:30",
      "Th 17:30-23:00",
      "Fr 12:00-14:30",
      "Fr 17:30-23:00",
      "Sa 12:00-14:30",
      "Sa 17:30-23:00",
      "Su 12:00-22:30",
    ],
  },
};

export { navLinks, contactInfo, socials, openingHours, seoConfig };
