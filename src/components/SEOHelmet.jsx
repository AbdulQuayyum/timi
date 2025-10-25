import { Helmet } from 'react-helmet-async';

import { SEOConfig } from '@/utilities/SEOConfig';

const SEOHelmet = ({ title, description, keywords, canonical, image, type = 'website', noindex = false }) => {
    const fullTitle = title || SEOConfig.defaultTitle;
    const metaDescription = description || SEOConfig.defaultDescription;
    const metaKeywords = keywords || SEOConfig.defaultKeywords;
    const metaImage = image || SEOConfig.defaultImage;
    const canonicalUrl = canonical ? `${SEOConfig.siteUrl}${canonical}` : SEOConfig.siteUrl;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content={SEOConfig.author} />

            <link rel="canonical" href={canonicalUrl} />

            {noindex && <meta name="robots" content="noindex, nofollow" />}

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:image" content={`${SEOConfig.siteUrl}${metaImage}`} />
            <meta property="og:image:alt" content={fullTitle} />
            <meta property="og:site_name" content="IDCentra" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={`${SEOConfig.siteUrl}${metaImage}`} />
            <meta name="twitter:image:alt" content={fullTitle} />
            {SEOConfig.twitterHandle && <meta name="twitter:site" content={SEOConfig.twitterHandle} />}

            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />

            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "name": "IDCentra",
                    "description": SEOConfig.defaultDescription,
                    "url": SEOConfig.siteUrl,
                    "logo": `${SEOConfig.siteUrl}${SEOConfig.defaultImage}`,
                    "sameAs": [
                        // "https://twitter.com/IDCentra",
                        // "https://linkedin.com/company/IDCentra",
                        // "https://instagram.com/IDCentra"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEOHelmet;