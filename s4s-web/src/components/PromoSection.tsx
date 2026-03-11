import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

export function PromoSection({ isEnglish }: { isEnglish: boolean }) {
    const features = isEnglish
        ? [
            { icon: ShieldCheck, title: "Secure Mipay Link" },
            { icon: CreditCard, title: "Mastercard Supported" },
            { icon: Sparkles, title: "Exclusive Rewards" },
        ]
        : [
            { icon: ShieldCheck, title: "Pautan Mipay Selamat" },
            { icon: CreditCard, title: "Sokongan Mastercard" },
            { icon: Sparkles, title: "Ganjaran Eksklusif" },
        ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-900 border-t border-white/5">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-center">

                    {/* Bento Box Left - RM30 Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="glass-card p-10 md:p-14 relative overflow-hidden group">
                            {/* Red decorative sweep */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-s4s-red/20 rounded-full blur-[80px] group-hover:bg-s4s-red/30 transition-colors duration-500" />
                            <div className="absolute -left-[10%] -bottom-[10%] w-32 h-32 bg-s4s-gold-light/20 blur-[60px]" />

                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 relative z-10 leading-tight">
                                {isEnglish ? (
                                    <>
                                        RM30 FOR <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-s4s-red to-orange-500">6 MONTHS</span><br />
                                        VALIDITY PERIOD
                                    </>
                                ) : (
                                    <>
                                        RM30 UNTUK<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-s4s-red to-orange-500">TEMPOH SAH</span><br />
                                        SELAMA 6 BULAN
                                    </>
                                )}
                            </h2>

                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-s4s-gold/10 border border-s4s-gold/30 backdrop-blur-sm shadow-[0_4px_15px_rgba(253,185,49,0.15)] relative z-10">
                                <Sparkles className="w-5 h-5 text-s4s-gold" />
                                <span className="font-bold text-s4s-gold tracking-wide">
                                    {isEnglish ? "LINKED TO SWIMS PROGRAM" : "KOMUNITI PROGRAM SWIMS"}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {features.map((item, idx) => (
                                <div key={idx} className="glass-card p-4 flex flex-col items-center justify-center text-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-s4s-blue/10 flex items-center justify-center border border-s4s-blue/20">
                                        <item.icon className="w-5 h-5 text-s4s-blue" />
                                    </div>
                                    <span className="text-xs font-semibold text-slate-300">{item.title}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Bento Box Right - How To Reload */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass-card p-10 md:p-14 border-s4s-blue/20 backdrop-blur-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-s4s-blue to-transparent opacity-50" />

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
                                <div className="w-2 h-8 bg-s4s-blue rounded-full" />
                                {isEnglish ? "How To Reload?" : "Bagaimana Untuk Tambah Nilai ?"}
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start group">
                                    <div className="w-8 h-8 rounded-full bg-s4s-blue/20 text-s4s-blue flex items-center justify-center font-bold shrink-0 mt-1 shadow-[0_0_15px_rgba(93,169,221,0.3)] group-hover:scale-110 transition-transform cursor-default">
                                        1
                                    </div>
                                    <p className="text-slate-300 text-lg leading-relaxed pt-1 w-full border-b border-white/5 pb-6">
                                        {isEnglish
                                            ? "Top-up airtime credit via S4S channels to purchase plan."
                                            : "Tambah nilai kredit masa siaran melalui saluran S4S untuk pelan pembelian."}
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start group">
                                    <div className="w-8 h-8 rounded-full bg-white/5 text-slate-400 flex items-center justify-center font-bold shrink-0 mt-1 group-hover:bg-s4s-blue/20 group-hover:text-s4s-blue transition-colors cursor-default">
                                        2
                                    </div>
                                    <p className="text-slate-500 text-lg leading-relaxed pt-1 w-full pb-2">
                                        {isEnglish
                                            ? "Select your preferred validity plan from the menu."
                                            : "Pilih pelan sah pilihan anda dari menu."}
                                    </p>
                                </li>
                            </ul>

                            <button className="w-full mt-10 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold border border-white/10 transition-colors flex justify-center items-center gap-2 group">
                                {isEnglish ? "View Supported Channels" : "Lihat Saluran Disokong"}
                                <CheckCircle2 className="w-5 h-5 text-s4s-blue" />
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
