/* =====================================================================
   MODA ATELIER — storefront logic
   Single-file vanilla JS app powering home + product pages.
   ===================================================================== */
(() => {
  "use strict";

  /* ------------------------------------------------------------------ *
   * 1. Icon set (inline SVG, currentColor)
   * ------------------------------------------------------------------ */
  const ICON = {
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.2-3.2"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20.5 4.2 12.9a4.6 4.6 0 0 1 6.5-6.5l1.3 1.3 1.3-1.3a4.6 4.6 0 0 1 6.5 6.5Z"/></svg>',
    heartFill: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.8 3.9 12.7a5 5 0 0 1 7-7.1l1.1 1 1.1-1a5 5 0 0 1 7 7.1Z"/></svg>',
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12H7Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    star: '<svg viewBox="0 0 24 24" class="star" aria-hidden="true"><path d="m12 3 2.6 5.6 6.1.8-4.5 4.2 1.2 6L12 17.8 6.6 19.6l1.2-6L3.3 9.4l6.1-.8Z"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    chevronLeft: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M15 6l-6 6 6 6"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    minus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M5 12h14"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h11v9H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7" cy="18" r="1.6"/><circle cx="17.5" cy="18" r="1.6"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-2.6-6.4"/><path d="M21 4v5h-5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5c0 4.4 3 8 7 9 4-1 7-4.6 7-9V6Z"/><path d="m9 12 2 2 4-4"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19c8 1 14-4 15-15C11 4 4 9 5 19Z"/><path d="M5 19c2-5 5-8 9-10"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 5 5 9-11"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
    pinterest: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7c-2.5 0-4 1.6-4 3.6 0 1.3.7 2.2 1.4 2.2.4 0 .6-.5.6-.8 0-.4-.6-1-.6-1.9 0-1.5 1.2-2.6 2.8-2.6 1.5 0 2.4 1 2.4 2.4 0 1.8-.8 3.4-2 3.4-.7 0-1.2-.6-1-1.3.2-.9.6-1.8.6-2.4 0-.6-.3-1-.9-1-.7 0-1.3.7-1.3 1.8 0 .6.2 1 .2 1l-1 4.2c-.2 1-.1 2.2 0 2.6"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 3c.3 2 1.6 3.6 3.5 3.9v2.6c-1.3 0-2.5-.4-3.5-1.1v5.7a5.4 5.4 0 1 1-5.4-5.4c.3 0 .5 0 .8.05v2.7a2.7 2.7 0 1 0 1.9 2.6V3Z"/></svg>',
  };

  /* ------------------------------------------------------------------ *
   * 2. Base catalogue
   * ------------------------------------------------------------------ */
  const BASE_PRODUCTS = [
    { id: 1101, name: "Aster Satin Evening Dress", category: "women", price: 289, rating: 4.8, badge: "new", featured: true, color: "Ivory", material: "Satin blend", fit: "Slim", description: "A fluid satin profile with soft drape and a sculpted waistline, cut for evenings that ask for a little more.", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=80" },
    { id: 1102, name: "Pearl Knit Cardigan", category: "women", price: 112, rating: 4.5, badge: "best", featured: true, color: "Sand", material: "Merino knit", fit: "Relaxed", description: "Featherweight merino knit built for layering through every transitional week of the year.", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80" },
    { id: 1103, name: "Sculpted Midi Dress", category: "women", price: 238, rating: 4.7, badge: "new", featured: true, color: "Rosewood", material: "Stretch twill", fit: "Tailored", description: "A structured neckline and contour seams that deliver a quietly modern, polished silhouette.", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80" },
    { id: 1104, name: "Ivory Wrap Blouse", category: "women", price: 84, rating: 4.4, badge: "", featured: false, color: "Ivory", material: "Viscose", fit: "Regular", description: "A lightweight wrap blouse with a soft front tie and gentle volume through the sleeve.", image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80" },
    { id: 1105, name: "Pleated Palazzo Set", category: "women", price: 194, rating: 4.6, badge: "", featured: false, color: "Taupe", material: "Pleated crepe", fit: "Flow", description: "A statement two-piece designed with breezy movement and elegant, elongating proportions.", image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?auto=format&fit=crop&w=1200&q=80" },
    { id: 1106, name: "Boho Silk Maxi", category: "women", price: 168, rating: 4.5, badge: "", featured: false, color: "Terracotta", material: "Silk blend", fit: "Flow", description: "A tiered maxi with light, easy movement and all-day comfort from brunch to golden hour.", image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80" },
    { id: 1107, name: "Minimal Slip Dress", category: "women", price: 149, rating: 4.6, badge: "best", featured: true, color: "Black", material: "Silk satin", fit: "Slim", description: "A clean bias-cut slip with adjustable straps and an elevated, weighty finish.", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=1200&q=80" },
    { id: 1108, name: "Tailored Office Set", category: "women", price: 264, rating: 4.7, badge: "new", featured: true, color: "Slate", material: "Wool blend", fit: "Tailored", description: "A sharp blazer-and-trouser pairing built for the days that matter most.", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80" },

    { id: 1201, name: "Ash Wool Blazer", category: "men", price: 312, rating: 4.8, badge: "best", featured: true, color: "Charcoal", material: "Italian wool", fit: "Tailored", description: "A single-breasted wool blazer with soft natural shoulders and precise, considered linework.", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1200&q=80" },
    { id: 1202, name: "Urban Denim Jacket", category: "men", price: 128, rating: 4.4, badge: "", featured: false, color: "Indigo", material: "Rigid denim", fit: "Regular", description: "A layer-ready trucker with reinforced seams and a clean, rigid wash that ages beautifully.", image: "https://images.pexels.com/photos/3878806/pexels-photo-3878806.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1203, name: "Oxford Sharp Shirt", category: "men", price: 78, rating: 4.5, badge: "", featured: false, color: "White", material: "Cotton oxford", fit: "Slim", description: "A classic oxford with a modern collar stance and a crisp, substantial hand feel.", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80" },
    { id: 1204, name: "Linen Resort Suit", category: "men", price: 346, rating: 4.6, badge: "new", featured: true, color: "Stone", material: "Pure linen", fit: "Relaxed", description: "Breathable tailoring with natural texture, made for warm-weather occasions and slow evenings.", image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80" },
    { id: 1205, name: "Cashmere Crew Pullover", category: "men", price: 136, rating: 4.6, badge: "best", featured: true, color: "Camel", material: "Cashmere", fit: "Regular", description: "A fine-gauge cashmere layer with soft stretch and neatly ribbed edges.", image: "https://images.unsplash.com/photo-1631541909061-71e349d1f203?auto=format&fit=crop&w=1200&q=80" },
    { id: 1206, name: "Tapered Chino Pant", category: "men", price: 92, rating: 4.3, badge: "", featured: false, color: "Khaki", material: "Cotton twill", fit: "Tapered", description: "A daily chino with quiet stretch comfort and a clean, tapered leg.", image: "https://images.pexels.com/photos/16154368/pexels-photo-16154368.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1207, name: "Vintage Rib Polo", category: "men", price: 69, rating: 4.2, badge: "", featured: false, color: "Olive", material: "Ribbed cotton", fit: "Regular", description: "A retro-leaning polo with dense rib texture and a genuinely premium feel.", image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1200&q=80" },
    { id: 1208, name: "Modern Utility Shirt", category: "men", price: 88, rating: 4.4, badge: "new", featured: false, color: "Navy", material: "Tech cotton", fit: "Regular", description: "A two-pocket utility shirt with a refined, city-ready finish.", image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=1200&q=80" },

    { id: 1301, name: "Stormguard Trench", category: "outerwear", price: 284, rating: 4.7, badge: "best", featured: true, color: "Beige", material: "Waterproof blend", fit: "Regular", description: "A double-breasted trench with a weather-resistant shell and a detachable belt.", image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80" },
    { id: 1302, name: "Alpine Puffer Vest", category: "outerwear", price: 146, rating: 4.4, badge: "", featured: false, color: "Graphite", material: "Recycled nylon", fit: "Boxy", description: "A lightweight insulated vest for layered warmth on the cooler edges of the day.", image: "https://images.pexels.com/photos/11240853/pexels-photo-11240853.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1303, name: "Cropped Moto Jacket", category: "outerwear", price: 329, rating: 4.8, badge: "new", featured: true, color: "Black", material: "Lamb leather", fit: "Cropped", description: "Supple lamb leather with sharp zip detailing and a confident cropped shape.", image: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?auto=format&fit=crop&w=1200&q=80" },
    { id: 1304, name: "Heritage Long Coat", category: "outerwear", price: 358, rating: 4.7, badge: "best", featured: true, color: "Camel", material: "Wool blend", fit: "Relaxed", description: "A longline coat with structured lapels and a silhouette that never dates.", image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=1200&q=80" },
    { id: 1305, name: "Lightweight Rain Shell", category: "outerwear", price: 164, rating: 4.3, badge: "", featured: false, color: "Sage", material: "Ripstop shell", fit: "Regular", description: "A packable rain shell with taped seams and a quietly breathable lining.", image: "https://images.pexels.com/photos/12505397/pexels-photo-12505397.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1306, name: "Quilted Field Jacket", category: "outerwear", price: 188, rating: 4.5, badge: "new", featured: false, color: "Forest", material: "Quilted cotton", fit: "Regular", description: "A military-rooted field jacket with lightweight quilted construction.", image: "https://images.pexels.com/photos/18450001/pexels-photo-18450001.jpeg?auto=compress&cs=tinysrgb&w=1200" },

    { id: 1401, name: "Motion Studio Legging", category: "active", price: 79, rating: 4.6, badge: "best", featured: true, color: "Midnight", material: "Compression knit", fit: "Supportive", description: "A high-rise active legging with four-way stretch and confident, squat-proof fabric.", image: "https://images.pexels.com/photos/3621185/pexels-photo-3621185.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1402, name: "Flex Fit Sports Bra", category: "active", price: 54, rating: 4.5, badge: "", featured: false, color: "Coral", material: "Tech jersey", fit: "Compression", description: "A medium-impact bra with smooth bonded seams and reliable moisture control.", image: "https://images.pexels.com/photos/14541097/pexels-photo-14541097.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1403, name: "Aero Track Jacket", category: "active", price: 109, rating: 4.4, badge: "new", featured: false, color: "Blue Mist", material: "Performance weave", fit: "Slim", description: "A lightweight track layer built for warm-ups and the commute that follows.", image: "https://images.pexels.com/photos/27581032/pexels-photo-27581032.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1404, name: "Velocity Jogger", category: "active", price: 86, rating: 4.4, badge: "", featured: false, color: "Graphite", material: "Stretch fleece", fit: "Tapered", description: "An athletic jogger with secure zip pockets and a clean tapered ankle.", image: "https://images.pexels.com/photos/6740104/pexels-photo-6740104.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1405, name: "Crossfit Tee", category: "active", price: 42, rating: 4.2, badge: "", featured: false, color: "White", material: "Dry-touch cotton", fit: "Athletic", description: "A breathable training tee with an anti-odor finish and a true mobility cut.", image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1200&q=80" },
    { id: 1406, name: "Performance Tank", category: "active", price: 48, rating: 4.3, badge: "new", featured: false, color: "Clay", material: "Airlight jersey", fit: "Regular", description: "A low-weight training tank with laser-cut ventilation panels.", image: "https://images.pexels.com/photos/5928310/pexels-photo-5928310.jpeg?auto=compress&cs=tinysrgb&w=1200" },

    { id: 1501, name: "Monaco Leather Loafer", category: "shoes", price: 198, rating: 4.7, badge: "best", featured: true, color: "Espresso", material: "Full-grain leather", fit: "True to size", description: "A hand-finished loafer with a cushioned insole and a subtly stacked heel.", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=1200&q=80" },
    { id: 1502, name: "Cloudline Sneaker", category: "shoes", price: 142, rating: 4.6, badge: "new", featured: true, color: "White", material: "Leather & mesh", fit: "True to size", description: "A premium court sneaker with an ultra-light sole and a clean, minimal upper.", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80" },
    { id: 1503, name: "Chelsea Storm Boot", category: "shoes", price: 224, rating: 4.7, badge: "", featured: false, color: "Black", material: "Waxed leather", fit: "True to size", description: "An elastic-side Chelsea boot grounded by a durable lug outsole.", image: "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?auto=format&fit=crop&w=1200&q=80" },
    { id: 1504, name: "Canvas Day Runner", category: "shoes", price: 94, rating: 4.3, badge: "", featured: false, color: "Bone", material: "Organic canvas", fit: "True to size", description: "An easy low-profile canvas sneaker for daily city movement.", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=1200&q=80" },
    { id: 1505, name: "Luna Heeled Sandal", category: "shoes", price: 176, rating: 4.5, badge: "new", featured: false, color: "Champagne", material: "Metallic leather", fit: "True to size", description: "A minimal strap sandal with a stable block heel and a padded footbed.", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1200&q=80" },
    { id: 1506, name: "Alpine Trail Sneaker", category: "shoes", price: 168, rating: 4.6, badge: "best", featured: true, color: "Sand", material: "Trail mesh", fit: "True to size", description: "An all-terrain sneaker with a grippy traction sole and a reinforced toe guard.", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80" },
    { id: 1507, name: "Stride Knit Trainer", category: "shoes", price: 136, rating: 4.4, badge: "", featured: false, color: "Shadow", material: "Engineered knit", fit: "True to size", description: "A responsive trainer with a sock-like knit upper and a sculpted cushion base.", image: "https://images.unsplash.com/photo-1463100099107-aa0980c362e6?auto=format&fit=crop&w=1200&q=80" },

    { id: 1601, name: "Minimal Steel Watch", category: "accessories", price: 156, rating: 4.6, badge: "best", featured: true, color: "Silver", material: "Stainless steel", fit: "One size", description: "A slim-profile chronograph with a brushed steel bracelet and a quietly confident face.", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=1200&q=80" },
    { id: 1602, name: "Grain Leather Tote", category: "accessories", price: 218, rating: 4.7, badge: "new", featured: true, color: "Umber", material: "Full-grain leather", fit: "One size", description: "A structured tote with a magnetic close and a padded compartment for your tech.", image: "https://images.pexels.com/photos/29359829/pexels-photo-29359829.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1603, name: "Silk Pattern Scarf", category: "accessories", price: 68, rating: 4.4, badge: "", featured: false, color: "Multi", material: "Pure silk", fit: "One size", description: "A printed silk scarf that brings colour and texture to the most neutral looks.", image: "https://images.unsplash.com/photo-1677478863154-55ecce8c7536?auto=format&fit=crop&w=1200&q=80" },
    { id: 1604, name: "Crescent Crossbody Bag", category: "accessories", price: 164, rating: 4.5, badge: "", featured: false, color: "Black", material: "Pebbled leather", fit: "One size", description: "A compact crossbody with a curved silhouette and an adjustable strap.", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80" },
    { id: 1605, name: "Retro UV Sunglasses", category: "accessories", price: 122, rating: 4.3, badge: "", featured: false, color: "Tortoise", material: "Acetate", fit: "One size", description: "Vintage-leaning frames with UV400 lenses and feather-light temple arms.", image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1200&q=80" },
    { id: 1606, name: "Signature Buckle Belt", category: "accessories", price: 58, rating: 4.2, badge: "", featured: false, color: "Chestnut", material: "Leather", fit: "One size", description: "A daily leather belt with a brushed buckle and reinforced edge paint.", image: "https://images.pexels.com/photos/35322153/pexels-photo-35322153.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { id: 1607, name: "Stone Bead Bracelet", category: "accessories", price: 44, rating: 4.1, badge: "", featured: false, color: "Graphite", material: "Natural stone", fit: "One size", description: "A minimal stack piece strung with matte volcanic stones.", image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=1200&q=80" },
    { id: 1608, name: "Travel Weekender Bag", category: "accessories", price: 236, rating: 4.8, badge: "best", featured: true, color: "Olive", material: "Waxed canvas", fit: "One size", description: "A carry-on-ready weekender with a separate shoe compartment and a padded strap.", image: "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  ];

  const CATEGORY_LABELS = {
    women: "Women", men: "Men", outerwear: "Outerwear",
    active: "Active", shoes: "Shoes", accessories: "Accessories",
  };

  const IMAGE_FALLBACKS = {
    women: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80",
    men: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
    outerwear: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=80",
    active: "https://images.pexels.com/photos/6740104/pexels-photo-6740104.jpeg?auto=compress&cs=tinysrgb&w=1200",
    shoes: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    accessories: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1200&q=80",
    default: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
  };

  const COLOR_HEX = {
    Ivory: "#efe9dd", Sand: "#d9c7a8", Rosewood: "#9c5b5b", Taupe: "#b6a48d",
    Terracotta: "#c06a48", Black: "#1a1a1c", Slate: "#5a6470", Charcoal: "#3a3a3e",
    Indigo: "#33415c", White: "#f3f1ec", Stone: "#cbbfa8", Camel: "#c19a6b",
    Khaki: "#a08b5f", Olive: "#6b6a3a", Navy: "#28324a", Beige: "#d8c4a3",
    Graphite: "#42454a", Sage: "#9aa886", Forest: "#33493a", Midnight: "#1f2733",
    Coral: "#e3795f", "Blue Mist": "#9fb4c4", Clay: "#b07a5c", Espresso: "#43302b",
    Bone: "#e6dfce", Champagne: "#e4cfa3", Shadow: "#4b4d52", Silver: "#c7cbcf",
    Umber: "#6f4a32", Multi: "linear-gradient(135deg,#c06a48,#33415c,#6b6a3a)",
    Tortoise: "#8a5a32", Chestnut: "#7a4a2c",
  };

  const SIZE_SETS = {
    women: ["XS", "S", "M", "L", "XL"],
    men: ["S", "M", "L", "XL", "XXL"],
    outerwear: ["S", "M", "L", "XL"],
    active: ["XS", "S", "M", "L", "XL"],
    shoes: ["7", "8", "9", "10", "11", "12"],
    accessories: ["One Size"],
  };

  // Deterministic enrichment so the build is reproducible.
  const inventory = BASE_PRODUCTS.map((p, index) => {
    const onSale = p.id % 5 === 2;
    const compareAt = onSale ? Math.round((p.price / 0.78) / 5) * 5 + 4 : null;
    const reviews = ((p.id * 7) % 180) + 24;
    const sold = ((p.id * 13) % 900) + 120;
    return {
      ...p,
      colorHex: COLOR_HEX[p.color] || "#cbbfa8",
      image2: IMAGE_FALLBACKS[p.category] || IMAGE_FALLBACKS.default,
      sizes: SIZE_SETS[p.category] || ["One Size"],
      onSale,
      compareAt,
      reviews,
      sold,
      isNew: p.badge === "new",
      order: index,
    };
  });

  /* ------------------------------------------------------------------ *
   * 3. Config + helpers
   * ------------------------------------------------------------------ */
  const STORAGE = {
    cart: "moda_cart_v4",
    wishlist: "moda_wishlist_v4",
    recent: "moda_recent_v4",
  };
  const FREE_SHIP_THRESHOLD = 150;
  const STANDARD_SHIP = 9.95;
  const PROMO_CODES = { MODA10: 0.1, WELCOME15: 0.15, ATELIER20: 0.2 };
  const PAGE_SIZE = 12;
  const panelTransitionMs = 280;

  const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function loadJSON(key, fallback) {
    try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch { return fallback; }
  }
  function saveJSON(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* private mode */ } }

  function esc(value) {
    return String(value).replace(/[&<>"']/g, (t) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[t]));
  }
  const categoryLabel = (c) => CATEGORY_LABELS[c] || c;
  const getProduct = (id) => inventory.find((p) => p.id === Number(id)) || null;

  function starsMarkup(rating, count) {
    const rounded = Math.round(rating);
    let out = '<span class="stars" aria-hidden="true">';
    for (let i = 1; i <= 5; i++) out += `<span class="${i <= rounded ? "is-on" : ""}">${ICON.star}</span>`;
    out += "</span>";
    if (count != null) out += `<span class="stars__count">${rating.toFixed(1)} (${count})</span>`;
    return out;
  }
  function swatchMarkup(product) {
    const grad = product.colorHex.startsWith("linear") ? product.colorHex : null;
    return `<span class="swatch" title="${esc(product.color)}" style="background:${grad || product.colorHex}"></span>`;
  }

  /* ------------------------------------------------------------------ *
   * 4. State
   * ------------------------------------------------------------------ */
  const state = {
    page: document.body.dataset.page || "home",
    category: "all",
    query: "",
    sort: "featured",
    maxPrice: 400,
    sizes: new Set(),
    onSaleOnly: false,
    visible: PAGE_SIZE,
    cart: loadJSON(STORAGE.cart, []),
    wishlist: new Set(loadJSON(STORAGE.wishlist, [])),
    recent: loadJSON(STORAGE.recent, []),
    promo: null,
    activeProductId: null,
  };

  const els = {};
  let toastTimer = null;
  let revealObserver = null;
  const panelTimers = new WeakMap();
  let lastFocused = null;

  /* ------------------------------------------------------------------ *
   * 5. Panels (drawers / modals) with focus handling
   * ------------------------------------------------------------------ */
  function syncBodyLock() {
    const open = $$(".js-panel").some((p) => !p.hidden);
    document.body.classList.toggle("is-locked", open);
  }
  function trapFocus(panel) {
    const focusable = $$('a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])', panel)
      .filter((el) => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0], last = focusable[focusable.length - 1];
    panel._trap = (e) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    panel.addEventListener("keydown", panel._trap);
    window.requestAnimationFrame(() => { (panel.querySelector("[data-autofocus]") || first).focus(); });
  }
  function showPanel(panel, overlay, openClass = "is-open") {
    if (!panel || !overlay) return;
    const t = panelTimers.get(panel);
    if (t) { clearTimeout(t); panelTimers.delete(panel); }
    lastFocused = document.activeElement;
    panel.hidden = false; overlay.hidden = false;
    window.requestAnimationFrame(() => {
      panel.classList.add(openClass); overlay.classList.add("is-on"); syncBodyLock(); trapFocus(panel);
    });
  }
  function hidePanel(panel, overlay, openClass = "is-open") {
    if (!panel || !overlay || panel.hidden) return;
    panel.classList.remove(openClass); overlay.classList.remove("is-on");
    if (panel._trap) panel.removeEventListener("keydown", panel._trap);
    const timer = setTimeout(() => {
      panel.hidden = true; overlay.hidden = true; syncBodyLock();
      if (lastFocused && document.contains(lastFocused)) lastFocused.focus();
    }, panelTransitionMs);
    panelTimers.set(panel, timer);
  }
  const isOpen = (panel) => panel && !panel.hidden;

  function showToast(message, kind = "") {
    if (!els.toast) return;
    els.toast.className = `toast${kind ? " toast--" + kind : ""}`;
    els.toast.innerHTML = `${kind === "success" ? ICON.check : ""}<span>${esc(message)}</span>`;
    els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => els.toast.classList.remove("show"), 2600);
  }

  /* ------------------------------------------------------------------ *
   * 6. Cart + wishlist model
   * ------------------------------------------------------------------ */
  const cartCount = () => state.cart.reduce((s, i) => s + i.qty, 0);
  const cartSubtotal = () => state.cart.reduce((s, i) => {
    const p = getProduct(i.id); return p ? s + p.price * i.qty : s;
  }, 0);
  function cartTotals() {
    const subtotal = cartSubtotal();
    const discount = state.promo ? subtotal * (PROMO_CODES[state.promo] || 0) : 0;
    const afterDiscount = subtotal - discount;
    const shipping = subtotal === 0 || afterDiscount >= FREE_SHIP_THRESHOLD ? 0 : STANDARD_SHIP;
    return { subtotal, discount, shipping, total: afterDiscount + shipping };
  }

  function persistCart() { saveJSON(STORAGE.cart, state.cart); syncBadges(); renderCart(); }
  function persistWishlist() {
    saveJSON(STORAGE.wishlist, Array.from(state.wishlist));
    syncBadges(); renderWishlist(); reflectWishlistButtons();
  }
  function syncBadges() {
    const c = cartCount();
    if (els.cartBadge) { els.cartBadge.textContent = String(c); els.cartBadge.classList.toggle("is-on", c > 0); }
    if (els.wishBadge) { els.wishBadge.textContent = String(state.wishlist.size); els.wishBadge.classList.toggle("is-on", state.wishlist.size > 0); }
  }

  function addToCart(productId, qty = 1, size = null) {
    const p = getProduct(productId);
    if (!p) return;
    const key = size || p.sizes[0];
    const safeQty = Math.max(1, Number(qty) || 1);
    const line = state.cart.find((i) => i.id === p.id && i.size === key);
    if (line) line.qty += safeQty;
    else state.cart.push({ id: p.id, qty: safeQty, size: key });
    persistCart();
    showToast(`${p.name} added to bag`, "success");
    pulseBadge(els.cartBtn);
  }
  function changeQty(productId, size, delta) {
    const line = state.cart.find((i) => i.id === Number(productId) && i.size === size);
    if (!line) return;
    line.qty += Number(delta);
    if (line.qty <= 0) state.cart = state.cart.filter((i) => i !== line);
    persistCart();
  }
  function removeFromCart(productId, size) {
    state.cart = state.cart.filter((i) => !(i.id === Number(productId) && i.size === size));
    persistCart();
  }
  function toggleWishlist(productId) {
    const id = Number(productId);
    const p = getProduct(id);
    if (!p) return;
    if (state.wishlist.has(id)) { state.wishlist.delete(id); showToast(`${p.name} removed from wishlist`); }
    else { state.wishlist.add(id); showToast(`${p.name} saved to wishlist`, "success"); }
    persistWishlist();
  }
  function pulseBadge(btn) {
    if (!btn || prefersReducedMotion) return;
    btn.classList.remove("pulse"); void btn.offsetWidth; btn.classList.add("pulse");
  }
  function pushRecent(id) {
    state.recent = [id, ...state.recent.filter((x) => x !== id)].slice(0, 8);
    saveJSON(STORAGE.recent, state.recent);
  }

  /* ------------------------------------------------------------------ *
   * 7. Templates
   * ------------------------------------------------------------------ */
  function priceMarkup(p) {
    if (p.onSale && p.compareAt) {
      return `<span class="price"><span class="price__now price--sale">${money.format(p.price)}</span>
        <span class="price__was">${money.format(p.compareAt)}</span></span>`;
    }
    return `<span class="price"><span class="price__now">${money.format(p.price)}</span></span>`;
  }

  function cardTemplate(p, i = 0) {
    const saved = state.wishlist.has(p.id);
    const badge = p.onSale ? `<span class="badge badge--sale">Sale</span>`
      : p.badge === "new" ? `<span class="badge badge--new">New</span>`
      : p.badge === "best" ? `<span class="badge badge--best">Bestseller</span>` : "";
    return `
      <article class="card" data-product-id="${p.id}" data-reveal style="--i:${i}">
        <div class="card__media">
          <a class="card__link" href="product.html?id=${p.id}" aria-label="View ${esc(p.name)}">
            <img class="card__img card__img--front" src="${p.image}" alt="${esc(p.name)}" data-category="${p.category}" loading="lazy" decoding="async" />
            <img class="card__img card__img--back" src="${p.image2}" alt="" data-category="${p.category}" loading="lazy" decoding="async" aria-hidden="true" />
          </a>
          <div class="card__badges">${badge}</div>
          <button class="card__wish ${saved ? "is-active" : ""}" type="button" data-action="wish" aria-pressed="${saved}" aria-label="${saved ? "Remove from" : "Add to"} wishlist">
            ${saved ? ICON.heartFill : ICON.heart}
          </button>
          <button class="card__quick" type="button" data-action="quick">Quick add</button>
        </div>
        <div class="card__body">
          <div class="card__top">
            <span class="card__cat">${esc(categoryLabel(p.category))}</span>
            <span class="card__rate">${ICON.star}${p.rating.toFixed(1)}</span>
          </div>
          <h3 class="card__name"><a href="product.html?id=${p.id}">${esc(p.name)}</a></h3>
          <div class="card__foot">
            ${priceMarkup(p)}
            <span class="card__swatch">${swatchMarkup(p)}</span>
          </div>
        </div>
      </article>`;
  }

  function quickViewTemplate(p) {
    const saved = state.wishlist.has(p.id);
    return `
      <div class="qv">
        <div class="qv__media">
          <img src="${p.image}" alt="${esc(p.name)}" data-category="${p.category}" loading="eager" decoding="async" />
          ${p.onSale ? `<span class="badge badge--sale qv__badge">Sale</span>` : ""}
        </div>
        <div class="qv__info">
          <p class="eyebrow">${esc(categoryLabel(p.category))}</p>
          <h2 class="qv__name">${esc(p.name)}</h2>
          <div class="rating-row">${starsMarkup(p.rating, p.reviews)}</div>
          <div class="qv__price">${priceMarkup(p)}</div>
          <p class="qv__desc">${esc(p.description)}</p>
          <div class="opt">
            <div class="opt__label"><span>Colour</span><strong>${esc(p.color)}</strong></div>
            <div class="opt__swatches"><span class="swatch swatch--lg is-active" style="background:${p.colorHex.startsWith("linear") ? p.colorHex : p.colorHex}"></span></div>
          </div>
          <div class="opt">
            <div class="opt__label"><span>Size</span><a class="opt__guide" href="#">Size guide</a></div>
            <div class="size-row" id="qvSizes" role="radiogroup" aria-label="Select size">
              ${p.sizes.map((s, idx) => `<button type="button" class="size-pill ${idx === 0 ? "is-active" : ""}" role="radio" aria-checked="${idx === 0}" data-size="${esc(s)}">${esc(s)}</button>`).join("")}
            </div>
          </div>
          <div class="qv__actions">
            <div class="qty" aria-label="Quantity">
              <button type="button" id="qvDec" aria-label="Decrease">${ICON.minus}</button>
              <span id="qvQty">1</span>
              <button type="button" id="qvInc" aria-label="Increase">${ICON.plus}</button>
            </div>
            <button class="btn btn--primary btn--block" type="button" id="qvAdd">${ICON.bag}<span>Add to bag</span></button>
          </div>
          <button class="btn btn--ghost btn--block" type="button" id="qvWish" data-product-id="${p.id}">${saved ? ICON.heartFill : ICON.heart}<span>${saved ? "Saved to wishlist" : "Save to wishlist"}</span></button>
          <a class="qv__full" href="product.html?id=${p.id}">View full details ${ICON.arrowRight}</a>
        </div>
      </div>`;
  }

  /* ------------------------------------------------------------------ *
   * 8. Catalogue rendering + filtering
   * ------------------------------------------------------------------ */
  function filteredInventory() {
    let out = inventory.slice();
    if (state.category !== "all") out = out.filter((p) => p.category === state.category);
    if (state.query) {
      const q = state.query;
      out = out.filter((p) => `${p.name} ${p.category} ${p.material} ${p.color}`.toLowerCase().includes(q));
    }
    out = out.filter((p) => p.price <= state.maxPrice);
    if (state.sizes.size) out = out.filter((p) => p.sizes.some((s) => state.sizes.has(s)));
    if (state.onSaleOnly) out = out.filter((p) => p.onSale);

    switch (state.sort) {
      case "newest": out.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.rating - a.rating); break;
      case "rating": out.sort((a, b) => b.rating - a.rating || a.price - b.price); break;
      case "price-asc": out.sort((a, b) => a.price - b.price); break;
      case "price-desc": out.sort((a, b) => b.price - a.price); break;
      default: out.sort((a, b) => Number(b.featured) - Number(a.featured) || b.rating - a.rating);
    }
    return out;
  }

  function renderCatalog(resetVisible = true) {
    if (!els.catalogGrid) return;
    if (resetVisible) state.visible = PAGE_SIZE;
    const all = filteredInventory();
    const shown = all.slice(0, state.visible);

    if (els.resultCount) els.resultCount.textContent = `${all.length} item${all.length === 1 ? "" : "s"}`;

    if (!all.length) {
      els.catalogGrid.innerHTML = `<div class="empty empty--grid">
        <p>No pieces match your filters.</p>
        <button class="btn btn--ghost" type="button" id="clearFilters">Clear filters</button></div>`;
      if (els.loadMoreWrap) els.loadMoreWrap.hidden = true;
      return;
    }
    els.catalogGrid.innerHTML = shown.map((p, i) => cardTemplate(p, i % PAGE_SIZE)).join("");
    registerReveal(els.catalogGrid);
    if (els.loadMoreWrap) {
      els.loadMoreWrap.hidden = state.visible >= all.length;
      if (els.loadMoreCount) els.loadMoreCount.textContent = `Showing ${shown.length} of ${all.length}`;
    }
  }

  function renderRail(target, products) {
    if (!target) return;
    target.innerHTML = products.map((p, i) => cardTemplate(p, i % 8)).join("");
    registerReveal(target);
  }

  function renderArrivals() {
    const arrivals = inventory.filter((p) => p.isNew).sort((a, b) => b.rating - a.rating);
    renderRail(els.arrivalRail, arrivals.length ? arrivals : inventory.slice(0, 8));
  }
  function renderTrending() {
    const trending = inventory.filter((p) => p.badge === "best").sort((a, b) => b.sold - a.sold).slice(0, 8);
    renderRail(els.trendingGrid, trending);
  }

  function renderRecentlyViewed() {
    if (!els.recentSection || !els.recentGrid) return;
    const items = state.recent.map(getProduct).filter(Boolean).filter((p) => p.id !== state.activeProductId).slice(0, 5);
    if (!items.length) { els.recentSection.hidden = true; return; }
    els.recentSection.hidden = false;
    els.recentGrid.innerHTML = items.map((p, i) => cardTemplate(p, i)).join("");
    registerReveal(els.recentGrid);
  }

  function setCategory(cat) {
    state.category = cat;
    if (els.chips) $$(".chip", els.chips).forEach((c) => {
      const on = c.dataset.cat === cat;
      c.classList.toggle("is-active", on);
      c.setAttribute("aria-pressed", String(on));
    });
    renderCatalog();
  }

  /* ------------------------------------------------------------------ *
   * 9. Cart + wishlist drawers
   * ------------------------------------------------------------------ */
  function renderCart() {
    if (!els.cartItems) return;
    const { subtotal, discount, shipping, total } = cartTotals();

    if (!state.cart.length) {
      els.cartItems.innerHTML = `<div class="empty">
        <div class="empty__icon">${ICON.bag}</div>
        <p>Your bag is empty.</p>
        <button class="btn btn--primary" type="button" data-close-cart>Start shopping</button></div>`;
      if (els.cartFoot) els.cartFoot.hidden = true;
      if (els.shipBar) els.shipBar.hidden = true;
      return;
    }
    if (els.cartFoot) els.cartFoot.hidden = false;

    els.cartItems.innerHTML = state.cart.map((line) => {
      const p = getProduct(line.id);
      if (!p) return "";
      return `
        <article class="line">
          <a class="line__media" href="product.html?id=${p.id}">
            <img src="${p.image}" alt="${esc(p.name)}" data-category="${p.category}" loading="lazy" />
          </a>
          <div class="line__info">
            <div class="line__head">
              <h4>${esc(p.name)}</h4>
              <button class="line__remove" type="button" data-remove="${p.id}" data-size="${esc(line.size)}" aria-label="Remove ${esc(p.name)}">${ICON.close}</button>
            </div>
            <p class="line__meta">${esc(categoryLabel(p.category))} · Size ${esc(line.size)}</p>
            <div class="line__bottom">
              <div class="qty qty--sm">
                <button type="button" data-delta="-1" data-id="${p.id}" data-size="${esc(line.size)}" aria-label="Decrease">${ICON.minus}</button>
                <span>${line.qty}</span>
                <button type="button" data-delta="1" data-id="${p.id}" data-size="${esc(line.size)}" aria-label="Increase">${ICON.plus}</button>
              </div>
              <strong class="line__price">${money.format(p.price * line.qty)}</strong>
            </div>
          </div>
        </article>`;
    }).join("");

    // Free shipping progress
    if (els.shipBar && els.shipFill && els.shipMsg) {
      els.shipBar.hidden = false;
      const remaining = Math.max(0, FREE_SHIP_THRESHOLD - (subtotal - discount));
      const pct = Math.min(100, ((subtotal - discount) / FREE_SHIP_THRESHOLD) * 100);
      els.shipFill.style.width = `${pct}%`;
      els.shipMsg.innerHTML = remaining <= 0
        ? `${ICON.check} You've unlocked <strong>free shipping</strong>`
        : `Add <strong>${money.format(remaining)}</strong> for free shipping`;
    }

    if (els.cartSubtotal) els.cartSubtotal.textContent = money.format(subtotal);
    if (els.cartDiscountRow) els.cartDiscountRow.hidden = discount <= 0;
    if (els.cartDiscount) els.cartDiscount.textContent = `– ${money.format(discount)}`;
    if (els.cartShipping) els.cartShipping.textContent = shipping === 0 ? "Free" : money.format(shipping);
    if (els.cartTotal) els.cartTotal.textContent = money.format(total);
  }

  function renderWishlist() {
    if (!els.wishItems || !els.wishCount) return;
    const items = Array.from(state.wishlist).map(getProduct).filter(Boolean);
    els.wishCount.textContent = String(items.length);
    if (els.wishFoot) els.wishFoot.hidden = !items.length;
    if (!items.length) {
      els.wishItems.innerHTML = `<div class="empty">
        <div class="empty__icon">${ICON.heart}</div>
        <p>Your wishlist is empty.</p>
        <button class="btn btn--primary" type="button" data-close-wish>Find something you love</button></div>`;
      return;
    }
    els.wishItems.innerHTML = items.map((p) => `
      <article class="line">
        <a class="line__media" href="product.html?id=${p.id}">
          <img src="${p.image}" alt="${esc(p.name)}" data-category="${p.category}" loading="lazy" />
        </a>
        <div class="line__info">
          <div class="line__head">
            <h4>${esc(p.name)}</h4>
            <button class="line__remove" type="button" data-wish-remove="${p.id}" aria-label="Remove">${ICON.close}</button>
          </div>
          <p class="line__meta">${esc(categoryLabel(p.category))}</p>
          <div class="line__bottom">
            <strong class="line__price">${money.format(p.price)}</strong>
            <button class="btn btn--ghost btn--xs" type="button" data-wish-add="${p.id}">Add to bag</button>
          </div>
        </div>
      </article>`).join("");
  }

  function reflectWishlistButtons() {
    // Card hearts (icon only)
    $$(".card__wish").forEach((btn) => {
      const card = btn.closest("[data-product-id]");
      if (!card) return;
      const saved = state.wishlist.has(Number(card.dataset.productId));
      btn.classList.toggle("is-active", saved);
      btn.setAttribute("aria-pressed", String(saved));
      btn.innerHTML = saved ? ICON.heartFill : ICON.heart;
    });
    // Quick view button (icon + label)
    const qv = $("#qvWish");
    if (qv) {
      const saved = state.wishlist.has(Number(qv.dataset.productId));
      qv.classList.toggle("is-active", saved);
      qv.innerHTML = `${saved ? ICON.heartFill : ICON.heart}<span>${saved ? "Saved to wishlist" : "Save to wishlist"}</span>`;
    }
    // Product detail button (icon only)
    const dw = $("#detailWish");
    if (dw) {
      const saved = state.wishlist.has(Number(dw.dataset.productId));
      dw.classList.toggle("is-active", saved);
      dw.innerHTML = saved ? ICON.heartFill : ICON.heart;
    }
  }

  /* ------------------------------------------------------------------ *
   * 10. Quick view
   * ------------------------------------------------------------------ */
  function openQuickView(productId) {
    const p = getProduct(productId);
    if (!p || !els.quickModal || !els.modalOverlay) return;
    els.quickBody.innerHTML = quickViewTemplate(p);
    showPanel(els.quickModal, els.modalOverlay);

    let qty = 1, size = p.sizes[0];
    const qtyEl = $("#qvQty", els.quickBody);
    $("#qvDec", els.quickBody)?.addEventListener("click", () => { qty = Math.max(1, qty - 1); qtyEl.textContent = qty; });
    $("#qvInc", els.quickBody)?.addEventListener("click", () => { qty = Math.min(20, qty + 1); qtyEl.textContent = qty; });
    $("#qvSizes", els.quickBody)?.addEventListener("click", (e) => {
      const pill = e.target.closest(".size-pill"); if (!pill) return;
      size = pill.dataset.size;
      $$(".size-pill", els.quickBody).forEach((b) => { b.classList.toggle("is-active", b === pill); b.setAttribute("aria-checked", String(b === pill)); });
    });
    $("#qvAdd", els.quickBody)?.addEventListener("click", () => { addToCart(p.id, qty, size); });
    $("#qvWish", els.quickBody)?.addEventListener("click", () => { toggleWishlist(p.id); reflectWishlistButtons(); });
  }

  /* ------------------------------------------------------------------ *
   * 11. Checkout
   * ------------------------------------------------------------------ */
  function openCheckout() {
    if (!state.cart.length) { showToast("Your bag is empty."); return; }
    if (!els.checkoutModal || !els.checkoutOverlay) return;
    renderCheckout();
    closeCart();
    showPanel(els.checkoutModal, els.checkoutOverlay);
  }
  function renderCheckout() {
    const { subtotal, discount, shipping, total } = cartTotals();
    els.checkoutBody.innerHTML = `
      <div class="checkout">
        <form class="checkout__form" id="checkoutForm" novalidate>
          <div class="checkout__head">
            <p class="eyebrow">Secure checkout</p>
            <h2>Almost yours</h2>
          </div>
          <fieldset class="field-set">
            <legend>Contact</legend>
            <label class="field"><span>Email</span><input type="email" name="email" required placeholder="you@example.com" data-autofocus /></label>
          </fieldset>
          <fieldset class="field-set">
            <legend>Shipping address</legend>
            <div class="field-grid">
              <label class="field"><span>First name</span><input name="first" required placeholder="Alex" /></label>
              <label class="field"><span>Last name</span><input name="last" required placeholder="Mercer" /></label>
            </div>
            <label class="field"><span>Address</span><input name="address" required placeholder="123 Atelier Lane" /></label>
            <div class="field-grid field-grid--3">
              <label class="field"><span>City</span><input name="city" required placeholder="New York" /></label>
              <label class="field"><span>State</span><input name="state" required placeholder="NY" /></label>
              <label class="field"><span>ZIP</span><input name="zip" required inputmode="numeric" placeholder="10001" /></label>
            </div>
          </fieldset>
          <fieldset class="field-set">
            <legend>Payment</legend>
            <label class="field"><span>Card number</span><input name="card" required inputmode="numeric" placeholder="4242 4242 4242 4242" /></label>
            <div class="field-grid">
              <label class="field"><span>Expiry</span><input name="exp" required placeholder="MM / YY" /></label>
              <label class="field"><span>CVC</span><input name="cvc" required inputmode="numeric" placeholder="123" /></label>
            </div>
            <p class="checkout__note">${ICON.shield} This is a demo store — no card is charged and no data is sent.</p>
          </fieldset>
          <button class="btn btn--primary btn--block btn--lg" type="submit">Pay ${money.format(total)}</button>
        </form>
        <aside class="checkout__summary">
          <h3>Order summary</h3>
          <div class="checkout__items">
            ${state.cart.map((line) => {
              const p = getProduct(line.id); if (!p) return "";
              return `<div class="sum-line">
                <span class="sum-line__media"><img src="${p.image}" alt="${esc(p.name)}" data-category="${p.category}"/><span class="sum-line__qty">${line.qty}</span></span>
                <span class="sum-line__name">${esc(p.name)}<small>Size ${esc(line.size)}</small></span>
                <span class="sum-line__price">${money.format(p.price * line.qty)}</span>
              </div>`;
            }).join("")}
          </div>
          <div class="checkout__totals">
            <div class="trow"><span>Subtotal</span><span>${money.format(subtotal)}</span></div>
            ${discount > 0 ? `<div class="trow trow--save"><span>Discount</span><span>– ${money.format(discount)}</span></div>` : ""}
            <div class="trow"><span>Shipping</span><span>${shipping === 0 ? "Free" : money.format(shipping)}</span></div>
            <div class="trow trow--total"><span>Total</span><span>${money.format(total)}</span></div>
          </div>
        </aside>
      </div>`;

    $("#checkoutForm", els.checkoutBody)?.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      if (!form.checkValidity()) { form.reportValidity(); return; }
      showOrderConfirmation();
    });
  }
  function showOrderConfirmation() {
    const orderNo = "MA-" + (100000 + (cartCount() * 137 + cartSubtotal() | 0) % 899999);
    state.cart = []; state.promo = null;
    persistCart();
    els.checkoutBody.innerHTML = `
      <div class="confirm">
        <div class="confirm__icon">${ICON.check}</div>
        <h2>Thank you for your order</h2>
        <p>A confirmation has been sent to your inbox. Your pieces are being prepared with care.</p>
        <p class="confirm__order">Order <strong>${orderNo}</strong></p>
        <button class="btn btn--primary" type="button" data-close-checkout>Continue shopping</button>
      </div>`;
    showToast("Order placed — thank you!", "success");
  }
  function closeCheckout() { hidePanel(els.checkoutModal, els.checkoutOverlay); }

  /* ------------------------------------------------------------------ *
   * 12. Product detail page
   * ------------------------------------------------------------------ */
  function detailTemplate(p) {
    const saved = state.wishlist.has(p.id);
    const gallery = [p.image, p.image2, IMAGE_FALLBACKS[p.category] || IMAGE_FALLBACKS.default];
    return `
      <div class="pd" data-reveal>
        <div class="pd__gallery">
          <div class="pd__stage">
            <img id="pdMainImg" src="${p.image}" alt="${esc(p.name)}" data-category="${p.category}" loading="eager" />
            ${p.onSale ? `<span class="badge badge--sale pd__badge">Sale</span>` : ""}
          </div>
          <div class="pd__thumbs" id="pdThumbs">
            ${gallery.map((src, i) => `<button type="button" class="pd__thumb ${i === 0 ? "is-active" : ""}" data-src="${src}" aria-label="View image ${i + 1}"><img src="${src}" alt="" data-category="${p.category}" loading="lazy"/></button>`).join("")}
          </div>
        </div>
        <div class="pd__info">
          <p class="eyebrow">${esc(categoryLabel(p.category))}</p>
          <h1 class="pd__name">${esc(p.name)}</h1>
          <div class="rating-row">${starsMarkup(p.rating, p.reviews)}<span class="pd__sold">${p.sold}+ sold</span></div>
          <div class="pd__price">${priceMarkup(p)}${p.onSale ? `<span class="pd__off">Save ${Math.round((1 - p.price / p.compareAt) * 100)}%</span>` : ""}</div>
          <p class="pd__desc">${esc(p.description)}</p>

          <div class="opt">
            <div class="opt__label"><span>Colour</span><strong>${esc(p.color)}</strong></div>
            <div class="opt__swatches"><span class="swatch swatch--lg is-active" style="background:${p.colorHex}"></span></div>
          </div>
          <div class="opt">
            <div class="opt__label"><span>Size</span><a class="opt__guide" href="#">Size guide</a></div>
            <div class="size-row" id="pdSizes" role="radiogroup" aria-label="Select size">
              ${p.sizes.map((s, i) => `<button type="button" class="size-pill ${i === 0 ? "is-active" : ""}" role="radio" aria-checked="${i === 0}" data-size="${esc(s)}">${esc(s)}</button>`).join("")}
            </div>
          </div>

          <div class="pd__actions">
            <div class="qty" aria-label="Quantity">
              <button type="button" id="pdDec" aria-label="Decrease">${ICON.minus}</button>
              <span id="pdQty">1</span>
              <button type="button" id="pdInc" aria-label="Increase">${ICON.plus}</button>
            </div>
            <button class="btn btn--primary btn--block btn--lg" type="button" id="pdAdd">${ICON.bag}<span>Add to bag</span></button>
            <button class="btn btn--icon ${saved ? "is-active" : ""}" type="button" id="detailWish" data-product-id="${p.id}" aria-label="Save to wishlist">${saved ? ICON.heartFill : ICON.heart}</button>
          </div>

          <ul class="pd__assurance">
            <li>${ICON.truck}<span>Free shipping over ${money.format(FREE_SHIP_THRESHOLD)}</span></li>
            <li>${ICON.refresh}<span>30-day easy returns</span></li>
            <li>${ICON.shield}<span>2-year quality guarantee</span></li>
          </ul>

          <div class="acc" id="pdAccordion">
            <details class="acc__item" open>
              <summary>Details &amp; materials ${ICON.plus}</summary>
              <div class="acc__body">
                <p>${esc(p.description)}</p>
                <ul class="spec-list">
                  <li><span>Material</span><strong>${esc(p.material)}</strong></li>
                  <li><span>Fit</span><strong>${esc(p.fit)}</strong></li>
                  <li><span>Colour</span><strong>${esc(p.color)}</strong></li>
                  <li><span>Category</span><strong>${esc(categoryLabel(p.category))}</strong></li>
                </ul>
              </div>
            </details>
            <details class="acc__item">
              <summary>Shipping &amp; returns ${ICON.plus}</summary>
              <div class="acc__body"><p>Complimentary carbon-neutral shipping on orders over ${money.format(FREE_SHIP_THRESHOLD)}, dispatched within 48 hours. Returns are free within 30 days — pieces should be unworn with tags attached.</p></div>
            </details>
            <details class="acc__item">
              <summary>Care guide ${ICON.plus}</summary>
              <div class="acc__body"><p>Gentle cold wash or professional clean to preserve fibre and finish. Reshape while damp and dry flat away from direct heat.</p></div>
            </details>
          </div>
        </div>
      </div>`;
  }

  function renderReviews(p) {
    if (!els.reviewWrap) return;
    const names = ["Camille R.", "Jordan T.", "Priya N.", "Marcus L.", "Elena V."];
    const notes = [
      "Exceeded my expectations — the fabric feels genuinely luxurious and the fit is spot on.",
      "Beautiful piece, true to size, and it arrived faster than I expected. Will buy again.",
      "The detailing is impeccable. Photos don't fully capture how elevated it looks in person.",
      "Comfortable, well-made, and endlessly wearable. Exactly what I was hoping for.",
    ];
    const count = 4;
    els.reviewWrap.innerHTML = `
      <div class="reviews__summary">
        <div class="reviews__score">
          <strong>${p.rating.toFixed(1)}</strong>
          <div>${starsMarkup(p.rating)}<span>${p.reviews} reviews</span></div>
        </div>
        <button class="btn btn--ghost" type="button">Write a review</button>
      </div>
      <div class="reviews__list">
        ${Array.from({ length: count }).map((_, i) => `
          <article class="review">
            <div class="review__top">
              <span class="review__avatar">${names[i].charAt(0)}</span>
              <div>
                <strong>${names[i]}</strong>
                <span class="review__meta">${starsMarkup(5 - (i % 2 ? 1 : 0))} · Verified buyer</span>
              </div>
            </div>
            <p>${notes[i % notes.length]}</p>
          </article>`).join("")}
      </div>`;
  }

  function renderRelated(p) {
    if (!els.relatedGrid) return;
    const same = inventory.filter((x) => x.category === p.category && x.id !== p.id);
    const others = inventory.filter((x) => x.category !== p.category && x.id !== p.id);
    const merged = [...same, ...others].slice(0, 4);
    renderRail(els.relatedGrid, merged);
  }

  function renderProductPage() {
    if (!els.productDetail) return;
    const id = Number(new URLSearchParams(location.search).get("id"));
    const p = getProduct(id) || inventory[0];
    state.activeProductId = p.id;
    pushRecent(p.id);
    document.title = `${p.name} — MODA Atelier`;
    if (els.crumbProduct) els.crumbProduct.textContent = p.name;

    els.productDetail.innerHTML = detailTemplate(p);
    registerReveal(els.productDetail);
    renderReviews(p);
    renderRelated(p);
    renderRecentlyViewed();

    let qty = 1, size = p.sizes[0];
    const qtyEl = $("#pdQty");
    const mainImg = $("#pdMainImg");
    $("#pdDec")?.addEventListener("click", () => { qty = Math.max(1, qty - 1); qtyEl.textContent = qty; });
    $("#pdInc")?.addEventListener("click", () => { qty = Math.min(20, qty + 1); qtyEl.textContent = qty; });
    $("#pdSizes")?.addEventListener("click", (e) => {
      const pill = e.target.closest(".size-pill"); if (!pill) return;
      size = pill.dataset.size;
      $$("#pdSizes .size-pill").forEach((b) => { b.classList.toggle("is-active", b === pill); b.setAttribute("aria-checked", String(b === pill)); });
    });
    $("#pdThumbs")?.addEventListener("click", (e) => {
      const t = e.target.closest(".pd__thumb"); if (!t || !mainImg) return;
      mainImg.src = t.dataset.src;
      $$("#pdThumbs .pd__thumb").forEach((b) => b.classList.toggle("is-active", b === t));
    });
    $("#pdAdd")?.addEventListener("click", () => addToCart(p.id, qty, size));
    $("#detailWish")?.addEventListener("click", () => { toggleWishlist(p.id); reflectWishlistButtons(); });
    // Accordion icon swap (+ when closed, – when open)
    const setAccIcon = (d) => {
      const summary = d.querySelector("summary");
      const icon = summary && summary.lastElementChild;
      if (icon && icon.tagName.toLowerCase() === "svg") icon.outerHTML = d.open ? ICON.minus : ICON.plus;
    };
    $$("#pdAccordion .acc__item").forEach((d) => {
      setAccIcon(d);
      d.addEventListener("toggle", () => setAccIcon(d));
    });
  }

  /* ------------------------------------------------------------------ *
   * 13. Drawer open/close shortcuts
   * ------------------------------------------------------------------ */
  const openCart = () => { closeWish(); closeMobileNav(); renderCart(); showPanel(els.cartDrawer, els.cartOverlay); };
  const closeCart = () => hidePanel(els.cartDrawer, els.cartOverlay);
  const openWish = () => { closeCart(); closeMobileNav(); renderWishlist(); showPanel(els.wishDrawer, els.wishOverlay); };
  const closeWish = () => hidePanel(els.wishDrawer, els.wishOverlay);
  const openMobileNav = () => { closeCart(); closeWish(); showPanel(els.mobileNav, els.mobileNavOverlay); els.mobileNavToggle?.setAttribute("aria-expanded", "true"); };
  const closeMobileNav = () => { hidePanel(els.mobileNav, els.mobileNavOverlay); els.mobileNavToggle?.setAttribute("aria-expanded", "false"); };
  const openSearch = () => { showPanel(els.searchModal, els.searchOverlay); };
  const closeSearch = () => hidePanel(els.searchModal, els.searchOverlay);
  const closeQuick = () => hidePanel(els.quickModal, els.modalOverlay);

  /* ------------------------------------------------------------------ *
   * 14. Search overlay
   * ------------------------------------------------------------------ */
  function runSearch(q) {
    if (!els.searchResults) return;
    const query = q.trim().toLowerCase();
    if (!query) {
      els.searchResults.innerHTML = `<p class="search__hint">Popular:
        ${["Dresses", "Blazer", "Sneaker", "Tote", "Cashmere"].map((t) => `<button type="button" class="search__sug" data-sug="${t}">${t}</button>`).join("")}</p>`;
      return;
    }
    const matches = inventory.filter((p) =>
      `${p.name} ${p.category} ${p.material} ${p.color}`.toLowerCase().includes(query)).slice(0, 6);
    if (!matches.length) { els.searchResults.innerHTML = `<p class="search__hint">No results for "${esc(q)}".</p>`; return; }
    els.searchResults.innerHTML = `<div class="search__list">${matches.map((p) => `
      <a class="search__item" href="product.html?id=${p.id}">
        <img src="${p.image}" alt="" data-category="${p.category}" loading="lazy"/>
        <span><strong>${esc(p.name)}</strong><small>${esc(categoryLabel(p.category))}</small></span>
        <span class="search__price">${money.format(p.price)}</span>
      </a>`).join("")}</div>`;
  }

  /* ------------------------------------------------------------------ *
   * 15. Events
   * ------------------------------------------------------------------ */
  function bindGlobal() {
    // Card actions (delegated)
    document.addEventListener("click", (e) => {
      const actionBtn = e.target.closest("[data-action]");
      if (actionBtn) {
        const card = actionBtn.closest("[data-product-id]");
        if (card) {
          e.preventDefault();
          const id = Number(card.dataset.productId);
          const a = actionBtn.dataset.action;
          if (a === "quick") openQuickView(id);
          else if (a === "add") addToCart(id, 1);
          else if (a === "wish") { toggleWishlist(id); }
        }
      }
      if (e.target.closest("[data-close-cart]")) closeCart();
      if (e.target.closest("[data-close-wish]")) closeWish();
      if (e.target.closest("[data-close-checkout]")) closeCheckout();
      if (e.target.closest("#clearFilters")) resetFilters();
    });

    // Cart drawer item controls
    els.cartItems?.addEventListener("click", (e) => {
      const d = e.target.closest("[data-delta]");
      if (d) { changeQty(d.dataset.id, d.dataset.size, d.dataset.delta); return; }
      const r = e.target.closest("[data-remove]");
      if (r) removeFromCart(r.dataset.remove, r.dataset.size);
    });

    // Wishlist drawer controls
    els.wishItems?.addEventListener("click", (e) => {
      const add = e.target.closest("[data-wish-add]");
      if (add) { addToCart(Number(add.dataset.wishAdd), 1); return; }
      const rem = e.target.closest("[data-wish-remove]");
      if (rem) toggleWishlist(Number(rem.dataset.wishRemove));
    });

    // Header buttons
    els.cartBtn?.addEventListener("click", () => (isOpen(els.cartDrawer) ? closeCart() : openCart()));
    els.wishBtn?.addEventListener("click", () => (isOpen(els.wishDrawer) ? closeWish() : openWish()));
    els.searchBtn?.addEventListener("click", () => (isOpen(els.searchModal) ? closeSearch() : openSearch()));
    els.mobileNavToggle?.addEventListener("click", () => (isOpen(els.mobileNav) ? closeMobileNav() : openMobileNav()));

    els.closeCartBtn?.addEventListener("click", closeCart);
    els.cartOverlay?.addEventListener("click", closeCart);
    els.closeWishBtn?.addEventListener("click", closeWish);
    els.wishOverlay?.addEventListener("click", closeWish);
    els.closeMobileNavBtn?.addEventListener("click", closeMobileNav);
    els.mobileNavOverlay?.addEventListener("click", closeMobileNav);
    els.closeQuickBtn?.addEventListener("click", closeQuick);
    els.modalOverlay?.addEventListener("click", closeQuick);
    els.closeSearchBtn?.addEventListener("click", closeSearch);
    els.searchOverlay?.addEventListener("click", closeSearch);
    els.closeCheckoutBtn?.addEventListener("click", closeCheckout);
    els.checkoutOverlay?.addEventListener("click", closeCheckout);

    // Add-all wishlist → bag
    els.wishAddAll?.addEventListener("click", () => {
      const ids = Array.from(state.wishlist).filter(getProduct);
      if (!ids.length) { showToast("Wishlist is empty."); return; }
      ids.forEach((id) => addToCartSilent(id));
      state.wishlist.clear();
      persistCart(); persistWishlist();
      showToast(`Added ${ids.length} item${ids.length > 1 ? "s" : ""} to bag`, "success");
    });

    els.checkoutBtn?.addEventListener("click", openCheckout);

    // Promo
    els.promoForm?.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = (els.promoInput?.value || "").trim().toUpperCase();
      if (!code) return;
      if (PROMO_CODES[code]) { state.promo = code; renderCart(); showToast(`Promo ${code} applied`, "success"); }
      else { showToast("Invalid promo code."); }
      els.promoInput.value = "";
    });

    // Search input
    els.searchInput?.addEventListener("input", () => runSearch(els.searchInput.value));
    els.searchResults?.addEventListener("click", (e) => {
      const sug = e.target.closest("[data-sug]");
      if (sug && els.searchInput) { els.searchInput.value = sug.dataset.sug; runSearch(sug.dataset.sug); }
    });

    // Newsletter
    $$(".js-newsletter").forEach((form) => form.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = form.querySelector("input[type=email]");
      if (!input || !input.value.trim()) { showToast("Please enter an email address."); return; }
      form.reset();
      showToast("You're on the list — welcome to MODA.", "success");
    }));

    // Escape closes everything
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      closeCart(); closeWish(); closeMobileNav(); closeQuick(); closeSearch(); closeCheckout();
    });

    // Cmd/Ctrl+K opens search
    document.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openSearch(); }
    });
  }
  function addToCartSilent(id) {
    const p = getProduct(id); if (!p) return;
    const size = p.sizes[0];
    const line = state.cart.find((i) => i.id === p.id && i.size === size);
    if (line) line.qty += 1; else state.cart.push({ id: p.id, qty: 1, size });
  }

  function resetFilters() {
    state.category = "all"; state.query = ""; state.sort = "featured";
    state.maxPrice = 400; state.sizes.clear(); state.onSaleOnly = false;
    if (els.search) els.search.value = "";
    if (els.sortSelect) els.sortSelect.value = "featured";
    if (els.priceRange) els.priceRange.value = 400;
    if (els.priceValue) els.priceValue.textContent = money.format(400);
    if (els.saleToggle) els.saleToggle.checked = false;
    $$(".size-filter").forEach((b) => b.classList.remove("is-active"));
    setCategory("all");
  }

  function bindHomeControls() {
    els.search?.addEventListener("input", () => { state.query = els.search.value.trim().toLowerCase(); renderCatalog(); });
    els.sortSelect?.addEventListener("change", () => { state.sort = els.sortSelect.value; renderCatalog(); });
    if (els.priceRange) {
      state.maxPrice = Number(els.priceRange.value);
      if (els.priceValue) els.priceValue.textContent = money.format(state.maxPrice);
      els.priceRange.addEventListener("input", () => {
        state.maxPrice = Number(els.priceRange.value);
        if (els.priceValue) els.priceValue.textContent = money.format(state.maxPrice);
        renderCatalog();
      });
    }
    els.chips?.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip"); if (chip) setCategory(chip.dataset.cat || "all");
    });
    els.saleToggle?.addEventListener("change", () => { state.onSaleOnly = els.saleToggle.checked; renderCatalog(); });
    els.sizeFilters?.addEventListener("click", (e) => {
      const b = e.target.closest(".size-filter"); if (!b) return;
      const s = b.dataset.size;
      if (state.sizes.has(s)) state.sizes.delete(s); else state.sizes.add(s);
      b.classList.toggle("is-active");
      renderCatalog();
    });
    els.loadMore?.addEventListener("click", () => { state.visible += PAGE_SIZE; renderCatalog(false); });

    // Category tiles + nav links that point at catalog with a category
    $$("[data-category]").forEach((n) => n.addEventListener("click", () => {
      setCategory(n.dataset.category || "all");
      $("#shop")?.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
    }));

    // Arrival rail arrows
    bindRailScroll(els.arrivalRail, els.arrivalPrev, els.arrivalNext);
  }

  function bindRailScroll(rail, prev, next) {
    if (!rail) return;
    const step = () => Math.max(280, rail.clientWidth * 0.8);
    prev?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: prefersReducedMotion ? "auto" : "smooth" }));
    next?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: prefersReducedMotion ? "auto" : "smooth" }));
  }

  function bindSmoothScroll() {
    $$("[data-scroll]").forEach((n) => n.addEventListener("click", (e) => {
      const sel = n.getAttribute("data-scroll");
      const target = sel && $(sel);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      closeMobileNav();
    }));
  }

  /* ------------------------------------------------------------------ *
   * 16. Scroll UI + reveal + misc
   * ------------------------------------------------------------------ */
  function setupScrollUi() {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      els.header?.classList.toggle("is-stuck", y > 12);
      if (els.progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        els.progress.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      }
      els.toTop?.classList.toggle("is-on", y > 800);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    els.toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" }));
  }

  function setupAnnouncement() {
    if (!els.announceTrack) return;
    const messages = $$(".announce__msg", els.announceTrack);
    if (messages.length <= 1) return;
    let i = 0;
    setInterval(() => {
      i = (i + 1) % messages.length;
      els.announceTrack.style.transform = `translateY(-${i * 100}%)`;
    }, 4000);
    els.announceClose?.addEventListener("click", () => { els.announce.hidden = true; document.body.classList.add("no-announce"); });
  }

  function setupReveal() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      $$("[data-reveal]").forEach((n) => n.classList.add("is-visible"));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    registerReveal(document);
  }
  function registerReveal(root) {
    $$("[data-reveal]", root || document).filter((n) => !n.dataset.revealOn).forEach((n) => {
      n.dataset.revealOn = "1";
      if (revealObserver) revealObserver.observe(n); else n.classList.add("is-visible");
    });
  }

  function setupImageFallbacks() {
    document.addEventListener("error", (e) => {
      const img = e.target;
      if (!(img instanceof HTMLImageElement) || img.dataset.fb === "1") return;
      const cat = img.dataset.category || "default";
      const fb = IMAGE_FALLBACKS[cat] || IMAGE_FALLBACKS.default;
      if (!fb || img.src === fb) return;
      img.dataset.fb = "1"; img.src = fb;
    }, true);
  }

  function paintStaticIcons() {
    $$("[data-icon]").forEach((n) => { n.innerHTML = ICON[n.dataset.icon] || ""; });
  }
  function renderMetrics() {
    const set = (sel, val) => { const el = $(sel); if (el) el.textContent = val; };
    set('[data-metric="products"]', String(inventory.length));
    set('[data-metric="categories"]', String(new Set(inventory.map((p) => p.category)).size));
  }

  /* ------------------------------------------------------------------ *
   * 17. Bootstrap
   * ------------------------------------------------------------------ */
  function cacheEls() {
    const ids = [
      "header", "progress", "toast", "toTop",
      "announce", "announceTrack", "announceClose",
      "searchBtn", "wishBtn", "wishBadge", "cartBtn", "cartBadge", "mobileNavToggle",
      "mobileNav", "mobileNavOverlay", "closeMobileNavBtn",
      "wishDrawer", "wishOverlay", "closeWishBtn", "wishItems", "wishCount", "wishFoot", "wishAddAll",
      "cartDrawer", "cartOverlay", "closeCartBtn", "cartItems", "cartFoot",
      "shipBar", "shipFill", "shipMsg", "cartSubtotal", "cartDiscountRow", "cartDiscount",
      "cartShipping", "cartTotal", "checkoutBtn", "promoForm", "promoInput",
      "quickModal", "modalOverlay", "closeQuickBtn", "quickBody",
      "searchModal", "searchOverlay", "closeSearchBtn", "searchInput", "searchResults",
      "checkoutModal", "checkoutOverlay", "closeCheckoutBtn", "checkoutBody",
      "arrivalRail", "arrivalPrev", "arrivalNext", "trendingGrid",
      "catalogGrid", "resultCount", "chips", "search", "sortSelect", "priceRange",
      "priceValue", "saleToggle", "sizeFilters", "loadMore", "loadMoreWrap", "loadMoreCount",
      "recentSection", "recentGrid",
      "crumbProduct", "productDetail", "relatedGrid", "reviewWrap",
    ];
    ids.forEach((id) => { els[id] = $("#" + id); });
    els.wishBadge = $("#wishBadge"); els.cartBadge = $("#cartBadge");
  }

  function init() {
    cacheEls();
    paintStaticIcons();
    setupImageFallbacks();
    syncBadges();
    renderCart();
    renderWishlist();

    bindGlobal();
    bindSmoothScroll();
    setupScrollUi();
    setupAnnouncement();
    setupReveal();

    if (state.page === "home") {
      renderMetrics();
      renderArrivals();
      renderTrending();
      renderCatalog();
      renderRecentlyViewed();
      bindHomeControls();
    }
    if (state.page === "product") {
      renderProductPage();
    }
    reflectWishlistButtons();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
