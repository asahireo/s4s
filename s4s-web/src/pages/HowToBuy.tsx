import { useMemo, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MousePointer2 } from "lucide-react";

type Copy = {
    en: string;
    bm: string;
};

type PlanType = "F22" | "F25";

type PlanStep = {
    title: Copy;
    description: Copy;
    image: string;
};

type PlanDefinition = {
    label: Copy;
    intro: Copy;
    steps: PlanStep[];
};

const planData: Record<PlanType, PlanDefinition> = {
    F22: {
        label: { en: "F22 Plan", bm: "Pelan F22" },
        intro: {
            en: "TOP UP - S4S (F22) via MiPay",
            bm: "TOP UP - S4S (F22) melalui MiPay"
        },
        steps: [
            {
                title: { en: "DIAL THIS NUMBER", bm: "DIAL NOMBOR INI" },
                description: {
                    en: "Dial *150*1# on your phone dialer.",
                    bm: "Dail *150*1# pada papan dail telefon anda."
                },
                image: "/f22/1.png"
            },
            {
                title: { en: "CHECK THESE 3 THINGS", bm: "SEMAK 3 PERKARA INI" },
                description: {
                    en: "Check Active Till, Airtime, and Data Plan: F22 in the popup.",
                    bm: "Semak Active Till, Airtime, dan Data Plan: F22 pada pop-up."
                },
                image: "/f22/2.png"
            },
            {
                title: { en: "OPEN MIPAY APP AND CLICK HERE", bm: "BUKA APLIKASI MIPAY DAN KLIK DI SINI" },
                description: {
                    en: "Open MiPay app and tap Prepaid Reload.",
                    bm: "Buka aplikasi MiPay dan tekan Prepaid Reload."
                },
                image: "/f22/3.png"
            },
            {
                title: { en: "CLICK S4S", bm: "KLIK S4S" },
                description: {
                    en: "In Prepaid Reload, choose S4S.",
                    bm: "Dalam Prepaid Reload, pilih S4S."
                },
                image: "/f22/4.png"
            },
            {
                title: { en: "RELOAD YOUR SIM CARD WITH ANY AMOUNT", bm: "TOP UP SIM KAD ANDA DENGAN APA-APA AMAUN" },
                description: {
                    en: "Select the reload amount and tap Continue.",
                    bm: "Pilih amaun top up dan tekan Continue."
                },
                image: "/f22/5.png"
            }
        ]
    },
    F25: {
        label: { en: "F25 Plan", bm: "Pelan F25" },
        intro: {
            en: "TOP UP & NEW PLAN - F25 PLAN via MiPay + SMS",
            bm: "TOP UP & PELAN BARU - PELAN F25 melalui MiPay + SMS"
        },
        steps: [
            {
                title: { en: "DIAL THIS NUMBER", bm: "DIAL NOMBOR INI" },
                description: {
                    en: "Dial *150*1# on your phone dialer.",
                    bm: "Dail *150*1# pada papan dail telefon anda."
                },
                image: "/f25/1.png"
            },
            {
                title: { en: "CHECK THESE 3 THINGS", bm: "SEMAK 3 PERKARA INI" },
                description: {
                    en: "Check Active Till, Airtime, and current data plan in the popup.",
                    bm: "Semak Active Till, Airtime, dan pelan data semasa pada pop-up."
                },
                image: "/f25/2.png"
            },
            {
                title: { en: "OPEN MIPAY APP AND CLICK HERE", bm: "BUKA APLIKASI MIPAY DAN KLIK DI SINI" },
                description: {
                    en: "Open MiPay app and tap Prepaid Reload.",
                    bm: "Buka aplikasi MiPay dan tekan Prepaid Reload."
                },
                image: "/f25/3.png"
            },
            {
                title: { en: "CLICK ONEXOX", bm: "KLIK ONEXOX" },
                description: {
                    en: "In Prepaid Reload, choose ONEXOX.",
                    bm: "Dalam Prepaid Reload, pilih ONEXOX."
                },
                image: "/f25/4.png"
            },
            {
                title: { en: "BUY THE PACKAGE 2 TIMES", bm: "BELI PAKEJ 2 KALI" },
                description: {
                    en: "Buy the ONEXOX reload package two times in MiPay.",
                    bm: "Beli pakej reload ONEXOX sebanyak dua kali dalam MiPay."
                },
                image: "/f25/5.png"
            },
            {
                title: { en: "FIND THE PIN", bm: "CARI PIN" },
                description: {
                    en: "Open the SMS and find the reload PIN number.",
                    bm: "Buka SMS dan cari nombor PIN reload."
                },
                image: "/f25/6.png"
            },
            {
                title: { en: "DIAL THE PIN TO RELOAD *150*2*PIN NO#", bm: "DIAL PIN UNTUK RELOAD *150*2*PIN NO#" },
                description: {
                    en: "Dial *150*2*<PIN NO># to perform the reload.",
                    bm: "Dail *150*2*<PIN NO># untuk buat reload."
                },
                image: "/f25/7.png"
            },
            {
                title: { en: "NOW BUY THE PACKAGE", bm: "SEKARANG BELI PAKEJ" },
                description: {
                    en: "Send SMS (for example: DATA F25) to buy and activate the package.",
                    bm: "Hantar SMS (contoh: DATA F25) untuk beli dan aktifkan pakej."
                },
                image: "/f25/8.png"
            }
        ]
    }
};

