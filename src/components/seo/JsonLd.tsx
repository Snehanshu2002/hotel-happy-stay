import React from 'react';
import { RESTAURANT_CONFIG } from '../../config/restaurantConfig';

export const JsonLd: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": RESTAURANT_CONFIG.googleReviews.mapsUrl,
    "name": RESTAURANT_CONFIG.name,
    "description": RESTAURANT_CONFIG.heroSubheading,
    "image": [
      "https://hotelhappystay.com/images/hotel/exterior-hero.webp",
      "https://hotelhappystay.com/images/hotel/building-facade.webp",
      "https://hotelhappystay.com/images/hotel/dining-hall.webp"
    ],
    "telephone": RESTAURANT_CONFIG.contact.primaryPhone,
    "servesCuisine": ["Indian", "Seafood", "Odia", "Chinese", "Tandoori"],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": RESTAURANT_CONFIG.address.street,
      "addressLocality": RESTAURANT_CONFIG.address.city,
      "addressRegion": RESTAURANT_CONFIG.address.state,
      "postalCode": RESTAURANT_CONFIG.address.postalCode,
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": RESTAURANT_CONFIG.geo.latitude,
      "longitude": RESTAURANT_CONFIG.geo.longitude
    },
    "url": "https://hotelhappystay.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "07:00",
        "closes": "23:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": RESTAURANT_CONFIG.googleReviews.rating,
      "reviewCount": RESTAURANT_CONFIG.googleReviews.reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    },
    "amenityFeature": [
      { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Air Conditioned Dining", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Clean Restrooms", "value": true },
      { "@type": "LocationFeatureSpecification", "name": "Highway Dining Destination", "value": true }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
