import { RestaurantConfig, SignatureDish, MenuItem, GalleryItem, Review, Amenity } from '../types/restaurant';

export const RESTAURANT_CONFIG: RestaurantConfig = {
  name: "HOTEL HAPPY STAY",
  tagline: "Good Food. Happy Moments.",
  heroHeading: "GOOD FOOD. GREAT MOMENTS. WARM HOSPITALITY.",
  heroSubheading: "Discover the taste of delicious food at Hotel Happy Stay, Tangi. Enjoy freshly prepared meals, welcoming hospitality and a comfortable dining experience along your journey.",
  aboutHeading: "A Place Where Every Meal Feels Special",
  aboutDescription: "At Hotel Happy Stay, we believe that great food brings people together. Whether you are travelling along the highway, enjoying lunch with your family, or stopping for a delicious meal, we aim to make every visit memorable with tasty food, friendly service and a clean dining environment.",
  address: {
    street: "National Highway 16, Chandrapur / Chandpur",
    locality: "Tangi",
    landmark: "Near Tangi Police Station & 2.4 km from Kalupara Gha Station",
    city: "Tangi",
    district: "Khurda",
    state: "Odisha",
    postalCode: "752023",
    country: "India",
    railwayStation: "Kalupara Gha Railway Station (2.41 km)",
    highway: "NH 16 (Berhampur to Bhubaneswar corridor)"
  },
  contact: {
    primaryPhone: "+91 94378 92896",
    formattedPhone: "+91 94378 92896",
    whatsappNumber: "919437892896", // Update when official WhatsApp number is confirmed by owner
    email: "contact@hotelhappystay.com"
  },
  googleReviews: {
    rating: 4.6,
    maxRating: 5.0,
    reviewCount: 2164,
    ratingBreakdown: {
      food: 4.7,
      service: 4.5,
      ambience: 4.4,
      cleanliness: 4.6
    },
    mapsUrl: "https://www.google.com/maps/place/HOTEL+HAPPY+STAY/@19.9265361,85.3837485,17z/data=!4m16!1m7!3m6!1s0x3a184707e5261e1f:0xafe9995324d7e18a!2sTangi+Police+Station!8m2!3d19.9264654!4d85.3955531!16s%2Fg%2F11xnq9jvm!3m7!1s0x3a184723fcd0bfa1:0x8fa8aee876d5fb4d!8m2!3d19.9265361!4d85.3837485!9m1!1b1!16s%2Fg%2F11rkfwhv8d",
    reviewWriteUrl: "https://www.google.com/maps/place/HOTEL+HAPPY+STAY/@19.9265361,85.3837485,17z"
  },
  hours: {
    status: "Open Daily",
    details: "Serving breakfast, lunch, highway meals, and evening dining for travelers and families.",
    daysOpen: "Open 7 Days a Week",
    note: "Timings subject to highway schedules. Please call ahead at +91 94378 92896 to confirm late-night kitchen availability."
  },
  facilities: {
    dining: "Spacious Air-Conditioned Dining Hall with Family Seating",
    parking: "Open roadside parking space for cars & tourist vehicles",
    lodgingNote: "Boarding & lodging facilities indicated on property (contact reception for room availability)"
  },
  geo: {
    latitude: 19.9265361,
    longitude: 85.3837485
  },
  social: {
    facebook: "", // Activated once official accounts are verified
    instagram: ""
  }
};

