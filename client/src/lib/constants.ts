// Image URLs for the landing page
export const IMAGES = {
  // Hero section
  hero: "/assets/bg.jpeg",
  
  // About section
  about: "/assets/about-us-video.mp4",
  
  // Master plan
  masterPlan: "/assets/master-plan.jpg",
  locationMap: "/assets/location-map.png",
  
  // Amenities
  childrenPlayArea: "https://pixabay.com/get/g820258cd162f165da53f7b9764e367aeb689c1ca01ba50cce6391c41b889f71de217cb983c39d4b4349ca64b9a21dae2ecc667379ceeacdcaa99533aaba41724_1280.jpg",
  yogaDeck: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
  swimmingPool: "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000",
  
  // Gallery
  gallery1: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  gallery2: "https://images.unsplash.com/photo-1545241047-6083a3684587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  gallery3: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  gallery4: "https://pixabay.com/get/g6e84d8831cceb9dce58eec5a8c38ad2fee10fa132c8ae46045a6d49036d3f93a5febea7f2bfa208ccb1bc8ac065ec24930658bd9249af26b0d57ea6762b1e641_1280.jpg",
  gallery5: "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  gallery6: "https://images.unsplash.com/photo-1575540576545-3db8561c29e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
  
  // Location map
  locationMapDetailed: "/assets/location-map.png",
  
  // WhatsApp icon
  whatsapp: "https://www.aetherbymythreyi.in/images/whatsapp.png"
};

// Plot dimensions data
export const PLOT_DIMENSIONS = [
  {
    id: '30x40',
    size: '30 × 40',
    area: '1,200 Sq.ft',
    isPopular: false
  },
  {
    id: '30x50',
    size: '30 × 50',
    area: '1,500 Sq.ft',
    isPopular: true
  },
  {
    id: 'odd-sizes',
    size: 'Odd Sizes',
    area: '900 - 3,300 Sq.ft',
    isPopular: false
  }
];

// Highlights data
export const HIGHLIGHTS = [
  {
    id: 'premium-plotted',
    icon: 'map-marked-alt',
    title: 'Premium Plotted Development',
    description: 'on a 5.40-acre Expanse'
  },
  {
    id: 'location',
    icon: 'road',
    title: 'Located 15 mins',
    description: 'from NH 44 (Nandi Upachar)'
  },
  {
    id: 'jw-marriott',
    icon: 'hotel',
    title: 'Just 10 mins from',
    description: 'JW Marriott in Prestige Golfshire'
  },
  {
    id: 'clubhouse',
    icon: 'building',
    title: 'Ultra-modern clubhouse',
    description: 'with curated amenities'
  }
];

// Why Aether data
export const WHY_AETHER = [
  {
    id: 'prime-location',
    icon: 'map-marker-alt',
    title: 'Prime Location and Accessibility',
    description: 'Aether by Mythreyi is located near Nandi Hills, Bangalore & well connected to JW Marriott and International Airport.'
  },
  {
    id: 'connectivity',
    icon: 'route',
    title: 'Amazing Connectivity',
    description: 'Proximity to multiple colleges, hospitals, educational hubs, parks, shopping centers & other lifestyle facilities.'
  },
  {
    id: 'infrastructure',
    icon: 'water',
    title: 'Good Infrastructure',
    description: 'At Aether, we offer well-planned infrastructure and modern amenities. The project has 30 feet of roads, water supply, and sewage systems.'
  },
  {
    id: 'investment',
    icon: 'chart-line',
    title: 'Investment Potential',
    description: 'Investing in a gated community plot development within city limits offers immense potential for long-term appreciation.'
  }
];

// Amenities data
export const AMENITIES = [
  {
    id: 'children-play-park',
    title: 'Children Play Park',
    description: 'Safe and engaging play area for children of all ages.',
    icon: 'child',
    image: IMAGES.childrenPlayArea
  },
  {
    id: 'yoga-deck',
    title: 'Yoga Deck',
    description: 'Tranquil space for yoga and meditation with panoramic views.',
    icon: 'spa',
    image: IMAGES.yogaDeck
  },
  {
    id: 'swimming-pool',
    title: 'Swimming Pool',
    description: 'Luxurious swimming pool with dedicated lounging area.',
    icon: 'swimming-pool',
    image: IMAGES.swimmingPool
  }
];

// Additional amenities
export const ADDITIONAL_AMENITIES = [
  'Clubhouse with modern facilities',
  'Landscaped gardens',
  'Walking and jogging tracks',
  'Outdoor fitness area',
  '24/7 security',
  'Visitor parking',
  'Community gathering spaces',
  'Rainwater harvesting'
];

