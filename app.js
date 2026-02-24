
(() => {
  "use strict";

  const inventory = [
    {
      id: 1101,
      name: "Aster Satin Evening Dress",
      category: "women",
      price: 289,
      rating: 4.8,
      badge: "new",
      featured: true,
      color: "Ivory",
      material: "Satin blend",
      fit: "Slim",
      description: "Fluid satin profile with soft drape and a sculpted waistline for evening events.",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1102,
      name: "Pearl Knit Cardigan",
      category: "women",
      price: 112,
      rating: 4.5,
      badge: "best",
      featured: true,
      color: "Sand",
      material: "Merino knit",
      fit: "Relaxed",
      description: "Soft merino knit cardigan designed for layering through transitional weather.",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1103,
      name: "Sculpted Midi Dress",
      category: "women",
      price: 238,
      rating: 4.7,
      badge: "new",
      featured: true,
      color: "Rosewood",
      material: "Stretch twill",
      fit: "Tailored",
      description: "Structured neckline and contour seams that deliver a modern polished silhouette.",
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1104,
      name: "Ivory Wrap Blouse",
      category: "women",
      price: 84,
      rating: 4.4,
      badge: "",
      featured: false,
      color: "Ivory",
      material: "Viscose",
      fit: "Regular",
      description: "Lightweight blouse with a wrap front and subtle volume in the sleeves.",
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1105,
      name: "Pleated Palazzo Set",
      category: "women",
      price: 194,
      rating: 4.6,
      badge: "",
      featured: false,
      color: "Taupe",
      material: "Pleated crepe",
      fit: "Flow",
      description: "Statement two-piece designed with breezy movement and elegant proportions.",
      image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1106,
      name: "Boho Silk Maxi",
      category: "women",
      price: 168,
      rating: 4.5,
      badge: "",
      featured: false,
      color: "Terracotta",
      material: "Silk blend",
      fit: "Flow",
      description: "Tiered maxi dress with light movement and all-day comfort.",
      image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1107,
      name: "Minimal Slip Dress",
      category: "women",
      price: 149,
      rating: 4.6,
      badge: "best",
      featured: true,
      color: "Black",
      material: "Silk satin",
      fit: "Slim",
      description: "Clean slip silhouette with adjustable straps and elevated finishing.",
      image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1108,
      name: "Tailored Office Set",
      category: "women",
      price: 264,
      rating: 4.7,
      badge: "new",
      featured: true,
      color: "Slate",
      material: "Wool blend",
      fit: "Tailored",
      description: "Sharp blazer-and-trouser pairing built for high-impact work looks.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
    },

    {
      id: 1201,
      name: "Ash Wool Blazer",
      category: "men",
      price: 312,
      rating: 4.8,
      badge: "best",
      featured: true,
      color: "Charcoal",
      material: "Italian wool",
      fit: "Tailored",
      description: "Single-breasted wool blazer with soft shoulders and precise linework.",
      image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1202,
      name: "Urban Denim Jacket",
      category: "men",
      price: 128,
      rating: 4.4,
      badge: "",
      featured: false,
      color: "Indigo",
      material: "Rigid denim",
      fit: "Regular",
      description: "Layer-ready denim jacket with reinforced seams and clean wash.",
      image: "https://images.pexels.com/photos/3878806/pexels-photo-3878806.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1203,
      name: "Oxford Sharp Shirt",
      category: "men",
      price: 78,
      rating: 4.5,
      badge: "",
      featured: false,
      color: "White",
      material: "Cotton oxford",
      fit: "Slim",
      description: "Classic oxford shirt with modern collar stance and crisp hand feel.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1204,
      name: "Linen Resort Suit",
      category: "men",
      price: 346,
      rating: 4.6,
      badge: "new",
      featured: true,
      color: "Stone",
      material: "Pure linen",
      fit: "Relaxed",
      description: "Breathable tailoring with natural texture for warm-weather occasions.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1205,
      name: "Cashmere Crew Pullover",
      category: "men",
      price: 136,
      rating: 4.6,
      badge: "best",
      featured: true,
      color: "Camel",
      material: "Cashmere",
      fit: "Regular",
      description: "Fine-gauge cashmere layer with soft stretch and ribbed edges.",
      image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1206,
      name: "Tapered Chino Pant",
      category: "men",
      price: 92,
      rating: 4.3,
      badge: "",
      featured: false,
      color: "Khaki",
      material: "Cotton twill",
      fit: "Tapered",
      description: "Daily chino with stretch comfort and a clean tapered leg profile.",
      image: "https://images.pexels.com/photos/16154368/pexels-photo-16154368.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1207,
      name: "Vintage Rib Polo",
      category: "men",
      price: 69,
      rating: 4.2,
      badge: "",
      featured: false,
      color: "Olive",
      material: "Ribbed cotton",
      fit: "Regular",
      description: "Retro-inspired polo with dense rib texture and premium feel.",
      image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1208,
      name: "Modern Utility Shirt",
      category: "men",
      price: 88,
      rating: 4.4,
      badge: "new",
      featured: false,
      color: "Navy",
      material: "Tech cotton",
      fit: "Regular",
      description: "Two-pocket utility shirt with a refined city-ready finish.",
      image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=80"
    },

    {
      id: 1301,
      name: "Stormguard Trench",
      category: "outerwear",
      price: 284,
      rating: 4.7,
      badge: "best",
      featured: true,
      color: "Beige",
      material: "Waterproof blend",
      fit: "Regular",
      description: "Double-breasted trench with weather-resistant shell and detachable belt.",
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1302,
      name: "Alpine Puffer Vest",
      category: "outerwear",
      price: 146,
      rating: 4.4,
      badge: "",
      featured: false,
      color: "Graphite",
      material: "Recycled nylon",
      fit: "Boxy",
      description: "Lightweight insulated vest for layered warmth on cooler days.",
      image: "https://images.pexels.com/photos/11240853/pexels-photo-11240853.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1303,
      name: "Cropped Moto Jacket",
      category: "outerwear",
      price: 329,
      rating: 4.8,
      badge: "new",
      featured: true,
      color: "Black",
      material: "Lamb leather",
      fit: "Cropped",
      description: "Supple leather jacket with sharp zip detailing and cropped shape.",
      image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1304,
      name: "Heritage Long Coat",
      category: "outerwear",
      price: 358,
      rating: 4.7,
      badge: "best",
      featured: true,
      color: "Camel",
      material: "Wool blend",
      fit: "Relaxed",
      description: "Longline coat with structured lapels and a timeless silhouette.",
      image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1305,
      name: "Lightweight Rain Shell",
      category: "outerwear",
      price: 164,
      rating: 4.3,
      badge: "",
      featured: false,
      color: "Sage",
      material: "Ripstop shell",
      fit: "Regular",
      description: "Packable rain shell with taped seams and breathable lining.",
      image: "https://images.pexels.com/photos/12505397/pexels-photo-12505397.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1306,
      name: "Quilted Field Jacket",
      category: "outerwear",
      price: 188,
      rating: 4.5,
      badge: "new",
      featured: false,
      color: "Forest",
      material: "Quilted cotton",
      fit: "Regular",
      description: "Military-inspired field jacket with lightweight quilted construction.",
      image: "https://images.pexels.com/photos/18450001/pexels-photo-18450001.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },

    {
      id: 1401,
      name: "Motion Studio Legging",
      category: "active",
      price: 79,
      rating: 4.6,
      badge: "best",
      featured: true,
      color: "Midnight",
      material: "Compression knit",
      fit: "Supportive",
      description: "High-rise active legging with four-way stretch and squat-proof fabric.",
      image: "https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1402,
      name: "Flex Fit Sports Bra",
      category: "active",
      price: 54,
      rating: 4.5,
      badge: "",
      featured: false,
      color: "Coral",
      material: "Tech jersey",
      fit: "Compression",
      description: "Medium-impact bra designed with smooth seams and moisture control.",
      image: "https://images.pexels.com/photos/14541097/pexels-photo-14541097.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1403,
      name: "Aero Track Jacket",
      category: "active",
      price: 109,
      rating: 4.4,
      badge: "new",
      featured: false,
      color: "Blue mist",
      material: "Performance weave",
      fit: "Slim",
      description: "Lightweight track layer built for warm-up sessions and commute wear.",
      image: "https://images.pexels.com/photos/27581032/pexels-photo-27581032.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1404,
      name: "Velocity Jogger",
      category: "active",
      price: 86,
      rating: 4.4,
      badge: "",
      featured: false,
      color: "Graphite",
      material: "Stretch fleece",
      fit: "Tapered",
      description: "Athletic jogger with zipper pockets and tapered ankle cuff.",
      image: "https://images.pexels.com/photos/6740104/pexels-photo-6740104.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1405,
      name: "Crossfit Tee",
      category: "active",
      price: 42,
      rating: 4.2,
      badge: "",
      featured: false,
      color: "White",
      material: "Dry-touch cotton",
      fit: "Athletic",
      description: "Breathable training tee with anti-odor finish and mobility cut.",
      image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1406,
      name: "Performance Tank",
      category: "active",
      price: 48,
      rating: 4.3,
      badge: "new",
      featured: false,
      color: "Clay",
      material: "Airlight jersey",
      fit: "Regular",
      description: "Low-weight training tank with laser-cut ventilation panels.",
      image: "https://images.pexels.com/photos/5928310/pexels-photo-5928310.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },

    {
      id: 1501,
      name: "Monaco Leather Loafer",
      category: "shoes",
      price: 198,
      rating: 4.7,
      badge: "best",
      featured: true,
      color: "Espresso",
      material: "Full-grain leather",
      fit: "Regular",
      description: "Hand-finished loafer with cushioned insole and stacked heel.",
      image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1502,
      name: "Cloudline Sneaker",
      category: "shoes",
      price: 142,
      rating: 4.6,
      badge: "new",
      featured: true,
      color: "White",
      material: "Leather and mesh",
      fit: "Regular",
      description: "Premium court sneaker with ultra-light sole and clean upper.",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1503,
      name: "Chelsea Storm Boot",
      category: "shoes",
      price: 224,
      rating: 4.7,
      badge: "",
      featured: false,
      color: "Black",
      material: "Waxed leather",
      fit: "Regular",
      description: "Elastic-side Chelsea boot with durable lug outsole.",
      image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1504,
      name: "Canvas Day Runner",
      category: "shoes",
      price: 94,
      rating: 4.3,
      badge: "",
      featured: false,
      color: "Bone",
      material: "Organic canvas",
      fit: "Regular",
      description: "Easy low-profile canvas sneaker for daily city movement.",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1505,
      name: "Luna Heeled Sandal",
      category: "shoes",
      price: 176,
      rating: 4.5,
      badge: "new",
      featured: false,
      color: "Champagne",
      material: "Metallic leather",
      fit: "Regular",
      description: "Minimal strap sandal with stable block heel and padded footbed.",
      image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1506,
      name: "Alpine Trail Sneaker",
      category: "shoes",
      price: 168,
      rating: 4.6,
      badge: "best",
      featured: true,
      color: "Sand",
      material: "Trail mesh",
      fit: "Regular",
      description: "All-terrain sneaker with traction sole and reinforced toe guard.",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1507,
      name: "Stride Knit Trainer",
      category: "shoes",
      price: 136,
      rating: 4.4,
      badge: "",
      featured: false,
      color: "Shadow",
      material: "Engineered knit",
      fit: "Sock",
      description: "Responsive trainer with knit upper and sculpted cushion base.",
      image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=1200&q=80"
    },

    {
      id: 1601,
      name: "Minimal Steel Watch",
      category: "accessories",
      price: 156,
      rating: 4.6,
      badge: "best",
      featured: true,
      color: "Silver",
      material: "Steel",
      fit: "One size",
      description: "Slim-profile chronograph watch with brushed steel bracelet.",
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1602,
      name: "Grain Leather Tote",
      category: "accessories",
      price: 218,
      rating: 4.7,
      badge: "new",
      featured: true,
      color: "Umber",
      material: "Full-grain leather",
      fit: "One size",
      description: "Structured tote with magnetic close and padded tech compartment.",
      image: "https://images.pexels.com/photos/29359829/pexels-photo-29359829.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1603,
      name: "Silk Pattern Scarf",
      category: "accessories",
      price: 68,
      rating: 4.4,
      badge: "",
      featured: false,
      color: "Multi",
      material: "Silk",
      fit: "One size",
      description: "Printed silk scarf that adds color and texture to neutral looks.",
      image: "https://images.unsplash.com/photo-1677478863154-55ecce8c7536?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1604,
      name: "Crescent Crossbody Bag",
      category: "accessories",
      price: 164,
      rating: 4.5,
      badge: "",
      featured: false,
      color: "Black",
      material: "Pebbled leather",
      fit: "One size",
      description: "Compact crossbody with curved silhouette and adjustable strap.",
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1605,
      name: "Retro UV Sunglasses",
      category: "accessories",
      price: 122,
      rating: 4.3,
      badge: "",
      featured: false,
      color: "Tortoise",
      material: "Acetate",
      fit: "Medium",
      description: "Vintage-inspired frames with UV400 lenses and lightweight temple arms.",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1606,
      name: "Signature Buckle Belt",
      category: "accessories",
      price: 58,
      rating: 4.2,
      badge: "",
      featured: false,
      color: "Chestnut",
      material: "Leather",
      fit: "Adjustable",
      description: "Daily leather belt with brushed buckle and reinforced edge paint.",
      image: "https://images.pexels.com/photos/35322153/pexels-photo-35322153.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      id: 1607,
      name: "Stone Bead Bracelet",
      category: "accessories",
      price: 44,
      rating: 4.1,
      badge: "",
      featured: false,
      color: "Graphite",
      material: "Natural stone",
      fit: "Stretch",
      description: "Minimal bracelet stack piece with matte volcanic stones.",
      image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: 1608,
      name: "Travel Weekender Bag",
      category: "accessories",
      price: 236,
      rating: 4.8,
      badge: "best",
      featured: true,
      color: "Olive",
      material: "Waxed canvas",
      fit: "Large",
      description: "Carry-on ready weekender with shoe compartment and padded shoulder strap.",
      image: "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1200"
    }
  ];

  const STORAGE = {
    cart: "moda_cart_v3",
    wishlist: "moda_wishlist_v3"
  };

  const CATEGORY_LABELS = {
    women: "Women",
    men: "Men",
    outerwear: "Outerwear",
    active: "Active",
    shoes: "Shoes",
    accessories: "Accessories"
  };

  const IMAGE_FALLBACKS = {
    women: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80",
    men: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=80",
    outerwear: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
    active: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
    shoes: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80",
    accessories: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
    default: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80"
  };

  const panelTransitionMs = 240;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });

  const state = {
    page: document.body.dataset.page || "home",
    category: "all",
    query: "",
    sort: "featured",
    maxPrice: 900,
    cart: loadJSON(STORAGE.cart, []),
    wishlist: new Set(loadJSON(STORAGE.wishlist, [])),
    activeProductId: null
  };

  const els = {
    body: document.body,
    siteHeader: select("#siteHeader"),
    scrollProgress: select("#scrollProgress"),
    toast: select("#toast"),

    wishlistBtn: select("#wishlistBtn"),
    wishlistBadge: select("#wishlistBadge"),
    cartBtn: select("#cartBtn"),
    cartBadge: select("#cartBadge"),

    mobileNavToggle: select("#mobileNavToggle"),
    mobileNavOverlay: select("#mobileNavOverlay"),
    closeMobileNavBtn: select("#closeMobileNavBtn"),
    mobileNav: select("#mobileNav"),

    wishlistOverlay: select("#wishlistOverlay"),
    wishlistDrawer: select("#wishlistDrawer"),
    closeWishlistBtn: select("#closeWishlistBtn"),
    wishlistItems: select("#wishlistItems"),
    wishlistCount: select("#wishlistCount"),
    addWishlistToCartBtn: select("#addWishlistToCartBtn"),

    cartOverlay: select("#cartOverlay"),
    cartDrawer: select("#cartDrawer"),
    closeCartBtn: select("#closeCartBtn"),
    cartItems: select("#cartItems"),
    cartSubtotal: select("#cartSubtotal"),
    checkoutBtn: select("#checkoutBtn"),

    modalOverlay: select("#modalOverlay"),
    quickModal: select("#quickModal"),
    closeQuickModalBtn: select("#closeQuickModalBtn"),
    quickModalBody: select("#quickModalBody"),

    newsletterForm: select("#newsletterForm"),

    arrivalRail: select("#arrivalRail"),
    catalogGrid: select("#catalogGrid"),
    resultCount: select("#resultCount"),
    categoryChips: select("#categoryChips"),
    catalogSearch: select("#catalogSearch"),
    sortSelect: select("#sortSelect"),
    priceRange: select("#priceRange"),
    priceValue: select("#priceValue"),
    metricProducts: select('[data-metric="products"]'),
    metricCategories: select('[data-metric="categories"]'),
    metricShips: select('[data-metric="ships"]'),

    crumbProduct: select("#crumbProduct"),
    productDetail: select("#productDetail"),
    relatedGrid: select("#relatedGrid")
  };

  let revealObserver = null;
  let toastTimer = null;
  const panelTimers = new WeakMap();

  function select(selector, root = document) {
    return root.querySelector(selector);
  }

  function selectAll(selector, root = document) {
    return Array.from(root.querySelectorAll(selector));
  }

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, (token) => {
      if (token === "&") return "&amp;";
      if (token === "<") return "&lt;";
      if (token === ">") return "&gt;";
      if (token === '"') return "&quot;";
      return "&#039;";
    });
  }

  function categoryLabel(category) {
    return CATEGORY_LABELS[category] || category;
  }

  function formatRating(value) {
    return `${value.toFixed(1)} / 5`;
  }

  function setupImageFallbacks() {
    document.addEventListener(
      "error",
      (event) => {
        const target = event.target;
        if (!(target instanceof HTMLImageElement)) return;
        if (target.dataset.fallbackApplied === "1") return;

        const category = target.dataset.category || "default";
        const fallback = IMAGE_FALLBACKS[category] || IMAGE_FALLBACKS.default;
        if (!fallback || target.src === fallback) return;

        target.dataset.fallbackApplied = "1";
        target.src = fallback;
      },
      true
    );
  }

  function getProductById(id) {
    const numericId = Number(id);
    return inventory.find((item) => item.id === numericId) || null;
  }

  function cartCount() {
    return state.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  function cartSubtotal() {
    return state.cart.reduce((sum, item) => {
      const product = getProductById(item.id);
      if (!product) return sum;
      return sum + product.price * item.qty;
    }, 0);
  }

  function isPanelOpen(panel) {
    return Boolean(panel && !panel.hidden);
  }

  function syncBodyLock() {
    const hasOpenPanel = [els.mobileNav, els.wishlistDrawer, els.cartDrawer, els.quickModal].some((panel) => panel && !panel.hidden);
    els.body.classList.toggle("is-locked", hasOpenPanel);
  }

  function showPanel(panel, overlay, openClass) {
    if (!panel || !overlay) return;
    const existingTimer = panelTimers.get(panel);
    if (existingTimer) {
      window.clearTimeout(existingTimer);
      panelTimers.delete(panel);
    }
    panel.hidden = false;
    overlay.hidden = false;
    window.requestAnimationFrame(() => {
      panel.classList.add(openClass);
      syncBodyLock();
    });
  }

  function hidePanel(panel, overlay, openClass) {
    if (!panel || !overlay || panel.hidden) return;
    panel.classList.remove(openClass);
    const hideTimer = window.setTimeout(() => {
      panel.hidden = true;
      overlay.hidden = true;
      syncBodyLock();
    }, panelTransitionMs);
    panelTimers.set(panel, hideTimer);
  }

  function showToast(message) {
    if (!els.toast) return;
    els.toast.textContent = message;
    els.toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      els.toast.classList.remove("show");
    }, 2400);
  }

  function persistCart() {
    saveJSON(STORAGE.cart, state.cart);
    syncBadges();
    renderCart();
  }

  function persistWishlist() {
    saveJSON(STORAGE.wishlist, Array.from(state.wishlist));
    syncBadges();
    renderWishlist();
    updateWishlistButtons();
  }

  function syncBadges() {
    if (els.cartBadge) els.cartBadge.textContent = String(cartCount());
    if (els.wishlistBadge) els.wishlistBadge.textContent = String(state.wishlist.size);
  }

  function addToCart(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return;

    const safeQty = Math.max(1, Number(quantity) || 1);
    const current = state.cart.find((item) => item.id === product.id);
    if (current) current.qty += safeQty;
    else state.cart.push({ id: product.id, qty: safeQty });

    persistCart();
    showToast(`${product.name} added to bag.`);
  }

  function changeQuantity(productId, delta) {
    const current = state.cart.find((item) => item.id === Number(productId));
    if (!current) return;
    current.qty += Number(delta);
    if (current.qty <= 0) {
      state.cart = state.cart.filter((item) => item.id !== Number(productId));
    }
    persistCart();
  }

  function removeFromCart(productId) {
    state.cart = state.cart.filter((item) => item.id !== Number(productId));
    persistCart();
  }

  function toggleWishlist(productId) {
    const numericId = Number(productId);
    const product = getProductById(numericId);
    if (!product) return;

    if (state.wishlist.has(numericId)) {
      state.wishlist.delete(numericId);
      showToast(`${product.name} removed from wishlist.`);
    } else {
      state.wishlist.add(numericId);
      showToast(`${product.name} saved to wishlist.`);
    }

    persistWishlist();
  }

  function updateWishlistButtons() {
    selectAll("[data-product-id]").forEach((card) => {
      const id = Number(card.dataset.productId);
      const wishBtn = select('[data-action="wish"]', card);
      if (!wishBtn) return;
      wishBtn.textContent = state.wishlist.has(id) ? "Saved" : "Save";
    });

    const detailWishButton = select("#detailWishBtn");
    if (detailWishButton) {
      const id = Number(detailWishButton.dataset.productId);
      detailWishButton.textContent = state.wishlist.has(id) ? "Saved to wishlist" : "Save to wishlist";
    }

    const quickWishButton = select("#quickWishBtn");
    if (quickWishButton) {
      const id = Number(quickWishButton.dataset.productId);
      quickWishButton.textContent = state.wishlist.has(id) ? "Saved to wishlist" : "Save to wishlist";
    }
  }

  function renderWishlist() {
    if (!els.wishlistItems || !els.wishlistCount) return;

    const items = Array.from(state.wishlist).map((id) => getProductById(id)).filter(Boolean);
    els.wishlistCount.textContent = String(items.length);

    if (!items.length) {
      els.wishlistItems.innerHTML = '<div class="empty-state">Your wishlist is empty. Tap save on products you like.</div>';
      return;
    }

    els.wishlistItems.innerHTML = items
      .map((product) => {
        return `
          <article class="cart-item wish-item">
            <img src="${product.image}" alt="${escapeHTML(product.name)}" data-category="${product.category}" loading="lazy" decoding="async" />
            <div class="cart-meta">
              <h4>${escapeHTML(product.name)}</h4>
              <p>${escapeHTML(categoryLabel(product.category))} | ${money.format(product.price)}</p>
              <div class="cart-row">
                <button class="link-btn" type="button" data-wish-add="${product.id}">Add to bag</button>
                <button class="link-btn" type="button" data-wish-remove="${product.id}">Remove</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function openMobileNav() {
    if (!els.mobileNav || !els.mobileNavOverlay) return;
    closeWishlist();
    closeCart();
    showPanel(els.mobileNav, els.mobileNavOverlay, "is-open");
    if (els.mobileNavToggle) els.mobileNavToggle.setAttribute("aria-expanded", "true");
  }

  function closeMobileNav() {
    if (!els.mobileNav || !els.mobileNavOverlay) return;
    hidePanel(els.mobileNav, els.mobileNavOverlay, "is-open");
    if (els.mobileNavToggle) els.mobileNavToggle.setAttribute("aria-expanded", "false");
  }

  function openWishlist() {
    if (!els.wishlistDrawer || !els.wishlistOverlay) return;
    closeMobileNav();
    closeCart();
    renderWishlist();
    showPanel(els.wishlistDrawer, els.wishlistOverlay, "is-open");
  }

  function closeWishlist() {
    if (!els.wishlistDrawer || !els.wishlistOverlay) return;
    hidePanel(els.wishlistDrawer, els.wishlistOverlay, "is-open");
  }

  function openCart() {
    if (!els.cartDrawer || !els.cartOverlay) return;
    closeWishlist();
    closeMobileNav();
    showPanel(els.cartDrawer, els.cartOverlay, "is-open");
  }

  function closeCart() {
    if (!els.cartDrawer || !els.cartOverlay) return;
    hidePanel(els.cartDrawer, els.cartOverlay, "is-open");
  }

  function openQuickModal(productId) {
    const product = getProductById(productId);
    if (!product || !els.quickModal || !els.modalOverlay || !els.quickModalBody) return;

    els.quickModalBody.innerHTML = quickViewTemplate(product);
    showPanel(els.quickModal, els.modalOverlay, "is-open");

    const addBtn = select("#quickAddBtn", els.quickModalBody);
    const wishBtn = select("#quickWishBtn", els.quickModalBody);

    if (addBtn) {
      addBtn.addEventListener("click", () => addToCart(product.id, 1));
    }
    if (wishBtn) {
      wishBtn.addEventListener("click", () => toggleWishlist(product.id));
    }
  }

  function closeQuickModal() {
    if (!els.quickModal || !els.modalOverlay) return;
    hidePanel(els.quickModal, els.modalOverlay, "is-open");
  }

  function renderCart() {
    if (!els.cartItems || !els.cartSubtotal) return;

    if (state.cart.length === 0) {
      els.cartItems.innerHTML = '<div class="empty-state">Your bag is empty. Add items from the catalog.</div>';
      els.cartSubtotal.textContent = money.format(0);
      return;
    }

    els.cartItems.innerHTML = state.cart
      .map((item) => {
        const product = getProductById(item.id);
        if (!product) return "";

        return `
          <article class="cart-item">
            <img src="${product.image}" alt="${escapeHTML(product.name)}" data-category="${product.category}" loading="lazy" decoding="async" />
            <div class="cart-meta">
              <h4>${escapeHTML(product.name)}</h4>
              <p>${escapeHTML(categoryLabel(product.category))} | ${money.format(product.price)}</p>
              <div class="cart-row">
                <div class="qty-group" aria-label="Quantity controls">
                  <button type="button" data-cart-delta="-1" data-cart-id="${product.id}" aria-label="Decrease quantity">-</button>
                  <span>${item.qty}</span>
                  <button type="button" data-cart-delta="1" data-cart-id="${product.id}" aria-label="Increase quantity">+</button>
                </div>
                <button class="link-btn" type="button" data-cart-remove="${product.id}">Remove</button>
              </div>
            </div>
          </article>
        `;
      })
      .join("");

    els.cartSubtotal.textContent = money.format(cartSubtotal());
  }

  function filteredInventory() {
    let filtered = inventory.slice();

    if (state.category !== "all") {
      filtered = filtered.filter((product) => product.category === state.category);
    }

    if (state.query) {
      filtered = filtered.filter((product) => {
        const haystack = `${product.name} ${product.category} ${product.material}`.toLowerCase();
        return haystack.includes(state.query);
      });
    }

    filtered = filtered.filter((product) => product.price <= state.maxPrice);

    switch (state.sort) {
      case "newest":
        filtered.sort((a, b) => Number(b.badge === "new") - Number(a.badge === "new") || b.rating - a.rating);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating || a.price - b.price);
        break;
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "featured":
      default:
        filtered.sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating);
        break;
    }

    return filtered;
  }

  function productCardTemplate(product, staggerIndex = 0) {
    const tagLabel = product.badge === "new" ? "New" : product.badge === "best" ? "Best Seller" : "";
    const tagClass = product.badge === "new" ? "new" : product.badge === "best" ? "best" : "";
    const wishlistLabel = state.wishlist.has(product.id) ? "Saved" : "Save";

    return `
      <article class="product-card" data-product-id="${product.id}" data-reveal style="--stagger:${staggerIndex};">
        <div class="product-media">
          ${tagLabel ? `<span class="tag ${tagClass}">${tagLabel}</span>` : ""}
          <img src="${product.image}" alt="${escapeHTML(product.name)}" data-category="${product.category}" loading="lazy" decoding="async" />
          <div class="product-actions">
            <button class="mini-btn" type="button" data-action="quick">Quick View</button>
            <button class="mini-btn primary" type="button" data-action="add">Add</button>
            <button class="mini-btn" type="button" data-action="wish">${wishlistLabel}</button>
          </div>
        </div>
        <div class="product-body">
          <div class="product-topline">
            <span>${escapeHTML(categoryLabel(product.category))}</span>
            <span>${formatRating(product.rating)}</span>
          </div>
          <h3 class="product-name">${escapeHTML(product.name)}</h3>
          <div class="product-meta">
            <strong class="product-price">${money.format(product.price)}</strong>
            <a class="text-link" href="product.html?id=${product.id}">Details</a>
          </div>
        </div>
      </article>
    `;
  }

  function quickViewTemplate(product) {
    const wishlistLabel = state.wishlist.has(product.id) ? "Saved to wishlist" : "Save to wishlist";

    return `
      <div class="quick-view">
        <img src="${product.image}" alt="${escapeHTML(product.name)}" data-category="${product.category}" loading="eager" decoding="async" />
        <div class="quick-content">
          <p class="product-category">${escapeHTML(categoryLabel(product.category))}</p>
          <h2>${escapeHTML(product.name)}</h2>
          <span class="rating-pill">Rating: ${formatRating(product.rating)}</span>
          <p class="product-desc">${escapeHTML(product.description)}</p>
          <div class="product-specs">
            <span>Material: ${escapeHTML(product.material)}</span>
            <span>Color: ${escapeHTML(product.color)}</span>
            <span>Fit: ${escapeHTML(product.fit)}</span>
            <span>Dispatch: 48h</span>
          </div>
          <div class="price-line">
            <strong>${money.format(product.price)}</strong>
            <a class="text-link" href="product.html?id=${product.id}">Open detail page</a>
          </div>
          <div class="detail-actions">
            <button class="btn btn-primary" type="button" id="quickAddBtn" data-product-id="${product.id}">Add to bag</button>
            <button class="btn btn-outline" type="button" id="quickWishBtn" data-product-id="${product.id}">${wishlistLabel}</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderArrivalRail() {
    if (!els.arrivalRail) return;

    const arrivals = inventory
      .filter((product) => product.badge === "new")
      .sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating)
      .slice(0, 14);

    els.arrivalRail.innerHTML = arrivals.map((product, index) => productCardTemplate(product, index % 10)).join("");
    registerReveal(els.arrivalRail);
  }

  function renderCatalog() {
    if (!els.catalogGrid || !els.resultCount) return;

    const products = filteredInventory();

    if (!products.length) {
      els.catalogGrid.innerHTML = '<div class="empty-state" style="grid-column:1 / -1;">No products match your current filters.</div>';
      els.resultCount.textContent = "0 results";
      return;
    }

    els.catalogGrid.innerHTML = products.map((product, index) => productCardTemplate(product, index % 10)).join("");
    els.resultCount.textContent = `${products.length} results`;
    registerReveal(els.catalogGrid);
  }

  function setCategory(category) {
    state.category = category;
    if (els.categoryChips) {
      selectAll(".chip", els.categoryChips).forEach((chip) => {
        chip.classList.toggle("is-active", chip.dataset.cat === category);
      });
    }
    renderCatalog();
  }

  function renderHomeMetrics() {
    if (els.metricProducts) els.metricProducts.textContent = String(inventory.length);
    if (els.metricCategories) {
      const categoryCount = new Set(inventory.map((product) => product.category)).size;
      els.metricCategories.textContent = String(categoryCount);
    }
    if (els.metricShips) els.metricShips.textContent = "48h";
  }

  function renderHomePage() {
    renderHomeMetrics();
    renderArrivalRail();
    renderCatalog();
  }

  function detailTemplate(product) {
    const wishlistLabel = state.wishlist.has(product.id) ? "Saved to wishlist" : "Save to wishlist";

    return `
      <article class="product-layout" data-reveal>
        <div class="product-gallery">
          <img src="${product.image}" alt="${escapeHTML(product.name)}" data-category="${product.category}" loading="eager" decoding="async" />
        </div>

        <div class="product-info">
          <p class="product-category">${escapeHTML(categoryLabel(product.category))}</p>
          <h1>${escapeHTML(product.name)}</h1>
          <span class="rating-pill">Rating: ${formatRating(product.rating)}</span>
          <p class="product-desc">${escapeHTML(product.description)}</p>

          <div class="product-specs">
            <span>Material: ${escapeHTML(product.material)}</span>
            <span>Color: ${escapeHTML(product.color)}</span>
            <span>Fit: ${escapeHTML(product.fit)}</span>
            <span>30-day returns</span>
          </div>

          <div class="price-line">
            <strong>${money.format(product.price)}</strong>
            <a class="text-link" href="index.html#catalog">Browse full catalog</a>
          </div>

          <div class="detail-actions">
            <div class="qty-control" aria-label="Quantity selector">
              <button type="button" id="detailQtyDec" aria-label="Decrease quantity">-</button>
              <span id="detailQtyValue">1</span>
              <button type="button" id="detailQtyInc" aria-label="Increase quantity">+</button>
            </div>
            <button class="btn btn-primary" id="detailAddBtn" type="button" data-product-id="${product.id}">Add to bag</button>
            <button class="btn btn-outline" id="detailWishBtn" type="button" data-product-id="${product.id}">${wishlistLabel}</button>
          </div>
        </div>
      </article>
    `;
  }

  function renderRelatedProducts(product) {
    if (!els.relatedGrid) return;

    const sameCategory = inventory.filter((item) => item.category === product.category && item.id !== product.id);
    const fallback = inventory.filter((item) => item.id !== product.id);

    const merged = [...sameCategory, ...fallback.filter((item) => item.category !== product.category)]
      .filter((item, index, all) => all.findIndex((entry) => entry.id === item.id) === index)
      .slice(0, 8);

    els.relatedGrid.innerHTML = merged.map((item, index) => productCardTemplate(item, index % 8)).join("");
    registerReveal(els.relatedGrid);
  }

  function renderProductPage() {
    if (!els.productDetail) return;

    const idFromQuery = Number(new URLSearchParams(window.location.search).get("id"));
    const selectedProduct = getProductById(idFromQuery) || inventory[0];

    state.activeProductId = selectedProduct.id;

    if (els.crumbProduct) {
      els.crumbProduct.textContent = selectedProduct.name;
    }

    els.productDetail.innerHTML = detailTemplate(selectedProduct);
    registerReveal(els.productDetail);
    renderRelatedProducts(selectedProduct);

    let quantity = 1;
    const qtyValue = select("#detailQtyValue", els.productDetail);
    const qtyDec = select("#detailQtyDec", els.productDetail);
    const qtyInc = select("#detailQtyInc", els.productDetail);
    const addBtn = select("#detailAddBtn", els.productDetail);
    const wishBtn = select("#detailWishBtn", els.productDetail);

    const writeQty = () => {
      if (qtyValue) qtyValue.textContent = String(quantity);
    };

    if (qtyDec) {
      qtyDec.addEventListener("click", () => {
        quantity = Math.max(1, quantity - 1);
        writeQty();
      });
    }

    if (qtyInc) {
      qtyInc.addEventListener("click", () => {
        quantity = Math.min(15, quantity + 1);
        writeQty();
      });
    }

    if (addBtn) {
      addBtn.addEventListener("click", () => addToCart(selectedProduct.id, quantity));
    }

    if (wishBtn) {
      wishBtn.addEventListener("click", () => toggleWishlist(selectedProduct.id));
    }
  }

  function bindGlobalActions() {
    document.addEventListener("click", (event) => {
      const actionButton = event.target.closest("[data-action]");
      if (!actionButton) return;

      const card = actionButton.closest("[data-product-id]");
      if (!card) return;

      event.preventDefault();
      const productId = Number(card.dataset.productId);
      if (!productId) return;

      if (actionButton.dataset.action === "quick") {
        openQuickModal(productId);
      }
      if (actionButton.dataset.action === "add") {
        addToCart(productId, 1);
      }
      if (actionButton.dataset.action === "wish") {
        toggleWishlist(productId);
      }
    });

    if (els.cartItems) {
      els.cartItems.addEventListener("click", (event) => {
        const deltaButton = event.target.closest("[data-cart-delta]");
        if (deltaButton) {
          changeQuantity(deltaButton.dataset.cartId, deltaButton.dataset.cartDelta);
          return;
        }

        const removeButton = event.target.closest("[data-cart-remove]");
        if (removeButton) {
          removeFromCart(removeButton.dataset.cartRemove);
        }
      });
    }

    if (els.wishlistItems) {
      els.wishlistItems.addEventListener("click", (event) => {
        const addButton = event.target.closest("[data-wish-add]");
        if (addButton) {
          const id = Number(addButton.dataset.wishAdd);
          if (id) addToCart(id, 1);
          return;
        }

        const removeButton = event.target.closest("[data-wish-remove]");
        if (removeButton) {
          const id = Number(removeButton.dataset.wishRemove);
          if (id) toggleWishlist(id);
        }
      });
    }

    if (els.cartBtn) {
      els.cartBtn.addEventListener("click", () => {
        if (isPanelOpen(els.cartDrawer)) closeCart();
        else openCart();
      });
    }
    if (els.closeCartBtn) els.closeCartBtn.addEventListener("click", closeCart);
    if (els.cartOverlay) els.cartOverlay.addEventListener("click", closeCart);

    if (els.mobileNavToggle) {
      els.mobileNavToggle.addEventListener("click", () => {
        if (isPanelOpen(els.mobileNav)) closeMobileNav();
        else openMobileNav();
      });
    }
    if (els.closeMobileNavBtn) els.closeMobileNavBtn.addEventListener("click", closeMobileNav);
    if (els.mobileNavOverlay) els.mobileNavOverlay.addEventListener("click", closeMobileNav);

    if (els.wishlistBtn) {
      els.wishlistBtn.addEventListener("click", () => {
        if (isPanelOpen(els.wishlistDrawer)) closeWishlist();
        else openWishlist();
      });
    }
    if (els.closeWishlistBtn) els.closeWishlistBtn.addEventListener("click", closeWishlist);
    if (els.wishlistOverlay) els.wishlistOverlay.addEventListener("click", closeWishlist);

    if (els.addWishlistToCartBtn) {
      els.addWishlistToCartBtn.addEventListener("click", () => {
        const ids = Array.from(state.wishlist).filter((id) => getProductById(id));
        if (!ids.length) {
          showToast("Wishlist is empty.");
          return;
        }

        ids.forEach((id) => {
          const existing = state.cart.find((item) => item.id === id);
          if (existing) existing.qty += 1;
          else state.cart.push({ id, qty: 1 });
        });

        state.wishlist.clear();
        persistCart();
        persistWishlist();
        closeWishlist();
        showToast(`Added ${ids.length} item${ids.length > 1 ? "s" : ""} to bag.`);
      });
    }

    if (els.closeQuickModalBtn) els.closeQuickModalBtn.addEventListener("click", closeQuickModal);
    if (els.modalOverlay) els.modalOverlay.addEventListener("click", closeQuickModal);

    if (els.checkoutBtn) {
      els.checkoutBtn.addEventListener("click", () => {
        if (!state.cart.length) {
          showToast("Your bag is empty.");
          return;
        }

        state.cart = [];
        persistCart();
        closeCart();
        showToast("Checkout started. Demo flow only.");
      });
    }

    if (els.newsletterForm) {
      els.newsletterForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const emailInput = select("input[type='email']", els.newsletterForm);
        const value = emailInput ? emailInput.value.trim() : "";
        if (!value) {
          showToast("Please enter an email address.");
          return;
        }
        els.newsletterForm.reset();
        showToast("You are on the early access list.");
      });
    }

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      closeMobileNav();
      closeWishlist();
      closeCart();
      closeQuickModal();
    });
  }

  function bindHomeControls() {
    if (els.catalogSearch) {
      els.catalogSearch.addEventListener("input", () => {
        state.query = els.catalogSearch.value.trim().toLowerCase();
        renderCatalog();
      });
    }

    if (els.sortSelect) {
      els.sortSelect.addEventListener("change", () => {
        state.sort = els.sortSelect.value;
        renderCatalog();
      });
    }

    if (els.priceRange) {
      state.maxPrice = Number(els.priceRange.value);
      if (els.priceValue) els.priceValue.textContent = money.format(state.maxPrice);

      els.priceRange.addEventListener("input", () => {
        state.maxPrice = Number(els.priceRange.value);
        if (els.priceValue) els.priceValue.textContent = money.format(state.maxPrice);
        renderCatalog();
      });
    }

    if (els.categoryChips) {
      els.categoryChips.addEventListener("click", (event) => {
        const chip = event.target.closest(".chip");
        if (!chip) return;
        setCategory(chip.dataset.cat || "all");
      });
    }

    selectAll("[data-category]").forEach((node) => {
      node.addEventListener("click", () => {
        const nextCategory = node.getAttribute("data-category") || "all";
        setCategory(nextCategory);
      });
    });
  }

  function bindSmoothScroll() {
    selectAll("[data-scroll]").forEach((node) => {
      node.addEventListener("click", (event) => {
        const targetSelector = node.getAttribute("data-scroll");
        if (!targetSelector) return;

        const target = select(targetSelector);
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        closeMobileNav();
      });
    });
  }

  function setupScrollUi() {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;

      if (els.siteHeader) {
        els.siteHeader.classList.toggle("is-compact", y > 8);
      }

      if (els.scrollProgress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const progress = max > 0 ? (y / max) * 100 : 0;
        els.scrollProgress.style.width = `${Math.min(100, Math.max(0, progress)).toFixed(2)}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupResponsiveGuards() {
    const onResize = () => {
      if (window.innerWidth > 980) {
        closeMobileNav();
      }
    };

    window.addEventListener("resize", onResize, { passive: true });
    onResize();
  }

  function setupRevealObserver() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      selectAll("[data-reveal]").forEach((node) => node.classList.add("is-visible"));
      return;
    }

    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    registerReveal(document);
  }

  function registerReveal(root) {
    const revealNodes = selectAll("[data-reveal]", root || document).filter((node) => !node.dataset.revealAttached);

    if (!revealNodes.length) return;

    revealNodes.forEach((node) => {
      node.dataset.revealAttached = "true";
      if (revealObserver) {
        revealObserver.observe(node);
      } else {
        node.classList.add("is-visible");
      }
    });
  }

  function bootstrapPage() {
    setupImageFallbacks();
    syncBadges();
    renderCart();
    renderWishlist();

    bindGlobalActions();
    bindSmoothScroll();
    setupScrollUi();
    setupResponsiveGuards();
    setupRevealObserver();

    if (state.page === "home") {
      bindHomeControls();
      renderHomePage();
    }

    if (state.page === "product") {
      renderProductPage();
    }

    updateWishlistButtons();
  }

  bootstrapPage();
})();