export const SIGNATURE_DISHES: SignatureDish[] = [
  {
    id: "crab-masala",
    name: "Crab Masala",
    category: "Seafood Specialities",
    description: "Fresh coastal crab slow-cooked in a rich, aromatic Odia onion-tomato gravy with roasted spices and fresh coriander.",
    image: "/images/dishes/crab-masala.jpg",
    samplePrice: 380,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3,
    tag: "Chilika Coastal Favorite"
  },
  {
    id: "tandoori-pomfret",
    name: "Tandoori Pomfret",
    category: "Tandoor & Seafood",
    description: "Whole fresh pomfret marinated in hung curd, Kashmiri deghi mirch and house tandoor spices, charred over natural charcoal.",
    image: "/images/dishes/tandoori-pomfret.jpg",
    samplePrice: 350,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    tag: "Clay Oven Special"
  },
  {
    id: "tiger-prawn-chilli",
    name: "Tiger Prawn Chilli",
    category: "Fish & Prawn",
    description: "Succulent jumbo prawns tossed with crunchy bell peppers, shallots, garlic, and hot Indo-Chinese wok sauce.",
    image: "/images/dishes/tiger-prawn-chilli.jpg",
    samplePrice: 340,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3,
    tag: "Wok Masterpiece"
  },
  {
    id: "butter-naan",
    name: "Butter Naan",
    category: "Rice & Breads",
    description: "Clay-oven baked leavened flatbread brushed generously with pure dairy butter. Fluffy, hot, and golden crisp.",
    image: "/images/dishes/butter-naan.jpg",
    samplePrice: 50,
    isVeg: true,
    isChefSpecial: false,
    spiceLevel: 1,
    tag: "Highway Bestseller"
  },
  {
    id: "chicken-pakoda",
    name: "Chicken Pakoda",
    category: "Starters",
    description: "Crispy batter-fried tender chicken strips infused with crushed black pepper, green chillies, ginger-garlic paste and chaat masala.",
    image: "/images/dishes/chicken-pakoda.jpg",
    samplePrice: 220,
    isVeg: false,
    isChefSpecial: false,
    spiceLevel: 2,
    tag: "Tea & Evening Favorite"
  },
  {
    id: "chilli-chicken",
    name: "Chilli Chicken",
    category: "Chinese Cuisine",
    description: "Diced boneless chicken sauteed with green chillies, spring onions, capsicum, dark soya and fiery szechuan glaze.",
    image: "/images/dishes/chilli-chicken.jpg",
    samplePrice: 240,
    isVeg: false,
    isChefSpecial: false,
    spiceLevel: 3,
    tag: "Crowd Pleaser"
  },
  {
    id: "fish-finger",
    name: "Fish Finger",
    category: "Starters & Seafood",
    description: "Golden crumbed delicate fish fillets marinated with lemon pepper, deep fried to golden perfection, served with tartar dip.",
    image: "/images/dishes/fish-finger.jpg",
    samplePrice: 260,
    isVeg: false,
    isChefSpecial: false,
    spiceLevel: 1,
    tag: "Crispy Delight"
  },
  {
    id: "fresh-seafood",
    name: "Fresh Indian Seafood Platter",
    category: "Seafood Specialities",
    description: "An authentic coastal platter featuring seasonal catch, Chilika special prawn roast, pomfret fry, and traditional spicy fish curry.",
    image: "/images/dishes/fresh-seafood.jpg",
    samplePrice: 450,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2,
    tag: "Signature Platter"
  }
];

export const MENU_CATEGORIES = [
  { id: "seafood", name: "Seafood Specialities", badge: "Coastal Catch" },
  { id: "chicken", name: "Chicken Specialities", badge: "Non-Veg" },
  { id: "fish-prawn", name: "Fish & Prawn", badge: "Fresh Daily" },
  { id: "vegetarian", name: "Vegetarian Dishes", badge: "Pure & Tasty" },
  { id: "main-course", name: "Indian Main Course", badge: "Desi Gravies" },
  { id: "chinese", name: "Chinese Cuisine", badge: "Hot Wok" },
  { id: "tandoor-starters", name: "Tandoor & Starters", badge: "Charcoal Clay Oven" },
  { id: "rice-breads", name: "Rice & Breads", badge: "Tandoori & Biryani" },
];

