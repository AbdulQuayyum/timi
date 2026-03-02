import assets from "@/assets";
import { SEOHelmet } from "@/components";
import routes from "@/routes";
import { SEOConfig } from "@/utilities/SEOConfig";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const testimoniallist = [
    {
        name: "Qudus Young",
        title: "CEO, MarsOne",
        image: "",
        color: "#0090FF",
        description: "Timi brought structure and soul to our product. His design process was clear, his communication was excellent, and the final experience looked and felt miles ahead of where we started.",
        stars: 5
    },
    {
        name: "Abdul-Quayyum Alao",
        title: "CTO, Ologrey",
        image: "",
        color: "#FF9900",
        description: "Timi is one of the best designers I have ever worked with, He has this rare ability to make complex ideas look simple. Every interface feels intentional, clean, and human.",
        stars: 5
    },
    {
        name: "Ajike Oluwaseun",
        title: "CEO, Ologe Skincare",
        image: "",
        color: "#0FB600",
        description: "Working with Timi is a balance of creativity and calm. He designs with empathy and codes with clarity — every project moves forward effortlessly.",
        stars: 5
    }
]

const HomePage = () => {
    const pageSEO = SEOConfig.pages.home;
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimoniallist.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimoniallist.length) % testimoniallist.length);
    };

    const getVisibleTestimonials = () => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimoniallist.length;
            result.push({ ...testimoniallist[index], key: `${index}-${currentIndex}` });
        }
        return result;
    };

    const heroVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                staggerChildren: 0.2
            }
        }
    };

    const titleVariants = {
        hidden: { opacity: 0, scale: 0.8, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 15,
                delay: 0.3
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
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

    const workCardVariants = {
        hidden: { opacity: 0, y: 30 },
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

    const testimonialVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0,
            scale: 0.8,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30
            }
        })
    };

    const heroSlides = [
        assets.hero01,
        assets.marsone03,
        assets.ologe03,
        assets.zenthom03,
        assets.work13,
        assets.work05,
        assets.work02,
        assets.work04,
        assets.hero04
    ];

    const infiniteSlides = [...heroSlides, ...heroSlides];

    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            <section className="flex items-center justify-center flex-col pt-12 pb-20 px-4 w-full gap-[98px]">
                {/* Hero Section */}
                <motion.div
                    className="flex flex-col items-center max-w-[1288px] justify-center gap-3"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-[#1F1F1F] font-black text-center text-[56px] sm:text-[100px] tracking-tight leading-[100%]"
                        variants={titleVariants}
                    >
                        Hi, I'm Timi
                    </motion.h1>
                    <motion.span
                        className="text-base font-ppnm sm:text-2xl max-w-[570px] text-center text-[#383838] font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 15 }}
                    >
                        Product Designer, Front-End Developer and Graphics Designer
                    </motion.span>
                </motion.div>
                <motion.div
                    className="w-full overflow-hidden"
                    variants={imageVariants}
                >
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: ["0%", "-50%"]
                        }}
                        transition={{
                            ease: "linear",
                            duration: 25,
                            repeat: Infinity
                        }}
                    >
                        {infiniteSlides.map((img, index) => (
                            <div
                                key={index}
                                className="
                min-w-[623px]
                h-[330px]
                sm:h-[400px]
                rounded-2xl
                overflow-hidden
                bg-[#F9F9F9]
                shrink-0
                "
                            >
                                <img
                                    src={img}
                                    className="w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Featured Work Section */}
                <motion.div
                    className="flex flex-col items-center max-w-[1288px] justify-center gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                >
                    <div className="flex w-full justify-between items-center">
                        <motion.h2
                            className="text-[#1F1F1F] mb-5 font-black text-center text-[48px] sm:text-[80px] tracking-tight leading-[100%]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            Featured Work
                        </motion.h2>
                        <motion.button
                            onClick={() => { navigate(routes.work) }}
                            className="bg-[#F6F6F6] rounded-full py-4 px-6 flex items-center justify-center text-[#1F1F1F]"
                            style={{
                                boxShadow: "-1px -1px 4px 0px #00000040 inset"
                            }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.25)",
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}>
                            View All Works
                        </motion.button>
                    </div>

                    {/* Large Featured Card */}
                    <motion.div
                        className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-9 w-full bg-white p-5 rounded-4xl group cursor-pointer"
                        style={{ boxShadow: "2px 4px 48px 0px #0000000A" }}
                        custom={0}
                        variants={workCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            boxShadow: "2px 8px 60px 0px #00000015",
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    >
                        <motion.div
                            className="flex-1 flex min-h-90 w-full md:w-1/2 h-full items-center justify-center overflow-hidden bg-[#F7F7F7] rounded-4xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src={assets.hero02}
                                className="w-full min-h-90 h-full object-cover"
                                alt=""
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        </motion.div>
                        <div className="flex w-full md:w-1/2  items-start justify-between">
                            <div className="flex flex-col items-start justify-start w-full flex-1 max-w-[80%] gap-1">
                                <motion.span
                                    className="rounded-full flex items-center justify-center bg-[#6ACDFF] p-2 text-sm text-[#000000] mb-2"
                                    whileHover={{ scale: 1.05, backgroundColor: "#6ACDFF", color: "#FFFFFF" }}
                                >
                                    Website
                                </motion.span>
                                <span className="text-[#000000] font-black text-[24px] sm:text-[40px] tracking-tight">
                                    Marsone
                                </span>
                                <span className="text-[#000000] font-light text-[15px] sm:text-[17px] tracking-tight">
                                    I did the product design
                                </span>
                            </div>
                            <Link to='/works/marsone'>
                                <motion.div
                                    className="h-14 w-14 flex items-center justify-center rounded-full bg-[#000000]"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#FF0000",
                                        rotate: 45
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ArrowUpRight className="h-7 w-7 text-[#FFFFFF]" />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Grid Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1288px] gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        {[
                            { img: assets.hero03, name: "StoreDash", link: "/works/storedash" },
                            { img: assets.work05, name: "PropDrop", link: "/works/propdrop" }
                        ].map((work, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start justify-between gap-9 w-full bg-white p-5 rounded-4xl group cursor-pointer"
                                style={{ boxShadow: "2px 4px 48px 0px #0000000A" }}
                                custom={index + 1}
                                variants={workCardVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "2px 8px 60px 0px #00000015"
                                }}
                            >
                                <motion.div
                                    className="flex-1 flex items-center justify-center w-full overflow-hidden bg-[#F7F7F7] rounded-4xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.img
                                        src={work.img}
                                        className="w-full h-full object-cover"
                                        alt=""
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                </motion.div>
                                <div className="flex w-full items-start justify-between">
                                    <div className="flex flex-col items-start justify-start w-full flex-1 max-w-[80%] gap-1">
                                        <motion.span
                                            className="rounded-full flex items-center justify-center p-2 text-sm text-[#000000] mb-2"
                                            style={{ backgroundColor: work.name === "StoreDash" ? "#D0FF00" : "#6ACDFF" }}
                                            whileHover={{ scale: 1.05, backgroundColor: work.name === "StoreDash" ? "#D0FF00" : "#6ACDFF", color: "#FFFFFF" }}
                                        >
                                            {work.name === "StoreDash" ? "App" : "Website"}
                                        </motion.span>
                                        <span className="text-[#000000] font-black text-[24px] sm:text-[40px] tracking-tight">
                                            {work.name}
                                        </span>
                                        <span className="text-[#000000] font-light text-[15px] sm:text-[17px] tracking-tight">
                                            I did the product design
                                        </span>
                                    </div>
                                    <Link to={work.link}>
                                        <motion.div
                                            className="h-14 w-14 flex items-center justify-center rounded-full bg-[#000000]"
                                            whileHover={{
                                                scale: 1.1,
                                                backgroundColor: "#FF0000",
                                                rotate: 45
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ArrowUpRight className="h-7 w-7 text-[#FFFFFF]" />
                                        </motion.div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Grid Cards */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1288px] gap-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.1 }
                            }
                        }}
                    >
                        {[
                            { img: assets.hero04, name: "Ologrey", link: "/works/ologrey" },
                            { img: assets.work05, name: "Shopp", link: "/works/shopp" }
                        ].map((work, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-start justify-between gap-9 w-full bg-white p-5 rounded-4xl group cursor-pointer"
                                style={{ boxShadow: "2px 4px 48px 0px #0000000A" }}
                                custom={index + 1}
                                variants={workCardVariants}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "2px 8px 60px 0px #00000015"
                                }}
                            >
                                <motion.div
                                    className="flex-1 flex items-center justify-center w-full overflow-hidden bg-[#F7F7F7] rounded-4xl"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <motion.img
                                        src={work.img}
                                        className="w-full h-full object-cover"
                                        alt=""
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                </motion.div>
                                <div className="flex w-full items-start justify-between">
                                    <div className="flex flex-col items-start justify-start w-full flex-1 max-w-[80%] gap-1">
                                        <motion.span
                                            className="rounded-full flex items-center justify-center p-2 text-sm text-[#000000] mb-2"
                                            style={{ backgroundColor: work.name === "Ologrey" ? "#6ACDFF" : "#E2C5FF" }}
                                            whileHover={{ scale: 1.05, backgroundColor: work.name === "Ologrey" ? "#6ACDFF" : "#E2C5FF", color: "#FFFFFF" }}
                                        >
                                            {work.name === "Ologrey" ? "Website" : "Web & App"}
                                        </motion.span>
                                        <span className="text-[#000000] font-black text-[24px] sm:text-[40px] tracking-tight">
                                            {work.name}
                                        </span>
                                        <span className="text-[#000000] font-light text-[15px] sm:text-[17px] tracking-tight">
                                            I did the product design
                                        </span>
                                    </div>
                                    <Link to={work.link}>
                                        <motion.div
                                            className="h-14 w-14 flex items-center justify-center rounded-full bg-[#000000]"
                                            whileHover={{
                                                scale: 1.1,
                                                backgroundColor: "#FF0000",
                                                rotate: 45
                                            }}
                                            whileTap={{ scale: 0.9 }}
                                        >
                                            <ArrowUpRight className="h-7 w-7 text-[#FFFFFF]" />
                                        </motion.div>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    {/* Large Featured Card */}
                    <motion.div
                        className="flex flex-col md:flex-row w-full items-start md:items-center justify-between gap-9 w-full bg-white p-5 rounded-4xl group cursor-pointer"
                        style={{ boxShadow: "2px 4px 48px 0px #0000000A" }}
                        custom={0}
                        variants={workCardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{
                            y: -10,
                            boxShadow: "2px 8px 60px 0px #00000015",
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    >
                        <motion.div
                            className="flex-1 flex min-h-90 w-full md:w-1/2 h-full items-center justify-center overflow-hidden bg-[#F7F7F7] rounded-4xl"
                            whileHover={{ scale: 1.02 }}
                        >
                            <motion.img
                                src={assets.work04}
                                className="w-full min-h-90 h-full object-cover"
                                alt=""
                                whileHover={{ scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        </motion.div>
                        <div className="flex w-full md:w-1/2  items-start justify-between">
                            <div className="flex flex-col items-start justify-start w-full flex-1 max-w-[80%] gap-1">
                                <motion.span
                                    className="rounded-full flex items-center justify-center bg-[#6ACDFF] p-2 text-sm text-[#000000] mb-2"
                                    whileHover={{ scale: 1.05, backgroundColor: "#6ACDFF", color: "#FFFFFF" }}
                                >
                                    website
                                </motion.span>
                                <span className="text-[#000000] font-black text-[24px] sm:text-[40px] tracking-tight">
                                    Zenthom
                                </span>
                                <span className="text-[#000000] font-light text-[15px] sm:text-[17px] tracking-tight">
                                    I did the product design
                                </span>
                            </div>
                            <Link to='/works/zenthom'>
                                <motion.div
                                    className="h-14 w-14 flex items-center justify-center rounded-full bg-[#000000]"
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "#FF0000",
                                        rotate: 45
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <ArrowUpRight className="h-7 w-7 text-[#FFFFFF]" />
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Testimonials Section */}
                <motion.div
                    className="flex flex-col items-center w-full max-w-[1288px] justify-center gap-18"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={cardVariants}
                >
                    <motion.div
                        className="flex flex-col md:flex-row gap-y-10 gap-x-6 items-center justify-between w-full"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <motion.h2
                            className="text-[#1F1F1F] font-black text-start text-[48px] sm:text-[80px] tracking-tight leading-[100%]"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        >
                            Shared Moments, <br className="hidden sm:block" />
                            Honest Words
                        </motion.h2>
                        <div className="flex w-full md:w-fit items-center justify-end gap-4">
                            <motion.button
                                onClick={prevTestimonial}
                                className="bg-white rounded-tl-full rounded-bl-full cursor-pointer h-[75px] w-[75px] flex items-center justify-center"
                                style={{ boxShadow: "-21px 0px 26.8px -26px #00000040 inset" }}
                                whileHover={{ scale: 1.1, backgroundColor: "#F9F9F9" }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ArrowLeft2 className="h-6 w-6 text-[#000000]" />
                            </motion.button>
                            <motion.button
                                onClick={nextTestimonial}
                                className="bg-white rounded-tr-full rounded-br-full cursor-pointer h-[75px] w-[75px] flex items-center justify-center"
                                style={{ boxShadow: "-21px 0px 26.8px -26px #00000040 inset" }}
                                whileHover={{ scale: 1.1, backgroundColor: "#F9F9F9" }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <ArrowRight2 className="h-6 w-6 text-[#000000]" />
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="md:hidden w-full overflow-hidden">
                        <AnimatePresence mode="wait" custom={1}>
                            <motion.div
                                key={currentIndex}
                                custom={1}
                                variants={testimonialVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                className="w-full flex flex-col items-start justify-between gap-14 bg-white px-4 sm:px-[30px] py-10 rounded-2xl"
                            >
                                <div className="flex flex-col items-start justify-start gap-10">
                                    <span className="text-[#383838] text-xl">{testimoniallist[currentIndex].description}</span>
                                </div>
                                <div className="flex items-center gap-4.5">
                                    <motion.div
                                        className="flex items-center justify-center rounded-full shrink-0 h-[60px] w-[60px]"
                                        style={{ backgroundColor: testimoniallist[currentIndex].color }}
                                        whileHover={{ scale: 1.1, rotate: 360 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    />
                                    <div className="flex flex-col items-start justify-start gap-1.5">
                                        <span className="text-[#1F1F1F] font-medium text-xl">{testimoniallist[currentIndex].name}</span>
                                        <span className="text-[#383838] text-[17px]">{testimoniallist[currentIndex].title}</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="hidden md:flex gap-8 overflow-hidden w-full items-stretch">
                        <AnimatePresence mode="popLayout">
                            {getVisibleTestimonials().map((item, index) => (
                                <motion.div
                                    key={item.key}
                                    layout
                                    initial={{ opacity: 0, scale: 0.8, x: 300 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    exit={{ opacity: 0, scale: 0.8, x: -300 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="w-full flex flex-col items-start justify-between gap-14 bg-white px-4 sm:px-[30px] py-10 rounded-2xl"
                                    whileHover={{
                                        y: -10,
                                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    <div className="flex flex-col items-start justify-start gap-10">
                                        <span className="text-[#383838] text-xl">{item.description}</span>
                                    </div>
                                    <div className="flex items-center gap-4.5">
                                        <motion.div
                                            className="flex items-center justify-center rounded-full shrink-0 h-[60px] w-[60px]"
                                            style={{ backgroundColor: item.color }}
                                            whileHover={{ scale: 1.1, rotate: 360 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        />
                                        <div className="flex flex-col items-start justify-start gap-1.5">
                                            <span className="text-[#1F1F1F] font-medium text-xl">{item.name}</span>
                                            <span className="text-[#383838] text-[17px]">{item.title}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default HomePage