// Infrastructure highlights
export const INFRASTRUCTURE_HIGHLIGHTS = [
  '30-foot concrete roads',
  'Underground drainage system',
  'Individual water connections',
  'Individual power connections',
  'Avenue plantations',
  'Street lighting',
  'Compound wall',
  'Entrance gate with security'
];

// Location landmarks
export const LOCATION_LANDMARKS = [
  {
    id: 'jw-marriott',
    name: 'J.W. Marriott',
    time: '10 min',
    icon: 'hotel'
  },
  {
    id: 'mulberry-shades',
    name: 'Mulberry Shades Resort',
    time: '5 min',
    icon: 'umbrella-beach'
  },
  {
    id: 'royal-orchid',
    name: 'Royal Orchid Resort',
    time: '30 min',
    icon: 'hotel'
  },
  {
    id: 'vama-retreats',
    name: 'Vama Retreats',
    time: '5 min',
    icon: 'spa'
  },
  {
    id: 'valley-of-winds',
    name: 'Valley of Winds',
    time: '5 min',
    icon: 'mountain'
  },
  {
    id: 'international-airport',
    name: 'International Airport',
    time: '36 min',
    icon: 'plane'
  },
  {
    id: 'manipal-hospital',
    name: 'Manipal Hospital',
    time: '25 min',
    icon: 'hospital'
  },
  {
    id: 'columbia-asia',
    name: 'Columbia Asia Hospital',
    time: '40 min',
    icon: 'hospital'
  }
];

// Gallery images
export const GALLERY_IMAGES = [
  {
    id: 'premium-villa',
    src: IMAGES.gallery1,
    alt: 'Premium villa plots',
    title: 'Premium villa plots'
  },
  {
    id: 'aerial-view',
    src: IMAGES.gallery2,
    alt: 'Aerial view of development',
    title: 'Aerial view of development'
  },
  {
    id: 'clubhouse',
    src: IMAGES.gallery3,
    alt: 'Luxury clubhouse with pool',
    title: 'Luxury clubhouse with pool'
  },
  {
    id: 'scenic-view',
    src: IMAGES.gallery4,
    alt: 'Scenic view of Nandi Hills',
    title: 'Scenic view of Nandi Hills'
  },
  {
    id: 'internal-roads',
    src: IMAGES.gallery5,
    alt: 'Internal roads and infrastructure',
    title: 'Internal roads and infrastructure'
  },
  {
    id: 'green-spaces',
    src: IMAGES.gallery6,
    alt: 'Green spaces and landscaping',
    title: 'Green spaces and landscaping'
  }
];

// Social media links
export const SOCIAL_LINKS = [
  {
    id: 'facebook',
    icon: 'facebook-f',
    url: '#'
  },
  {
    id: 'instagram',
    icon: 'instagram',
    url: '#'
  },
  {
    id: 'twitter',
    icon: 'twitter',
    url: '#'
  },
  {
    id: 'linkedin',
    icon: 'linkedin-in',
    url: '#'
  }
];

// Contact information
export const CONTACT_INFO = [
  {
    id: 'location',
    icon: 'map-marker-alt',
    title: 'Location',
    content: 'Near Nandi Hills, Bangalore'
  },
  {
    id: 'phone',
    icon: 'phone-alt',
    title: 'Call Us',
    content: '+91 95381 82438'
  },
  {
    id: 'email',
    icon: 'envelope',
    title: 'Email',
    content: 'info@aetherbymythreyi.in'
  }
];

// Footer links
export const FOOTER_LINKS = [
  { id: 'home', label: 'Home', url: '#home' },
  { id: 'about', label: 'About', url: '#about' },
  { id: 'plots', label: 'Plots', url: '#plots' },
  { id: 'gallery', label: 'Gallery', url: '#gallery' },
  { id: 'amenities', label: 'Amenities', url: '#amenities' },
  { id: 'location', label: 'Location', url: '#location' },
  { id: 'contact', label: 'Contact', url: '#contact' }
];

// Footer contact information
export const FOOTER_CONTACT_INFO = [
  {
    id: 'address',
    icon: 'map-marker-alt',
    content: 'Near Nandi Hills, Bangalore, Karnataka, India'
  },
  {
    id: 'phone',
    icon: 'phone-alt',
    content: '+91 95381 82438'
  },
  {
    id: 'email',
    icon: 'envelope',
    content: 'info@aetherbymythreyi.in'
  },
  {
    id: 'hours',
    icon: 'clock',
    content: 'Mon - Sat: 9:00 AM - 6:00 PM'
  }
];
