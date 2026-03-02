import assets from "@/assets";
import { SEOHelmet } from "@/components";
import { SEOConfig } from "@/utilities/SEOConfig";
import { motion } from "framer-motion";

const aboutlist = [
    {
        name: "Clarity",
        description: "I begin by defining the problem, aligning on goals, and identifying success metrics that guide every design decision.",
        image: assets.pattern01
    },
    {
        name: "Exploration",
        description: "Through sketches, wireframes, and prototypes, I explore multiple directions to uncover the most intuitive, human-centered solution.",
        image: assets.pattern02
    },
    {
        name: "Design",
        description: "I craft visual systems, refine interactions, and ensure every element communicates clearly while maintaining emotional and aesthetic harmony.",
        image: assets.pattern03
    },
    {
        name: "Build",
        description: "Using clean, scalable frontend code, I translate design intent into responsive, high-performance interfaces that feel seamless and intentional.",
        image: assets.pattern04
    },
    {
        name: "Iterate",
        description: "After launch, I gather insights, measure impact, and continuously refine to make each product smarter, faster, and better.",
        image: assets.pattern05
    }
]

const skils = [
    {
        name: "Product Design",
        description: "UX research, wireframing, interaction design, design systems",
        item: [
            {
                name: "Figma Mirror",
                color: "#0090FF",
                rotation: "-3.32deg",
                image: assets.figma
            },
            {
                name: "Sketch",
                color: "#00B66A",
                rotation: "0.9deg",
                image: assets.sketch
            },
            {
                name: "Framer",
                color: "#009AA2",
                rotation: "-7.3deg",
                image: assets.framer
            },
            {
                name: "Photoshop",
                color: "#3A00A6",
                rotation: "6.79deg",
                image: assets.photoshop
            },
            {
                name: "Figma",
                color: "#FF8400",
                rotation: "0.0deg",
                image: assets.figma
            },
        ]
    },
    {
        name: "Frontend Development",
        description: "JavaScript, React, Next.js, TailwindCSS, Framer Motion",
        item: [
            {
                name: "React-Native",
                color: "#FF008C",
                rotation: "-3.32deg",
                image: assets.reactNative
            },
            {
                name: "Tailwind",
                color: "#163583",
                rotation: "0.9deg",
                image: assets.tailwind
            },
            {
                name: "Javascript",
                color: "#000000",
                rotation: "6.79deg",
                image: assets.javascript
            },
            {
                name: "Next.js",
                color: "#A27D00",
                rotation: "-7.3deg",
                image: assets.nextJs
            },
            {
                name: "React.js",
                color: "#0044FF",
                rotation: "0.0deg",
                image: assets.react
            },
        ]
    },
    {
        name: "Graphics Designer",
        description: "Cross-functional work with developers, PMs, and founders",
        item: [
            {
                name: "CorelDraw",
                color: "#0090FF",
                rotation: "-3.32deg",
                image: assets.corelDraw
            },
            {
                name: "Photoshop",
                color: "#00B66A",
                rotation: "0.9deg",
                image: assets.photoshop
            },
            {
                name: "Illustrator",
                color: "#3A00A6",
                rotation: "6.79deg",
                image: assets.illustrator
            },
            {
                name: "Canva",
                color: "#009AA2",
                rotation: "-7.3deg",
                image: assets.canva
            },
            {
                name: "Figma",
                color: "#FF8400",
                rotation: "0.0deg",
                image: assets.figma
            },
        ]
    }
]

