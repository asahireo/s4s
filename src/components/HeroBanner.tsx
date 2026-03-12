import { motion } from "framer-motion";
import { S4SSimCard } from "./S4SSimCard";
import { ArrowRight, Globe } from "lucide-react";
import { Link } from "react-router-dom";

export function HeroBanner({ isEnglish }: { isEnglish: boolean }) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-transparent" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] h-[70%] w-[70%] rounded-full bg-[#d8e8f8] blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-[#eaf0f8] blur-[100px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6"
                    >
                        <div className="neu-pill inline-flex w-fit items-center gap-2 px-4 py-2">
                            <Globe className="h-4 w-4 text-s4s-blue" />
                            <span className="text-sm font-semibold tracking-wide uppercase text-[#6d83a1]">
                                {isEnglish ? "Available Nationwide" : "Tersedia Seluruh Negara"}
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-[#5f738b] leading-[1.1] tracking-tight">
                            {isEnglish ? (
                                <>
                                    MOBILE SIM WITH 6 MONTH VALIDITY
                                </>
                            ) : (
                                <>
                                    KAD SIM MUDAH ALIH DENGAN TEMPOH SAH SEHINGGA <span className="text-gradient-gold">6 BULAN</span>
                                </>
                            )}
                        </h1>

                        <p className="max-w-xl text-lg leading-relaxed text-[#7488a0] md:text-xl">
                            {isEnglish
                                ? "Experience uninterrupted connectivity. Linked directly to the Prepaid MiPay Mastercard."
                                : "Nikmati sambungan tanpa gangguan. Dihubungkan terus dengan Kad Prabayar MiPAY Mastercard."
                            }
                        </p>

                        <div className="mt-4 flex flex-wrap items-center gap-4">
                            <Link to="/how-to-buy" className="neu-btn neu-btn-primary group flex items-center gap-2 px-8 py-4 font-bold text-white">
                                {isEnglish ? "Get Started" : "Mula Sekarang"}
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link to="/videos" className="neu-btn px-8 py-4 font-bold text-[#6e7f95]">
                                {isEnglish ? "Watch Videos" : "Tonton Video"}
                            </Link>
                        </div>
                    </motion.div>

                    {/* Interactive SIM Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                        className="relative mt-12 flex items-center justify-center sm:mt-16 lg:mt-0 lg:justify-end"
                    >
                        {/* Glowing Aura Behind Card */}
                        <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d2e5f7] blur-[75px]" />
                        <S4SSimCard isEnglish={isEnglish} />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
