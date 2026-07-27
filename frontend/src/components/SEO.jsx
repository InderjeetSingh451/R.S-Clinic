import { Helmet } from "react-helmet-async";
import seo from "../utils/seoData";

const SEO = ({ title = seo.title, description = seo.description }) => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="keywords" content={seo.keywords} />

      <meta name="robots" content="index,follow" />

      <meta name="author" content={seo.clinicName} />

      <link rel="canonical" href={seo.url} />

      {/* Open Graph */}

      <meta property="og:type" content="website" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />

      <meta property="og:image" content={seo.image} />

      <meta property="og:url" content={seo.url} />

      {/* Twitter */}

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:title" content={title} />

      <meta name="twitter:description" content={description} />

      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
