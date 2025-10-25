import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"

const WorksPage = () => {
    const pageSEO = SEOConfig.pages.work;
    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            WorksPage
        </>
    )
}

export default WorksPage