export const SAMPLE_MENU_ITEMS: MenuItem[] = [
  // Seafood
  {
    id: "sf-1",
    name: "Odia Style Crab Masala",
    category: "seafood",
    description: "Fresh mud crab cooked with aromatic Odisha garam masala, caramelized onions, ginger and green chillies.",
    price: 380,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3
  },
  {
    id: "sf-2",
    name: "Chilika Prawn Malai Curry",
    category: "seafood",
    description: "Juicy fresh prawns simmered in coconut milk, whole spices, and light saffron sauce.",
    price: 360,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 1
  },
  {
    id: "sf-3",
    name: "Crab Pepper Fry",
    category: "seafood",
    description: "Dry roasted whole crab tossed with crushed tellicherry black pepper, curry leaves and garlic.",
    price: 390,
    isVeg: false,
    isChefSpecial: false,
    spiceLevel: 3
  },

  // Chicken
  {
    id: "ch-1",
    name: "Happy Stay Special Chicken Curry",
    category: "chicken",
    description: "Homestyle village highway chicken curry simmered in mustard oil with hand-pounded spices and soft potatoes.",
    price: 260,
    isVeg: false,
    isChefSpecial: true,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: "ch-2",
    name: "Butter Chicken Masala",
    category: "chicken",
    description: "Succulent shredded tandoori chicken cooked in a rich, velvety tomato butter cream gravy with dried fenugreek.",
    price: 290,
    isVeg: false,
    isChefSpecial: false,
    spiceLevel: 1
  },
  {
    id: "ch-3",
    name: "Kadai Chicken",
    category: "chicken",
    description: "Tender chicken cooked with freshly pounded coriander seeds, bell peppers, tomatoes and whole red chillies.",
    price: 270,
    isVeg: false,
    spiceLevel: 2
  },
  {
    id: "ch-4",
    name: "Chicken Kasa (Odisha Special)",
    category: "chicken",
    description: "Slow roasted chicken in spicy thick onion-ginger-garlic masala with signature coastal aroma.",
    price: 280,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3
  },

  // Fish & Prawn
  {
    id: "fp-1",
    name: "Rohu Fish Besara",
    category: "fish-prawn",
    description: "Traditional Odisha freshwater Rohu fish cooked in tangy mustard paste with sun-dried mango (ambula).",
    price: 220,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: "fp-2",
    name: "Pomfret Tawa Fry",
    category: "fish-prawn",
    description: "Crispy pan-fried whole pomfret coated with spicy coastal semolina batter.",
    price: 330,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: "fp-3",
    name: "Prawn Masala Dry",
    category: "fish-prawn",
    description: "Medium-sized fresh prawns stir-cooked with spicy caramelized shallots, curry leaves and green chilli.",
    price: 320,
    isVeg: false,
    spiceLevel: 2
  },
  {
    id: "fp-4",
    name: "Bengali Style Fish Curry (Katla)",
    category: "fish-prawn",
    description: "Delicate freshwater fish steak prepared in light cumin and ginger gravy with fried potato wedges.",
    price: 240,
    isVeg: false,
    spiceLevel: 1
  },

  // Vegetarian
  {
    id: "vg-1",
    name: "Paneer Butter Masala",
    category: "vegetarian",
    description: "Fresh malai paneer cubes simmered in creamy satin tomato gravy, finished with butter and kasuri methi.",
    price: 220,
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: "vg-2",
    name: "Kadai Mushroom",
    category: "vegetarian",
    description: "Plump button mushrooms tossed with crunchy capsicum, sliced onions, and freshly ground kadai spices.",
    price: 210,
    isVeg: true,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: "vg-3",
    name: "Dal Fry & Dal Tadka",
    category: "vegetarian",
    description: "Yellow toor dal tempered with desi ghee, cumin seeds, garlic, dried red chillies and fresh coriander.",
    price: 130,
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: "vg-4",
    name: "Mix Vegetable Curry",
    category: "vegetarian",
    description: "Seasonal garden vegetables, green peas, carrots, beans and cauliflower tossed in aromatic masala gravy.",
    price: 170,
    isVeg: true,
    spiceLevel: 1
  },

  // Main Course
  {
    id: "mc-1",
    name: "Mutton Kasa (Highway Special)",
    category: "main-course",
    description: "Rich tender goat mutton cooked on slow charcoal flame with Odisha whole spices and tender potatoes.",
    price: 390,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 3
  },
  {
    id: "mc-2",
    name: "Egg Curry (2 Eggs)",
    category: "main-course",
    description: "Golden fried farm eggs cooked in spicy homestyle highway tomato onion gravy.",
    price: 140,
    isVeg: false,
    spiceLevel: 2
  },
  {
    id: "mc-3",
    name: "Mushroom Masala",
    category: "main-course",
    description: "Tender mushrooms sauteed in velvety brown onion and cashew-tomato gravy.",
    price: 200,
    isVeg: true,
    spiceLevel: 2
  },

  // Chinese
  {
    id: "cn-1",
    name: "Chilli Chicken (Dry / Gravy)",
    category: "chinese",
    description: "Classic Indo-Chinese crispy chicken bites tossed with garlic, ginger, dark soya, and slit green chillies.",
    price: 240,
    isVeg: false,
    isPopular: true,
    spiceLevel: 3
  },
  {
    id: "cn-2",
    name: "Veg Manchurian Gravy",
    category: "chinese",
    description: "Vegetable dumplings cooked in aromatic tangy garlic soya coriander broth.",
    price: 180,
    isVeg: true,
    spiceLevel: 2
  },
  {
    id: "cn-3",
    name: "Chicken Hakka Noodles",
    category: "chinese",
    description: "Wok-tossed noodles with shredded chicken, fresh shredded cabbage, carrots, bell peppers, and scallions.",
    price: 190,
    isVeg: false,
    spiceLevel: 1
  },
  {
    id: "cn-4",
    name: "Egg Fried Rice",
    category: "chinese",
    description: "Fragrant long grain rice stir fried on high flame with scrambled eggs and spring onion greens.",
    price: 170,
    isVeg: false,
    spiceLevel: 1
  },

  // Tandoor & Starters
  {
    id: "ts-1",
    name: "Chicken Pakoda (Hot & Crisp)",
    category: "tandoor-starters",
    description: "A highway signature snack. Boneless chicken strips seasoned with secret spices, crispy fried and sprinkled with chaat masala.",
    price: 220,
    isVeg: false,
    isPopular: true,
    spiceLevel: 2
  },
  {
    id: "ts-2",
    name: "Tandoori Chicken (Half / Full)",
    category: "tandoor-starters",
    description: "Traditional bone-in chicken marinated in spiced yogurt and roasted in clay oven to charred smoky perfection.",
    price: 260,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: "ts-3",
    name: "Crispy Fish Fingers",
    category: "tandoor-starters",
    description: "Breaded delicate boneless fish strips fried crisp and served with mint chutney and spicy mayo.",
    price: 260,
    isVeg: false,
    spiceLevel: 1
  },
  {
    id: "ts-4",
    name: "Paneer Tikka Tandoori",
    category: "tandoor-starters",
    description: "Cubes of creamy cottage cheese with bell peppers and onions marinated in tandoori masala and char-grilled.",
    price: 230,
    isVeg: true,
    spiceLevel: 2
  },

  // Rice & Breads
  {
    id: "rb-1",
    name: "Butter Naan",
    category: "rice-breads",
    description: "Classic refined flour bread baked inside the clay tandoor and brushed with fragrant dairy butter.",
    price: 50,
    isVeg: true,
    isPopular: true,
    spiceLevel: 1
  },
  {
    id: "rb-2",
    name: "Garlic Butter Naan",
    category: "rice-breads",
    description: "Tandoori naan topped with roasted minced garlic, chopped fresh coriander, and melted butter.",
    price: 65,
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: "rb-3",
    name: "Tandoori Roti (Plain / Butter)",
    category: "rice-breads",
    description: "Whole wheat healthy roti baked fresh in the charcoal tandoor.",
    price: 20,
    isVeg: true,
    spiceLevel: 1
  },
  {
    id: "rb-4",
    name: "Chicken Dum Biryani",
    category: "rice-breads",
    description: "Aromatic aged basmati rice cooked on dum with succulent spiced chicken cuts, saffron, and fried onions.",
    price: 250,
    isVeg: false,
    isChefSpecial: true,
    spiceLevel: 2
  },
  {
    id: "rb-5",
    name: "Steamed Jeera Rice",
    category: "rice-breads",
    description: "Fluffy basmati rice tempered with roasted cumin seeds and fresh ghee.",
    price: 120,
    isVeg: true,
    spiceLevel: 1
  }
];

