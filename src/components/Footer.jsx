import { Instagram, Whatsapp, Be, Dribbble } from "iconsax-reactjs"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import assets from "@/assets"

const Footer = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    const socialLinks = [
        {
            link: "",
            icon: Instagram,
        },
        {
            link: "",
            icon: Whatsapp,
        },
        {
            link: "behance.net/timiyoung",
            icon: Be,
        },
        {
            link: "",
            icon: Dribbble,
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const iconVariants = {
        hidden: {
            scale: 0,
            rotate: -180,
            opacity: 0
        },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    }

    const textVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    const imageVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    }

    return (
        <footer ref={ref} className="bg-[#000000] pt-20 w-full flex flex-col items-center justify-center overflow-hidden">
            <motion.div
                className="flex items-center justify-center gap-6 px-4 flex-wrap"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {socialLinks.map((item, index) => (
                    <motion.a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-[60px] w-[60px] bg-[#232323] rounded-xl flex items-center justify-center group relative overflow-hidden"
                        variants={iconVariants}
                        whileHover={{
                            scale: 1.1,
                            rotate: [0, -10, 10, -10, 0],
                            backgroundColor: "#FF0000",
                            transition: {
                                rotate: { duration: 0.5 },
                                scale: { duration: 0.2 }
                            }
                        }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-[#FF0000] rounded-xl"
                            initial={{ scale: 0, opacity: 0 }}
                            whileHover={{
                                scale: 1,
                                opacity: 1,
                                transition: { duration: 0.3 }
                            }}
                        />
                        <motion.div
                            whileHover={{
                                scale: 1.2,
                                transition: { duration: 0.2 }
                            }}
                            className="relative z-10"
                        >
                            <item.icon className="w-8 h-8 text-white" />
                        </motion.div>
                    </motion.a>
                ))}
            </motion.div>

            <motion.span
                className="font-bold mb-[172px] text-center mt-[129px] text-[56px] sm:text-[92px] tracking-tight max-w-[1000px] leading-[100%]"
                style={{
                    background: 'linear-gradient(90deg, #CCCCCC 0%, #6C6C6C 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                }}
                variants={textVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                Making digital feel human, one product at a time.
            </motion.span>

            <motion.img
                src={assets.timiyoung}
                className="w-full h-auto"
                alt="Timi Young"
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            />
        </footer>
    )
}

export default Footer