const AboutPage = () => {
    const pageSEO = SEOConfig.pages.about;

    const heroVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -5 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const paragraphVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        })
    };

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                staggerChildren: 0.15
            }
        }
    };

    const cardContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    const badgeVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            y: 20
        },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        })
    };

    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            <section className="flex items-center justify-center flex-col pt-12 pb-20 px-4 w-full">
                {/* Hero Section */}
                <motion.div
                    className="flex flex-col lg:flex-row items-center justify-center gap-y-16 gap-x-8 w-full px-6 sm:px-10 py-10 max-w-[1288px] rounded-2xl border border-[#0C0C0C0A]"
                    style={{ background: "linear-gradient(102.09deg, #FFFFFF 0%, #F3F3F3 109.94%)", backdropFilter: "blur(24px)", boxShadow: "2px 2px 6px 0px #00000014" }}
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="w-full h-full max-h-[545px] flex items-center justify-center shrink-0 rounded-2xl overflow-hidden bg-white max-w-[422px]"
                        variants={imageVariants}
                        whileHover={{
                            scale: 1.05,
                            rotate: 2,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    >
                        <motion.img
                            src={assets.timi}
                            className="w-full h-full object-cover"
                            alt="Timi Young"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        />
                    </motion.div>

                    <motion.div
                        className="flex flex-col items-center lg:items-start justify-center lg:justify-start w-full"
                        variants={textVariants}
                    >
                        <motion.h1
                            className="text-[40px] sm:text-[60px] text-center lg:text-start font-black mb-3 leading-[100%] text-[#1F1F1F]"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
                        >
                            Konichiwa, I'm <motion.span
                                className="text-[#0090FF]"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 15 }}
                            >
                                Timi
                            </motion.span>
                        </motion.h1>

                        {[
                            "Product Designer and Frontend Developer with 6 years of experience creating digital products that feel simple, human, and purposeful.",
                            "I bridge the gap between design thinking and technical execution, crafting experiences that not only look good but work beautifully.",
                            "I believe great products are born from balance between logic and empathy, aesthetics and usability, creativity and clarity.",
                            "My process always begins with understanding people, their needs, frustrations, and goals — then shaping solutions that bring those insights to life with precision and care.",
                            "Design, to me, isn't decoration. It's ",
                            "Code, to me, isn't just implementation. It's "
                        ].map((text, index) => (
                            <motion.p
                                key={index}
                                className="text-[#383838] text-center lg:text-start text-base sm:text-xl font-ppnm pb-2"
                                custom={index}
                                variants={paragraphVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                {text}
                                {index === 4 && <span className="font-medium">communication</span>}
                                {index === 4 && ". "}
                                {index === 5 && <span className="font-medium">expression</span>}
                                {index === 5 && "."}
                            </motion.p>
                        ))}
                    </motion.div>
                </motion.div>

                {/* What I Do Section */}
                <motion.div
                    className="flex flex-col items-center justify-center w-full py-20 gap-22"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center gap-5"
                        variants={sectionVariants}
                    >
                        <motion.h1
                            className="text-[40px] sm:text-[60px] font-black mb-3 leading-[100%] text-[#1F1F1F]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            What do I do?
                        </motion.h1>
                        <motion.div
                            className="flex flex-col items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <span className="text-[#383838] text-xl leading-[130%] text-center font-ppnm">I design, prototype, and build digital experiences — from concept to code.</span>
                            <span className="text-[#383838] text-xl leading-[130%] text-center font-ppnm">Over the years, I've worked across startups, agencies, and independent projects, delivering work that spans:</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-6 items-center justify-center w-full max-w-[1288px]"
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {skils.map((item, index) => (
                            <motion.div
                                key={index}
                                className="rounded-lg bg-white p-5 gap-6 flex flex-col items-start justify-start w-full sm:w-[48%] lg:w-[30%]"
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                            >
                                <motion.div
                                    className="flex flex-wrap-reverse gap-5 items-end justify-center w-full py-10 px-4 lg:px-0 rounded-lg bg-[#F9F9F9]"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3 }}
                                >
                                    {item.item.map((subitem, subindex) => (
                                        <motion.div
                                            key={subindex}
                                            className="flex items-center gap-1.5 rounded-full py-1.5 pl-2 pr-6"
                                            style={{ backgroundColor: subitem.color, rotate: subitem.rotation }}
                                            custom={subindex}
                                            variants={badgeVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            whileHover={{
                                                scale: 1.1,
                                                rotate: "0deg",
                                                transition: { type: "spring", stiffness: 300, damping: 15 }
                                            }}
                                        >
                                            <div className="flex items-center justify-center rounded-full h-10 w-10 bg-white overflow-hidden">
                                                <img src={subitem.image} className="w-full h-full object-cover" alt={subitem.name} />
                                            </div>
                                            <span className="text-white text-base">{subitem.name}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                                <motion.div
                                    className="flex flex-col items-start justify-start w-full gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.5 }}
                                >
                                    <h1 className="font-medium text-xl tracking-tight text-[#1F1F1F]">{item.name}</h1>
                                    <span className="text-[#383838] leading-[150%] text-base font-ppnm">{item.description}</span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col items-center justify-center w-full py-20 gap-22"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={sectionVariants}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center gap-5 max-w-[620px]"
                        variants={sectionVariants}
                    >
                        <motion.h1
                            className="text-[40px] sm:text-[60px] font-black mb-3 leading-[100%] text-[#1F1F1F]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            How do I work?
                        </motion.h1>
                        <motion.span
                            className="text-[#383838] text-xl leading-[130%] text-center font-ppnm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            Every project starts with a question: "What should this make people feel?" From there, I work through:
                        </motion.span>
                    </motion.div>

                    <motion.div
                        className="flex flex-wrap gap-6 items-center justify-center w-full max-w-[1288px]"
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {aboutlist.map((item, index) => (
                            <motion.div
                                key={index}
                                className="rounded-lg bg-white p-5 gap-6 flex flex-col items-start justify-start w-full sm:w-[48%] lg:w-[30%]"
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)",
                                    transition: { type: "spring", stiffness: 300, damping: 20 }
                                }}
                            >
                                <motion.div
                                    className="flex items-center justify-center w-full h-[214px] rounded-lg bg-[#F9F9F9] overflow-hidden relative"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {item.image ? (
                                        <img src={item.image} className="w-full h-full object-cover" alt="" />
                                    ) : (
                                        <motion.div
                                            className="text-6xl font-black text-[#E0E0E0]"
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                                        >
                                            {index + 1}
                                        </motion.div>
                                    )}
                                </motion.div>
                                <motion.div
                                    className="flex flex-col items-start justify-start w-full gap-2"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                >
                                    <h1 className="font-medium text-xl tracking-tight text-[#1F1F1F]">{item.name}</h1>
                                    <span className="text-[#383838] leading-[150%] text-base font-ppnm">{item.description}</span>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>
        </>
    )
}

export default AboutPage
