import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"
import { Link, useParams } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { works } from "@/data";
import routes from "@/routes";
import { ExternalLink } from "lucide-react";

const ContentRenderer = ({ subcontent }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            className="text-[#FFFFFF] w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
        >
            {subcontent.map((item, subIndex) => {
                if (item.type === "paragraph") {
                    return (
                        <motion.p
                            key={subIndex}
                            className="mb-4 last:mb-0 text-xl font-light font-ppnm"
                            variants={itemVariants}
                        >
                            {item.content}
                        </motion.p>
                    );
                } else if (item.type === "ul") {
                    return (
                        <motion.ul
                            key={subIndex}
                            className="list-disc pl-5 mb-4 last:mb-0 text-xl font-light font-ppnm"
                            variants={itemVariants}
                        >
                            {item.content.map((listItem, listIndex) => (
                                <motion.li
                                    key={listIndex}
                                    className="mb-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: listIndex * 0.1 }}
                                >
                                    {listItem}
                                </motion.li>
                            ))}
                        </motion.ul>
                    );
                }
                return null;
            })}
        </motion.div>
    );
}

const WorkContent = ({ work }) => {
    const pageSEO = SEOConfig.pages.work;
    
    const imageRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <>
            <SEOHelmet 
                title={`${work.name} Case Study | Timi`} 
                description={work.shortDescription} 
                keywords={work.keywords || pageSEO.keywords} 
                canonical={`/work/${work.id}`} 
            />
            <section className="flex items-center justify-center flex-col pt-12 pb-20 px-4 w-full">
                <motion.div
                    className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-11 justify-start sm:justify-between w-full max-w-[1288px]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <motion.h1
                        className="text-[#1F1F1F] font-black text-center text-[56px] sm:text-[100px] tracking-tight leading-[100%]"
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 15 }}
                    >
                        {work.name}
                    </motion.h1>
                    <motion.div
                        className="flex w-full sm:w-fit items-end justify-end"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
                    >
                        {work.link && (
                            <motion.a
                                href={work.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent rounded-full text-[#0090FF] border border-[#0090FF] py-3 px-4 flex items-center justify-center gap-2.5"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#0090FF",
                                    color: "#FFFFFF",
                                    transition: { type: "spring", stiffness: 300, damping: 15 }
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Live Site
                                <motion.div
                                    whileHover={{ rotate: 45, scale: 1.2 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    <ExternalLink className="text-[#0090FF] h-5 w-5" />
                                </motion.div>
                            </motion.a>
                        )}
                    </motion.div>
                </motion.div>
                
                <motion.div
                    className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-18 justify-start sm:justify-between w-full max-w-[1288px]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                >
                    <motion.div
                        className="flex items-center gap-12"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <motion.div className="flex flex-col items-start justify-start gap-2" whileHover={{ scale: 1.05 }}>
                            <span className="text-[#383838] text-base font-medium font-ppnm">Year</span>
                            <span className="text-[#383838] text-xl font-medium font-ppnm">{work.year}</span>
                        </motion.div>
                        <motion.div className="flex flex-col items-start justify-start gap-2" whileHover={{ scale: 1.05 }}>
                            <span className="text-[#383838] text-base font-medium font-ppnm">Industry</span>
                            <span className="text-[#383838] text-xl font-medium font-ppnm">{work.industry}</span>
                        </motion.div>
                    </motion.div>
                    
                    {work.tag && work.tag.length > 0 && (
                        <motion.div
                            className="flex flex-wrap justify-end w-full sm:w-fit items-center gap-2.5"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            {work.tag.map((tag, index) => {
                                let bgColorClass = 'bg-[#4B5563]';
                                if (index === 0) bgColorClass = 'bg-[#0090FF]';
                                else if (index === 1) bgColorClass = 'bg-[#FF8801]';

                                return (
                                    <motion.span
                                        className={`py-3 px-6 rounded-full font-ppnm text-xl text-[#FFFFFF] ${bgColorClass}`}
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{
                                            delay: 0.7 + index * 0.1,
                                            type: "spring", stiffness: 200, damping: 15
                                        }}
                                        whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0], transition: { duration: 0.3 } }}
                                    >
                                        {tag}
                                    </motion.span>
                                );
                            })}
                        </motion.div>
                    )}
                </motion.div>
                <motion.div
                    ref={imageRef} 
                    className="flex w-full max-w-[1288px] h-[400px] bg-[#DFDFDF] sm:h-[617px] items-center justify-center rounded-4xl overflow-hidden"
                    style={{ y, scale }} 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring", stiffness: 80, damping: 15 }}
                >
                    {work.mainImage &&
                        <motion.img
                            src={work.mainImage}
                            className="w-full h-full object-cover"
                            alt={work.name}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    }
                </motion.div>
            </section>
            {work.content && work.content.length > 0 && (
                <motion.div
                    className="flex items-center justify-center w-full bg-[#000000] pt-10 pb-20 px-4"
                    // initial={{ opacity: 0 }}
                    // whileInView={{ opacity: 1 }}
                    // viewport={{ once: true, amount: 0.2 }}
                    // transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col items-start w-full justify-start max-w-[1288px]">
                        {work.content.map((item, index) => (
                            <motion.div
                                id={`${item.name.toLowerCase().replace(/\s/g, '-')}`}
                                key={index}
                                className="w-full grid gap-y-10 grid-cols-1 lg:grid-cols-4 items-stretch"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    delay: index * 0.1,
                                    type: "spring", stiffness: 80, damping: 15
                                }}
                            >
                                <motion.span
                                    className="text-[#FFFFFF] text-lg font-medium"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                >
                                    {item.name}
                                </motion.span>
                                
                                <motion.div
                                    className="flex flex-col lg:col-span-3 pb-20 items-start justify-start gap-6 border-t lg:border-t-0 border-[#FFFFFF] border-l-0 lg:border-l pl-0 lg:pl-6"
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <motion.span
                                        className="text-[#FFFFFF] font-black text-[24px] sm:text-[40px] tracking-tight"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                    >
                                        {item.heading}
                                    </motion.span>
                                    <ContentRenderer subcontent={item.subcontent} />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    );
};


const WorkDetailsPage = () => {
    const { id } = useParams();
    const work = works.find(item => item.id === id);

    if (!work) {
        return (
            <>
                <SEOHelmet 
                    title="Work Not Found (404) | Timi's Portfolio" 
                    description="We couldn't find the specific project case study you were looking for. Explore Timi's other featured work." 
                />
                <motion.div
                    className="flex flex-col items-center w-full justify-center py-20 text-center px-4 min-h-[70vh]"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                >
                    <motion.h1
                        className="text-5xl mb-2.5 font-bold text-[#1F1F1F]"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 15 }}
                    >
                        Oops! Project Not Found 😟
                    </motion.h1>
                    <motion.p
                        className="mb-5 text-[#666] text-xl max-w-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        It looks like the case study for the project ID "{id}" doesn't exist, or the link may have been updated.
                    </motion.p>
                    <motion.p
                        className="mb-[30px] font-medium text-[#1F1F1F]"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Don't worry, let's get you back on track!
                    </motion.p>

                    <motion.div
                        className="flex flex-col items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link to={routes.work} className="w-full max-w-xs">
                            <motion.button
                                className="bg-[#FF0000] cursor-pointer text-white font-medium flex items-center justify-center rounded-full h-[51px] px-6 w-full"
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255, 0, 0, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View All Projects
                            </motion.button>
                        </Link>
                        
                        <span className="text-[#1a1a1a] py-2">or</span>

                        <Link to={routes.home} className="w-full max-w-xs">
                            <motion.button
                                className="border border-[#FF0000] cursor-pointer text-[#FF0000] font-medium flex items-center justify-center rounded-full h-[51px] px-6 w-full"
                                whileHover={{ scale: 1.05, backgroundColor: "#FF0000", color: "#FFFFFF" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Go to Homepage
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </>
        );
    }

    return <WorkContent work={work} />;
}

export default WorkDetailsPage;