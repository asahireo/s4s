import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";

import { RewardsEligibilityGrid } from "../components/rewards/RewardsEligibilityGrid";
import { RewardsFaq } from "../components/rewards/RewardsFaq";
import { RewardsFlowVisual } from "../components/rewards/RewardsFlowVisual";
import { RewardsStatCard } from "../components/rewards/RewardsStatCard";
import { APP_LINKS } from "../constants/appLinks";
import { REWARDS_POLICY, type Copy } from "../constants/rewardsPolicy";

function formatCurrency(amount: number) {
    return `RM${amount.toFixed(2)}`;
}

export function Rewards({ isEnglish }: { isEnglish: boolean }) {
    const prefersReducedMotion = useReducedMotion();
    const t = (copy: Copy) => (isEnglish ? copy.en : copy.bm);

    const customerRateDecimal = REWARDS_POLICY.rates.customerCashbackPercent / 100;
    const merchantRateDecimal = REWARDS_POLICY.rates.merchantDirectPercent / 100;

    const sectionMotion = (delay = 0) =>
        prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 24 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true, margin: "-90px" },
                transition: { duration: 0.45, delay }
            };

    return (
        <section className="relative min-h-screen overflow-hidden bg-transparent pb-24 pt-32">
            <div className="pointer-events-none absolute right-[-130px] top-[-130px] h-[380px] w-[380px] rounded-full bg-[#d3e5f8] blur-[120px]" />
            <div className="pointer-events-none absolute bottom-[-180px] left-[-180px] h-[380px] w-[380px] rounded-full bg-[#e5eef9] blur-[130px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                <motion.div
                    {...sectionMotion()}
                    className="rewards-surface-strong rewards-readable-overlay mb-10 rounded-[2rem] p-6 sm:p-8 lg:p-10"
                >
                    <span className="rewards-badge inline-flex">{t(REWARDS_POLICY.hero.eyebrow)}</span>
                    <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#5d7593] sm:text-5xl lg:text-6xl">
                        {t(REWARDS_POLICY.hero.heading)}
                    </h1>
                    <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6f859f] sm:text-lg">
                        {t(REWARDS_POLICY.hero.subheading)}
                    </p>

                    <div className="rewards-note mt-5 inline-flex items-start gap-2 rounded-xl px-4 py-3">
                        <Info className="mt-0.5 h-4 w-4 text-[#5b8fc8]" />
                        <p className="text-xs leading-relaxed text-[#6f839c] sm:text-sm">{t(REWARDS_POLICY.legalNotice)}</p>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                        <a
                            href={APP_LINKS.s4s}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neu-btn neu-btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold sm:px-7 sm:py-3.5"
                        >
                            {t(REWARDS_POLICY.bottomCta.primary)}
                            <ArrowRight className="h-4 w-4" />
                        </a>
                        <a
                            href={APP_LINKS.xpat}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neu-btn inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-[#60748d] sm:px-7 sm:py-3.5"
                        >
                            {t(REWARDS_POLICY.bottomCta.secondary)}
                        </a>
                        <Link
                            to="/how-to-buy"
                            className="text-sm font-semibold text-[#5e7ea6] transition-colors hover:text-[#4f87c5]"
                        >
                            {t(REWARDS_POLICY.bottomCta.tertiary)}
                        </Link>
                    </div>
                </motion.div>

                <motion.div {...sectionMotion(0.06)} className="mb-12">
                    <RewardsFlowVisual
                        title={t(REWARDS_POLICY.sections.flowTitle)}
                        steps={REWARDS_POLICY.flowSteps.map((step) => ({
                            id: step.id,
                            title: t(step.title),
                            description: t(step.description)
                        }))}
                    />
                </motion.div>

                <motion.div {...sectionMotion(0.08)} className="mb-12 space-y-5">
                    <h2 className="text-2xl font-extrabold text-[#60748d] sm:text-3xl">{t(REWARDS_POLICY.sections.eligibilityTitle)}</h2>
                    <RewardsEligibilityGrid
                        eligibleTitle={t(REWARDS_POLICY.channels.eligibleTitle)}
                        ineligibleTitle={t(REWARDS_POLICY.channels.ineligibleTitle)}
                        eligibleChannels={REWARDS_POLICY.channels.eligible.map((item) => t(item))}
                        ineligibleChannels={REWARDS_POLICY.channels.ineligible.map((item) => t(item))}
                    />
                </motion.div>

                <motion.div {...sectionMotion(0.1)} className="mb-12 space-y-5">
                    <h2 className="text-2xl font-extrabold text-[#60748d] sm:text-3xl">{t(REWARDS_POLICY.sections.ratesTitle)}</h2>
                    <div className="grid gap-5 md:grid-cols-3">
                        {REWARDS_POLICY.rateCards.map((card) => (
                            <RewardsStatCard
                                key={card.id}
                                title={t(card.title)}
                                value={card.value}
                                description={t(card.description)}
                                tone={card.tone}
                            />
                        ))}
                    </div>
                </motion.div>

                <motion.div {...sectionMotion(0.12)} className="mb-12 space-y-5">
                    <h2 className="text-2xl font-extrabold text-[#60748d] sm:text-3xl">{t(REWARDS_POLICY.sections.examplesTitle)}</h2>
                    <div className="grid gap-5 md:grid-cols-2">
                        {REWARDS_POLICY.examples.map((example) => {
                            const customerAmount = example.amount * customerRateDecimal;
                            const merchantAmount = example.amount * merchantRateDecimal;

                            return (
                                <article key={example.id} className="rewards-surface-soft rounded-3xl p-5 sm:p-6">
                                    <h3 className="text-lg font-bold text-[#5f7898]">{t(example.title)}</h3>
                                    <p className="mt-1 text-sm text-[#7890aa]">
                                        {formatCurrency(example.amount)} x {REWARDS_POLICY.rates.customerCashbackPercent}% / {REWARDS_POLICY.rates.merchantDirectPercent}%
                                    </p>
                                    <div className="mt-4 grid grid-cols-2 gap-3">
                                        <div className="rewards-note rounded-2xl p-3">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-[#7391b2]">{t(REWARDS_POLICY.sections.customerGetsLabel)}</p>
                                            <p className="mt-1 text-xl font-bold text-[#4f87c5]">{formatCurrency(customerAmount)}</p>
                                        </div>
                                        <div className="rewards-note rounded-2xl p-3">
                                            <p className="text-xs font-semibold uppercase tracking-wide text-[#7f8ea2]">{t(REWARDS_POLICY.sections.merchantGetsLabel)}</p>
                                            <p className="mt-1 text-xl font-bold text-[#5f7591]">{formatCurrency(merchantAmount)}</p>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </motion.div>

                <motion.div {...sectionMotion(0.14)} className="mb-12 space-y-5">
                    <h2 className="text-2xl font-extrabold text-[#60748d] sm:text-3xl">{t(REWARDS_POLICY.sections.notesTitle)}</h2>
                    <div className="rewards-surface-soft rounded-3xl p-5 sm:p-6">
                        <ul className="space-y-4">
                            {REWARDS_POLICY.importantNotes.map((note) => (
                                <li key={note.en} className="flex items-start gap-3 text-sm leading-relaxed text-[#6f839c] sm:text-base">
                                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#5b8fc8]" />
                                    <span>{t(note)}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                <motion.div {...sectionMotion(0.16)} className="mb-12">
                    <RewardsFaq
                        title={t(REWARDS_POLICY.sections.faqTitle)}
                        items={REWARDS_POLICY.faq.map((item) => ({
                            id: item.id,
                            question: t(item.question),
                            answer: t(item.answer)
                        }))}
                    />
                </motion.div>

                <motion.div
                    {...sectionMotion(0.18)}
                    className="rewards-surface-strong rewards-readable-overlay rounded-[2rem] p-6 text-center sm:p-8"
                >
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#60748d] sm:text-4xl">
                        {t(REWARDS_POLICY.bottomCta.heading)}
                    </h2>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#6f849d] sm:text-base">
                        {t(REWARDS_POLICY.bottomCta.subheading)}
                    </p>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                        <a
                            href={APP_LINKS.s4s}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neu-btn neu-btn-primary inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold text-white"
                        >
                            {t(REWARDS_POLICY.bottomCta.primary)}
                        </a>
                        <a
                            href={APP_LINKS.xpat}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="neu-btn inline-flex items-center justify-center rounded-xl px-6 py-3 font-bold text-[#60748d]"
                        >
                            {t(REWARDS_POLICY.bottomCta.secondary)}
                        </a>
                        <Link to="/how-to-buy" className="text-sm font-semibold text-[#5e7ea6] transition-colors hover:text-[#4f87c5]">
                            {t(REWARDS_POLICY.bottomCta.tertiary)}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
