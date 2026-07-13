// Every figure in this file is taken from the NorthWind Sanctuary brochure
// (assets-northwindestates/northwindbrochure.pdf). Do not add numbers that the
// brochure does not state — pricing and RERA details are not in it.

export const SITE_URL = "https://www.northwindsanctuary.in";

export const project = {
  name: "NorthWind Sanctuary",
  tagline: "Live Rare",
  subTagline: "Your Rare Living",
  developer: "Northwind Estates Pvt. Ltd.",
  architect: "Confluence",
  address: "Plot 07, Sector Pi-1, Greater Noida, Uttar Pradesh 201306",
  locality: "Sector Pi-1, Greater Noida",
  certification:
    "One of the first IGBC Pre-Certified Platinum Rated group housing societies in Greater Noida",
  clubName: "Club Roots",
};

// Cover-page highlight figures (brochure p.5).
export const highlights = [
  { value: "4.48", unit: "Acre", label: "Land Parcel" },
  { value: "03", unit: "", label: "Towers" },
  { value: "20", unit: "", label: "Floors" },
  { value: "180", unit: "", label: "Luxury Apartments" },
  { value: "05", unit: "", label: "Penthouses" },
  { value: "80%", unit: "", label: "Lush Green Landscape" },
];

// Tower break-up and typical unit areas (brochure pp.40–41).
// Bedroom counts are read off the typical unit plans in the brochure.
export const towers = [
  {
    id: "amaltas",
    tower: "Tower A",
    name: "Amaltas",
    config: "4 BHK + Servant",
    floors: 17,
    units: 31,
    apartments: 28,
    penthouses: 1,
    gardenVillas: 2,
    saleable: 3750,
    carpet: 1956,
    balcony: 705,
    builtUp: 2839,
    description:
      "The largest typical unit at Sanctuary — a 3,750 sq.ft. saleable four-bedroom residence with two master suites, a servant room, a puja space, a 1,150 mm wide internal passage and 705 sq.ft. of balcony. Tower A is also the only tower specified with VRV air-conditioning throughout.",
    highlights: [
      "Two master bedroom suites",
      "705 sq.ft. of balcony area",
      "Servant room with attached toilet",
      "VRV air-conditioning",
    ],
  },
  {
    id: "banyan",
    tower: "Tower B",
    name: "Banyan",
    config: "4 BHK",
    floors: 20,
    units: 76,
    apartments: 72,
    penthouses: 2,
    gardenVillas: 2,
    saleable: 2431,
    carpet: 1286,
    balcony: 394,
    builtUp: 1800,
    description:
      "A 2,431 sq.ft. saleable four-bedroom home built around a 21'-0\" x 15'-9\" drawing and dining hall, with a master bedroom, dresser, puja area, utility balcony and four separate balconies opening off the living spaces.",
    highlights: [
      "21'-0\" x 15'-9\" drawing & dining",
      "Master bedroom with dresser",
      "Four balconies + utility balcony",
      "Dedicated puja area",
    ],
  },
  {
    id: "cedar",
    tower: "Tower C",
    name: "Cedar",
    config: "3 BHK",
    floors: 20,
    units: 78,
    apartments: 76,
    penthouses: 2,
    gardenVillas: 0,
    saleable: 1895,
    carpet: 957,
    balcony: 382,
    builtUp: 1468,
    description:
      "A 1,895 sq.ft. saleable three-bedroom residence with a 19'-0\" x 10'-11\" combined living and dining space, a master bedroom with dresser and master toilet, and three balconies plus a utility balcony.",
    highlights: [
      "19'-0\" x 10'-11\" living & dining",
      "Master bedroom with dresser",
      "Three balconies + utility balcony",
      "Most efficient footprint at Sanctuary",
    ],
  },
];

// Distance & time chart (brochure p.6).
export const distances = [
  { place: "GNIDA Metro Station", distance: "02 km", time: "05 min" },
  { place: "Pari Chowk", distance: "05 km", time: "07 min" },
  { place: "Fortis Hospital", distance: "05 km", time: "07 min" },
  { place: "Delhi Public School", distance: "08 km", time: "10 min" },
  { place: "Noida International Airport", distance: "30 km", time: "30 min" },
  { place: "Delhi", distance: "30 km", time: "30 min" },
];

// Landmarks shown on the brochure location map (p.6).
export const landmarks = [
  "Sharda University",
  "Bennett University",
  "Knowledge Park",
  "India Expo Mart",
  "Radisson Blu Hotel",
  "GNIDA Office",
  "Alpha Commercial Belt",
  "Sector 34 & Sector Pi",
];

// The seven amenity zones from the master plan legend (brochure p.8).
export const zones = [
  {
    id: "arrival",
    number: "Zone 1",
    title: "The Arrival Zone",
    intro:
      "At Sanctuary, your arrival is more than just an entrance — it's your first step into a world of elegance.",
    items: [
      "Entrance Plaza",
      "Club Drop-off",
      "Commercial Plaza",
      "Tower A / B / C Drop-off",
      "Surface Parking",
      "Ramp to the Basement",
      "Palmetum",
      "Feature Wall with Water Feature",
    ],
  },
  {
    id: "recreational",
    number: "Zone 2",
    title: "The Recreational Zone",
    intro:
      "A thoughtfully designed zone where leisure meets lifestyle. Surrounded by lush green and dotted with activity spots, this is your everyday escape right at home.",
    items: [
      "Banquet Lawn",
      "Café Spill-Over Space",
      "Central Lawn",
      "Callistemon Garden",
      "Bamboo Walk",
      "Reflexology Pathway",
      "Sculpture Court & Reading Area",
    ],
  },
  {
    id: "active",
    number: "Zone 3",
    title: "The Active Zone",
    intro:
      "Get moving in the active zone. Designed to keep you on your feet and fit — it's where movement meets motivation.",
    items: ["Exercise Station", "Hedge Garden", "Yoga / Dance Deck"],
  },
  {
    id: "fun",
    number: "Zone 4",
    title: "Fun & Entertainment Zone",
    intro:
      "Where the good times never clock out. It's not just a zone, it's your happy place — designed for all moods and age groups.",
    items: [
      "Main Pool",
      "Party Pool",
      "Kids' Pool",
      "Shallow Pool",
      "Parasols",
      "Waterfall from Sky Bridge",
      "Party Deck – F&B",
    ],
  },
  {
    id: "sports",
    number: "Zone 5",
    title: "Sports Zone",
    intro:
      "Fuel your passion for the play. A unique zone designed for action, competition and community.",
    items: [
      "Skating Rink",
      "Badminton Court",
      "Pickle Ball Court",
      "Cricket Pitch",
      "Multi-Purpose Play Court",
      "Putting Golf",
      "Jogging Track",
      "Kids' Play Arena",
      "Tree Court with Pet Park",
    ],
  },
  {
    id: "serenity",
    number: "Zone 6",
    title: "The Serenity Walk",
    intro:
      "A peaceful retreat designed for quiet moments and gentle unwinding. A space where time slows down and the mind hits the refresh button.",
    items: [
      "The Serenity Walkway",
      "Tree House",
      "Waterfall",
      "Tree Orchard",
      "Pet Park",
      "Sky Gazing Deck",
    ],
  },
  {
    id: "under-serenity",
    number: "Zone 7",
    title: "Under the Serenity Walk",
    intro:
      "The shaded level beneath the Serenity Walk, given over to play, music and gathering.",
    items: [
      "Hopscotch",
      "Musical Garden",
      "Outdoor Gym",
      "Table Tennis",
      "Swings",
      "Chaupal with Seating",
    ],
  },
];

// Club Roots facilities shown in the brochure (pp.31–35).
export const clubFacilities = [
  "Club Banquet Hall",
  "Double-Height Entrance Lobby",
  "Lounge Area",
  "AV Room / Private Theatre",
  "Restaurant",
  "Restaurant Waiting Area",
  "Games Room",
  "Gymnasium",
];

