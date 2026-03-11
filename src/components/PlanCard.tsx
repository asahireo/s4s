import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

export interface PlanDetails {
    id: string;
    name: string;
    price: string;
    data: string;
    validity: string;
    features: string[];
    isPopular?: boolean;
}

export function PlanCard({ plan, isEnglish }: { plan: PlanDetails; isEnglish: boolean }) {
    return (
        <motion.div
            whileHover={{ y: -6 }}
            className="relative h-full transition-all duration-300"
        >
            {/* Card Content Layer */}
            <div className="neu-card relative z-10 flex h-full flex-col justify-between rounded-[23px] p-6 lg:p-8">

                {/* Popular Badge */}
                {plan.isPopular && (
                    <div className="neu-pill absolute right-6 top-0 z-20 flex -translate-y-[50%] items-center gap-1 rounded-full bg-gradient-to-r from-[#5da9dd] to-[#4f87c5] px-3 py-1">
                        <Star className="h-3.5 w-3.5 fill-white text-white" />
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#d14848]">
                            {isEnglish ? "Most Popular" : "Paling Popular"}
                        </span>
                    </div>
                )}

                {/* Header */}
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-black text-[#60748d]">{plan.name}</h3>
                        <div className="text-right">
                            <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-[#8c9db0]">
                                {isEnglish ? "Price" : "Harga"}
                            </span>
                            <div className="flex items-start justify-end gap-1 text-3xl font-extrabold text-[#5a82ba]">
                                <span className="mt-1 text-sm font-semibold text-[#7f96b4]">RM</span>
                                {plan.price}
                            </div>
                        </div>
                    </div>

                    <div className="relative mb-6 h-px w-full overflow-hidden bg-white/60">
                        <div className="absolute left-0 top-0 h-full w-1/3 bg-[#82b0da]" />
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="neu-inset rounded-xl p-3">
                            <span className="mb-1 block text-xs text-[#8d9db0]">{isEnglish ? "Data" : "Data"}</span>
                            <span className="text-lg font-bold text-[#60748d]">{plan.data}</span>
                        </div>
                        <div className="neu-inset rounded-xl p-3">
                            <span className="mb-1 block text-xs text-[#8d9db0]">{isEnglish ? "Validity" : "Tempoh Sah"}</span>
                            <span className="text-gradient-gold text-lg font-bold">{plan.validity}</span>
                        </div>
                    </div>

                    {/* Features Line items */}
                    <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-sm text-[#7388a0]">
                                <div className="neu-card-soft mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full">
                                    <Check className="h-3 w-3 text-[#5a82ba]" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action button */}
                <button className={`mt-10 w-full rounded-xl py-3.5 font-bold transition-all ${plan.isPopular
                    ? 'neu-btn neu-btn-primary text-white'
                    : 'neu-btn text-[#60748d]'
                    }`}>
                    {isEnglish ? "Select Plan" : "Pilih Pelan"}
                </button>

            </div>
        </motion.div>
    );
}