export const AUTHENTIC_HOTEL_GALLERY: GalleryItem[] = [
  // Restaurant Exterior
  {
    id: "gal-1",
    title: "Hotel Building & Lodging Facade",
    category: "exterior",
    categoryLabel: "Restaurant Exterior",
    imageUrl: "/images/hotel/building-facade.webp",
    caption: "Full view of the 3-storey HOTEL HAPPY STAY building offering lodging, boarding, and multi-cuisine dining along NH 16."
  },
  {
    id: "gal-2",
    title: "Restaurant Entrance & Signboard",
    category: "exterior",
    categoryLabel: "Restaurant Exterior",
    imageUrl: "/images/hotel/exterior-hero.webp",
    caption: "Main entrance with glass doors and illuminated signboard welcoming travelers to Indian, Chinese, and Tandoor dining."
  },
  {
    id: "gal-3",
    title: "Highway Night Glow & Parking",
    category: "exterior",
    categoryLabel: "Restaurant Exterior",
    imageUrl: "/images/hotel/exterior-night.webp",
    caption: "Illuminated hotel signage visible from the highway with dedicated parking space for commuters and tour buses."
  },
  {
    id: "gal-4",
    title: "Landscaped Entrance Pathway",
    category: "exterior",
    categoryLabel: "Restaurant Exterior",
    imageUrl: "/images/hotel/garden-pathway.webp",
    caption: "Potted tropical palms and decorated walkway leading guests comfortably from vehicle parking to the dining entrance."
  },

  // Restaurant Interior
  {
    id: "gal-5",
    title: "Reception & Golden 'H' Emblem",
    category: "interior",
    categoryLabel: "Restaurant Interior",
    imageUrl: "/images/hotel/reception-lounge.webp",
    caption: "Front welcoming desk featuring the signature golden triangular emblem of Hotel Happy Stay."
  },
  {
    id: "gal-6",
    title: "Entrance Shrine & Decor",
    category: "interior",
    categoryLabel: "Restaurant Interior",
    imageUrl: "/images/hotel/entrance-ganesha.webp",
    caption: "Lord Ganesha shrine and ornamental floral decor welcoming dining guests at the entrance."
  },

  // Dining Area
  {
    id: "gal-7",
    title: "Main Air-Conditioned Dining Hall",
    category: "dining",
    categoryLabel: "Dining Area",
    imageUrl: "/images/hotel/dining-hall.webp",
    caption: "Spacious air-conditioned dining room equipped with sturdy tables, warm wood finishes, and refreshing beverage station."
  },
  {
    id: "gal-8",
    title: "Family Dining Setup",
    category: "dining",
    categoryLabel: "Dining Area",
    imageUrl: "/images/hotel/dining-ambience.webp",
    caption: "Comfortable family table arrangements with floral accents and television for relaxed highway meals."
  },
  {
    id: "gal-9",
    title: "Courtyard View from Entrance",
    category: "dining",
    categoryLabel: "Dining Area",
    imageUrl: "/images/hotel/night-parking.webp",
    caption: "Spacious entrance foyer overlooking the parking courtyard and highway transit corridor."
  },

  // Seafood
  {
    id: "gal-10",
    title: "Chilika Special Crab Masala",
    category: "seafood",
    categoryLabel: "Seafood",
    imageUrl: "/images/dishes/crab-masala.jpg",
    caption: "Fresh coastal crab cooked in rich Odia onion-tomato masala and roasted fragrant spices."
  },
  {
    id: "gal-11",
    title: "Tandoori Pomfret Fry",
    category: "seafood",
    categoryLabel: "Seafood",
    imageUrl: "/images/dishes/tandoori-pomfret.jpg",
    caption: "Fresh whole pomfret fish marinated in spiced yogurt and grilled over clay tandoor."
  },
  {
    id: "gal-12",
    title: "Tiger Prawn Chilli Stir-Fry",
    category: "seafood",
    categoryLabel: "Seafood",
    imageUrl: "/images/dishes/tiger-prawn-chilli.jpg",
    caption: "Succulent jumbo prawns wok-tossed with capsicum, garlic, onions, and spicy Asian glaze."
  },
  {
    id: "gal-13",
    title: "Crispy Fish Fingers",
    category: "seafood",
    categoryLabel: "Seafood",
    imageUrl: "/images/dishes/fish-finger.jpg",
    caption: "Golden fried delicate fish fillets served with zesty chutney and mint dressing."
  },
  {
    id: "gal-14",
    title: "Coastal Seafood Platter",
    category: "seafood",
    categoryLabel: "Seafood",
    imageUrl: "/images/dishes/fresh-seafood.jpg",
    caption: "An assortment of regional catch, prawn roast, and coastal fish preparations."
  },

  // Indian Dishes
  {
    id: "gal-15",
    title: "Authentic Odia & Indian Thali Meal",
    category: "indian-dishes",
    categoryLabel: "Indian Dishes",
    imageUrl: "/images/hotel/authentic-meal.webp",
    caption: "Authentic plate of steaming rice, yellow dal tadka, and savory highway curry served on hotel tableware."
  },
  {
    id: "gal-16",
    title: "Clay-Oven Butter Naan",
    category: "indian-dishes",
    categoryLabel: "Indian Dishes",
    imageUrl: "/images/dishes/butter-naan.jpg",
    caption: "Fluffy tandoori naan baked over charcoal and generously glazed with pure dairy butter."
  },
  {
    id: "gal-17",
    title: "Crispy Chicken Pakoda",
    category: "indian-dishes",
    categoryLabel: "Indian Dishes",
    imageUrl: "/images/dishes/chicken-pakoda.jpg",
    caption: "Signature highway evening snack: crispy seasoned chicken bites dusted with chaat masala."
  },
  {
    id: "gal-18",
    title: "Indo-Chinese Chilli Chicken",
    category: "indian-dishes",
    categoryLabel: "Indian Dishes",
    imageUrl: "/images/dishes/chilli-chicken.jpg",
    caption: "Tender chicken morsels sauteed with fresh bell peppers, green chillies, and savory dark soy."
  },

  // Ambience
  {
    id: "gal-19",
    title: "Waterfall & Peacock Wall Mural",
    category: "ambience",
    categoryLabel: "Ambience",
    imageUrl: "/images/hotel/interior-mural.webp",
    caption: "Artistic nature wall art featuring waterfalls and peacocks, bringing a pleasant aura to the dining room."
  },
  {
    id: "gal-20",
    title: "Decorative Flora & Entrance Feature",
    category: "ambience",
    categoryLabel: "Ambience",
    imageUrl: "/images/hotel/entrance-ganesha.webp",
    caption: "Auspicious Lord Ganesha sanctuary with decorative bicycle and vibrant florals."
  },
  {
    id: "gal-21",
    title: "Highway Evening Roadside Atmosphere",
    category: "ambience",
    categoryLabel: "Ambience",
    imageUrl: "/images/hotel/exterior-night.webp",
    caption: "Warm evening glow and welcoming illuminated facade for road travelers on the Berhampur–Bhubaneswar highway."
  }
];

