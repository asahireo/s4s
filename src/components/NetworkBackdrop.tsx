import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

const FLOW_LINES = [
    "M -120 170 C 120 80, 320 310, 520 235 C 680 175, 820 45, 1110 120 C 1290 165, 1450 135, 1760 40",
    "M -180 360 C 110 500, 360 260, 620 390 C 840 500, 1030 300, 1280 380 C 1470 440, 1650 390, 1820 310",
    "M -100 610 C 190 480, 420 760, 640 610 C 790 510, 980 520, 1180 690 C 1340 820, 1560 760, 1760 650",
    "M -140 860 C 120 700, 320 920, 560 830 C 760 760, 900 920, 1150 890 C 1360 865, 1500 970, 1760 930",
    "M -120 1060 C 180 900, 460 1100, 730 1020 C 940 960, 1110 1120, 1400 1050 C 1550 1010, 1660 1060, 1780 1110"
];

const GRID_ROWS = [140, 300, 460, 620, 780, 940, 1100];
const GRID_COLUMNS = [160, 360, 560, 760, 960, 1160, 1360];

const NODES = [
    { cx: 190, cy: 145, r: 4.2 },
    { cx: 510, cy: 235, r: 3.8 },
    { cx: 980, cy: 300, r: 4.8 },
    { cx: 690, cy: 515, r: 4.2 },
    { cx: 1265, cy: 385, r: 4.1 },
    { cx: 560, cy: 835, r: 4.6 },
    { cx: 1140, cy: 885, r: 3.9 },
    { cx: 1450, cy: 1035, r: 4.9 }
];

export function NetworkBackdrop() {
    const prefersReducedMotion = useReducedMotion();
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 85, damping: 28, mass: 0.32 });

    const lineDrift = useTransform(smoothProgress, [0, 1], [0, -180]);
    const lineOpacity = useTransform(smoothProgress, [0, 0.42, 1], [0.52, 0.86, 0.58]);
    const glowPrimaryY = useTransform(smoothProgress, [0, 1], [0, -70]);
    const glowSecondaryY = useTransform(smoothProgress, [0, 1], [0, -120]);
    const glowSecondaryX = useTransform(smoothProgress, [0, 1], [0, 45]);

    return (
        <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
            <div className="absolute inset-0 bg-[radial-gradient(70%_52%_at_78%_8%,rgba(143,184,225,0.24),transparent_70%),radial-gradient(60%_48%_at_12%_84%,rgba(137,177,221,0.18),transparent_72%)]" />

            <motion.div
                className="absolute -left-40 top-[18%] h-[30rem] w-[30rem] rounded-full bg-[#cfe0f4]/45 blur-[105px]"
                style={prefersReducedMotion ? undefined : { y: glowPrimaryY }}
            />
            <motion.div
                className="absolute -right-40 bottom-[-6%] h-[34rem] w-[34rem] rounded-full bg-[#d8e7f7]/55 blur-[120px]"
                style={prefersReducedMotion ? undefined : { x: glowSecondaryX, y: glowSecondaryY }}
            />

            <motion.svg
                viewBox="0 0 1600 1200"
                preserveAspectRatio="xMidYMid slice"
                className="absolute inset-0 h-full w-full"
                style={prefersReducedMotion ? undefined : { y: lineDrift, opacity: lineOpacity }}
            >
                <defs>
                    <linearGradient id="flowLineBlueA" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#5da9dd" stopOpacity="0.38" />
                        <stop offset="45%" stopColor="#4f87c5" stopOpacity="0.82" />
                        <stop offset="100%" stopColor="#77b9ec" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="flowLineBlueB" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8bbfe8" stopOpacity="0.32" />
                        <stop offset="55%" stopColor="#5e95cd" stopOpacity="0.72" />
                        <stop offset="100%" stopColor="#9dc8ed" stopOpacity="0.34" />
                    </linearGradient>
                    <radialGradient id="nodeGlow" cx="50%" cy="50%" r="55%">
                        <stop offset="0%" stopColor="#4f87c5" stopOpacity="0.95" />
                        <stop offset="100%" stopColor="#4f87c5" stopOpacity="0" />
                    </radialGradient>
                </defs>

                <g>
                    {GRID_ROWS.map((row) => (
                        <line
                            key={`row-${row}`}
                            x1="0"
                            y1={row}
                            x2="1600"
                            y2={row}
                            stroke="#7e9fc4"
                            strokeOpacity="0.26"
                            strokeDasharray="2 14"
                        />
                    ))}
                    {GRID_COLUMNS.map((column) => (
                        <line
                            key={`col-${column}`}
                            x1={column}
                            y1="0"
                            x2={column}
                            y2="1200"
                            stroke="#80a4ca"
                            strokeOpacity="0.2"
                            strokeDasharray="2 18"
                        />
                    ))}
                </g>

                <g>
                    {FLOW_LINES.map((path, index) => (
                        <motion.path
                            key={path}
                            d={path}
                            fill="none"
                            stroke={index % 2 === 0 ? "url(#flowLineBlueA)" : "url(#flowLineBlueB)"}
                            strokeWidth={index % 2 === 0 ? 2.6 : 2.1}
                            strokeLinecap="round"
                            strokeDasharray="10 13"
                            initial={prefersReducedMotion ? false : { pathLength: 0.86, strokeDashoffset: -220, opacity: 0.36 }}
                            animate={
                                prefersReducedMotion
                                    ? undefined
                                    : { pathLength: [0.68, 1, 0.76], strokeDashoffset: [-260, 0], opacity: [0.36, 0.9, 0.42] }
                            }
                            transition={
                                prefersReducedMotion
                                    ? undefined
                                    : { duration: 14 + index * 1.8, repeat: Infinity, repeatType: "loop", ease: "linear", delay: index * 0.65 }
                            }
                        />
                    ))}
                </g>

                <g>
                    {NODES.map((node, index) => (
                        <g key={`${node.cx}-${node.cy}`}>
                            <motion.circle
                                cx={node.cx}
                                cy={node.cy}
                                r={node.r + 1.15}
                                fill="#4f87c5"
                                initial={prefersReducedMotion ? false : { opacity: 0.68 }}
                                animate={prefersReducedMotion ? undefined : { opacity: [0.5, 1, 0.5], scale: [1, 1.35, 1] }}
                                transition={
                                    prefersReducedMotion
                                        ? undefined
                                        : { duration: 5 + index * 0.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: index * 0.35 }
                                }
                                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                            />
                            <motion.circle
                                cx={node.cx}
                                cy={node.cy}
                                r={node.r * 5.9}
                                fill="url(#nodeGlow)"
                                initial={prefersReducedMotion ? false : { opacity: 0.36 }}
                                animate={prefersReducedMotion ? undefined : { opacity: [0.16, 0.58, 0.16], scale: [0.82, 1.22, 0.82] }}
                                transition={
                                    prefersReducedMotion
                                        ? undefined
                                        : { duration: 6.5 + index * 0.65, repeat: Infinity, repeatType: "mirror", ease: "easeInOut", delay: index * 0.25 }
                                }
                                style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                            />
                        </g>
                    ))}
                </g>
            </motion.svg>

            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(238,242,248,0.08)_0%,rgba(231,236,244,0.2)_100%)]" />
        </div>
    );
}
