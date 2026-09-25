export const projectsData = [
  {
    id: "qr-vehicle-alert",
    title: "QR Vehicle Alert",
    tagline: "Privacy-Centric Incident Reporting & Emergency Communication",
    category: "Full Stack / Real-Time System",
    liveUrl: "https://qr-vehicle-alert.vercel.app",
    repoUrl: "https://github.com/nabeelmughal799",
    featured: true,
    year: "2024",
    status: "Live in Production",
    problem: "Vehicle owners often face roadside emergencies, blocked parking, or vehicle tampering, but publicly displaying phone numbers on windshields creates severe privacy and harassment risks.",
    approach: "Architected a privacy-preserving MERN stack communication bridge. Vehicles are assigned encrypted QR codes that allow passersby or emergency responders to initiate incident alerts without exposing personal contact details. Engineered real-time Socket.io bi-directional messaging, AI tone detection for immediate emergency triage, Twilio SMS fallbacks for offline owners, and Google Maps GPS coordinates.",
    role: "Full Stack Architect & Lead Developer",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Twilio API", "Google Maps API", "Tailwind CSS"],
    features: [
      "Encrypted QR code generation for vehicle dashboard stickers",
      "Instant real-time Socket.io alert streaming with sub-second latency",
      "AI tone detection analyzing incoming messages to flag urgent emergencies",
      "Automated Twilio SMS gateway fallback when recipient is offline",
      "Precise Google Maps GPS geolocation embedding with incident reports",
      "Comprehensive Admin Control Dashboard for incident monitoring"
    ],
    confirmedResult: "Deployed on Vercel and production cloud infrastructure with zero exposure of personal telephone numbers during emergency reporting.",
    whatToImprove: "Implement progressive offline-first PWA caching for drivers in remote low-cellular zones and multi-tenant fleet management dashboards."
  },
  {
    id: "nawaz-sons-industrials",
    title: "Nawaz & Sons Industrials",
    tagline: "B2B Industrial Machinery Spare Parts & Procurement Platform",
    category: "Full Stack E-Commerce & Catalog",
    liveUrl: "https://nawaz-sons-industrials.vercel.app/",
    repoUrl: "https://github.com/nabeelmughal799",
    featured: true,
    year: "2024",
    status: "Live in Production",
    problem: "Industrial spare parts suppliers in Pakistan traditionally rely on manual paper catalogs, physical phone inquiries, and fragmented inventory sheets, slowing down procurement for manufacturing clients.",
    approach: "Designed and engineered an industrial-grade, responsive full-stack platform to digitize the supplier's extensive technical product catalog, offering categorized specifications, rapid search, and structured inquiry procurement workflows tailored for Pakistani industrial plants.",
    role: "Full Stack Web Developer",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap", "RESTful API"],
    features: [
      "Structured multi-category technical catalog for heavy industrial spare parts",
      "High-speed client-side filtering and real-time product search",
      "Streamlined procurement inquiry pipeline directly connecting buyers to sales",
      "Responsive layout optimized for both factory floor mobile devices and desktop offices"
    ],
    confirmedResult: "Successfully digitized product catalog and streamlined nationwide customer procurement across Pakistan's manufacturing sector.",
    whatToImprove: "Integrate automated RFQ (Request for Quotation) PDF generation and live warehouse stock synchronization via webhooks."
  },
  {
    id: "baithak-restaurant",
    title: "Baithak Restaurant System",
    tagline: "Traditional Culinary Experience & Digital Menu Ordering",
    category: "Full Stack Web Application",
    liveUrl: "https://research-ai-based-restaurant-manage.vercel.app/",
    repoUrl: "https://github.com/nabeelmughal799",
    featured: true,
    year: "2024",
    status: "Live in Production",
    problem: "High-volume traditional restaurants struggle with printed menu updates, table-side ordering delays, and digital menu accessibility for popular Pakistani specialties.",
    approach: "Crafted a vibrant, modern restaurant web application built around signature cuisine categories (Biryani, Karahi, Sajji, BBQ). Optimized for ultra-fast mobile menu browsing, frictionless cart ordering, and smooth visual feedback.",
    role: "Frontend & Full Stack Developer",
    technologies: ["React", "JavaScript", "Node.js", "Express.js", "Tailwind CSS", "Vercel"],
    features: [
      "Dynamic menu filtering across traditional cuisines (Biryani, Karahi, Sajji, BBQ)",
      "Interactive cart with dynamic total computation and custom preparation instructions",
      "Mobile-first, touch-optimized visual ordering interface",
      "Production-grade deployment on Vercel with high performance Lighthouse scores"
    ],
    confirmedResult: "Active production deployment facilitating smooth customer online ordering and digital menu exploration.",
    whatToImprove: "Add real-time kitchen display system (KDS) synchronization and automated WhatsApp order dispatch notifications."
  },
  {
    id: "keithston-bakery",
    title: "Keithston Bakery & Café",
    tagline: "Artisanal Confectionery Showcase & Brand Experience",
    category: "Modern Frontend / Brand Platform",
    liveUrl: "https://keithston-bakery-cr7u.vercel.app/",
    repoUrl: "https://github.com/nabeelmughal799",
    featured: false,
    year: "2024",
    status: "Live in Production",
    problem: "Artisan bakeries require high-fidelity visual storytelling, appealing promotional displays, and immediate brand differentiation to convert casual web visitors into walk-in orders.",
    approach: "Built a responsive, polished bakery and café platform with React, Vite, and Bootstrap. Emphasized rich product photography layouts, promotional highlight ribbons, and brand heritage storytelling.",
    role: "Frontend Developer & UI Engineer",
    technologies: ["React", "Vite", "Bootstrap", "HTML5", "CSS3", "JavaScript"],
    features: [
      "Curated bakery & dessert product showcase with high-res responsive imagery",
      "Interactive promotional offers carousel and seasonal specials section",
      "Polished landing page layout with smooth CSS micro-interactions",
      "Instant load times powered by Vite's lightweight production bundling"
    ],
    confirmedResult: "Live on Vercel delivering an elevated brand storefront and customer engagement.",
    whatToImprove: "Integrate custom cake design configurator with live preview pricing."
  }
];
