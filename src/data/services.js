export const services = [
  {
    id: "s1",
    slug: "residential-solar-installation",
    title: { en: "Residential Solar Installation", ur: "گھریلو سولر انسٹالیشن" },
    summary: {
      en: "Complete solar setup for homes to help reduce electricity bills.",
      ur: "بجلی کے بل کم کرنے کے لیے گھروں کے لیے مکمل سولر سسٹم۔",
    },
    suitableFor: { en: "Homeowners", ur: "گھر کے مالکان" },
    benefits: {
      en: ["Lower electricity bills", "Backup during load-shedding", "Long-term investment"],
      ur: ["بجلی کے بل میں کمی", "لوڈ شیڈنگ کے دوران بیک اپ", "طویل مدتی سرمایہ کاری"],
    },
  },
  {
    id: "s2",
    slug: "commercial-solar-installation",
    title: { en: "Commercial Solar Installation", ur: "کمرشل سولر انسٹالیشن" },
    summary: {
      en: "Solar systems designed for shops, offices, and commercial buildings.",
      ur: "دکانوں، دفاتر اور کمرشل عمارتوں کے لیے سولر سسٹم۔",
    },
    suitableFor: { en: "Shop owners, offices", ur: "دکاندار، دفاتر" },
    benefits: {
      en: ["Reduced operating costs", "Reliable power supply"],
      ur: ["آپریٹنگ لاگت میں کمی", "قابل اعتماد بجلی کی فراہمی"],
    },
  },
  {
    id: "s3",
    slug: "industrial-solar-solutions",
    title: { en: "Industrial Solar Solutions", ur: "انڈسٹریل سولر حل" },
    summary: {
      en: "Large-scale solar solutions for factories and industrial units.",
      ur: "فیکٹریوں اور صنعتی یونٹس کے لیے بڑے پیمانے پر سولر حل۔",
    },
    suitableFor: { en: "Factory & industrial property owners", ur: "فیکٹری اور صنعتی مالکان" },
    benefits: { en: ["Significant cost savings at scale"], ur: ["بڑے پیمانے پر لاگت کی بچت"] },
  },
  {
    id: "s4",
    slug: "solar-consultation",
    title: { en: "Solar System Consultation", ur: "سولر سسٹم مشاورت" },
    summary: {
      en: "Get expert guidance on which solar system fits your needs.",
      ur: "اپنی ضرورت کے مطابق سولر سسٹم چننے کے لیے ماہرانہ مشورہ حاصل کریں۔",
    },
    suitableFor: { en: "Anyone new to solar", ur: "سولر میں دلچسپی رکھنے والے" },
    benefits: { en: ["Clear, practical guidance before you buy"], ur: ["خریداری سے پہلے واضح رہنمائی"] },
  },
  {
    id: "s5",
    slug: "solar-maintenance",
    title: { en: "Solar Maintenance", ur: "سولر مینٹیننس" },
    summary: {
      en: "Keep your existing solar system running efficiently.",
      ur: "اپنے موجودہ سولر سسٹم کو موثر رکھیں۔",
    },
    suitableFor: { en: "Existing solar system owners", ur: "موجودہ سولر صارفین" },
    benefits: { en: ["Extends system lifespan", "Maintains efficiency"], ur: ["سسٹم کی عمر میں اضافہ", "بہتر کارکردگی"] },
  },
  {
    id: "s6",
    slug: "solar-system-design",
    title: { en: "Solar System Design", ur: "سولر سسٹم ڈیزائن" },
    summary: { en: "Plan a right-sized solar solution around your load, roof, and budget.", ur: "اپ کے لوڈ، چھت اور بجٹ کے مطابق درست سولر حل تیار کریں۔" },
    suitableFor: { en: "Homeowners and businesses planning a new system", ur: "نیا سسٹم لگانے والے گھریلو اور کاروباری صارفین" },
    benefits: { en: ["Load-based system sizing", "Clear equipment plan", "Better use of available roof space"], ur: ["لوڈ کے مطابق سسٹم سائز", "واضح آلات کا منصوبہ", "چھت کی جگہ کا بہتر استعمال"] },
  },
  {
    id: "s7",
    slug: "solar-system-inspection",
    title: { en: "Solar System Inspection", ur: "سولر سسٹم معائنہ" },
    summary: { en: "Identify performance, wiring, and installation issues with a practical site inspection.", ur: "سائٹ معائنے سے کارکردگی، وائرنگ اور تنصیب کے مسائل معلوم کریں۔" },
    suitableFor: { en: "Owners with an underperforming solar system", ur: "کم کارکردگی والے سولر سسٹم کے مالکان" },
    benefits: { en: ["Find likely faults", "Review system condition", "Actionable maintenance guidance"], ur: ["ممکنہ خرابیوں کی شناخت", "سسٹم کی حالت کا جائزہ", "قابل عمل مینٹیننس رہنمائی"] },
  },
  {
    id: "s8",
    slug: "solar-panel-cleaning",
    title: { en: "Solar Panel Cleaning", ur: "سولر پینل صفائی" },
    summary: { en: "Professional panel cleaning to help keep your solar array performing well.", ur: "سولر ارے کی بہتر کارکردگی کے لیے پیشہ ورانہ پینل صفائی۔" },
    suitableFor: { en: "Homes, offices, and commercial sites", ur: "گھروں، دفاتر اور کمرشل سائٹس" },
    benefits: { en: ["Remove dust and buildup", "Support consistent generation"], ur: ["گرد و غبار اور میل کی صفائی", "مسلسل پیداوار میں مدد"] },
  },
];

export const getServiceBySlug = (slug) => services.find((s) => s.slug === slug);
