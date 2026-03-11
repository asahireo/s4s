type Copy = {
    en: string;
    bm: string;
};

type VideoItem = {
    id: string;
    title: Copy;
};

const videos: VideoItem[] = [
    { id: "bhglqi6tSnk", title: { en: "S4S Tutorial 01", bm: "Tutorial S4S 01" } },
    { id: "WztRdcXb58k", title: { en: "S4S Tutorial 02", bm: "Tutorial S4S 02" } },
    { id: "Hx9rb21eKX8", title: { en: "S4S Tutorial 03", bm: "Tutorial S4S 03" } },
    { id: "nP4038qIB9o", title: { en: "S4S Tutorial 04", bm: "Tutorial S4S 04" } },
    { id: "XCK4J_CjB4g", title: { en: "S4S Tutorial 05", bm: "Tutorial S4S 05" } },
    { id: "iKckKT2tpIA", title: { en: "S4S Tutorial 06", bm: "Tutorial S4S 06" } }
];

const contentByLanguage = {
    heading: { en: "S4S Video Guides", bm: "Panduan Video S4S" },
    subheading: {
        en: "Watch short walkthroughs before reloading or switching plans.",
        bm: "Tonton panduan ringkas sebelum tambah nilai atau tukar pelan."
    },
    openOnYouTube: { en: "Open on YouTube", bm: "Buka di YouTube" }
} as const;

export function Videos({ isEnglish }: { isEnglish: boolean }) {
    const t = (copy: Copy) => (isEnglish ? copy.en : copy.bm);

    return (
        <section className="relative min-h-screen overflow-hidden bg-transparent pb-24 pt-32">
            <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[340px] w-[340px] rounded-full bg-[#d6e6f6] blur-[120px]" />
            <div className="pointer-events-none absolute bottom-[-140px] left-[-140px] h-[340px] w-[340px] rounded-full bg-[#e8eff8] blur-[120px]" />

            <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#60748d] md:text-5xl">
                        {t(contentByLanguage.heading)}
                    </h1>
                    <p className="text-base text-[#7a8ea5] md:text-lg">
                        {t(contentByLanguage.subheading)}
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {videos.map((video) => {
                        const title = t(video.title);
                        const embedUrl = `https://www.youtube.com/embed/${video.id}`;
                        const youtubeWatchUrl = `https://www.youtube.com/watch?v=${video.id}`;

                        return (
                            <article key={video.id} className="neu-card rounded-3xl p-4 sm:p-5">
                                <div className="neu-inset overflow-hidden rounded-2xl p-2">
                                    <div className="aspect-video overflow-hidden rounded-xl border border-white/50 bg-[#d6e1ee]">
                                        <iframe
                                            src={embedUrl}
                                            title={title}
                                            className="h-full w-full"
                                            loading="lazy"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between gap-4">
                                    <h2 className="text-base font-bold text-[#60748d]">{title}</h2>
                                    <a
                                        href={youtubeWatchUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="neu-btn rounded-xl px-3 py-1.5 text-xs font-semibold text-[#60748d] transition-colors hover:text-[#4f87c5]"
                                    >
                                        {t(contentByLanguage.openOnYouTube)}
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