export const CUSTOMER_REVIEWS: Review[] = [
  {
    id: "rev-1",
    author: "Arjun Ojha",
    rating: 5,
    date: "Google Verified Review",
    title: "Delicious, Clean, and Pocket-Friendly!",
    comment: "Best in price and taste while traveling through this highway! Ordered butter naan and kadai mushroom, it was awesome in taste. Large parking space right alongside the highway.",
    verifiedBuyer: true,
    badge: "Highway Traveler"
  },
  {
    id: "rev-2",
    author: "Sushil Mohanty",
    rating: 5,
    date: "Google Verified Review",
    title: "Prominently Visible & Quick Service",
    comment: "Nice option to have your meal while driving from Berhampur towards Bhubaneswar. Prominently visible big 3-storey building with glow signs, open parking space, quick service, and tasty food in both veg and non-veg options.",
    verifiedBuyer: true,
    badge: "Family Road Trip"
  },
  {
    id: "rev-3",
    author: "Shankha Bose",
    rating: 5,
    date: "Google Verified Review",
    title: "Clean Toilets & Very Reasonable Prices",
    comment: "A very nice place to have your lunch while traveling towards Bhubaneswar. Food quality, ambience and staff behavior is very good. Washrooms are clean. Rooms are also available for night stay.",
    verifiedBuyer: true,
    badge: "Frequent Commuter"
  },
  {
    id: "rev-4",
    author: "Prakash Chandra Patra",
    rating: 4,
    date: "Google Verified Review",
    title: "Food quality is excellent & ambience is clean",
    comment: "Food quality is excellent, the ambience is clean, and the pricing is very reasonable. The staff are polite, food is served hot, and the toilets are well-maintained.",
    verifiedBuyer: true,
    badge: "Local Guide"
  }
];

