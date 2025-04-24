 export interface MenuItem {
  id?: string;
  label?: string;
  path?: string;
}
export interface CategorisedMenu  {
  category?: string;
  items: MenuItem[];
};
export const businessdirectoryItem: MenuItem[] = [
  { id: "Automotive", label: "Automotive",path: "business-directory" },
  { id: "Chil-Care-&-Day-Care", label: "Child Care & Day Care",path: "business-directory" },
  { id: "Community", label: "Community",path: "business-directory"},
  { id: "Computers", label:"Computers",path: "business-directory" },
  { id: "Construction", label: "Construction",path: "business-directory" },
  { id: "Dentists", label: "Dentists",path: "business-directory" },
  { id: "Education", label: "Education",path: "business-directory" },
  { id: "Entertainment", label: "Entertainment",path: "business-directory" },
  { id: "Event-Planning", label: "Event Planning",path: "business-directory" },
  { id: "Financial-Services", label: "Financial Services",path: "business-directory" },
  { id: "Flowers", label: "Flowers",path: "business-directory" },
  { id: "Health-&-Medical-Services", label: "Health & Medical Services",path: "business-directory" },
  { id: "Home-&-Garden", label: "Home & Garden",path: "business-directory" },
  { id: "Insurance-Services", label: "Insurance Services",path: "business-directory" },
  { id: "Kid-Activities", label: "Kid Activities",path: "business-directory" },
  { id: "Kids-Activities", label: "Kids Activities",path: "business-directory" },
  { id: "Legal-Services", label: "Legal Services",path: "business-directory" },
  { id: "Manufacturing-&-Industry", label: "Manufacturing & Industry",path: "business-directory" },
  { id: "Moving/Towing/Transportation", label: "Moving / Towing / Transportation",path: "business-directory" },
  { id: "Personal/Social-Services", label: "Personal/Social Services",path: "business-directory" },
  { id: "Pets-&-Animals", label: "Pets & Animals",path: "business-directory" },
  { id: "Real-Estate-Services", label: "Real Estate Services",path: "business-directory" },
  { id: "Recreation", label: "Recreation",path: "business-directory" },
  { id: "Restaurants-&-Food", label: "Restaurants & Food",path: "business-directory" },
  { id: "Services-for-Business", label: "Services for Business",path: "business-directory" },
  { id: "Shopping/Retail", label: "Shopping / Retail",path: "business-directory" },
  { id: "Travel", label: "Travel",path: "business-directory" },
];
export const travelDealsItem: MenuItem[] = [
  { id: "All-Inclusive-Trips", label:"All Inclusive Trips" ,path: "travel-deals" },
  { id: "Beach-Resorts", label:"Beach Resorts",path: "travel-deals" },
  { id: "Cruises", label: "Cruises",path: "travel-deals" },
  { id: "Family-Fun", label:"Family Fun" ,path: "travel-deals" },
  { id: "International-&-Tours", label:"International & Tours" ,path: "travel-deals" },
  { id: "Outdoor-&-Adventure", label: "Outdoor & Adventure",path: "travel-deals" },
  { id: "Romantic-Getaways", label: "Romantic Getaways",path: "travel-deals" },
  { id: "Vacation-buyals", label: "Vacation buyals",path: "travel-deals" }, 
]

export const eventsItem: MenuItem[] = [
  { id: "Art-Events", label:"Art Events",path: "events" },
  { id: "Ballet", label:"Ballet",path: "events" },
  { id: "Bars/Clubs", label:"Bars/Clubs",path: "events" },
  { id: "Business-Events", label:"Business Events",path: "events" },
  { id: "Classes", label:"Classes",path: "events" },
  { id: "Comedy-Show", label:"Comedy Show",path: "events" },
  { id: "Community-Event", label:"Community Event",path:"events" }, 
  { id: "Entertainment", label:"Entertainment",path: "events" },
  { id: "Fashion-Week", label:"Fashion Week",path: "events"},
  { id: "Food-&-Drink", label:"Food & Drink",path: "events" },
  { id: "Free-Events", label:"Free Events",path: "events"},
  { id: "Gala/Banquets", label:"Gala/Banquets",path: "events"},
  { id: "Holiday-Events", label:"Holiday Events",path: "events" },
  { id: "Job-Fairs", label:"Job Fairs",path: "events"},
  { id: "Kids/Family", label:"Kids/Family",path: "events" },
  { id: "Music-Events", label:"Music Events",path: "events"},
  { id: "Parties", label:"Parties",path: "events" },
  { id: "Sports-&-Wellness", label:"Sports & Wellness",path: "events" },
  { id: "Things-to-do", label:"Things to do",path: "events" },
]



