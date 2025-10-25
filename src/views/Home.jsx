import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"

const HomePage = () => {
    const pageSEO = SEOConfig.pages.home;
    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            HomePage
        </>
    )
}

export default HomePage