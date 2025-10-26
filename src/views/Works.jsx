import { Link } from "react-router";
import { motion } from "framer-motion";
import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"
import routes from "@/routes";
import { works } from "@/data";
import { ArrowUpRight } from "lucide-react";

const WorksPage = () => {
    const pageSEO = SEOConfig.pages.work;

    const headerVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
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
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
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

    const subtitleVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
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

    const imageVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const arrowVariants = {
        initial: {
            rotate: 0,
            scale: 1
        },
        hover: {
            rotate: 45,
            scale: 1.2,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    };

    const tagVariants = {
        initial: { scale: 1 },
        hover: {
            scale: 1.05,
            backgroundColor: "#000000",
            color: "#FFFFFF",
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            <section className="flex items-center justify-center flex-col pt-12 pb-20 px-4 w-full gap-[98px]">
                <motion.div
                    className="flex flex-col items-center justify-center gap-3"
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1
                        className="text-[#1F1F1F] font-black text-center text-[56px] sm:text-[100px] tracking-tight leading-[100%]"
                        variants={titleVariants}
                    >
                        All of my works
                    </motion.h1>
                    <motion.span
                        className="text-base font-ppnm sm:text-2xl max-w-[570px] text-center text-[#383838] font-medium"
                        variants={subtitleVariants}
                    >
                        I've been privileged to work and contribute to these projects
                    </motion.span>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1288px] gap-x-6 gap-y-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {works.map((item, index) => (
                        <motion.div
                            key={index}
                            className="w-full flex flex-col items-start gap-9 justify-start bg-[#FFFFFF] p-5 rounded-4xl group cursor-pointer"
                            style={{ boxShadow: "2px 4px 48px 0px #0000000A" }}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: "2px 8px 60px 0px #00000015",
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 20
                                }
                            }}
                        >
                            <motion.div
                                className="w-full h-[414px] bg-[#F7F7F7] border-0 overflow-hidden rounded-4xl"
                                whileHover="hover"
                                initial="initial"
                            >
                                {item.secondaryImage && (
                                    <motion.img
                                        src={item.secondaryImage}
                                        className="w-full h-full object-cover"
                                        alt={item.name}
                                        variants={imageVariants}
                                    />
                                )}
                            </motion.div>

                            <div className="flex w-full items-start justify-start">
                                <motion.div
                                    className="flex flex-col items-start justify-start w-full flex-1 max-w-[80%] gap-2"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 + 0.5 }}
                                >
                                    <motion.span
                                        className="rounded-lg flex items-center justify-center bg-[#EDEDED] p-2 text-sm text-[#000000] mb-2"
                                        variants={tagVariants}
                                        initial="initial"
                                        whileHover="hover"
                                    >
                                        {item.type}
                                    </motion.span>

                                    <motion.span
                                        className="text-[#000000] font-black text-[24px] sm:text-[40px] tracking-tight"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.6 }}
                                    >
                                        {item.name}
                                    </motion.span>

                                    <motion.span
                                        className="text-[#000000] font-light text-[15px] sm:text-[17px] tracking-tight"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 + 0.7 }}
                                    >
                                        {item.shortDescription || "I did the product design"}
                                    </motion.span>
                                </motion.div>

                                <Link to={item.id}>
                                    <motion.div
                                        className="h-14 w-14 flex items-center justify-center rounded-full bg-[#000000]"
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: "#FF0000",
                                            transition: {
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 15
                                            }
                                        }}
                                        whileTap={{ scale: 0.9 }}
                                        initial="initial"
                                        variants={{ initial: {}, hover: {} }}
                                    >
                                        <motion.div
                                            variants={arrowVariants}
                                            initial="initial"
                                            whileHover="hover"
                                        >
                                            <ArrowUpRight className="h-7 w-7 text-[#FFFFFF]" />
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    )
}

export default WorksPage