// Enterprise-level Structured Data (Schema.org) for Janani Rehabilitation Centre
// This enables Knowledge Graph, Rich Snippets, and enhanced search appearance

const BASE_URL = "https://jananideaddiction.com";
const PHONE = "+916302682285";
const EMAIL = "jananirehabilition@gmail.com";
const STREET_ADDRESS = "No.4 Block, 2nd Floor, Plot No.2, Survey No.268, Word, Street No. 7, Hayathnagar_Khalsa";
const MAPS_URL = "https://maps.app.goo.gl/cx2M3wCL2MznQouH7";

export interface StructuredDataConfig {
  url?: string;
  title?: string;
  description?: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}

// Medical Business Schema - Primary organization schema (NOT a physician)
export const getMedicalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["MedicalBusiness", "LocalBusiness"],
  "@id": `${BASE_URL}/#organization`,
  name: "Janani Alcohol & Drug Rehabilitation Centre",
  alternateName: "Janani De-Addiction Centre",
  legalName: "Janani Alcohol & Drug Rehabilitation Centre",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#logo`,
    url: `${BASE_URL}/logo-hd.png`,
    width: "240",
    height: "240",
    caption: "Janani Rehabilitation Centre Logo"
  },
  image: {
    "@type": "ImageObject",
    "@id": `${BASE_URL}/#image`,
    url: `${BASE_URL}/og-image.jpg`,
    width: "1200",
    height: "630",
    caption: "Janani Rehabilitation Centre"
  },
  description: "Janani Alcohol & Drug Rehabilitation Centre provides professional addiction treatment, detox programs, counseling, and therapy services in Hyderabad, Telangana.",
  telephone: PHONE,
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: STREET_ADDRESS,
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "501505",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.329866",
    longitude: "78.593726"
  },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Hayathnagar" },
    { "@type": "City", name: "LB Nagar" },
    { "@type": "City", name: "Dilsukhnagar" },
    { "@type": "City", name: "Miryalaguda" },
    { "@type": "City", name: "Suryapet" },
    { "@type": "City", name: "Khammam" },
    { "@type": "City", name: "Nalgonda" },
    { "@type": "State", name: "Telangana" }
  ],
  priceRange: "$$",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Credit Card, Debit Card, UPI, Insurance",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59"
  },
  medicalSpecialty: [
    "Addiction Medicine",
    "Psychiatry",
    "Substance Abuse Treatment",
    "Behavioral Health"
  ],
  availableService: [
    {
      "@type": "MedicalTherapy",
      name: "Alcohol Detoxification",
      description: "Supervised medical detoxification for alcohol addiction"
    },
    {
      "@type": "MedicalTherapy",
      name: "Drug Rehabilitation",
      description: "Comprehensive drug rehabilitation and recovery programs"
    },
    {
      "@type": "MedicalTherapy",
      name: "Counseling Services",
      description: "Individual and group counseling focused on recovery and relapse prevention"
    },
    {
      "@type": "MedicalTherapy",
      name: "Therapy Programs",
      description: "Structured therapeutic interventions for long-term recovery"
    }
  ],
  sameAs: [
    "https://www.instagram.com/janani_rehab?igsh=NTF5N3Iyb3B3NnY="
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "Admissions & Enquiries",
      email: EMAIL,
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: "IN"
    },
    {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "Customer Support",
      availableLanguage: ["English", "Hindi", "Telugu"],
      areaServed: "IN"
    }
  ],
  hasMap: MAPS_URL
});

// Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Janani Alcohol & Drug Rehabilitation Centre",
  description: "Professional addiction treatment and rehabilitation services in Hyderabad, Telangana",
  publisher: {
    "@id": `${BASE_URL}/#organization`
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${BASE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  },
  inLanguage: "en-IN"
});

// Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`
  }))
});

// Medical Therapy Schema
export const getMedicalTherapySchema = (config: {
  name: string;
  description: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: config.name,
  description: config.description,
  url: `${BASE_URL}${config.url}`,
  relevantSpecialty: ["Addiction Medicine", "Psychiatry"],
  medicineSystem: "Conventional medicine with holistic support",
  availableAtOrFrom: {
    "@id": `${BASE_URL}/#organization`
  }
});

