import routes from "@/routes";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const StatusBanner = () => {
    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-0 w-full z-60 bg-black text-white px-4 py-4 md:py-3 flex items-center justify-center shadow-md"
        >
            <div className="flex flex-col md:flex-row max-w-322 w-full justify-between items-center gap-3 md:gap-0 text-center md:text-left">
                <div className="shrink-0">
                    {/* Adjusted text size and padding for mobile */}
                    <div className="bg-[#FFECD7] text-[#FF8801] px-4 py-2 md:px-5 md:py-2.5 rounded-full flex items-center gap-2 text-sm md:text-base">
                        <motion.span
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="w-2 h-2 rounded-full bg-[#FF8801]"
                        />
                        <span className="">In Progress</span>
                    </div>
                </div>

                <div className="text-white text-sm md:text-base  px-2">
                    <span>This portfolio is actively being refined.<span className="hidden sm:inline"> Some case studies are in progress.</span></span>
                </div>
                <div className="text-[#818181] text-xs md:text-base ">
                    Last updated: December 2025
                </div>
            </div>
        </motion.div>
    );
};

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
            <StatusBanner />

            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.2
                }}
                style={{ opacity: headerOpacity }}
                // RESPONSIVE CHANGES:
                // 1. top-36 (mobile) to top-20 (desktop/md) -> Accounts for taller banner on mobile
                // 2. w-[92%] (mobile) -> Ensures margin on sides, max-w-322 keeps it constrained on desktop
                // 3. mx-auto -> Centers the header within the viewport
                className={`flex fixed z-50 top-36 md:top-20 items-center w-[92%] md:w-full justify-between gap-4 sm:gap-10 max-w-322 rounded-full py-2.5 md:py-3.5 px-4 left-0 right-0 mx-auto transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}
            >
                <Link to={routes.home}>
                    <motion.img
                        src="/logo.png"
                        // Smaller logo on mobile (h-10) -> Normal on desktop (md:h-14)
                        className="h-10 w-10 md:h-14 md:w-14"
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
                </Link>
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
                            // Adjusted height and padding for mobile
                            className="bg-[#FF0000] cursor-pointer text-white text-sm md:text-base font-medium flex items-center justify-center rounded-full h-[40px] md:h-[51px] px-5 md:px-6"
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
