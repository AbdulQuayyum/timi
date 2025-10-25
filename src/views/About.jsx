import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"

const AboutPage = () => {
    const pageSEO = SEOConfig.pages.about;
    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            AboutPage
        </>
    )
}

export default AboutPage