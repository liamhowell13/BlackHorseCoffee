export interface LocationData {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: string;
  image: string;
  features: string[];
}

export const locations: LocationData[] = [
  {
    name: "Uptown",
    address: "1065 Higuera St.",
    city: "San Luis Obispo",
    state: "CA",
    zip: "93401",
    phone: "805-783-1300",
    hours: "Open 6:30 am – 5:00 pm daily",
    image: "/images/BlackHorseBuilding.JPG",
    features: ["Full espresso bar", "Fresh baked goods", "Indoor & patio seating", "Free Wi-Fi"],
  },
  {
    name: "Broad",
    address: "3590 Broad St.",
    city: "San Luis Obispo",
    state: "CA",
    zip: "93401",
    phone: "805-439-1300",
    hours: "Open 6:30 am – 5:00 pm daily",
    image: "/images/BlackHorseBuilding2.JPG",
    features: ["Full espresso bar", "Fresh baked goods", "Drive-through friendly area", "Free Wi-Fi"],
  },
];
