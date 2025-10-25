import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"

const ContactPage = () => {
    const pageSEO = SEOConfig.pages.contact;
    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            ContactPage
        </>
    )
}

export default ContactPage