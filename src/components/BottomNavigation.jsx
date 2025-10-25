import { useNavigate, useLocation } from "react-router"
import { motion, AnimatePresence } from "framer-motion"
import routes from "@/routes"

const BottomNavigation = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const pagelist = [
        {
            name: "Home",
            path: routes.home,
        },
        {
            name: "Work",
            path: routes.work,
        },
        {
            name: "About",
            path: routes.about,
        }
    ]

    const isActive = (path) => location.pathname === path

    const containerVariants = {
        hidden: {
            y: 100,
            opacity: 0,
            scale: 0.8
        },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    }

    return (
        <section className="fixed bottom-10 w-full flex items-center justify-center z-40 px-4">
            <motion.div
                className="grid grid-cols-3 w-full max-w-[386px] rounded-full p-2"
                style={{
                    background: "linear-gradient(91.66deg, rgba(255, 255, 255, 0.8) 0.12%, rgba(255, 255, 255, 0.8) 0.12%)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid #00000014"
                }}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02 }}
            >
                {pagelist.map((item, index) => (
                    <motion.button
                        onClick={() => { navigate(item.path) }}
                        key={index}
                        className="relative w-full flex items-center justify-center cursor-pointer rounded-full py-3 px-4 font-medium transition-colors duration-200"
                        variants={itemVariants}
                        whileHover={{
                            scale: 1.05,
                            transition: { duration: 0.2 }
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            ...(isActive(item.path) && {
                                border: "1px solid #0000000A",
                                background: "#F9F9F9"
                            })
                        }}
                    >
                        <AnimatePresence mode="wait">
                            {isActive(item.path) && (
                                <motion.div
                                    className="absolute inset-0 rounded-full"
                                    style={{
                                        border: "1px solid #0000000A",
                                        background: "#F9F9F9"
                                    }}
                                    layoutId="activeBackground"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 25
                                        }
                                    }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                />
                            )}
                        </AnimatePresence>

                        <motion.span
                            className="relative z-10"
                            animate={{
                                color: isActive(item.path) ? "#000000" : "#000000",
                                fontWeight: isActive(item.path) ? 600 : 500
                            }}
                            transition={{ duration: 0.2 }}
                        >
                            {item.name}
                        </motion.span>
                    </motion.button>
                ))}
            </motion.div>
        </section>
    )
}

export default BottomNavigation