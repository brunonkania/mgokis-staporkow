// TODO: Remove mock functionality - replace with real data from API

import heroImage from "@assets/generated_images/theater_interior_hero_background.png";
import concertImage from "@assets/generated_images/classical_concert_event.png";
import theaterImage from "@assets/generated_images/theater_performance_event.png";
import exhibitionImage from "@assets/generated_images/art_exhibition_event.png";
import artWorkshopImage from "@assets/generated_images/children_art_workshop_activity.png";
import danceImage from "@assets/generated_images/folk_dance_class_activity.png";
import musicImage from "@assets/generated_images/music_lessons_activity.png";
import ceramicsImage from "@assets/generated_images/ceramics_workshop_activity.png";
import logoImage from "@assets/image12_1765139108442.png";

export const images = {
  hero: heroImage,
  logo: logoImage,
  events: {
    concert: concertImage,
    theater: theaterImage,
    exhibition: exhibitionImage,
  },
  activities: {
    artWorkshop: artWorkshopImage,
    dance: danceImage,
    music: musicImage,
    ceramics: ceramicsImage,
  },
};

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  category: string;
  description: string;
}

export interface Activity {
  id: number;
  title: string;
  image: string;
  schedule: string;
  ageGroup: string;
  description: string;
}

export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
  category: string;
}

export const events: Event[] = [
  {
    id: 1,
    title: "Koncert Noworoczny",
    date: "2025-01-15",
    time: "19:00",
    image: concertImage,
    category: "Koncert",
    description: "Wyjątkowy wieczór z muzyką klasyczną w wykonaniu Orkiestry Kameralnej.",
  },
  {
    id: 2,
    title: "Spektakl 'Wesele'",
    date: "2025-01-22",
    time: "18:00",
    image: theaterImage,
    category: "Teatr",
    description: "Klasyka polskiej dramaturgii w nowoczesnej interpretacji.",
  },
  {
    id: 3,
    title: "Wystawa Malarstwa",
    date: "2025-02-01",
    time: "10:00",
    image: exhibitionImage,
    category: "Wystawa",
    description: "Prace lokalnych artystów prezentujące piękno regionu świętokrzyskiego.",
  },
];

export const activities: Activity[] = [
  {
    id: 1,
    title: "Plastyka dla Dzieci",
    image: artWorkshopImage,
    schedule: "Wtorki, 16:00-17:30",
    ageGroup: "6-12 lat",
    description: "Rozwijanie kreatywności poprzez różnorodne techniki plastyczne.",
  },
  {
    id: 2,
    title: "Zespół Folklorystyczny",
    image: danceImage,
    schedule: "Środy i Piątki, 17:00-19:00",
    ageGroup: "Młodzież i Dorośli",
    description: "Nauka tradycyjnych tańców i pieśni ludowych regionu.",
  },
  {
    id: 3,
    title: "Szkoła Muzyczna",
    image: musicImage,
    schedule: "Poniedziałki-Piątki",
    ageGroup: "Wszystkie grupy wiekowe",
    description: "Nauka gry na instrumentach: fortepian, gitara, skrzypce.",
  },
  {
    id: 4,
    title: "Ceramika Artystyczna",
    image: ceramicsImage,
    schedule: "Soboty, 10:00-13:00",
    ageGroup: "Dorośli",
    description: "Tworzenie unikalnych dzieł z gliny pod okiem doświadczonego instruktora.",
  },
];

export const news: NewsItem[] = [
  {
    id: 1,
    title: "Nabór do Zespołu Folklorystycznego",
    date: "2024-12-05",
    image: danceImage,
    excerpt: "Zapraszamy dzieci i młodzież do dołączenia do naszego zespołu folklorystycznego. Zapisy trwają do końca miesiąca.",
    category: "Ogłoszenie",
  },
  {
    id: 2,
    title: "Sukces naszych artystów na konkursie",
    date: "2024-12-01",
    image: artWorkshopImage,
    excerpt: "Uczniowie z pracowni plastycznej zdobyli pierwsze miejsce w wojewódzkim konkursie artystycznym.",
    category: "Wydarzenie",
  },
  {
    id: 3,
    title: "Nowe instrumenty w szkole muzycznej",
    date: "2024-11-28",
    image: musicImage,
    excerpt: "Dzięki wsparciu sponsorów zakupiliśmy nowe pianino oraz komplet skrzypiec dla najmłodszych uczniów.",
    category: "Aktualność",
  },
  {
    id: 4,
    title: "Warsztaty ceramiczne dla seniorów",
    date: "2024-11-25",
    image: ceramicsImage,
    excerpt: "Startuje nowy cykl warsztatów ceramicznych dedykowany seniorom. Zapisy w sekretariacie.",
    category: "Ogłoszenie",
  },
];

export const navLinks = {
  left: [
    { label: "Główna", href: "/" },
    {
      label: "O nas",
      href: "#",
      dropdown: [
        { label: "Historia", href: "/historia" },
        { label: "Misja i Wizja", href: "/misja" },
        { label: "Regulamin", href: "/regulamin" },
      ],
    },
    {
      label: "Biblioteka publiczna",
      href: "#",
      dropdown: [
        { label: "Katalog", href: "/katalog" },
        { label: "Nowości", href: "/nowosci" },
        { label: "Godziny otwarcia", href: "/godziny" },
      ],
    },
    {
      label: "Artystyczna przestrzeń",
      href: "#",
      dropdown: [
        { label: "Galeria", href: "/galeria" },
        { label: "Warsztaty", href: "/warsztaty" },
        { label: "Wystawy", href: "/wystawy" },
      ],
    },
  ],
  right: [
    {
      label: "Inne formy działalności",
      href: "#",
      dropdown: [
        { label: "Świetlice wiejskie", href: "/swietlice" },
        { label: "Wypożyczalnia sprzętu", href: "/wypozyczalnia" },
      ],
    },
    {
      label: "Aktualności",
      href: "#",
      dropdown: [
        { label: "Wszystkie", href: "/aktualnosci" },
        { label: "Wydarzenia", href: "/wydarzenia" },
        { label: "Ogłoszenia", href: "/ogloszenia" },
      ],
    },
    { label: "Kadra", href: "/kadra" },
    {
      label: "Kontakt",
      href: "#",
      dropdown: [
        { label: "Dane kontaktowe", href: "/kontakt" },
        { label: "Lokalizacja", href: "/lokalizacja" },
        { label: "Formularz", href: "/formularz" },
      ],
    },
  ],
};

export const contactInfo = {
  name: "Miejsko-Gminny Ośrodek Kultury w Stąporkowie",
  address: "ul. Piłsudskiego 132",
  city: "26-220 Stąporków",
  phone: "+48 41 374 11 22",
  email: "mgok@staporkow.pl",
  hours: {
    weekdays: "08:00 - 20:00",
    saturday: "09:00 - 17:00",
    sunday: "Zamknięte",
  },
  social: {
    facebook: "https://facebook.com/mgokstaporkow",
    instagram: "https://instagram.com/mgokstaporkow",
    youtube: "https://youtube.com/mgokstaporkow",
  },
};
