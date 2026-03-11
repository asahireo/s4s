import { useState } from "react";
import { motion } from "framer-motion";
import { Wifi } from "lucide-react";
import { APP_LINKS } from "../constants/appLinks";

export function S4SSimCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    const homePreviewImage = `${import.meta.env.BASE_URL}s4shomepage.JPG`;

    return (
        <div className="relative flex translate-y-2 justify-center sm:translate-y-8 lg:translate-y-24 xl:translate-y-28">
            <div
                className="group relative h-48 w-72 cursor-pointer sm:h-[215px] sm:w-[340px]"
                style={{ perspective: "1000px" }}
                onClick={() => setIsFlipped((v) => !v)}
            >
                {/* Phone mockup behind SIM card */}
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="pointer-events-none absolute left-[-58px] top-[-258px] z-10 hidden rotate-[-10deg] md:block"
                >
                    <div className="relative h-[400px] w-[188px] rounded-[2.2rem] border border-white/60 bg-[linear-gradient(145deg,#edf2f8_0%,#d7e0ec_100%)] p-1.5 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.95),inset_-1px_-1px_1px_rgba(167,183,202,0.35),-14px_-14px_26px_rgba(255,255,255,0.88),14px_14px_30px_rgba(120,138,161,0.44)] sm:h-[470px] sm:w-[220px]">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-[linear-gradient(160deg,#d6dfeb_0%,#c8d4e3_100%)]">
                            <img
                                src={homePreviewImage}
                                alt="S4S app preview"
                                className="h-full w-full object-cover object-top"
                                loading="lazy"
                                draggable={false}
                            />
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#d7e1ee] to-transparent" />
                        </div>

                        <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-[#0c1b30] shadow-inner sm:w-28" />
                        <span className="absolute right-[-2px] top-24 h-12 w-[2px] rounded-full bg-[#a8b8cc] sm:top-28" />
                        <span className="absolute right-[-2px] top-40 h-16 w-[2px] rounded-full bg-[#a8b8cc] sm:top-44" />
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
                        className="absolute inset-0 overflow-hidden rounded-2xl border border-white/60 bg-[linear-gradient(145deg,#94c6ee_0%,#78aad3_100%)] p-6 shadow-[inset_2px_2px_3px_rgba(255,255,255,0.42),inset_-2px_-2px_4px_rgba(86,122,160,0.28),-14px_-14px_26px_rgba(255,255,255,0.86),14px_14px_30px_rgba(122,143,167,0.5)]"
                        style={{ backfaceVisibility: "hidden" }}
                    >
                        <div className="absolute bottom-0 left-0 h-[55%] w-[40%] rounded-tr-[100%] bg-[#D91F26] shadow-[inset_2px_2px_3px_rgba(255,255,255,0.2),2px_2px_6px_rgba(126,23,27,0.35)]" />

                        <div className="absolute top-1/2 right-8 flex h-12 w-16 -translate-y-1/2 items-center justify-center rounded-lg border border-[#997d28] bg-gradient-to-br from-[#FFD700] via-[#FDB931] to-[#D4AF37] shadow-[inset_1px_1px_2px_rgba(255,241,186,0.66),inset_-1px_-1px_2px_rgba(160,118,16,0.28),3px_3px_8px_rgba(125,103,32,0.35),-2px_-2px_6px_rgba(255,239,167,0.34)]">
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
                        className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/65 bg-[linear-gradient(145deg,#eef2f8_0%,#dbe3ee_100%)] p-6 text-center shadow-[inset_2px_2px_3px_rgba(255,255,255,0.52),inset_-2px_-2px_4px_rgba(147,167,191,0.26),-12px_-12px_24px_rgba(255,255,255,0.86),12px_12px_26px_rgba(125,143,166,0.45)]"
                        style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
                    >
                        <div className="absolute inset-0 bg-[#dce7f5]/30" />

                        {/* SIM Chip decorative on back */}
                        <div className="absolute left-4 top-4 flex h-8 w-10 items-center justify-center rounded border border-[#997d28]/30 bg-gradient-to-br from-[#ffd700]/20 to-[#d4af37]/20 opacity-50">
                            <div className="w-4 h-6 border border-[#B08D26]/30 rounded-sm" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center">
                            <h3 className="mb-2 text-xl font-bold text-[#60748d]">Ready to Join?</h3>
                            <p className="mb-6 text-sm text-[#7f92a8]">Get your SIM delivered today.</p>
                            <a
                                href={APP_LINKS.s4s}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="neu-btn neu-btn-primary inline-flex items-center justify-center rounded-lg px-6 py-2.5 font-semibold text-white"
                            >
                                Order Now
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -right-6 z-30 hidden rounded-xl border border-white/70 bg-[linear-gradient(145deg,#edf1f7_0%,#dbe3ee_100%)] p-3 shadow-[inset_1px_1px_1px_rgba(255,255,255,0.92),inset_-1px_-1px_2px_rgba(163,180,200,0.34),-10px_-10px_20px_rgba(255,255,255,0.82),10px_10px_22px_rgba(126,145,168,0.4)] md:block"
                >
                    <div className="flex items-center gap-2">
                        <Wifi className="w-5 h-5 text-s4s-blue" />
                        <span className="text-sm font-bold text-[#5f738b]">4G/5G Ready</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
