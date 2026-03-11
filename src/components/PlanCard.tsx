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
            whileHover={{ y: -8 }}
            className={`relative rounded-3xl p-[1px] group transition-all duration-300 ${plan.isPopular ? 'shadow-[0_20px_40px_-15px_rgba(217,31,38,0.4)]' : ''
                }`}
        >
            {/* Dynamic Border Gradient */}
            <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/20 to-transparent group-hover:from-s4s-blue/50 group-hover:to-transparent z-0 transition-all duration-500" />
            {plan.isPopular && (
                <span className="absolute inset-0 rounded-3xl bg-gradient-to-b from-s4s-red/50 to-s4s-red/5 z-0 animate-pulse" />
            )}

            {/* Card Content Layer */}
            <div className="relative z-10 h-full bg-[#1e293b]/90 backdrop-blur-xl rounded-[23px] p-6 lg:p-8 flex flex-col justify-between">

                {/* Popular Badge */}
                {plan.isPopular && (
                    <div className="absolute top-0 right-6 translate-y-[-50%] bg-gradient-to-r from-s4s-red via-red-500 to-s4s-red px-3 py-1 rounded-full shadow-lg border border-red-300/30 flex items-center gap-1 z-20">
                        <Star className="w-3.5 h-3.5 text-white fill-white" />
                        <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                            {isEnglish ? "Most Popular" : "Paling Popular"}
                        </span>
                    </div>
                )}

                {/* Header */}
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <h3 className="text-2xl font-black text-white">{plan.name}</h3>
                        <div className="text-right">
                            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-1">
                                {isEnglish ? "Price" : "Harga"}
                            </span>
                            <div className="text-3xl font-extrabold text-s4s-blue flex items-start justify-end gap-1">
                                <span className="text-sm font-semibold text-s4s-blue/70 mt-1">RM</span>
                                {plan.price}
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-white/10 mb-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1/3 h-full bg-s4s-blue/50" />
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-slate-800/50 rounded-xl p-3 border border-white/5">
                            <span className="text-xs text-slate-400 block mb-1">{isEnglish ? "Data" : "Data"}</span>
                            <span className="text-lg font-bold text-white">{plan.data}</span>
                        </div>
                        <div className="bg-slate-800/50 rounded-xl p-3 border border-white/5">
                            <span className="text-xs text-slate-400 block mb-1">{isEnglish ? "Validity" : "Tempoh Sah"}</span>
                            <span className="text-lg font-bold text-white text-gradient-gold">{plan.validity}</span>
                        </div>
                    </div>

                    {/* Features Line items */}
                    <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-slate-300 items-start">
                                <div className="w-5 h-5 rounded-full bg-s4s-blue/20 flex flex-shrink-0 items-center justify-center mt-0.5">
                                    <Check className="w-3 h-3 text-s4s-blue" />
                                </div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Action button */}
                <button className={`w-full mt-10 py-3.5 rounded-xl font-bold transition-all ${plan.isPopular
                    ? 'bg-s4s-red text-white hover:bg-red-500 shadow-[0_4px_15px_rgba(217,31,38,0.4)]'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                    }`}>
                    {isEnglish ? "Select Plan" : "Pilih Pelan"}
                </button>

            </div>
        </motion.div>
    );
}
