import React from 'react';
import { Link, useRouteError, isRouteErrorResponse } from 'react-router';
import { motion } from 'framer-motion';
import { Home, Danger, RefreshSquare, Setting2, Refresh2 } from 'iconsax-reactjs';
import routes from '@/routes';

const textVariants = {
    initial: {
        opacity: 0,
        scale: 0.5,
        rotateX: 90
    },
    animate: {
        opacity: 0.2,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.8,
            type: "spring",
            stiffness: 100,
            damping: 15
        }
    }
};

const buttonVariants = {
    initial: {
        opacity: 0,
        x: -20
    },
    animate: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: index * 0.2 + 0.4,
            type: "spring",
            stiffness: 100,
            damping: 14
        }
    }),
    hover: {
        scale: 1.05,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 10
        }
    },
    tap: {
        scale: 0.95,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 15
        }
    }
};

const dotVariants = {
    initial: {
        opacity: 0,
        scale: 0
    },
    animate: (custom) => ({
        opacity: [0.6, 0.8, 0.6],
        scale: [1, 1.5, 1],
        transition: {
            delay: custom.delay,
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
        }
    })
};

const NotFoundPage = () => {

    return (
        <div className="flex items-center justify-center w-full min-h-screen">
            <div className="w-full max-w-md mx-4">
                <div className="mb-8 text-center">
                    <div className="relative">
                        <motion.div className="text-8xl font-bold text-[#1F1F1F] select-none" variants={textVariants} initial="initial" animate="animate" >
                            404
                        </motion.div>
                    </div>
                </div>

                <div className="space-y-6 text-center">
                    <div className="space-y-2">
                        <motion.h1 className="text-2xl font-semibold text-[#282828]" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 100, damping: 12 }} >
                            Page Not Found
                        </motion.h1>
                        <motion.p className="text-[#303238]/70" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 12 }}>
                            The page you're looking for doesn't exist or has been moved.
                        </motion.p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={0} whileHover="hover" whileTap="tap">
                            <Link to={routes.home} className="w-full">
                                <button className="w-full flex items-center cursor-pointer justify-center py-3 font-medium text-[#1F1F1F] transition-all duration-200 rounded-lg border border-[#1F1F1F]">
                                    <Home className="inline-block w-4 h-4 mr-2" variant="Outline" />
                                    Back to Home Page
                                </button>
                            </Link>
                        </motion.div>

                        <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={1} whileHover="hover" whileTap="tap" >
                            <button onClick={() => window.history.back()} className="w-full rounded-lg border bg-[#1F1F1F] border-[#1F1F1F] py-3 text-[#FFF] cursor-pointer">
                                Go Back
                            </button>
                        </motion.div>
                    </div>
                </div>

                <motion.div className="absolute w-2 h-2 rounded-full bg-promax/60 top-20 left-10" variants={dotVariants} initial="initial" animate="animate" custom={{ delay: 0 }} />
                <motion.div className="absolute right-10 bottom-20 h-3 w-3 rounded-full bg-[#303238]/40" variants={dotVariants} initial="initial" animate="animate" custom={{ delay: 0.5 }} />
                <motion.div className="absolute w-1 h-1 rounded-full bg-promax/80 top-1/3 right-20" variants={dotVariants} initial="initial" animate="animate" custom={{ delay: 1 }} />
            </div>
        </div>
    );
};

