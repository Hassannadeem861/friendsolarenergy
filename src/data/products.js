// Static product data. Structure is designed to map 1:1 onto a future
// backend/API response, so swapping this for a real fetch() later is a
// drop-in replacement — no component changes required.

export const productCategories = [
  { slug: "solar-panels", en: "Solar Panels", ur: "سولر پینلز" },
  { slug: "solar-inverters", en: "Solar Inverters", ur: "سولر انورٹرز" },
  { slug: "solar-batteries", en: "Solar Batteries", ur: "سولر بیٹریاں" },
  { slug: "solar-accessories", en: "Solar Accessories", ur: "سولر لوازمات" },
  { slug: "mounting-structures", en: "Mounting Structures", ur: "ماؤنٹنگ سٹرکچر" },
  { slug: "protection-equipment", en: "Protection & Electrical Equipment", ur: "پروٹیکشن آلات" },
];

// SAMPLE / PLACEHOLDER PRODUCTS — replace with real inventory.
// No brand, price, or warranty claims here are real; mark clearly in UI.
export const products = [
  {
    id: "p1",
    slug: "sample-solar-panel-monocrystalline",
    title: { en: "Monocrystalline Solar Panel", ur: "مونو کرسٹلائن سولر پینل" },
    category: "solar-panels",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&fm=webp&w=900&q=70",
    gallery: [],
    shortDescription: {
      en: "High-efficiency panel suitable for residential and commercial rooftops.",
      ur: "گھریلو اور کمرشل چھتوں کے لیے موزوں ہائی ایفیشنسی پینل۔",
    },
    description: {
      en: "Sample product listing — contact us for current specifications, pricing, and availability.",
      ur: "نمونہ پروڈکٹ لسٹنگ — موجودہ اسپیسیفیکیشنز، قیمت اور دستیابی کے لیے رابطہ کریں۔",
    },
    price: null, // null => UI shows "Request Price"
    oldPrice: null,
    specifications: [
      { label: "Cell type", value: "Monocrystalline" },
      { label: "Use", value: "Residential and commercial" },
    ],
    features: [],
    availability: "contact", // "in-stock" | "out-of-stock" | "contact"
    brand: null, // do not fabricate
    warranty: null, // do not fabricate
    featured: true,
    isSample: true,
    seo: {
      title: "Monocrystalline Solar Panel | Friend Solar Energy",
      description:
        "Explore solar panel options from Friend Solar Energy — 10+ years serving Pakistani homes and businesses.",
    },
  },
  {
    id: "p2",
    slug: "sample-solar-panel-polycrystalline",
    title: { en: "Polycrystalline Solar Panel", ur: "پولی کرسٹلائن سولر پینل" },
    category: "solar-panels",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&fm=webp&w=900&q=70",
    gallery: [],
    shortDescription: { en: "A practical panel option for homes, shops, and small offices.", ur: "گھروں، دکانوں اور چھوٹے دفاتر کے لیے عملی پینل۔" },
    description: { en: "Sample product listing. Contact us for current specifications, pricing, and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ موجودہ اسپیسیفیکیشنز، قیمت اور دستیابی کے لیے رابطہ کریں۔" },
    price: null,
    oldPrice: null,
    specifications: [{ label: "Cell type", value: "Polycrystalline" }, { label: "Use", value: "Residential and small commercial" }],
    features: [],
    availability: "contact",
    brand: null,
    warranty: null,
    featured: false,
    isSample: true,
    seo: { title: "Polycrystalline Solar Panel | Friend Solar Energy", description: "Explore solar panel options from Friend Solar Energy." },
  },
  {
    id: "p3",
    slug: "sample-hybrid-solar-inverter",
    title: { en: "Hybrid Solar Inverter", ur: "ہائبرڈ سولر انورٹر" },
    category: "solar-inverters",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&fm=webp&w=900&q=70",
    gallery: [],
    shortDescription: { en: "Flexible inverter option for solar, battery, and grid power management.", ur: "سولر، بیٹری اور گرڈ بجلی کے انتظام کے لیے لچکدار انورٹر۔" },
    description: { en: "Sample product listing. Contact us for compatible system sizing and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ سسٹم سائز اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Type", value: "Hybrid" }, { label: "Application", value: "Home and commercial systems" }], features: [], availability: "contact", brand: null, warranty: null, featured: true, isSample: true,
    seo: { title: "Hybrid Solar Inverter | Friend Solar Energy", description: "Explore hybrid inverter options from Friend Solar Energy." },
  },
  {
    id: "p4", slug: "sample-on-grid-solar-inverter", title: { en: "On-Grid Solar Inverter", ur: "آن گرڈ سولر انورٹر" }, category: "solar-inverters",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Grid-connected inverter option for efficient daytime solar use.", ur: "دن کے وقت سولر کے مؤثر استعمال کے لیے گرڈ سے منسلک انورٹر۔" },
    description: { en: "Sample product listing. Contact us for current specifications and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ موجودہ اسپیسیفیکیشنز اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Type", value: "On-grid" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "On-Grid Solar Inverter | Friend Solar Energy", description: "Explore on-grid inverter options from Friend Solar Energy." },
  },
  {
    id: "p5", slug: "sample-lithium-solar-battery", title: { en: "Lithium Solar Battery", ur: "لیتھیم سولر بیٹری" }, category: "solar-batteries",
      image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Modern battery storage option for backup and energy shifting.", ur: "بیک اپ اور توانائی ذخیرہ کرنے کے لیے جدید بیٹری۔" },
    description: { en: "Sample product listing. Contact us for capacity, compatibility, and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ گنجائش، مطابقت اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Chemistry", value: "Lithium" }], features: [], availability: "contact", brand: null, warranty: null, featured: true, isSample: true,
    seo: { title: "Lithium Solar Battery | Friend Solar Energy", description: "Explore solar battery options from Friend Solar Energy." },
  },
  {
    id: "p6", slug: "sample-tubular-solar-battery", title: { en: "Tubular Solar Battery", ur: "ٹیوبلر سولر بیٹری" }, category: "solar-batteries",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Backup battery option for homes and small businesses.", ur: "گھروں اور چھوٹے کاروبار کے لیے بیک اپ بیٹری۔" },
    description: { en: "Sample product listing. Contact us for capacity and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ گنجائش اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Type", value: "Tubular" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "Tubular Solar Battery | Friend Solar Energy", description: "Explore solar battery options from Friend Solar Energy." },
  },
  {
    id: "p7", slug: "sample-solar-cable-kit", title: { en: "Solar Cable Kit", ur: "سولر کیبل کٹ" }, category: "solar-accessories",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Connection accessories for clean and organized solar installations.", ur: "صاف اور منظم سولر انسٹالیشن کے لیے کنکشن لوازمات۔" },
    description: { en: "Sample product listing. Contact us for lengths, connectors, and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ لمبائی، کنیکٹرز اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Category", value: "Installation accessory" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "Solar Cable Kit | Friend Solar Energy", description: "Explore solar accessories from Friend Solar Energy." },
  },
  {
    id: "p8", slug: "sample-mc4-connector-set", title: { en: "MC4 Connector Set", ur: "ایم سی فور کنیکٹر سیٹ" }, category: "solar-accessories",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Solar connection components for compatible PV wiring.", ur: "مطابقت رکھنے والی پی وی وائرنگ کے لیے سولر کنکشن اجزاء۔" },
    description: { en: "Sample product listing. Contact us for current specifications and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ موجودہ اسپیسیفیکیشنز اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Category", value: "PV connector" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "MC4 Connector Set | Friend Solar Energy", description: "Explore solar accessories from Friend Solar Energy." },
  },
  {
    id: "p9", slug: "sample-rooftop-mounting-structure", title: { en: "Rooftop Mounting Structure", ur: "روف ٹاپ ماؤنٹنگ سٹرکچر" }, category: "mounting-structures",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Mounting structure option for secure rooftop panel placement.", ur: "چھت پر پینلز کی محفوظ تنصیب کے لیے ماؤنٹنگ سٹرکچر۔" },
    description: { en: "Sample product listing. Contact us for roof assessment and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ چھت کے جائزے اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Application", value: "Rooftop" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "Rooftop Mounting Structure | Friend Solar Energy", description: "Explore solar mounting options from Friend Solar Energy." },
  },
  {
    id: "p10", slug: "sample-ground-mounting-structure", title: { en: "Ground Mounting Structure", ur: "گراؤنڈ ماؤنٹنگ سٹرکچر" }, category: "mounting-structures",
    image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Ground installation structure option for open spaces.", ur: "کھلی جگہوں میں تنصیب کے لیے گراؤنڈ سٹرکچر۔" },
    description: { en: "Sample product listing. Contact us for site assessment and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ سائٹ کے جائزے اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Application", value: "Ground installation" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "Ground Mounting Structure | Friend Solar Energy", description: "Explore solar mounting options from Friend Solar Energy." },
  },
  {
    id: "p11", slug: "sample-dc-surge-protection-device", title: { en: "DC Surge Protection Device", ur: "ڈی سی سرج پروٹیکشن ڈیوائس" }, category: "protection-equipment",
    image: "https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Protection equipment option for solar DC circuits.", ur: "سولر ڈی سی سرکٹس کے لیے حفاظتی سامان۔" },
    description: { en: "Sample product listing. Contact us for system compatibility and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ سسٹم مطابقت اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Circuit", value: "DC solar circuit" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "DC Surge Protection Device | Friend Solar Energy", description: "Explore solar protection equipment from Friend Solar Energy." },
  },
  {
    id: "p12", slug: "sample-ac-dc-isolator-set", title: { en: "AC/DC Isolator Set", ur: "اے سی ڈی سی آئسولیٹر سیٹ" }, category: "protection-equipment",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&fm=webp&w=900&q=70", gallery: [],
    shortDescription: { en: "Isolation equipment option for safer solar system servicing.", ur: "محفوظ سولر سسٹم سروسنگ کے لیے آئسولیشن سامان۔" },
    description: { en: "Sample product listing. Contact us for current specifications and availability.", ur: "نمونہ پروڈکٹ لسٹنگ۔ موجودہ اسپیسیفیکیشنز اور دستیابی کے لیے رابطہ کریں۔" },
    price: null, oldPrice: null, specifications: [{ label: "Category", value: "Electrical protection" }], features: [], availability: "contact", brand: null, warranty: null, featured: false, isSample: true,
    seo: { title: "AC/DC Isolator Set | Friend Solar Energy", description: "Explore solar protection equipment from Friend Solar Energy." },
  },
];

export const getProductsByCategory = (categorySlug) =>
  products.filter((p) => p.category === categorySlug);

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug);
