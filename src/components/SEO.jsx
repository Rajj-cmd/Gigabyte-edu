import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';

const SEO = ({ 
  title,
  description = "Expert guidance for international education - Study in USA, UK, Canada, Australia & Germany. Quality education consulting services in Nepal.",
  keywords = "",
  ogImage = "https://gigabyteeducation.com/og-image.jpg",
  ogType = "website",
  canonical = "",
}) => {
  const siteName = "Gigabyte Education Consultancy";

  return (
    <Helmet>
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* OpenGraph Meta Tags */}
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#1a365d" />
      <meta name="author" content={siteName} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical || window.location.href} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "${siteName}",
            "description": "${description}",
            "url": "${window.location.origin}",
            "logo": "${window.location.origin}/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jamal",
              "addressLocality": "Kathmandu",
              "addressCountry": "Nepal"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+977-9767659319",
              "contactType": "customer service"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  keywords: PropTypes.string,
  ogImage: PropTypes.string,
  ogType: PropTypes.string,
  canonical: PropTypes.string
};

export default SEO;