const ErrorPage = () => {
    const error = useRouteError();
    const isDev = import.meta.env.NODE_ENV === 'development';

    const errorMessage = isRouteErrorResponse(error) ? error.statusText || error.data : error instanceof Error ? error.message : 'Unknown error occurred';

    const isChunkLoadError = error?.message?.includes('Failed to fetch dynamically imported module') || error?.message?.includes('Loading chunk') || error?.message?.includes('Loading CSS chunk') || error?.message?.toLowerCase()?.includes('loading failed');

    React.useEffect(() => {
        if (isChunkLoadError) {
            const reloadTimeout = setTimeout(() => {
                window.location.reload();
            }, 1000);

            return () => clearTimeout(reloadTimeout);
        }
    }, [isChunkLoadError]);

    const handleReload = () => {
        window.location.reload();
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-[#F7F7F7]">
            <div className="w-full max-w-lg mx-4">
                <div className="mb-8 text-center">
                    <div className="relative inline-block">
                        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-promax">
                            <Danger className="w-12 h-12 text-[#1F1F1F] animate-pulse" variant="Bold" />
                        </div>
                        <div className="absolute w-6 h-6 rounded-full bg-promax/75 -top-2 -right-2 animate-ping"></div>
                    </div>
                </div>

                <div className="space-y-6 text-center">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-semibold text-[#282828]">
                            {isChunkLoadError ? 'System Loading Error' : 'Error'}
                        </h1>
                        <p className="text-[#303238]/70">
                            {isChunkLoadError ? "We're automatically reloading to fix this issue..." : 'An unexpected error occurred.'}
                        </p>
                    </div>

                    {isDev && (
                        <div className="rounded-lg border border-[#303238]/20 bg-[#303238]/5 p-4 text-left">
                            <h3 className="mb-2 font-medium text-[#282828]">Error Details:</h3>
                            <code className="text-sm break-all">{errorMessage}</code>
                        </div>
                    )}

                    {isChunkLoadError && (
                        <div className="flex items-center justify-center space-x-2">
                            <RefreshSquare className="w-4 h-4 animate-spin" variant="Outline" />
                            <span className="text-sm">Reloading...</span>
                        </div>
                    )}

                    {!isChunkLoadError && (
                        <div className="space-y-3">
                            <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={1} whileHover="hover" whileTap="tap" >
                                <button onClick={handleReload} className="w-full flex items-center justify-center gap-3 rounded-lg border bg-[#1F1F1F] border-[#1F1F1F] py-3 text-[#FFF] cursor-pointer">
                                    <RefreshSquare className="w-4 h-4 mr-2" variant="Outline" />
                                    Reload
                                </button>
                            </motion.div>

                            <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={0} whileHover="hover" whileTap="tap">
                                <Link to={routes.home} className="w-full">
                                    <button className="w-full flex items-center cursor-pointer justify-center py-3 font-medium text-[#1F1F1F] transition-all duration-200 rounded-lg border border-[#1F1F1F]">
                                        <Home className="inline-block w-4 h-4 mr-2" variant="Outline" />
                                        Back to Home Page
                                    </button>
                                </Link>
                            </motion.div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const Loader = () => {
    const name = "TIMI YOUNG";

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

    const letterVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            rotateX: -90,
            scale: 0
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 12
            }
        }
    };

    const glowVariants = {
        animate: {
            boxShadow: [
                "0 0 20px rgba(255, 0, 0, 0.3)",
                "0 0 40px rgba(255, 0, 0, 0.6)",
                "0 0 20px rgba(255, 0, 0, 0.3)"
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const dotVariants = {
        animate: (custom) => ({
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
            transition: {
                duration: 1.5,
                repeat: Infinity,
                delay: custom * 0.2,
                ease: "easeInOut"
            }
        })
    };

    const waveVariants = {
        animate: {
            y: [0, -10, 0],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#F7F7F7] via-[#FFFFFF] to-[#F7F7F7] overflow-hidden">
            <div className="relative">
                {/* Background animated dots */}
                <motion.div
                    className="absolute w-2 h-2 rounded-full bg-[#FF0000]/30 -top-20 -left-20"
                    variants={dotVariants}
                    animate="animate"
                    custom={0}
                />
                <motion.div
                    className="absolute w-3 h-3 rounded-full bg-[#FF0000]/20 -top-10 right-10"
                    variants={dotVariants}
                    animate="animate"
                    custom={1}
                />
                <motion.div
                    className="absolute w-2 h-2 rounded-full bg-[#1F1F1F]/20 -bottom-16 -right-16"
                    variants={dotVariants}
                    animate="animate"
                    custom={2}
                />
                <motion.div
                    className="absolute w-2 h-2 rounded-full bg-[#FF0000]/40 bottom-0 -left-10"
                    variants={dotVariants}
                    animate="animate"
                    custom={3}
                />

                {/* Main content */}
                <div className="text-center space-y-8">
                    {/* Name animation */}
                    <motion.div
                        className="flex items-center justify-center gap-1 sm:gap-2"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {name.split('').map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={`text-5xl sm:text-7xl font-bold ${char === ' ' ? 'w-4' : ''
                                    } ${index < 4 ? 'text-[#1F1F1F]' : 'text-[#FF0000]'}`}
                                whileHover={{
                                    scale: 1.2,
                                    rotate: [0, -10, 10, 0],
                                    transition: { duration: 0.3 }
                                }}
                            >
                                {char === ' ' ? '\u00A0' : char}
                            </motion.span>
                        ))}
                    </motion.div>

                    {/* Loading indicator */}
                    <motion.div
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        {[0, 1, 2].map((index) => (
                            <motion.div
                                key={index}
                                className="w-3 h-3 rounded-full bg-[#FF0000]"
                                variants={waveVariants}
                                animate="animate"
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </motion.div>

                    {/* Loading text */}
                    <motion.p
                        className="text-[#1F1F1F]/60 text-sm font-medium tracking-wider"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                    >
                        LOADING...
                    </motion.p>

                    {/* Bottom line animation */}
                    <motion.div
                        className="w-32 h-1 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#FF0000] to-transparent"
                        initial={{ scaleX: 0, opacity: 0 }}
                        animate={{
                            scaleX: [0, 1, 0],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>

                {/* Rotating ring */}
                <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute top-1/2 left-1/2 w-64 h-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-[#FF0000]/20" />
                </motion.div>

                {/* Inner rotating ring */}
                <motion.div
                    className="absolute inset-0 -z-10"
                    animate={{
                        rotate: -360
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#1F1F1F]/10" />
                </motion.div>
            </div>
        </div>
    );
};


const WithSuspense = (Component) => {
    return function WithSuspenseWrapper(props) {
        return (
            <React.Suspense fallback={<Loader />}>
                <Component {...props} />
            </React.Suspense>
        );
    };
};

export { NotFoundPage, ErrorPage, Loader, WithSuspense };