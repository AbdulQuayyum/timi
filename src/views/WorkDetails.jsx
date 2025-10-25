import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"

const WorkDetailsPage = () => {
    const pageSEO = SEOConfig.pages.work;
    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            WorkDetailsPage
        </>
    )
}

export default WorkDetailsPage