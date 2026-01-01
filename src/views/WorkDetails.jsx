import { SEOHelmet } from "@/components";
import { productdetails } from "@/data";
import routes from "@/routes";
import { SEOConfig } from "@/utilities/SEOConfig";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { useRef } from "react";
import { Link, useParams } from "react-router";

// Animation variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 20
        }
    }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 120,
            damping: 15
        }
    }
};

const ContentRenderer = ({ subcontent }) => {
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
            variants={staggerContainer}
            // initial="hidden"
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

const DesignProcess = () => {
    const steps = [
        "Research",
        "Moodboard",
        "Wireframes",
        "Prototypes",
        "Development",
    ];

    return (
        <motion.div
            className="flex w-full flex-col gap-6"
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
        >
            <motion.span
                className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                variants={fadeInUp}
            >
                Design Process
            </motion.span>

            <motion.div
                className="relative flex w-full h-[580px] border-none object-cover bg-[#191919] overflow-hidden rounded-lg items-center justify-center p-8"
                variants={scaleIn}
            >
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="flex flex-col md:flex-row gap-6 md:gap-8 z-10 w-full max-w-5xl justify-between items-center">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.15,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "#444",
                                transition: { duration: 0.2 }
                            }}
                            className={`
                                relative flex items-center justify-center
                                px-6 py-4 md:px-8 md:py-6
                                bg-[#393939] transition-colors duration-300
                                rounded-2xl border border-white/5 shadow-xl
                                text-white/90 font-medium text-sm md:text-lg tracking-wide
                                w-full md:w-auto min-w-[140px]
                                ${index % 2 === 0 ? "md:-translate-y-12" : "md:translate-y-12"}
                            `}
                        >
                            {step}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};

