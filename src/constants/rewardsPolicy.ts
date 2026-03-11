export type Copy = {
    en: string;
    bm: string;
};

export type RewardExample = {
    id: string;
    amount: number;
    title: Copy;
};

type RewardsFlowStep = {
    id: string;
    title: Copy;
    description: Copy;
};

type RateCard = {
    id: string;
    title: Copy;
    value: string;
    description: Copy;
    tone: "primary" | "accent" | "neutral";
};

type FaqItem = {
    id: string;
    question: Copy;
    answer: Copy;
};

export type RewardsPolicy = {
    rates: {
        customerCashbackPercent: number;
        merchantDirectPercent: number;
        merchantLevels: number;
    };
    hero: {
        eyebrow: Copy;
        heading: Copy;
        subheading: Copy;
    };
    legalNotice: Copy;
    sections: {
        flowTitle: Copy;
        eligibilityTitle: Copy;
        ratesTitle: Copy;
        examplesTitle: Copy;
        notesTitle: Copy;
        faqTitle: Copy;
        customerGetsLabel: Copy;
        merchantGetsLabel: Copy;
    };
    flowSteps: RewardsFlowStep[];
    channels: {
        eligibleTitle: Copy;
        ineligibleTitle: Copy;
        eligible: Copy[];
        ineligible: Copy[];
    };
    rateCards: RateCard[];
    examples: RewardExample[];
    importantNotes: Copy[];
    faq: FaqItem[];
    bottomCta: {
        heading: Copy;
        subheading: Copy;
        primary: Copy;
        secondary: Copy;
        tertiary: Copy;
    };
};

const CUSTOMER_CASHBACK_PERCENT = 3;
const MERCHANT_DIRECT_PERCENT = 5;
const MERCHANT_LEVELS = 1;

