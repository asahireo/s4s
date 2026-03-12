import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Gift, Smartphone, UserRound } from "lucide-react";

type RewardsFlowStep = {
    id: string;
    title: string;
    description: string;
};

type RewardsFlowVisualProps = {
    title: string;
    steps: RewardsFlowStep[];
};

const THREE_STEP_DESKTOP_PATH = "M 86 164 C 200 84, 294 84, 365 88 C 494 96, 582 236, 682 192";
const FOUR_STEP_DESKTOP_PATH = "M 68 160 C 172 78, 286 78, 392 160 C 486 232, 602 232, 716 148 C 790 96, 846 95, 888 134";
const THREE_STEP_MOBILE_PATH = "M 198 78 C 154 140, 154 194, 115 237 C 90 276, 152 352, 198 403";
const FOUR_STEP_MOBILE_PATH = "M 160 40 C 134 124, 210 172, 162 246 C 130 298, 194 352, 162 420 C 135 478, 178 532, 162 592";

const THREE_STEP_DESKTOP_POSITIONS = [
    { left: 9, top: 63 },
    { left: 38, top: 34 },
    { left: 71, top: 74 }
];

const FOUR_STEP_DESKTOP_POSITIONS = [
    { left: 9, top: 63 },
    { left: 35, top: 34 },
    { left: 63, top: 75 },
    { left: 90, top: 53 }
];

const THREE_STEP_MOBILE_POSITIONS = [
    { left: 62, top: 12 },
    { left: 36, top: 37 },
    { left: 62, top: 63 }
];

const FOUR_STEP_MOBILE_POSITIONS = [
    { left: 62, top: 11 },
    { left: 36, top: 35 },
    { left: 62, top: 59 },
    { left: 37, top: 83 }
];

function iconForStep(id: string) {
    switch (id) {
        case "customer":
            return UserRound;
        case "miniapp":
            return Smartphone;
        case "success":
            return CheckCircle2;
        case "reward":
            return Gift;
        default:
            return Gift;
    }
}

export function RewardsFlowVisual({ title, steps }: RewardsFlowVisualProps) {
    const prefersReducedMotion = useReducedMotion();
    const isThreeStepFlow = steps.length === 3;
    const desktopPath = isThreeStepFlow ? THREE_STEP_DESKTOP_PATH : FOUR_STEP_DESKTOP_PATH;
    const mobilePath = isThreeStepFlow ? THREE_STEP_MOBILE_PATH : FOUR_STEP_MOBILE_PATH;
    const desktopPositions = isThreeStepFlow ? THREE_STEP_DESKTOP_POSITIONS : FOUR_STEP_DESKTOP_POSITIONS;
    const mobilePositions = isThreeStepFlow ? THREE_STEP_MOBILE_POSITIONS : FOUR_STEP_MOBILE_POSITIONS;
    const mobileHeightClass = isThreeStepFlow ? "h-[560px]" : "h-[640px]";

    return (
        <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#60748d] sm:text-3xl">{title}</h2>

            <div className="rewards-surface-strong rewards-readable-overlay rounded-[1.8rem] p-4 sm:p-6">
                <div className="relative hidden h-[260px] md:block">
                    <svg viewBox="0 0 960 260" className="absolute inset-0 h-full w-full" aria-hidden="true">
                        <defs>
                            <linearGradient id="flowDesktopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#76abdf" stopOpacity="0.42" />
                                <stop offset="50%" stopColor="#4f87c5" stopOpacity="0.88" />
                                <stop offset="100%" stopColor="#89bbe7" stopOpacity="0.46" />
                            </linearGradient>
                        </defs>

                        <path d={desktopPath} fill="none" stroke="#88acd3" strokeOpacity="0.26" strokeWidth="3" />
                        <motion.path
                            d={desktopPath}
                            fill="none"
                            stroke="url(#flowDesktopGradient)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeDasharray="9 14"
                            initial={prefersReducedMotion ? false : { strokeDashoffset: 140, opacity: 0.7 }}
                            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [140, 0], opacity: [0.5, 0.9, 0.6] }}
                            transition={prefersReducedMotion ? undefined : { duration: 5.8, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    {steps.map((step, index) => {
                        const Icon = iconForStep(step.id);
                        const current = desktopPositions[index] ?? desktopPositions[desktopPositions.length - 1];

                        return (
                            <motion.article
                                key={step.id}
                                className="rewards-flow-node absolute w-48 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-3"
                                style={{ left: `${current.left}%`, top: `${current.top}%` }}
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.45, delay: index * 0.09 }}
                            >
                                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#dde8f4] text-[#4f87c5]">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <h3 className="text-sm font-bold text-[#5c7797]">{step.title}</h3>
                                <p className="mt-1 text-xs leading-relaxed text-[#6f839c]">{step.description}</p>
                            </motion.article>
                        );
                    })}
                </div>

                <div className={`relative ${mobileHeightClass} md:hidden`}>
                    <svg viewBox="0 0 320 640" className="absolute inset-0 h-full w-full" aria-hidden="true">
                        <defs>
                            <linearGradient id="flowMobileGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                                <stop offset="0%" stopColor="#8abbe7" stopOpacity="0.4" />
                                <stop offset="50%" stopColor="#4f87c5" stopOpacity="0.86" />
                                <stop offset="100%" stopColor="#79aedd" stopOpacity="0.38" />
                            </linearGradient>
                        </defs>

                        <path d={mobilePath} fill="none" stroke="#88acd3" strokeOpacity="0.24" strokeWidth="3" />
                        <motion.path
                            d={mobilePath}
                            fill="none"
                            stroke="url(#flowMobileGradient)"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeDasharray="9 14"
                            initial={prefersReducedMotion ? false : { strokeDashoffset: 140, opacity: 0.7 }}
                            animate={prefersReducedMotion ? undefined : { strokeDashoffset: [140, 0], opacity: [0.5, 0.92, 0.6] }}
                            transition={prefersReducedMotion ? undefined : { duration: 6.1, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>

                    {steps.map((step, index) => {
                        const Icon = iconForStep(step.id);
                        const current = mobilePositions[index] ?? mobilePositions[mobilePositions.length - 1];

                        return (
                            <motion.article
                                key={step.id}
                                className="rewards-flow-node absolute w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-2xl p-3"
                                style={{ left: `${current.left}%`, top: `${current.top}%` }}
                                initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
                                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                            >
                                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#dde8f4] text-[#4f87c5]">
                                    <Icon className="h-4 w-4" />
                                </div>
                                <h3 className="text-sm font-bold text-[#5c7797]">{step.title}</h3>
                                <p className="mt-1 text-xs leading-relaxed text-[#6f839c]">{step.description}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