const InformationArchitecture = () => {
    const childrenNodes = ["Services", "Projects", "About Us", "Contact"];

    return (
        <motion.div
            className="flex flex-col w-full gap-6"
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
        >
            <motion.span
                className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                variants={fadeInUp}
            >
                Information Architecture
            </motion.span>

            <motion.div
                className="relative flex w-full h-[580px] border-none bg-[#191919] overflow-hidden rounded-lg items-center justify-center p-8"
                variants={scaleIn}
            >
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] [background-size:24px_24px]" />

                <div className="relative z-10 flex flex-col items-center gap-8 w-full max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        whileHover={{ scale: 1.05 }}
                        className="z-20 p-6 rounded-2xl bg-[#2A2A2A] border border-white/10 shadow-xl text-white font-medium min-w-[160px] text-center"
                    >
                        Homepage
                    </motion.div>

                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: 40 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="hidden md:block w-px bg-white/20 absolute top-[70px] left-1/2 -translate-x-1/2"
                    />

                    <div className="hidden md:flex justify-between w-[75%] absolute top-[110px]">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "50%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-px bg-white/20 origin-right ml-auto"
                        />
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "50%" }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="h-px bg-white/20 origin-left mr-auto"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 w-full pt-0 md:pt-8">
                        {childrenNodes.map((item, index) => (
                            <div key={item} className="relative flex flex-col items-center">
                                <motion.div
                                    initial={{ height: 0 }}
                                    whileInView={{ height: 32 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6 + (index * 0.1), duration: 0.4 }}
                                    className="hidden md:block w-px bg-white/20 absolute -top-8 left-1/2 -translate-x-1/2"
                                />

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: 0.7 + (index * 0.1),
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }}
                                    className="w-full relative group"
                                >
                                    <motion.div
                                        className="
                                            flex items-center justify-center
                                            px-6 py-5
                                            bg-[#222] transition-all duration-300
                                            rounded-xl border border-white/5
                                            text-white/80 font-medium
                                            cursor-default
                                        "
                                        whileHover={{
                                            backgroundColor: "#2A2A2A",
                                            borderColor: "rgba(255,255,255,0.1)",
                                            color: "rgba(255,255,255,1)",
                                            scale: 1.05
                                        }}
                                    >
                                        {item}
                                    </motion.div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const StyleGuide = ({ work }) => {
    if (!work?.typography && !work?.colors) return null;

    return (
        <motion.div
            className="w-full flex flex-col gap-10"
            // initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
        >
            <motion.span
                className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                variants={fadeInUp}
            >
                Style Guides
            </motion.span>

            {work.typography && (
                <motion.div
                    className="w-full rounded-lg overflow-hidden p-8 sm:p-12"
                    variants={scaleIn}
                >
                    <motion.div
                        className="flex w-full bg-[#2C2C2C] flex-col sm:flex-row justify-between items-start sm:items-center p-11"
                        whileHover={{ backgroundColor: "#333" }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col">
                            <motion.h3
                                className="text-white pb-8 text-[55px] font-semibold"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                {work.typography.name}
                            </motion.h3>
                            <motion.p
                                className="text-white text-xl tracking-widest uppercase"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                {work.typography.alphabet || "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"}
                            </motion.p>
                            <motion.p
                                className="text-white text-xl lowercase tracking-widest"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                {work.typography.alphabet || "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz"}
                            </motion.p>
                            <motion.div
                                className="flex flex-col gap-1 mt-20 text-white"
                                // initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                {work.typography.weights?.map((weight, i) => (
                                    <motion.span
                                        className="text-[37px]"
                                        key={i}
                                        variants={fadeInUp}
                                    >
                                        {`0${i + 1} - ${weight}`}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                        <motion.div
                            className="text-white text-[100px] md:text-[337px] leading-none font-light opacity-90 mt-6 sm:mt-0"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 0.9, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        >
                            Aa
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-col">
                        {work.typography.styles?.map((style, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col py-20 sm:flex-row sm:items-center justify-between border-b border-white/10 last:border-0 pb-8 last:pb-0 gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="w-full sm:w-1/3">
                                    <p className="text-white text-[32px]">{style.name}</p>
                                    <p className="text-white text-xl mt-5">
                                        Font Size: {style.size} <span className="mx-2">|</span> Line Height: {style.lineHeight}
                                    </p>
                                </div>
                                <div className="w-full sm:w-2/3">
                                    <p className="text-white text-[32px]" style={{ fontSize: style.size, lineHeight: style.lineHeight }}>
                                        {work.name} is an integrated, end-to-end platform.
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}

            {work.colors && work.colors.length > 0 && (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 w-full rounded-lg overflow-hidden"
                    variants={staggerContainer}
                >
                    {work.colors.map((color, index) => (
                        <motion.div
                            key={index}
                            className="relative h-[300px] sm:h-[477px] flex flex-col justify-end p-6"
                            style={{ backgroundColor: color.hexcode }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.div
                                className="flex flex-col z-10"
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.2 }}
                            >
                                <span className={`text-[32px] font-medium ${color.isDarkText ? 'text-black' : 'text-white'}`}>
                                    {color.name}
                                </span>
                                <span className={`text-[32px] opacity-80 uppercase ${color.isDarkText ? 'text-black' : 'text-white'}`}>
                                    {color.hexcode}
                                </span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
};

const ProjectNavigation = ({ currentId }) => {
    const currentIndex = productdetails.findIndex(p => p.id === currentId);
    const prevIndex = currentIndex === 0 ? productdetails.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === productdetails.length - 1 ? 0 : currentIndex + 1;
    const prevProject = productdetails[prevIndex];
    const nextProject = productdetails[nextIndex];

    return (
        <motion.div
            className="w-full max-w-[1288px] mt-20 mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
        >
            <div className="flex flex-col md:flex-row w-full bg-[#191919] rounded-lg overflow-hidden">
                <Link to={`/works/${prevProject.id}`} className="flex-1 group relative border-b md:border-b-0 md:border-r border-[#333]">
                    <motion.div
                        className="px-8 py-10 flex flex-col items-start gap-4 transition-colors duration-300 group-hover:bg-[#222]"
                        whileHover={{ x: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="flex items-center gap-2 text-gray-400 group-hover:text-white transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="text-sm uppercase tracking-wider">Previous Project</span>
                        </div>
                        <span className="text-white text-2xl font-medium">{prevProject.name}</span>
                    </motion.div>
                </Link>

                <Link to={`/works/${nextProject.id}`} className="flex-1 group relative bg-[#00B66A] md:bg-transparent">
                    <motion.div
                        className="px-8 py-10 flex flex-col items-end gap-4 transition-colors duration-300 md:bg-[#191919] md:group-hover:bg-[#00B66A] h-full"
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                        <div className="flex items-center gap-2 text-white/80 md:text-gray-400 md:group-hover:text-white transition-colors">
                            <span className="text-sm uppercase tracking-wider">Next Project</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                        <span className="text-white text-2xl font-medium">{nextProject.name}</span>
                    </motion.div>
                </Link>
            </div>
        </motion.div>
    );
};

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
                title={`${work?.name} Case Study | Timi`}
                description={work?.shortDescription}
                keywords={work?.keywords || pageSEO.keywords}
                canonical={`/work/${work?.id}`}
            />
            <section className="flex items-center justify-center flex-col pt-12 pb-20 px-4 w-full">
                <motion.div
                    className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-11 justify-start sm:justify-between w-full max-w-[1288px]"
                    // initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.h1
                        className="text-[#1F1F1F] font-black text-center text-[56px] sm:text-[100px] tracking-tight leading-[100%]"
                        variants={scaleIn}
                    >
                        {work?.name}
                    </motion.h1>
                    <motion.div
                        className="flex w-full sm:w-fit items-end justify-end"
                        variants={fadeInUp}
                    >
                        {work?.link && (
                            <motion.a
                                href={work?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-transparent rounded-full text-[#0090FF] border border-[#0090FF] py-3 px-4 flex items-center justify-center gap-2.5"
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#0090FF",
                                    color: "#FFFFFF",
                                }}
                                whileTap={{ scale: 0.95 }}
                            >
                                View Live Site
                                <motion.div
                                    whileHover={{ rotate: 45, scale: 1.2 }}
                                >
                                    <ExternalLink className="h-5 w-5" />
                                </motion.div>
                            </motion.a>
                        )}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-8 items-start sm:items-center mb-18 justify-start sm:justify-between w-full max-w-[1288px]"
                    // initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.div
                        className="flex items-center gap-12"
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="flex flex-col items-start justify-start gap-2"
                            whileHover={{ scale: 1.05, x: 5 }}
                        >
                            <span className="text-[#383838] text-base font-medium font-ppnm">Year</span>
                            <span className="text-[#383838] text-xl font-medium font-ppnm">{work?.year}</span>
                        </motion.div>
                        <motion.div
                            className="flex flex-col items-start justify-start gap-2"
                            whileHover={{ scale: 1.05, x: 5 }}
                        >
                            <span className="text-[#383838] text-base font-medium font-ppnm">Industry</span>
                            <span className="text-[#383838] text-xl font-medium font-ppnm">{work?.industry}</span>
                        </motion.div>
                    </motion.div>

                    {work?.tag && work?.tag.length > 0 && (
                        <motion.div
                            className="flex flex-wrap justify-end w-full sm:w-fit items-center gap-2.5"
                            variants={staggerContainer}
                        >
                            {work?.tag.map((tag, index) => {
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
                                            delay: 0.2 + index * 0.1,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15
                                        }}
                                        whileHover={{
                                            scale: 1.1,
                                            rotate: [0, -5, 5, 0],
                                            y: -5
                                        }}
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
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {work?.mainImage &&
                        <motion.img
                            src={work?.mainImage}
                            className="w-full h-full object-cover"
                            alt={work?.name}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    }
                </motion.div>
            </section>

            <motion.div
                className="flex items-center justify-center w-full bg-[#000000] pt-10 pb-20 px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex flex-col items-start w-full justify-start max-w-[1288px] gap-25">
                    {work?.project && (
                        <motion.div
                            className="w-full flex flex-col gap-y-10"
                            // initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                        >
                            <motion.span
                                className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                                variants={fadeInUp}
                            >
                                The Project
                            </motion.span>
                            <motion.span
                                className="text-[#FFFFFF] text-[16px] sm:text-[20px] font-light tracking-tight"
                                variants={fadeInUp}
                            >
                                {work?.project}
                            </motion.span>
                        </motion.div>
                    )}

                    {work?.challenge && (
                        <motion.div
                            className="w-full flex flex-col gap-y-10"
                            // initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={staggerContainer}
                        >
                            <motion.span
                                className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                                variants={fadeInUp}
                            >
                                The Challenge
                            </motion.span>
                            <motion.span
                                className="text-[#FFFFFF] text-[16px] sm:text-[20px] font-light tracking-tight"
                                variants={fadeInUp}
                            >
                                {work?.challenge}
                            </motion.span>
                        </motion.div>
                    )}

                    <motion.div
                        className="grid grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12"
                        // initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        {[
                            { label: "Location", value: work?.location },
                            { label: "Industry", value: work?.industry },
                            { label: "Services", value: work?.services },
                            { label: "Timeline", value: work?.timeline }
                        ].map((item, index) => (
                            <motion.div
                                key={item.label}
                                className="flex flex-col items-start justify-start py-3 px-6 rounded-lg bg-[#191919] w-full gap-2"
                                variants={fadeInUp}
                                whileHover={{
                                    backgroundColor: "#222",
                                    scale: 1.03,
                                    y: -5
                                }}
                            >
                                <span className="text-white">{item.label}</span>
                                <span className="text-white text-xl">{item.value}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full"
                        // initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.div
                            className="flex w-full h-93 border-none object-cover bg-[#191919] overflow-hidden rounded-lg"
                            variants={scaleIn}
                            whileHover={{ scale: 1.02 }}
                        >
                            {work?.image01 &&
                                <img src={work?.image01} className="w-full h-full" alt="" />
                            }
                        </motion.div>
                        <motion.div
                            className="flex w-full h-93 border-none object-cover bg-[#191919] overflow-hidden rounded-lg md:col-span-2"
                            variants={scaleIn}
                            whileHover={{ scale: 1.02 }}
                        >
                            {work?.image02 &&
                                <img src={work?.image02} className="w-full h-full" alt="" />
                            }
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex w-full h-166.25 border-none object-cover bg-[#191919] overflow-hidden rounded-lg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 80, damping: 15 }}
                        whileHover={{ scale: 1.01 }}
                    >
                        {work?.image03 &&
                            <img src={work?.image03} className="w-full h-full" alt="" />
                        }
                    </motion.div>

                    <DesignProcess />
                    <InformationArchitecture />

                    <motion.div
                        className="w-full flex flex-col gap-y-10"
                        // initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                            variants={fadeInUp}
                        >
                            Lo-Fi Wireframes
                        </motion.span>
                        <motion.div
                            className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full py-40 gap-6 px-6 border-none object-cover bg-[#191919] overflow-hidden rounded-lg"
                            variants={scaleIn}
                        >
                            {[work?.image04, work?.image05, work?.image06].map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="flex w-full h-69.25 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, backgroundColor: "#444" }}
                                >
                                    {image && <img src={image} className="w-full h-full" alt="" />}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full flex flex-col gap-y-10"
                        // initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                            variants={fadeInUp}
                        >
                            UI Designs
                        </motion.span>

                        <motion.div
                            className="flex w-full h-171 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                            variants={scaleIn}
                            whileHover={{ scale: 1.01 }}
                        >
                            {work?.image07 &&
                                <img src={work?.image07} className="w-full h-full" alt="" />
                            }
                        </motion.div>

                        <motion.div
                            className="flex w-full h-171 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                            variants={scaleIn}
                            whileHover={{ scale: 1.01 }}
                        >
                            {work?.image08 &&
                                <img src={work?.image08} className="w-full h-full" alt="" />
                            }
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 gap-6 items-stretch lg:grid-cols-2 w-full"
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="flex-1 gap-6 flex flex-col h-full w-full"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="flex w-full h-119.25 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    {work?.image09 &&
                                        <img src={work?.image09} className="w-full h-full" alt="" />
                                    }
                                </motion.div>
                                <motion.div
                                    className="flex w-full h-119.25 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.02, y: -5 }}
                                >
                                    {work?.image10 &&
                                        <img src={work?.image10} className="w-full h-full" alt="" />
                                    }
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="flex-1 gap-6 h-full w-full"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="flex w-full h-full border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    {work?.image11 &&
                                        <img src={work?.image11} className="w-full h-full" alt="" />
                                    }
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="grid grid-cols-1 gap-6 items-stretch lg:grid-cols-2 w-full"
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="flex-1 gap-6 h-full w-full"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="flex w-full h-244.5 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.02, rotate: 0.5 }}
                                >
                                    {work?.image12 &&
                                        <img src={work?.image12} className="w-full h-full" alt="" />
                                    }
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="flex-1 gap-6 h-full w-full"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="flex w-full h-244.5 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.02, rotate: -0.5 }}
                                >
                                    {work?.image13 &&
                                        <img src={work?.image13} className="w-full h-full" alt="" />
                                    }
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="w-full flex flex-col gap-y-10"
                        // initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={staggerContainer}
                    >
                        <motion.span
                            className="text-[#FFFFFF] font-medium text-[24px] sm:text-[40px] tracking-tight"
                            variants={fadeInUp}
                        >
                            Mobile Designs
                        </motion.span>

                        <motion.div
                            className="grid grid-cols-1 gap-6 items-stretch lg:grid-cols-2 w-full"
                            variants={staggerContainer}
                        >
                            <motion.div
                                className="flex-1 gap-6 h-full w-full"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="flex w-full h-149.75 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.03, y: -10 }}
                                >
                                    {work?.image14 &&
                                        <img src={work?.image14} className="w-full h-full" alt="" />
                                    }
                                </motion.div>
                            </motion.div>
                            <motion.div
                                className="flex-1 gap-6 h-full w-full"
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="flex w-full h-149.75 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    whileHover={{ scale: 1.03, y: -10 }}
                                >
                                    {work?.image15 &&
                                        <img src={work?.image15} className="w-full h-full" alt="" />
                                    }
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full py-14 gap-6 px-6 border-none object-cover bg-[#191919] overflow-hidden rounded-lg"
                            variants={scaleIn}
                        >
                            {[work?.image16, work?.image17, work?.image18, work?.image19].map((image, index) => (
                                <motion.div
                                    key={index}
                                    className="flex w-full h-127.25 border-none object-cover bg-[#393939] overflow-hidden rounded-lg"
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.1,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 15
                                    }}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        backgroundColor: "#444",
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    {image && <img src={image} className="w-full h-full" alt="" />}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <StyleGuide work={work} />
                    <ProjectNavigation currentId={work.id} />
                </div>
            </motion.div>
        </>
    );
};

const WorkDetailsPage = () => {
    const { id } = useParams();
    const work = productdetails.find(item => item.id === id);

    if (!work) {
        return (
            <>
                <SEOHelmet
                    title="Work Not Found (404) | Timi's Portfolio"
                    description="We couldn't find the specific project case study you were looking for. Explore Timi's other featured work?."
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