// Apartment specifications (brochure pp.42–43).
export const specifications = [
  {
    space: "Entrance Foyer",
    towerA: {
      Flooring: "Imported marble flooring",
      Skirting: "75 mm high, same as flooring",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
      Wall: "P.O.P. finish with acrylic emulsion paint",
      "Internal Doors": "2450 mm high polished veneer flush entrance door",
      AC: "VRV",
      Fixtures: "Smart touch lock",
    },
    towerBC: {
      Flooring: "Imported marble flooring",
      Skirting: "75 mm high, same as flooring",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
      Wall: "P.O.P. finish with acrylic emulsion paint",
      "Internal Doors": "2450 mm high polished veneer flush entrance door",
      AC: "Split AC",
      Fixtures: "Smart touch lock",
    },
  },
  {
    space: "Drawing, Dining & Puja Area",
    towerA: {
      Flooring: "Imported marble flooring",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
      Wall: "P.O.P. finish with acrylic emulsion paint",
      "Windows / Railings": "2450 high UPVC powder coated",
      AC: "VRV",
      Fixtures: "Intercom",
    },
    towerBC: {
      Flooring: "Imported marble flooring",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
      Wall: "P.O.P. finish with acrylic emulsion paint",
      "Windows / Railings": "2450 high UPVC powder coated",
      AC: "Split AC",
      Fixtures: "Intercom",
    },
  },
  {
    space: "Master Bedroom",
    towerA: {
      Flooring: "Wooden flooring",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
      "Internal Doors": "High polished veneer",
      "Windows / Railings": "2450 high UPVC powder coated",
      AC: "VRV",
    },
    towerBC: {
      Flooring: "Wooden flooring",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
      "Internal Doors": "High polished veneer",
      "Windows / Railings": "2450 high UPVC powder coated",
      AC: "Split AC",
    },
  },
  {
    space: "All Other Bedrooms",
    towerA: {
      Flooring: "Wooden flooring",
      Cupboard: "Laminated finish modular wardrobes with motion-sensor lights",
      "Internal Doors": "2450 high polished veneer",
      AC: "VRV",
    },
    towerBC: {
      Flooring: "Wooden flooring / premium vitrified tile",
      Cupboard: "Laminated finish modular wardrobes with motion-sensor lights",
      "Internal Doors": "2450 high polished veneer",
      AC: "Split AC",
    },
  },
  {
    space: "Master Dresser",
    towerA: {
      Flooring: "Laminated wood flooring",
      Cupboard: "Laminated finish modular wardrobes with motion-sensor lights",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
    },
    towerBC: {
      Flooring: "Laminated wood flooring",
      Cupboard: "Laminated finish modular wardrobes with motion-sensor lights",
      Ceiling: "POP / Gypsum peripheral ceiling drop",
    },
  },
  {
    space: "Kitchen",
    towerA: {
      Flooring: "Imported marble flooring",
      Wall: "Quartz 2' above counter, rest P.O.P. with acrylic emulsion",
      Cupboard: "Modular kitchen with quartz stone counter top",
      Fixtures: "Stainless steel sink with drain board, chimney + exhaust",
    },
    towerBC: {
      Flooring: "Imported marble flooring",
      Wall: "Quartz 2' above counter, rest P.O.P. with acrylic emulsion",
      Cupboard: "Modular kitchen with quartz stone counter top",
      Fixtures: "Stainless steel sink with drain board, chimney + exhaust",
    },
  },
  {
    space: "Master Toilet & All Other Toilets",
    towerA: {
      Flooring: "Vitrified tile",
      Wall: "Vitrified tile up to false ceiling",
      Ceiling: "POP / Gypsum (master) · Grid false ceiling (others)",
      Fixtures:
        "Exhaust, geyser, sanitary and C.P. fittings (Kohler, Roca, Jaquar or equivalent)",
    },
    towerBC: {
      Flooring: "Vitrified tile",
      Wall: "Vitrified tile up to false ceiling",
      Ceiling: "POP / Gypsum (master) · Grid false ceiling (others)",
      Fixtures:
        "Exhaust, geyser, sanitary and C.P. fittings (Kohler, Roca, Jaquar or equivalent)",
    },
  },
  {
    space: "Balconies",
    towerA: {
      Flooring: "Anti-skid vitrified plank look-alike tile",
      Wall: "External paint / finish as per façade design",
      Railings: "Solid parapet wall",
      Fixtures: "Point for washing machine (utility balcony)",
    },
    towerBC: {
      Flooring: "Anti-skid vitrified plank look-alike tile",
      Wall: "External paint / finish as per façade design",
      Railings: "Glass railing (drawing room balcony) · solid parapet elsewhere",
      Fixtures: "Point for washing machine (utility balcony)",
    },
  },
  {
    space: "Lift Lobby",
    towerA: {
      Flooring: "Granite stone",
      Ceiling: "POP / Gypsum false ceiling",
      Wall: "Granite stone on lift facia, texture paint on opposite wall",
    },
    towerBC: {
      Flooring: "Granite stone",
      Ceiling: "POP / Gypsum false ceiling",
      Wall: "Granite stone on lift facia, texture paint on opposite wall",
    },
  },
];

// Area definitions reproduced from the brochure disclaimer (p.40).
export const areaDefinitions = [
  {
    term: "Super Area",
    definition:
      "The entire area of the flat enclosed by its periphery walls, including half the area under common walls between two flats and the full area of walls in other cases; area under columns, cupboards, window projections and balconies; plus a proportionate share of service areas for common use — lobbies, staircases, circulation areas, lifts, shafts, passages, corridors, stilts, lift machine room, water supply arrangements, maintenance office and security/fire control rooms.",
  },
  {
    term: "Built-up Area",
    definition:
      "As per the CREDAI definition — the total polyline area measured on the outer line of the unit including balconies and/or terrace, with or without roof. Outer walls shared with another unit are computed at 50%; remaining outer walls at 100%.",
  },
  {
    term: "Carpet Area",
    definition:
      "The net usable floor area of an apartment, excluding the area covered by external walls, areas under service shafts, exclusive balcony or verandah area and exclusive open terrace area — but including the area covered by internal partition walls.",
  },
];

// RERA registration is not stated in the brochure. Fill these in before going live.
export const rera = {
  number: "",
  verifyUrl: "https://up-rera.in/projects",
};

export const contact = {
  phone: "",
  email: "",
};
