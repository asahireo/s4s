type RewardsFaqItem = {
    id: string;
    question: string;
    answer: string;
};

type RewardsFaqProps = {
    title: string;
    items: RewardsFaqItem[];
};

export function RewardsFaq({ title, items }: RewardsFaqProps) {
    return (
        <section className="space-y-5">
            <h2 className="text-2xl font-extrabold text-[#60748d] sm:text-3xl">{title}</h2>
            <div className="grid gap-4 md:grid-cols-2">
                {items.map((item) => (
                    <article key={item.id} className="rewards-surface-soft rounded-2xl p-5">
                        <h3 className="text-base font-bold leading-snug text-[#5f7795] sm:text-lg">{item.question}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#70849d] sm:text-base">{item.answer}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