export const videosItem: MenuItem[] = [
  { id: "News-Videos", label:"News Videos"},
  { id: "Movies", label: "Movies"},
  { id: "TV-Shows", label:"TV Shows"},
  { id: "TV-Series", label:"TV Series"},
  { id: "Music-Videos", label:"Music Videos"},
  { id: "View-all-Videos", label:"View all Videos"},
]

export const jobsItem: MenuItem[] = [
  { id:"Admin-Office", label:"Admin/Office",path: "jobs"},
  { id:"Alteration", label: "Alteration",path: "jobs"},
  { id:"Appliance-Repair", label:"Appliance Repair",path: "jobs"},
  { id:"Auto-Repair-and-Maintenance", label: "Auto Repair and Maintenance",path: "jobs"},
  { id:"Bakery", label: "Bakery",path: "jobs"},
  { id:"Beauty-Health", label: "Beauty/Health",path: "jobs"},
  { id:"Bookkeeper", label: "Bookkeeper",path: "jobs"},
  { id:"Caregiver", label:"Caregiver",path: "jobs"},
  { id:"Cashier", label:"Cashier",path: "jobs"},
  { id:"Child-Care-Day-Care", label:"Child Care/Day Care",path: "jobs"},
  { id:"Cleaning", label:"Cleaning",path: "jobs"},
  { id:"Computer", label: "Computer",path: "jobs"},
  { id:"Construction", label:"Construction",path: "jobs"},
  { id:"Dental", label:"Dental",path: "jobs"},
  { id:"Driver", label:"Driver",path: "jobs"},
  { id:"Education", label:"Education",path: "jobs"},
  { id:"Education-Teaching", label:"Education/Teaching",path: "jobs"},
  { id:"Grocery", label:"Grocery",path: "jobs"},
  { id:"Jewelry", label:"Jewelry",path: "jobs"},
  { id:"Medical", label:"Medical",path: "jobs"},
  { id:"No-Experience", label: "No Experience",path: "jobs"},
  { id:"Other", label: "Other",path: "jobs"},
  { id:"Plumber", label:"Plumber",path: "jobs"},
  { id:"Recycling", label: "Recycling",path: "jobs"},
  { id:"Restaurant", label:"Restaurant",path: "jobs"},
  { id:"Retail", label:"Retail",path: "jobs"},
  { id:"Sales", label: "Sales",path: "jobs"},
  { id:"Trucking", label:"Trucking",path: "jobs"},
  { id:"Work-from-Home", label: "Work from Home",path: "jobs"},
]
export const BuySellItem: CategorisedMenu[] = [
  {
    category: "Electronics & Media",
    items: [
      { id:"Audio-&-Speakers", label: "Audio & Speakers",path: "electronics-media"},
      { id: "Books-Movies-&-Music", label: "Books, Movies, & Music",path: "electronics-media" },
      { id: "Cameras-&-Photography", label: "Cameras & Photography",path: "electronics-media" },
      { id: "Cell-Phones-&-Accessories", label: "Cell Phones & Accessories",path: "electronics-media" },
      { id: "Computers-&-Accessories", label: "Computers & Accessories",path: "electronics-media" },
      { id: "Drones", label: "Drones",path: "electronics-media" },
      { id: "Other-Electronics-&-Media", label: "Other - Electronics & Media",path: "electronics-media" },
      { id: "TVs-&-Media-Players", label: "TV’s & Media Players",path: "electronics-media" },
      { id: "Video-Games-&-Consoles", label: "Video Games & Consoles",path: "electronics-media" },
      { id: "Virtual-Reality", label: "Virtual Reality",path: "electronics-media" },
      { id: "Wearables", label: "Wearables",path: "electronics-media" },
    ],
  },
  {category: "Fashion",
    items: [],
  },
  {category: "Home & Garden",
    items: [
      { id: "Appliances", label: "Appliances",path: "home-garden"},
      { id: "Bathroom", label: "Bathroom",path: "home-garden"},
      { id: "Furniture", label: "Furniture",path: "home-garden"},
      { id: "Home-Decor", label: "Home Decor",path: "home-garden"},
      { id: "Household", label: "Household",path: "home-garden"},
      { id: "Kitchen-&-Dining", label: "Kitchen & Dining",path: "home-garden"},
      { id: "Lawn-&-Garden", label: "Lawn & Garden",path: "home-garden"},
      { id: "Other-Home-&-Garden", label: "Other - Home & Garden",path: "home-garden"},
      { id: "Tools-&-Machinery", label: "Tools & Machinery",path: "home-garden"},
    ],
  },
  {category: "Clothing, Shows, & Accessories",
    items: [
      { id: "Baby-&-Toddler-Accessories", label: "Baby & Toddler Accessories",path: "clothing-shows-accessories"},
      { id: "Baby-&-Toddler-Boy-Clothing", label: "Baby & Toddler Boy Clothing",path: "clothing-shows-accessories"},
      { id: "Baby-&-Toddler-Girl-Clothing", label: "Baby & Toddler Girl Clothing",path: "clothing-shows-accessories"},
      { id: "Boy’s-Accessories", label: "Boy’s Accessories",path: "clothing-shows-accessories"},
      { id: "Boy’s-Clothing", label: "Boy’s Clothing",path: "clothing-shows-accessories"},
      { id: "Boy’s-Shoes", label: "Boy’s Shoes",path: "clothing-shows-accessories"},
      { id: "Girl’s-Accessories", label: "Girl’s Accessories",path: "clothing-shows-accessories"},
      { id: "Girl’s-Clothing", label: "Girl’s Clothing",path: "clothing-shows-accessories"},
      { id: "Girl’s-Shoes", label: "Girl’s Shoes",path: "clothing-shows-accessories"},
      { id: "Jewelry-&-Accessories", label: "Jewelry & Accessories",path: "clothing-shows-accessories"},
      { id: "Men’s-Clothing", label: "Men’s Clothing",path: "clothing-shows-accessories"},
      { id: "Men’s-Shows", label: "Men’s Shows",path: "clothing-shows-accessories"},
      { id: "Other-Clothing,Shows,-&-Accessories", label: "Other - Clothing, Shows, & Accessories",path: "clothing-shows-accessories"},
      { id: "Women’s-Clothing", label: "Women’s Clothing",path: "clothing-shows-accessories"},
    ],
  },
  {category: "Home Delivery",
    items: []
  },
  {category: "Jewlery",
    items: []
  },
  {category: "Music",
    items: []
  },
  {category: "view all Buy/Sell",
    items: []
  }
];

export const RealItem: CategorisedMenu[] = [
  {
    category: "Buy",
    items: [
      { id: "Commercial-For-Sale", label: "Commercial Property For Sale",path: "buy" },
      { id: "Condos-For-Sale", label: "Condos For Sale" ,path: "buy"},
      { id: "Foreclosures", label: "Foreclosures",path: "buy"},
      { id: "Homes-For-Sale", label: "Homes For Sale",path: "buy" },
      { id: "Land-For-Sale", label: "Land For Sale",path: "buy" },
      { id: "New-Construction", label: "New Construction",path: "buy" },

    ],
  },
  {
    category: "Rent",
    items: [
      { id: "Condos-For-Rent", label: "Condos For Rent",path: "rent" },
      { id: "Homes-For-Rent", label: "Homes For Rent",path: "rent" },
      { id: "Office-For-Rent", label: "Office For Rent",path: "rent" },
      { id: "Vacation-Rentals", label: "Vacation Rentals" ,path: "rent"},
    ],
  },
  {
    category: "Tech",
    items: []
  },
];