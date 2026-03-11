import { HeroBanner } from "../components/HeroBanner";
import { PromoSection } from "../components/PromoSection";
import { PlanGrid } from "../components/PlanGrid";

export function Home({ isEnglish }: { isEnglish: boolean }) {
    return (
        <>
            <HeroBanner isEnglish={isEnglish} />
            <PromoSection isEnglish={isEnglish} />
            <PlanGrid isEnglish={isEnglish} />
        </>
    );
}
