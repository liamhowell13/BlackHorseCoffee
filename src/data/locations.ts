export interface LocationData {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  weekdayHours: string;
  weekendHours: string;
  shortHours: string;
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
    weekdayHours: "Monday – Friday: 5:00 am – 6:00 pm",
    weekendHours: "Saturday – Sunday: 6:00 am – 6:00 pm",
    shortHours: "Open 6:30 am – 5:00 pm daily",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    features: ["Full espresso bar", "In-house bakery", "Indoor & patio seating", "Free Wi-Fi"],
  },
  {
    name: "Broad",
    address: "3590 Broad St.",
    city: "San Luis Obispo",
    state: "CA",
    zip: "93401",
    phone: "805-439-1300",
    weekdayHours: "Monday – Friday: 5:30 am – 5:00 pm",
    weekendHours: "Saturday – Sunday: 5:30 am – 5:00 pm",
    shortHours: "Open 6:30 am – 5:00 pm daily",
    image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=800&q=80",
    features: ["Full espresso bar", "Fresh bakery items", "Drive-through friendly area", "Free Wi-Fi"],
  },
];
