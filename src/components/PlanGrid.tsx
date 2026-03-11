import { PlanCard } from "./PlanCard";
import type { PlanDetails } from "./PlanCard";

export function PlanGrid({ isEnglish }: { isEnglish: boolean }) {
    const plans: PlanDetails[] = [
        {
            id: "1",
            name: "1X-18",
            price: "18.00",
            data: "10GB",
            validity: "30 Days",
            features: isEnglish
                ? ["High-Speed 4G/5G Data", "Rollover Data Applicable", "Standard Support"]
                : ["Data Kelajuan Tinggi 4G/5G", "Data Rollover Terdedia", "Sokongan Standard"]
        },
        {
            id: "2",
            name: "1X-22",
            price: "22.00",
            data: "20GB",
            validity: "30 Days",
            isPopular: true,
            features: isEnglish
                ? ["High-Speed 4G/5G Data", "Rollover Data Applicable", "Unlimited Basic Internet", "Priority Support"]
                : ["Data Kelajuan Tinggi 4G/5G", "Data Rollover Terdedia", "Internet Asas Tanpa Had", "Sokongan Keutamaan"]
        },
        {
            id: "3",
            name: "1X-35",
            price: "35.00",
            data: "50GB",
            validity: "60 Days",
            features: isEnglish
                ? ["Extended Validity Period", "High-Speed 4G/5G Data", "Unlimited Calls to S4S", "Priority Support"]
                : ["Tempoh Sah Dilanjutkan", "Data Kelajuan Tinggi 4G/5G", "Panggilan Tanpa Had ke S4S", "Sokongan Keutamaan"]
        },
        {
            id: "4",
            name: "1X-48",
            price: "48.00",
            data: "100GB",
            validity: "90 Days",
            features: isEnglish
                ? ["Maximum Data Allowance", "Premium Gold Validity", "Unlimited Calls & SMS", "Dedicated Manager"]
                : ["Kuota Data Maksimum", "Tempoh Sah Emas Premium", "Panggilan & SMS Tanpa Had", "Pengurus Dedikasi"]
        }
    ];

    return (
        <section className="relative border-t border-white/60 bg-transparent py-24">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-[#e4eaf2]/45" />
            <div className="container mx-auto px-6 relative z-10">

                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="mb-6 text-4xl font-extrabold text-[#60748d]">
                        {isEnglish ? "Choose Your Perfect Plan" : "Pilih Pelan Sempurna Anda"}
                    </h2>
                    <p className="text-lg text-[#778ca4]">
                        {isEnglish
                            ? "All plans come with nationwide coverage and seamless Mastercard integration."
                            : "Semua pelan didatangkan dengan liputan di seluruh negara dan integrasi Mastercard yang lancar."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
                    {plans.map((plan) => (
                        <PlanCard key={plan.id} plan={plan} isEnglish={isEnglish} />
                    ))}
                </div>

            </div>
        </section>
    );
}
