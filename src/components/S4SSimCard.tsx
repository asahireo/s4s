import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi } from "lucide-react";

export function S4SSimCard() {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="relative flex translate-y-5 justify-center sm:translate-y-6">
            <div
                className="relative w-80 h-52 sm:w-[340px] sm:h-[215px] group cursor-pointer"
                style={{ perspective: "1000px" }}
                onClick={() => setIsFlipped((v) => !v)}
            >
                {/* Phone mockup behind SIM card */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute left-[-42px] top-[-224px] z-10 rotate-[-10deg] sm:left-[-58px] sm:top-[-258px]"
                >
                    <div className="relative h-[400px] w-[188px] rounded-[2.2rem] border border-white/20 bg-[#0d1427] p-1.5 shadow-[0_25px_50px_rgba(0,0,0,0.55)] sm:h-[470px] sm:w-[220px]">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-slate-900">
                            <img
                                src="/s4shomepage.JPG"
                                alt="S4S app preview"
                                className="h-full w-full object-cover object-top"
                                loading="lazy"
                                draggable={false}
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1223]/80 to-transparent" />
                        </div>

                        <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80 shadow-inner sm:w-28" />
                        <span className="absolute right-[-2px] top-24 h-12 w-[2px] rounded-full bg-white/30 sm:top-28" />
                        <span className="absolute right-[-2px] top-40 h-16 w-[2px] rounded-full bg-white/30 sm:top-44" />
                    </div>
                </motion.div>

                <motion.div
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                    className="relative z-20 h-full w-full"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    {/* Front */}
                    <div
                        className="absolute inset-0 rounded-2xl bg-[#5DA9DD] p-6 shadow-2xl border border-white/10 overflow-hidden"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <div className="absolute bottom-0 left-0 w-[40%] h-[55%] bg-[#D91F26] rounded-tr-[100%]" />

                        <div className="absolute top-1/2 -translate-y-1/2 right-8 w-16 h-12 rounded-lg bg-gradient-to-br from-[#FFD700] via-[#FDB931] to-[#D4AF37] shadow-md flex items-center justify-center border border-[#997d28]">
                            <div className="w-full h-[1px] bg-[#B08D26] absolute top-[30%]" />
                            <div className="w-full h-[1px] bg-[#B08D26] absolute bottom-[30%]" />
                            <div className="h-full w-[1px] bg-[#B08D26] absolute left-[30%]" />
                            <div className="h-full w-[1px] bg-[#B08D26] absolute right-[30%]" />
                            <div className="w-6 h-8 border border-[#B08D26] rounded-sm" />
                        </div>

                        <div className="absolute bottom-6 left-6 w-full">
                            <div className="text-white font-black text-4xl italic tracking-tighter shadow-sm">S4S</div>
                        </div>
                    </div>

                    {/* Back */}
                    <div
                        className="absolute inset-0 rounded-2xl bg-slate-900 shadow-2xl border border-white/10 p-6 flex flex-col items-center justify-center text-center overflow-hidden"
                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    >
                        <div className="absolute inset-0 bg-s4s-blue/10" />

                        {/* SIM Chip decorative on back */}
                        <div className="absolute top-4 left-4 w-10 h-8 rounded bg-gradient-to-br from-[#FFD700]/20 to-[#D4AF37]/20 border border-[#997d28]/30 flex items-center justify-center opacity-50">
                            <div className="w-4 h-6 border border-[#B08D26]/30 rounded-sm" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="text-xl font-bold text-white mb-2">Ready to Join?</h3>
                            <p className="text-sm text-slate-300 mb-6">Get your SIM delivered today.</p>
                            <a
                                href="#"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center justify-center px-6 py-2.5 bg-s4s-action text-white rounded-lg font-semibold hover:bg-blue-500 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.5)] border border-blue-400/50"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-6 z-30 hidden rounded-xl p-3 shadow-[0_8px_30px_rgb(0,0,0,0.5)] glass-panel md:block"
                >
                    <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-s4s-blue" />
                        <span className="text-sm font-bold text-slate-100">4G/5G Ready</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
