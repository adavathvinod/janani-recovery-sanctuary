import { Helmet } from "react-helmet-async";
import { JANANI } from "@/lib/janani";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://jananideaddiction.com/#organization",
    name: JANANI.name,
    alternateName: "Janani De-Addiction Centre",
    description:
      "Janani Alcohol & Drug Rehabilitation Centre provides professional addiction treatment, detox programs, counseling, and therapy in Hyderabad, Telangana. Serving patients from Hayathnagar, LB Nagar, Dilsukhnagar, Miryalaguda, Suryapet, Khammam, Nalgonda, and all over Telangana.",
    url: "https://jananideaddiction.com",
    telephone: JANANI.phoneE164,
    email: JANANI.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.4 Block, 2nd Floor, Plot No.2, Survey No.268, Word, Street No. 7, Hayathnagar_Khalsa",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "501505",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 17.329866,
      longitude: 78.593726,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
    priceRange: "$$",
    image: "https://jananideaddiction.com/og-image.jpg",
    logo: "https://jananideaddiction.com/logo.png",
    sameAs: [JANANI.instagram],
    areaServed: JANANI.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
      containedInPlace: {
        "@type": "State",
        name: "Telangana",
        containedInPlace: {
          "@type": "Country",
          name: "India",
        },
      },
    })),
    medicalSpecialty: [
      "Addiction Medicine",
      "Psychiatry",
      "Substance Abuse Treatment",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Alcohol Detoxification",
        description: "Medically supervised alcohol detox program",
      },
      {
        "@type": "MedicalTherapy",
        name: "Drug Rehabilitation",
        description: "Comprehensive drug rehabilitation treatment",
      },
      {
        "@type": "MedicalTherapy",
        name: "Counseling",
        description: "Individual and group counseling sessions",
      },
      {
        "@type": "MedicalTherapy",
        name: "Therapy Programs",
        description: "Structured therapy for long-term recovery",
      },
    ],
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Professional Certification",
      recognizedBy: {
        "@type": "Organization",
        name: "Government of Telangana",
      },
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
