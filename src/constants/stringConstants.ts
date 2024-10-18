export const urls = {
  basename: "/",
};
export const titles = {
  greetingTitle: "Rozwiń skrzydła u nas",
  facultiesSection: "Praktyki i staże zagraniczne",
};
export const headerLinkNames = {
  mainPageLink: "Strona główna",
  admissionToSchoolLink: "Przyjęcie do szkoły",
  ourStaffLink: "Nasza kadra",
  aboutSchoolLink: "O szkole",
  newsLink: "Aktualności",
  contactLink: "Kontakt",
  ukraineLink: "Україна",
};

type TFacultInfo = {
  id: number;
  title: string;
  text: string;
  imgUrl: string;
};

export const facultiesInfo: TFacultInfo[] = [
  {
    id: 0,
    title: "Programowanie",
    text: `Programista to jeden z najlepiej zarabiających i najbardziej poszukiwanych na rynku pracy zawodów.
     Znakomita droga zawodowa. Programowanie to nie tylko pieniądze, to ciekawa pasja dająca m. in. możliwość programowania robotów, pisania gier 3D,
      aplikacji mobilnych, desktopowych i robienia wielu innowacyjnych, kreatywnych rzeczy.`,
    imgUrl: "",
  },
  {
    id: 1,

    title: "Informatyka",
    text: `To kierunek dla kogoś, kogo fascynuje działanie systemów operacyjnych, oprogramowania i sieci.
     Na zajęciach poznasz budowę komputera i nauczysz się dokonywać jego napraw i modernizacji.
      U nas będziesz mógł uczestniczyć w konkursach i turniejach e-sportowych w szkolnej Gildii Graczy – w programie m.
       in. Lol, CS:GO i FIFA. Będziesz: majsterkował przy sprzęcie, pisał programy, budował sieci, rozwijał się w e-sporcie.
        Jeśli interesują Cię nowoczesne technologie, a języki programowania znasz lepiej od ojczystego,
         to zawód informatyka jest dla Ciebie! Dzięki niemu zdobędziesz również na dobrze płatną pracę.`,
    imgUrl: "",
  },
  {
    id: 2,

    title: "Turystyka",
    text: `Malownicze uliczki Pragi, zabytki Akropolu,
     tajemnice Rzymu… one tylko czekają, by je odwiedzić z pilotem/przewodnikiem,
      którym możesz być właśnie Ty. Jako uczeń naszej szkoły będziesz poznawać najważniejsze zabytki naszego kraju i wcielisz się w przewodnika oprowadzającego wycieczki.
       Ponadto odwiedzisz największe krajowe i zagraniczne targi turystyczne, gdzie zawrzesz nowe znajomości i wykażesz się znajomością języków obcych.
        Otwartość, „wygadanie” i dobry humor wskazane!`,
    imgUrl: "",
  },
  {
    id: 3,

    title: "Turystyka klasa stewardess i stewardów",
    text: `Klasa o profilu stewardesa/steward to idealny wybór dla osób pragnących międzynarodowej kariery,
     wymagającej umiejętności komunikacyjnych, szybkiej reakcji i elastyczności.
      Absolwenci są poszukiwani nie tylko w branży lotniczej, ale także w turystyce i obsłudze klienta,
       co otwiera przed nimi drzwi do dynamicznej kariery z możliwością podróżowania po świecie.`,
    imgUrl: "",
  },
  {
    id: 4,

    title: "Logistyka i spedycja",
    text: `To kierunek dla kogoś, kogo fascynuje sprawne działanie przedsiębiorstw, nie tylko z branży logistycznej.
     Jako uczeń naszej szkoły będziesz odbywać praktyki w firmach działających w całej Polsce i Europie,
      poczujesz się jak „szef” odpowiedzialny za niemal całą firmę: zasoby ludzkie, transport, planowanie, podział obowiązków i kontrolę budżetu i relacje z klientami.
       Ponadto weźmiesz udział w niezbędnych kursach zawodowych. Jeśli jesteś kontaktowy, pewny siebie i zorganizowany,
        a excelowe tabelki powodują szybsze bicie Twojego serca, to jest to zawód dla Ciebie!`,
    imgUrl: "",
  },
  {
    id: 5,

    title: "Logistyka mundurowa",
    text: `Innowacja skierowana do osób wiążących swoją przyszłość z pracą w służbach mundurowych,
     takich jak: wojsko, policja, straż pożarna, żandarmeria, straż graniczna czy wojska obrony terytorialnej.
      W ramach procesu nauczania, uczniowie wyjeżdżają na liczne obozy, w trakcie których zdobywają cenne doświadczenie i poszerzają swoją wiedzę wojskową.
       Zawód logistyka sam w sobie jest atrakcyjny. Logistyk znajdzie zatrudnienie tam, gdzie potrzebna jest osoba odpowiedzialna za planowanie, zarządzanie,
        a także nadzór nad transportem oraz dystrybucją towarów, osób, pieniędzy i informacji.`,
    imgUrl: "",
  },
  {
    id: 6,

    title: "Weterynaria",
    text: `To kierunek dla kogoś kto kocha zwierzęta i chciałby w przyszłości pracować z nimi.
     Na zajęciach poznasz budowę, zwyczaje i sposoby hodowli zwierząt.
      Będziesz nowo nabytą wiedzę i umiejętności sprawdzać w praktyce.
       Jeśli masz w sobie empatię, lubisz pracę na świeżym powietrzu, kochasz zwierzęta i masz z nimi lepszy kontakt niż dr Dolittle,
        dołącz do nas i zostań technikiem weterynarii.`,
    imgUrl: "",
  },
];