// FAQ Schema
export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

// Site Navigation Schema
export const getSiteNavigationSchema = () => ({
  "@type": "SiteNavigationElement",
  "@id": `${BASE_URL}/#site-navigation`,
  name: [
    "Home",
    "About",
    "Treatments",
    "Gallery",
    "Contact"
  ],
  url: [
    `${BASE_URL}/`,
    `${BASE_URL}/about`,
    `${BASE_URL}/treatments`,
    `${BASE_URL}/gallery`,
    `${BASE_URL}/contact`
  ]
});

// Complete Homepage Schema Bundle
export const getCompleteHomeSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getMedicalBusinessSchema(),
    getWebsiteSchema(),
    getBreadcrumbSchema([{ name: "Home", url: "/" }])
  ]
});

// About Page Schema Bundle
export const getAboutPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getMedicalBusinessSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "About", url: "/about" }
    ]),
    {
      "@type": "AboutPage",
      name: "About Janani Rehabilitation Centre",
      description: "Learn about Janani Rehabilitation Centre's mission, approach, and commitment to addiction recovery.",
      url: `${BASE_URL}/about`,
      mainEntity: {
        "@id": `${BASE_URL}/#organization`
      }
    }
  ]
});

// Treatments Page Schema Bundle
export const getTreatmentPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getMedicalBusinessSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Treatments", url: "/treatments" }
    ]),
    {
      "@type": "MedicalWebPage",
      name: "Addiction Treatment Programs at Janani",
      description: "Explore detox, counseling, and therapy programs for addiction recovery in Hyderabad.",
      url: `${BASE_URL}/treatments`,
      specialty: {
        "@type": "MedicalSpecialty",
        name: "Addiction Medicine"
      },
      mainEntity: {
        "@type": "MedicalTherapy",
        name: "Comprehensive Addiction Treatment",
        description: "Professional detoxification, counseling, and therapy programs for sustainable recovery",
        relevantSpecialty: ["Addiction Medicine", "Psychiatry"],
        medicineSystem: "Conventional medicine with holistic support"
      }
    },
    {
      "@type": "FAQPage",
      name: "Frequently Asked Questions About Treatments",
      mainEntity: [
        {
          "@type": "Question",
          name: "What treatment options does Janani offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Janani offers comprehensive addiction treatment including detoxification, individual and group counseling, structured therapy programs, and holistic wellness support."
          }
        },
        {
          "@type": "Question",
          name: "How long do treatment programs last?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Treatment duration varies based on individual needs. Contact us for personalized assessment and program recommendations."
          }
        },
        {
          "@type": "Question",
          name: "Is treatment confidential?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all admissions and treatment at Janani are strictly confidential with respectful, discreet communication."
          }
        }
      ]
    }
  ]
});

// Gallery Page Schema Bundle
export const getGalleryPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getMedicalBusinessSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Gallery", url: "/gallery" }
    ]),
    {
      "@type": "CollectionPage",
      name: "Janani Rehabilitation Centre Gallery",
      description: "Photo gallery showcasing our facilities, amenities, and welcoming environment.",
      url: `${BASE_URL}/gallery`,
      mainEntity: {
        "@type": "ImageGallery",
        name: "Facility Photos",
        description: "Images of reception areas, accommodation, dining facilities, recreation spaces, and wellness areas at Janani."
      }
    }
  ]
});

// Contact Page Schema Bundle
export const getContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    getMedicalBusinessSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Contact", url: "/contact" }
    ]),
    {
      "@type": "ContactPage",
      name: "Contact Janani Rehabilitation Centre",
      description: "Get in touch with Janani Rehabilitation Centre for admissions, enquiries, and support.",
      url: `${BASE_URL}/contact`
    }
  ]
});

// Service Location Schema for SEO Landing Pages
export const getServiceLocationSchema = (
  serviceName: string,
  slug: string,
  description: string
) => ({
  "@context": "https://schema.org",
  "@graph": [
    getMedicalBusinessSchema(),
    getBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Treatments", url: "/treatments" },
      { name: serviceName, url: `/${slug}` }
    ]),
    getMedicalTherapySchema({
      name: serviceName,
      description: description,
      url: `/${slug}`
    })
  ]
});