export const WHY_CHOOSE_US: Amenity[] = [
  {
    id: "amenity-1",
    title: "Delicious & Coastal Seafood",
    description: "Specializing in fresh local seafood, Chilika crab masala, tandoori pomfret, and savory chicken dishes prepared fresh on order.",
    iconName: "UtensilsCrossed"
  },
  {
    id: "amenity-2",
    title: "Clean & Hygienic Environment",
    description: "Air-conditioned dining space with sanitized tables and clean, well-maintained washrooms for travelers and families.",
    iconName: "Sparkles"
  },
  {
    id: "amenity-3",
    title: "Warm & Attentive Hospitality",
    description: "Courteous, helpful staff dedicated to ensuring fast service whether you are having a relaxed family dinner or a quick stop.",
    iconName: "HeartHandshake"
  },
  {
    id: "amenity-4",
    title: "Convenient Highway Stop (NH 16)",
    description: "Directly on NH 16 between Berhampur and Bhubaneswar. Easily accessible with a wide service road and prominent glow signboards.",
    iconName: "Navigation"
  },
  {
    id: "amenity-5",
    title: "Dedicated Vehicle Parking",
    description: "Expansive front parking lot with ample space for family cars, SUVs, and tourist vehicles.",
    iconName: "Car"
  },
  {
    id: "amenity-6",
    title: "Pocket-Friendly Honest Pricing",
    description: "Generous portions and reasonable rates praised by thousands of commuters across Odisha.",
    iconName: "Wallet"
  }
];
