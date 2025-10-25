import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp } from "iconsax-reactjs"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    const buttonVariants = {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.8
        },
        visible: {
            opacity: 0.9,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 120,
                damping: 12,
                duration: 0.4
            }
        },
        hover: {
            opacity: 1,
            scale: 1.15,
            backgroundColor: "#FF0000",
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 10
            }
        },
        tap: {
            scale: 0.9,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 15
            }
        }
    }

    const arrowVariants = {
        hidden: {
            rotate: 0,
            opacity: 0
        },
        visible: {
            rotate: [0, 15, -15, 0],
            opacity: 1,
            transition: {
                opacity: { duration: 0.3 },
                rotate: {
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                    delay: 0.5
                }
            }
        },
        hover: {
            rotate: 360,
            scale: 1.2,
            transition: {
                rotate: { duration: 0.6, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 200, damping: 10 }
            }
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY >= 560)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })

        handleScroll()

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a href="#top" className="fixed right-8 bottom-12 bg-[#FFFFFF] border border-[#2E2C34] rounded-lg p-2 z-2024" variants={buttonVariants} initial="hidden" animate="visible" exit="hidden" whileHover="hover" whileTap="tap" style={{ willChange: "transform, opacity" }}>
                    <motion.div variants={arrowVariants} initial="hidden" animate="visible" whileHover="hover">
                        <ArrowUp size="32" color="#282828" />
                    </motion.div>
                </motion.a>
            )}
        </AnimatePresence>
    )
}

export default BackToTop