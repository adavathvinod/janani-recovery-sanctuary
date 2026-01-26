import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  pageType?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "MedicalWebPage";
}

const SITE_URL = "https://jananideaddiction.com";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

export default function SEO({
  title,
  description,
  canonical,
  keywords,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
  pageType = "WebPage",
}: SEOProps) {
  const fullTitle = title.includes("Janani") ? title : `${title} | Janani Rehabilitation Centre`;
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  // Page-specific JSON-LD schema
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": pageType,
    name: fullTitle,
    description: description,
    url: url,
    inLanguage: "en-IN",
    isPartOf: {
      "@type": "WebSite",
      name: "Janani Rehabilitation Centre",
      url: SITE_URL,
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Janani Rehabilitation Centre" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad, Telangana" />
      <meta name="author" content="Janani Rehabilitation Centre" />

      {/* Page-specific JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(pageSchema)}</script>
    </Helmet>
  );
}