export const REWARDS_POLICY: RewardsPolicy = {
    rates: {
        customerCashbackPercent: CUSTOMER_CASHBACK_PERCENT,
        merchantDirectPercent: MERCHANT_DIRECT_PERCENT,
        merchantLevels: MERCHANT_LEVELS
    },
    hero: {
        eyebrow: {
            en: "Cashback Policy",
            bm: "Polisi Cashback"
        },
        heading: {
            en: "Cashback Rewards For Customer And Merchant",
            bm: "Ganjaran Cashback Untuk Pelanggan Dan Pedagang"
        },
        subheading: {
            en: "Get customer cashback and direct merchant reward when subscription is completed through the S4S or XPAT miniapp flow.",
            bm: "Dapatkan cashback pelanggan dan ganjaran pedagang secara langsung apabila langganan diselesaikan melalui aliran miniapp S4S atau XPAT."
        }
    },
    legalNotice: {
        en: "Displayed percentages are current policy values and are subject to future updates.",
        bm: "Peratus yang dipaparkan ialah nilai polisi semasa dan tertakluk kepada kemas kini pada masa hadapan."
    },
    sections: {
        flowTitle: {
            en: "How The Cashback Flow Works",
            bm: "Bagaimana Aliran Cashback Berfungsi"
        },
        eligibilityTitle: {
            en: "Eligibility Matrix",
            bm: "Matriks Kelayakan"
        },
        ratesTitle: {
            en: "Current Reward Percentages",
            bm: "Peratus Ganjaran Semasa"
        },
        examplesTitle: {
            en: "Quick Calculation Examples",
            bm: "Contoh Pengiraan Pantas"
        },
        notesTitle: {
            en: "Important Notes",
            bm: "Nota Penting"
        },
        faqTitle: {
            en: "Frequently Asked Questions",
            bm: "Soalan Lazim"
        },
        customerGetsLabel: {
            en: "Customer Gets",
            bm: "Pelanggan Dapat"
        },
        merchantGetsLabel: {
            en: "Merchant Gets",
            bm: "Pedagang Dapat"
        }
    },
    flowSteps: [
        {
            id: "customer",
            title: { en: "Customer Action", bm: "Tindakan Pelanggan" },
            description: {
                en: "Customer selects an S4S package inside the eligible miniapp.",
                bm: "Pelanggan memilih pakej S4S di dalam miniapp yang layak."
            }
        },
        {
            id: "miniapp",
            title: { en: "Miniapp Channel", bm: "Saluran Miniapp" },
            description: {
                en: "Subscription is submitted through S4S or XPAT miniapp.",
                bm: "Langganan dihantar melalui miniapp S4S atau XPAT."
            }
        },
        {
            id: "success",
            title: { en: "Successful Transaction", bm: "Transaksi Berjaya" },
            description: {
                en: "System validates completed payment and eligible channel.",
                bm: "Sistem mengesahkan pembayaran selesai dan saluran yang layak."
            }
        },
        {
            id: "reward",
            title: { en: "Reward Distribution", bm: "Agihan Ganjaran" },
            description: {
                en: "Customer cashback and merchant direct reward are applied.",
                bm: "Cashback pelanggan dan ganjaran terus pedagang akan diberikan."
            }
        }
    ],
    channels: {
        eligibleTitle: {
            en: "Eligible Channels",
            bm: "Saluran Layak"
        },
        ineligibleTitle: {
            en: "Not Eligible",
            bm: "Tidak Layak"
        },
        eligible: [
            { en: "S4S miniapp", bm: "Miniapp S4S" },
            { en: "XPAT miniapp", bm: "Miniapp XPAT" }
        ],
        ineligible: [
            { en: "Any bank app checkout", bm: "Pembayaran melalui aplikasi bank" },
            { en: "Subscription via SMS code", bm: "Langganan melalui kod SMS" },
            { en: "Unsupported external channels", bm: "Saluran luaran yang tidak disokong" }
        ]
    },
    rateCards: [
        {
            id: "customer-rate",
            title: { en: "Customer Cashback", bm: "Cashback Pelanggan" },
            value: `${CUSTOMER_CASHBACK_PERCENT}%`,
            description: {
                en: "Applied per successful eligible subscription.",
                bm: "Diberi bagi setiap langganan berjaya yang layak."
            },
            tone: "primary"
        },
        {
            id: "merchant-rate",
            title: { en: "Merchant Reward", bm: "Ganjaran Pedagang" },
            value: `${MERCHANT_DIRECT_PERCENT}%`,
            description: {
                en: "Direct merchant commission on the same eligible transaction.",
                bm: "Komisen terus pedagang pada transaksi layak yang sama."
            },
            tone: "accent"
        },
        {
            id: "merchant-level",
            title: { en: "Merchant Levels", bm: "Tahap Pedagang" },
            value: `Level ${MERCHANT_LEVELS}`,
            description: {
                en: "Direct only. No multi-level merchant commission.",
                bm: "Terus sahaja. Tiada komisen pedagang berbilang tahap."
            },
            tone: "neutral"
        }
    ],
    examples: [
        {
            id: "rm30",
            amount: 30,
            title: {
                en: "Example: RM30 Subscription",
                bm: "Contoh: Langganan RM30"
            }
        },
        {
            id: "rm48",
            amount: 48,
            title: {
                en: "Example: RM48 Subscription",
                bm: "Contoh: Langganan RM48"
            }
        }
    ],
    importantNotes: [
        {
            en: "Applies to all S4S packages when subscribed through eligible miniapp channels.",
            bm: "Terpakai kepada semua pakej S4S apabila dilanggan melalui saluran miniapp yang layak."
        },
        {
            en: "Rewards are only processed for successful transactions.",
            bm: "Ganjaran hanya diproses untuk transaksi yang berjaya."
        },
        {
            en: "Agent incentives are a separate scheme managed by M1 Operations.",
            bm: "Insentif ejen ialah skim berasingan yang diuruskan oleh Operasi M1."
        }
    ],
    faq: [
        {
            id: "faq-1",
            question: {
                en: "Why is there no cashback via SMS or bank app?",
                bm: "Kenapa tiada cashback melalui SMS atau aplikasi bank?"
            },
            answer: {
                en: "The cashback engine currently applies only to subscriptions completed through the eligible miniapp flow.",
                bm: "Enjin cashback ketika ini hanya terpakai untuk langganan yang diselesaikan melalui aliran miniapp yang layak."
            }
        },
        {
            id: "faq-2",
            question: {
                en: "Can customer and merchant both receive rewards for one transaction?",
                bm: "Bolehkah pelanggan dan pedagang menerima ganjaran bagi satu transaksi?"
            },
            answer: {
                en: "Yes. One eligible successful transaction can grant customer cashback and merchant direct reward together.",
                bm: "Ya. Satu transaksi layak yang berjaya boleh memberi cashback pelanggan dan ganjaran terus pedagang serentak."
            }
        },
        {
            id: "faq-3",
            question: {
                en: "Is merchant reward multi-level?",
                bm: "Adakah ganjaran pedagang berbilang tahap?"
            },
            answer: {
                en: "No. Merchant reward is direct one-level only.",
                bm: "Tidak. Ganjaran pedagang adalah satu tahap terus sahaja."
            }
        },
        {
            id: "faq-4",
            question: {
                en: "Can rates change in future?",
                bm: "Bolehkah kadar berubah pada masa hadapan?"
            },
            answer: {
                en: "Yes. Rates may be updated according to policy revisions.",
                bm: "Ya. Kadar boleh dikemas kini mengikut semakan polisi."
            }
        }
    ],
    bottomCta: {
        heading: {
            en: "Ready To Activate Cashback Flow?",
            bm: "Sedia Untuk Aktifkan Aliran Cashback?"
        },
        subheading: {
            en: "Use the eligible miniapp channels to unlock customer cashback and merchant direct reward.",
            bm: "Gunakan saluran miniapp yang layak untuk membuka cashback pelanggan dan ganjaran terus pedagang."
        },
        primary: {
            en: "Open S4S App",
            bm: "Buka Aplikasi S4S"
        },
        secondary: {
            en: "Open XPAT App",
            bm: "Buka Aplikasi XPAT"
        },
        tertiary: {
            en: "View How To Buy",
            bm: "Lihat Cara Membeli"
        }
    }
};
