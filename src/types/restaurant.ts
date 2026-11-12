export type FoodCategory =
  | 'seafood'
  | 'chicken'
  | 'fish-prawn'
  | 'vegetarian'
  | 'main-course'
  | 'chinese'
  | 'tandoor-starters'
  | 'rice-breads';

export interface MenuItem {
  id: string;
  name: string;
  category: FoodCategory;
  description: string;
  price: number;
  isVeg: boolean;
  isChefSpecial?: boolean;
  isPopular?: boolean;
  image?: string;
  spiceLevel?: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Spicy
  portion?: string;
}

export interface SignatureDish {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  samplePrice: number;
  isVeg: boolean;
  isChefSpecial: boolean;
  spiceLevel: 1 | 2 | 3;
  tag: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  title?: string;
  comment: string;
  verifiedBuyer?: boolean;
  badge?: string;
}

export type GalleryCategory =
  | 'all'
  | 'exterior'
  | 'interior'
  | 'dining'
  | 'seafood'
  | 'indian-dishes'
  | 'ambience';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  isAuthenticHotelPhoto?: boolean;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface RestaurantConfig {
  name: string;
  tagline: string;
  heroHeading: string;
  heroSubheading: string;
  aboutHeading: string;
  aboutDescription: string;
  address: {
    street: string;
    locality: string;
    landmark: string;
    city: string;
    district: string;
    state: string;
    postalCode: string;
    country: string;
    railwayStation: string;
    highway: string;
  };
  contact: {
    primaryPhone: string;
    formattedPhone: string;
    whatsappNumber?: string;
    email?: string;
  };
  googleReviews: {
    rating: number;
    maxRating: number;
    reviewCount: number;
    ratingBreakdown?: {
      food: number;
      service: number;
      ambience: number;
      cleanliness: number;
    };
    mapsUrl: string;
    reviewWriteUrl: string;
  };
  hours: {
    status: string;
    details: string;
    is24Hours?: boolean;
    daysOpen: string;
    note?: string;
  };
  facilities: {
    dining: string;
    parking: string;
    lodgingNote: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  social: {
    facebook?: string;
    instagram?: string;
  };
}
