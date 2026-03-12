import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export function PromoSection({ isEnglish }: { isEnglish: boolean }) {
    const features = isEnglish
        ? [
            { icon: ShieldCheck, title: "Secure Mipay Link" },
            { icon: CreditCard, title: "Mastercard Supported" },
            { icon: Sparkles, title: "XPAT Cashback Only" },
        ]
        : [
            { icon: ShieldCheck, title: "Pautan Mipay Selamat" },
            { icon: CreditCard, title: "Sokongan Mastercard" },
            { icon: Sparkles, title: "Cashback XPAT Sahaja" },
        ];

    return (
        <section className="relative overflow-hidden border-t border-white/60 bg-transparent py-24">
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
                        <div className="glass-card relative group overflow-hidden p-10 md:p-14">
                            {/* Red decorative sweep */}
                            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#d9e8f7] blur-[80px] transition-colors duration-500 group-hover:bg-[#cde2f6]" />
                            <div className="absolute -bottom-[10%] -left-[10%] h-32 w-32 bg-[#e6eef8] blur-[60px]" />

                            <h2 className="relative z-10 mb-6 text-4xl font-extrabold leading-tight text-[#60748d] md:text-5xl">
                                {isEnglish ? (
                                    <>
                                        RM30 FOR <br />
                                        <span className="bg-gradient-to-r from-[#5da9dd] to-[#4f87c5] bg-clip-text text-transparent">6 MONTHS</span><br />
                                        VALIDITY PERIOD
                                    </>
                                ) : (
                                    <>
                                        RM30 UNTUK<br />
                                        <span className="bg-gradient-to-r from-[#5da9dd] to-[#4f87c5] bg-clip-text text-transparent">TEMPOH SAH</span><br />
                                        SELAMA 6 BULAN
                                    </>
                                )}
                            </h2>

                            <div className="neu-pill relative z-10 inline-flex items-center gap-2 px-5 py-2.5">
                                <Sparkles className="h-5 w-5 text-s4s-blue" />
                                <span className="font-bold tracking-wide text-[#6f86a6]">
                                    {isEnglish ? "XPAT CASHBACK ONLY" : "CASHBACK XPAT SAHAJA"}
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            {features.map((item, idx) => (
                                <div key={idx} className="glass-card flex flex-col items-center justify-center gap-3 p-4 text-center">
                                    <div className="neu-card-soft flex h-10 w-10 items-center justify-center rounded-full">
                                        <item.icon className="h-5 w-5 text-[#5e7ea7]" />
                                    </div>
                                    <span className="text-xs font-semibold text-[#7287a0]">{item.title}</span>
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
                        <div className="glass-card relative overflow-hidden p-10 md:p-14">
                            <div className="absolute right-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-s4s-blue to-transparent opacity-45" />

                            <h3 className="mb-8 flex items-center gap-3 text-2xl font-bold text-[#60748d] md:text-3xl">
                                <div className="h-8 w-2 rounded-full bg-s4s-blue" />
                                {isEnglish ? "How To Reload?" : "Cara Tambah Nilai"}
                            </h3>

                            <ul className="space-y-6">
                                <li className="flex gap-4 items-start group">
                                    <div className="neu-card-soft mt-1 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full font-bold text-[#5a7ba4] transition-transform group-hover:scale-110">
                                        1
                                    </div>
                                    <p className="w-full border-b border-white/50 pb-6 pt-1 text-lg leading-relaxed text-[#6f859f]">
                                        {isEnglish
                                            ? "Top-up airtime credit via S4S channels to purchase plan."
                                            : "Tambah nilai kredit melalui saluran S4S untuk membeli pelan"}
                                    </p>
                                </li>
                                <li className="flex gap-4 items-start group">
                                    <div className="neu-card-soft mt-1 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full font-bold text-[#7f91a7] transition-colors group-hover:text-[#5a7ba4]">
                                        2
                                    </div>
                                    <p className="w-full pb-2 pt-1 text-lg leading-relaxed text-[#8a9db2]">
                                        {isEnglish
                                            ? "Select your preferred validity plan from the menu."
                                            : "Pilih pelan pilihan anda daripada menu"}
                                    </p>
                                </li>
                            </ul>

                            <Link to="/videos" className="neu-btn mt-10 flex w-full items-center justify-center gap-2 py-4 font-semibold text-[#637991] transition-colors hover:text-[#4f87c5]">
                                {isEnglish ? "Watch S4S Videos" : "Tonton Video S4S"}
                                <CheckCircle2 className="h-5 w-5 text-s4s-blue" />
                            </Link>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
