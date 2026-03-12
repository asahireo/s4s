import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { RewardsFlowVisual } from "../components/rewards/RewardsFlowVisual";
import { APP_LINKS } from "../constants/appLinks";

type Copy = {
  en: string;
  bm: string;
};

type FlowStep = {
  id: string;
  title: Copy;
  description: Copy;
};

const FLOW_CONTENT = {
  badge: {
    en: "XPAT Cashback Flow",
    bm: "Aliran Cashback XPAT",
  },
  heading: {
    en: "Top Up In XPAT, Buy Data Plan, Get Cashback Instantly",
    bm: "Top Up Dalam XPAT, Beli Pelan Data, Dapat Cashback Serta-Merta",
  },
  subheading: {
    en: "Cashback is applied for eligible purchases through XPAT only.",
    bm: "Cashback diberi untuk pembelian layak melalui XPAT sahaja.",
  },
  flowTitle: {
    en: "How The Flow Works",
    bm: "Bagaimana Aliran Berfungsi",
  },
  ctaPrimary: {
    en: "Open XPAT App",
    bm: "Buka Aplikasi XPAT",
  },
  ctaTertiary: {
    en: "View How To Buy",
    bm: "Lihat Cara Membeli",
  },
  steps: [
    {
      id: "customer",
      title: {
        en: "Top Up Wallet",
        bm: "Top Up Dompet",
      },
      description: {
        en: "Customer tops up wallet balance in XPAT first.",
        bm: "Pelanggan top up baki dompet dalam XPAT terlebih dahulu.",
      },
    },
    {
      id: "miniapp",
      title: {
        en: "Buy Data Plan",
        bm: "Beli Pelan Data",
      },
      description: {
        en: "Customer buys the selected S4S data plan in XPAT.",
        bm: "Pelanggan membeli pelan data S4S yang dipilih dalam XPAT.",
      },
    },
    {
      id: "success",
      title: {
        en: "Cashback Added Instantly",
        bm: "Cashback Ditambah Serta-Merta",
      },
      description: {
        en: "Cashback is added into the wallet immediately after purchase in XPAT.",
        bm: "Cashback ditambah ke dalam dompet serta-merta selepas pembelian dalam XPAT.",
      },
    },
  ] as FlowStep[],
};

export function Flow({ isEnglish }: { isEnglish: boolean }) {
  const prefersReducedMotion = useReducedMotion();
  const t = (copy: Copy) => (isEnglish ? copy.en : copy.bm);

  const sectionMotion = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-90px" },
          transition: { duration: 0.45, delay },
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
          <span className="rewards-badge inline-flex">{t(FLOW_CONTENT.badge)}</span>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-[#5d7593] sm:text-5xl lg:text-6xl">
            {t(FLOW_CONTENT.heading)}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#6f859f] sm:text-lg">
            {t(FLOW_CONTENT.subheading)}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
            <a
              href={APP_LINKS.xpat}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-btn neu-btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-bold sm:px-7 sm:py-3.5"
            >
              {t(FLOW_CONTENT.ctaPrimary)}
              <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/how-to-buy"
              className="text-sm font-semibold text-[#5e7ea6] transition-colors hover:text-[#4f87c5]"
            >
              {t(FLOW_CONTENT.ctaTertiary)}
            </Link>
          </div>
        </motion.div>

        <motion.div {...sectionMotion(0.08)}>
          <RewardsFlowVisual
            title={t(FLOW_CONTENT.flowTitle)}
            steps={FLOW_CONTENT.steps.map((step) => ({
              id: step.id,
              title: t(step.title),
              description: t(step.description),
            }))}
          />
        </motion.div>
      </div>
    </section>
  );
}
