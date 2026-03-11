import { CheckCircle2, XCircle } from "lucide-react";

type RewardsEligibilityGridProps = {
    eligibleTitle: string;
    ineligibleTitle: string;
    eligibleChannels: string[];
    ineligibleChannels: string[];
};

export function RewardsEligibilityGrid({
    eligibleTitle,
    ineligibleTitle,
    eligibleChannels,
    ineligibleChannels
}: RewardsEligibilityGridProps) {
    return (
        <div className="grid gap-5 md:grid-cols-2">
            <article className="rewards-surface-soft rounded-3xl p-5 sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#587ea8]">
                    <CheckCircle2 className="h-5 w-5 text-[#4f87c5]" />
                    {eligibleTitle}
                </h3>
                <ul className="space-y-3">
                    {eligibleChannels.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[#6e839d] sm:text-base">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#4f87c5]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </article>

            <article className="rewards-surface-soft rounded-3xl p-5 sm:p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#7a8598]">
                    <XCircle className="h-5 w-5 text-[#9aabbf]" />
                    {ineligibleTitle}
                </h3>
                <ul className="space-y-3">
                    {ineligibleChannels.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-[#77899f] sm:text-base">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#a5b4c5]" />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    );
}
