import { SEOConfig } from "@/utilities/SEOConfig"
import { SEOHelmet } from "@/components"
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const ContactPage = () => {
    const pageSEO = SEOConfig.pages.contact;
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
    });

    const socialLinks = [
        {
            name: "Email",
            link: "timilehinomotundeyoung@gmail.com",
        },
        {
            name: "LinkedIn",
            link: "linkedin.com/in/timiyoung",
        },
        {
            name: "Twitter/X",
            link: "twitter.com/timiyoung",
        },
        {
            name: "Behance",
            link: "behance.net/timiyoung",
        }
    ]

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            toast.error("Please fill in all required fields", {
                description: "Name, Email, and Message are required"
            });
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error("Invalid email address", {
                description: "Please enter a valid email"
            });
            return;
        }

        setLoading(true);
        const loadingToast = toast.loading("Sending your message...");

        try {
            const response = await axios.post("/api/contact", formData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            toast.dismiss(loadingToast);
            toast.success("Message sent successfully!", {
                description: "Thank you for reaching out. I'll get back to you soon."
            });

            setFormData({
                name: "",
                company: "",
                email: "",
                phone: "",
                message: ""
            });

        } catch (error) {
            toast.dismiss(loadingToast);
            
            if (error.response) {
                // Server responded with error
                toast.error("Failed to send message", {
                    description: error.response.data?.message || "Something went wrong. Please try again."
                });
            } else if (error.request) {
                // Request made but no response
                toast.error("Network error", {
                    description: "Please check your internet connection and try again."
                });
            } else {
                // Something else happened
                toast.error("An error occurred", {
                    description: "Please try again later."
                });
            }

            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
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
                damping: 15
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

    const socialCardVariants = {
        hidden: { 
            opacity: 0,
            x: -20,
            scale: 0.9
        },
        visible: { 
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    const formContainerVariants = {
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
                stiffness: 80,
                damping: 15,
                staggerChildren: 0.08,
                delayChildren: 0.3
            }
        }
    };

    const inputVariants = {
        hidden: { 
            opacity: 0,
            x: -20
        },
        visible: { 
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <>
            <SEOHelmet title={pageSEO.title} description={pageSEO.description} keywords={pageSEO.keywords} canonical={pageSEO.canonical} />
            <section className="flex items-center justify-center flex-col pt-12 pb-20 px-4 w-full gap-[98px]">
                <motion.div 
                    className="flex flex-col items-center justify-center gap-20 w-full max-w-[1288px]"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        className="flex flex-col items-center justify-center gap-3"
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className="text-[#1F1F1F] font-black text-center text-[56px] sm:text-[100px] tracking-tight leading-[100%]"
                            variants={titleVariants}
                        >
                            Let's connect.
                        </motion.h1>
                        <motion.span 
                            className="text-base font-ppnm sm:text-xl max-w-[580px] text-center text-[#383838] font-medium"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, type: "spring", stiffness: 100, damping: 15 }}
                        >
                            I'm always open to collaborations, freelance projects, or full-time opportunities that challenge creativity and make real impact. Whether you want to discuss a new idea, review a concept, or just connect  I'd love to hear from you.
                        </motion.span>
                    </motion.div>

                    <motion.div 
                        className="flex flex-wrap items-center justify-start sm:justify-between gap-6 w-full"
                        variants={containerVariants}
                    >
                        {socialLinks.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className="flex flex-col items-start justify-start gap-2"
                                variants={socialCardVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { type: "spring", stiffness: 300, damping: 15 }
                                }}
                            >
                                <motion.div 
                                    className="font-medium text-[#1F1F1F] text-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    {item.name}
                                </motion.div>
                                <motion.a 
                                    href={item.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="flex items-end gap-2.5 text-[#383838] font-ppnm group"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                    {item.link} 
                                    <motion.div
                                        whileHover={{ 
                                            rotate: 45,
                                            scale: 1.2,
                                            transition: { type: "spring", stiffness: 300, damping: 15 }
                                        }}
                                    >
                                        <ExternalLink className="text-[#0090FF] h-5 w-5" />
                                    </motion.div>
                                </motion.a>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.form 
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-y-9 gap-x-8 w-full bg-[#FFFFFF] max-w-[1288px] rounded-2xl p-6"
                    variants={formContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.input 
                        type="text" 
                        className="bg-transparent border-b border-b-[#CCCCCC] w-full text-[32px] placeholder:text-[32px] text-[#9C9C9C] font-black py-4 px-2 outline-none focus:outline-none transition-colors focus:border-b-[#FF0000]" 
                        placeholder="Name*" 
                        name="name" 
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={loading}
                        variants={inputVariants}
                        whileFocus={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    />
                    <motion.input 
                        type="text" 
                        className="bg-transparent border-b border-b-[#CCCCCC] w-full text-[32px] placeholder:text-[32px] text-[#9C9C9C] font-black py-4 px-2 outline-none focus:outline-none transition-colors focus:border-b-[#FF0000]" 
                        placeholder="Company" 
                        name="company" 
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={loading}
                        variants={inputVariants}
                        whileFocus={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    />
                    <motion.input 
                        type="email" 
                        className="bg-transparent border-b border-b-[#CCCCCC] w-full text-[32px] placeholder:text-[32px] text-[#9C9C9C] font-black py-4 px-2 outline-none focus:outline-none transition-colors focus:border-b-[#FF0000]" 
                        placeholder="Email*" 
                        name="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={loading}
                        variants={inputVariants}
                        whileFocus={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    />
                    <motion.input 
                        type="tel" 
                        className="bg-transparent border-b border-b-[#CCCCCC] w-full text-[32px] placeholder:text-[32px] text-[#9C9C9C] font-black py-4 px-2 outline-none focus:outline-none transition-colors focus:border-b-[#FF0000]" 
                        placeholder="Phone" 
                        name="phone" 
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={loading}
                        variants={inputVariants}
                        whileFocus={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    />
                    <motion.input 
                        type="text" 
                        className="bg-transparent sm:col-span-2 border-b border-b-[#CCCCCC] w-full text-[32px] placeholder:text-[32px] text-[#9C9C9C] font-black py-4 px-2 outline-none focus:outline-none transition-colors focus:border-b-[#FF0000]" 
                        placeholder="Message*" 
                        name="message" 
                        id="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={loading}
                        variants={inputVariants}
                        whileFocus={{ 
                            scale: 1.02,
                            transition: { type: "spring", stiffness: 300, damping: 20 }
                        }}
                    />
                    <motion.div 
                        className="flex"
                        variants={inputVariants}
                    >
                        <motion.button 
                            type="submit"
                            className="bg-[#000000] text-[#FFFFFF] font-medium cursor-pointer flex items-center justify-center rounded-full px-6 h-[51px] disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading}
                            whileHover={!loading ? { 
                                scale: 1.05,
                                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                                transition: { type: "spring", stiffness: 300, damping: 15 }
                            } : {}}
                            whileTap={!loading ? { scale: 0.95 } : {}}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, type: "spring", stiffness: 100, damping: 15 }}
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </motion.button>
                    </motion.div>
                </motion.form>
            </section>
        </>
    )
}

export default ContactPage