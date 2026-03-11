type RewardsStatCardProps = {
    title: string;
    value: string;
    description: string;
    tone?: "primary" | "accent" | "neutral";
};

const toneClassMap: Record<NonNullable<RewardsStatCardProps["tone"]>, string> = {
    primary: "rewards-ring-primary",
    accent: "rewards-ring-accent",
    neutral: "rewards-ring-neutral"
};

export function RewardsStatCard({
    title,
    value,
    description,
    tone = "neutral"
}: RewardsStatCardProps) {
    return (
        <article className={`rewards-surface-strong rounded-3xl p-5 sm:p-6 ${toneClassMap[tone]}`}>
            <span className="rewards-badge inline-flex">{title}</span>
            <p className="mt-4 text-4xl font-black tracking-tight text-[#56779e] sm:text-5xl">{value}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#6f839d] sm:text-base">{description}</p>
        </article>
    );
}
