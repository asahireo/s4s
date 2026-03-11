import { motion } from "framer-motion";
import { S4SSimCard } from "./S4SSimCard";
import { ArrowRight, Globe } from "lucide-react";

export function HeroBanner({ isEnglish }: { isEnglish: boolean }) {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 bg-[#0f172a]" />
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-s4s-blue/20 blur-[120px]" />
                <div className="absolute bottom-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-s4s-red/10 blur-[100px]" />
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
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-s4s-blue/10 border border-s4s-blue/30 w-fit backdrop-blur-sm">
                            <Globe className="w-4 h-4 text-s4s-blue" />
                            <span className="text-sm font-medium text-s4s-blue tracking-wide uppercase">
                                {isEnglish ? "Available Nationwide" : "Tersedia Seluruh Negara"}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                            {isEnglish ? (
                                <>
                                    THE <span className="text-gradient-gold">ONLY</span> MOBILE SIM WITH 6 MONTH VALIDITY
                                </>
                            ) : (
                                <>
                                    SATU-SATUNYA SIM MOBILE DENGAN TEMPOH SAH <span className="text-gradient-gold">6 BULAN</span>
                                </>
                            )}
                        </h1>

                        <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                            {isEnglish
                                ? "Experience uninterrupted connectivity. Linked directly to the Prepaid MiPay Mastercard."
                                : "Alami sambungan tanpa gangguan. Dihubungkan terus ke Mastercard Prabayar MiPay."
                            }
                        </p>

                        <div className="flex flex-wrap items-center gap-4 mt-4">
                            <button className="px-8 py-4 bg-s4s-blue text-white rounded-xl font-bold hover:bg-blue-400 transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(93,169,221,0.4)] hover:shadow-[0_0_30px_rgba(93,169,221,0.6)]">
                                {isEnglish ? "Get Started" : "Mula Sekarang"}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button className="px-8 py-4 glass-panel text-white rounded-xl font-bold hover:bg-white/10 transition-all">
                                {isEnglish ? "Learn More" : "Ketahui Lebih Lanjut"}
                            </button>
                        </div>
                    </motion.div>

                    {/* Interactive SIM Right */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2, type: "spring" }}
                        className="flex justify-center items-center lg:justify-end relative"
                    >
                        {/* Glowing Aura Behind Card */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-s4s-blue/30 rounded-full blur-[80px] pointer-events-none" />
                        <S4SSimCard />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