const contentByLanguage = {
    heading: { en: "How To Buy", bm: "Cara Membeli" },
    subheading: {
        en: "Follow the exact step flow shown for F22 and F25.",
        bm: "Ikuti aliran langkah yang tepat seperti ditunjukkan untuk F22 dan F25."
    },
    swipeHint: { en: "Swipe steps", bm: "Leret langkah" },
    stepLabel: { en: "Step", bm: "Langkah" }
};

const containerMotion: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.05 }
    }
};

const cardMotion: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.38 }
    }
};

export function HowToBuy({ isEnglish }: { isEnglish: boolean }) {
    const [activeTab, setActiveTab] = useState<PlanType>("F22");

    const t = (copy: Copy) => (isEnglish ? copy.en : copy.bm);
    const tabs = useMemo(() => (Object.keys(planData) as PlanType[]), []);
    const activePlan = planData[activeTab];

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#0b1223] pb-24 pt-32">
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-s4s-blue/20 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-[-140px] left-[-140px] h-[360px] w-[360px] rounded-full bg-s4s-red/10 blur-[120px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                        {t(contentByLanguage.heading)}
                    </h1>
                    <p className="text-base text-slate-300 md:text-lg">
                        {t(contentByLanguage.subheading)}
                    </p>
                </div>

                <div className="mb-8 flex justify-center">
                    <div className="relative flex gap-1 rounded-2xl border border-white/15 bg-slate-900/70 p-1.5 shadow-[0_15px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
                        {tabs.map((tab) => {
                            const isActive = activeTab === tab;
                            return (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative z-10 overflow-hidden rounded-xl px-6 py-3 text-sm font-bold transition-colors md:px-8 ${isActive ? "text-white" : "text-slate-300 hover:text-white"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTabBadge"
                                            className="absolute inset-0 bg-gradient-to-r from-s4s-blue to-[#3B82F6] shadow-[0_0_26px_rgba(93,169,221,0.55)]"
                                            transition={{ type: "spring", stiffness: 420, damping: 34 }}
                                        />
                                    )}
                                    <span className="relative z-20">{t(planData[tab].label)}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.99 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="relative rounded-[2rem] border border-white/10 bg-slate-900/50 p-4 shadow-[0_35px_70px_-30px_rgba(0,0,0,0.75)] backdrop-blur-2xl sm:p-6"
                    >
                        <div className="mb-6 flex items-center justify-between gap-3">
                            <p className="max-w-2xl text-sm text-slate-300 md:text-base">
                                {t(activePlan.intro)}
                            </p>
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 text-xs font-medium text-slate-200 md:hidden">
                                <MousePointer2 className="h-3.5 w-3.5 animate-pulse text-s4s-blue" />
                                <span>{t(contentByLanguage.swipeHint)}</span>
                            </div>
                        </div>

                        <div className="pointer-events-none absolute bottom-6 left-4 top-24 z-20 w-8 bg-gradient-to-r from-[#0b1223] to-transparent md:hidden" />
                        <div className="pointer-events-none absolute bottom-6 right-4 top-24 z-20 w-8 bg-gradient-to-l from-[#0b1223] to-transparent md:hidden" />

                        <motion.div
                            variants={containerMotion}
                            initial="hidden"
                            animate="visible"
                            className="grid snap-x snap-mandatory grid-flow-col auto-cols-[88%] gap-4 overflow-x-auto px-1 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid-flow-row md:auto-cols-auto md:grid-cols-2 md:gap-6 md:overflow-visible md:snap-none xl:grid-cols-3"
                        >
                            {activePlan.steps.map((step, index) => (
                                <motion.article
                                    key={`${activeTab}-${step.image}`}
                                    variants={cardMotion}
                                    whileHover={{ y: -4 }}
                                    className="relative snap-center rounded-3xl border border-white/15 bg-gradient-to-b from-white/14 to-white/6 p-4 shadow-[0_14px_35px_rgba(8,15,28,0.55)] backdrop-blur-xl transition-colors hover:border-s4s-blue/60 sm:p-5"
                                >
                                    {index < activePlan.steps.length - 1 && (
                                        <span className="absolute right-[-18px] top-[42px] hidden h-px w-8 bg-gradient-to-r from-s4s-blue/50 to-transparent xl:block" />
                                    )}

                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-s4s-blue/20">
                                            <span className="absolute inset-0 rounded-full border border-s4s-blue/70 shadow-[0_0_18px_rgba(93,169,221,0.65)]" />
                                            <span className="relative text-lg font-black text-white">{index + 1}</span>
                                        </div>
                                        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">
                                            {t(contentByLanguage.stepLabel)}
                                        </p>
                                    </div>

                                    <div className="mb-5 rounded-2xl border border-white/20 bg-gradient-to-b from-slate-700/25 to-slate-900/45 p-2">
                                        <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080d1b] p-2 shadow-inner">
                                            <img
                                                src={step.image}
                                                alt={`${t(step.title)} screenshot`}
                                                className="mx-auto h-auto w-full max-w-[280px] rounded-lg object-contain"
                                                draggable={false}
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>

                                    <h3 className="mb-2 text-lg font-bold text-white">
                                        {t(step.title)}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-slate-300">
                                        {t(step.description)}
                                    </p>
                                </motion.article>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
