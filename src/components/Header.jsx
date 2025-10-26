import routes from "@/routes";
import { useState, useEffect } from "react"
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    const headerOpacity = useTransform(scrollY, [0, 50], [0.95, 1]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className='flex items-center justify-center w-full'>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.1
                }}
                style={{ opacity: headerOpacity }}
                className={`flex fixed z-50 top-4 items-center w-full justify-between gap-4 sm:gap-10 max-w-[1288px] rounded-full py-3.5 px-4 transition-all duration-300 ${scrolled ? 'bg-white backdrop-blur-lg' : ' bg-transparent'}`}
            >
                <motion.img
                    src="/logo.png"
                    className="h-14 w-14"
                    alt="logo"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                        delay: 0.3
                    }}
                    whileHover={{
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.2 }
                    }}
                />

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                        delay: 0.4
                    }}
                >
                    <Link to={routes.contact}>
                        <motion.button
                            className="bg-[#FF0000] cursor-pointer text-white font-medium flex items-center justify-center rounded-full h-[51px] px-6"
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 10px 25px rgba(255, 0, 0, 0.3)",
                                transition: { duration: 0.2 }
                            }}
                            whileTap={{ scale: 0.95 }}>
                            Contact Me
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.header>
        </nav>
    )
}

export default Header