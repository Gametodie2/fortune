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

export { navLinks, contactInfo, socials, openingHours };
