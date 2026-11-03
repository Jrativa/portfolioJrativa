// Decorative neon line-art cats fixed behind the page content
const SittingCat = () => (
    <>
        <path d="M42 38 L45 18 L57 31 Q60 30 63 31 L75 18 L78 38" />
        <path d="M42 38 Q40 57 60 58 Q80 57 78 38" />
        <path d="M51 43 h4 M65 43 h4" />
        <path d="M58 49 l2 2 l2 -2" />
        <path d="M44 50 L32 48 M44 53 L33 56 M76 50 L88 48 M76 53 L87 56" />
        <path d="M48 57 Q36 75 40 98 Q60 104 80 98 Q84 75 72 57" />
        <path d="M54 82 V98 M66 82 V98" />
        <path d="M80 96 Q102 97 99 78 Q96 66 106 60" />
    </>
);

const CatFace = () => (
    <>
        <path d="M22 50 L28 16 L48 34 Q60 30 72 34 L92 16 L98 50" />
        <path d="M22 50 Q20 92 60 94 Q100 92 98 50" />
        <ellipse cx="45" cy="58" rx="5" ry="7" />
        <ellipse cx="75" cy="58" rx="5" ry="7" />
        <path d="M56 70 l4 4 l4 -4" />
        <path d="M52 80 q4 4 8 0 q4 4 8 0" />
        <path d="M30 68 L10 64 M30 74 L12 78 M90 68 L110 64 M90 74 L108 78" />
    </>
);

const SleepingCat = () => (
    <>
        <path d="M22 82 Q20 52 56 50 Q96 50 100 76 Q102 94 76 95 L38 95 Q22 95 22 82 Z" />
        <path d="M28 66 L30 52 L40 59 M46 56 L53 46 L56 57" />
        <path d="M33 72 q3 3 6 0 M46 70 q3 3 6 0" />
        <path d="M100 82 Q92 102 52 97" />
        <path d="M86 30 h8 l-8 10 h8 M100 18 h6 l-6 8 h6" />
    </>
);

const WalkingCat = () => (
    <>
        <path d="M84 40 L87 26 L94 37 L101 26 L103 42" />
        <path d="M84 40 Q80 57 94 58 Q107 57 103 42" />
        <path d="M90 46 h3 M98 46 h3" />
        <path d="M86 57 Q70 50 42 54 Q27 56 24 66" />
        <path d="M30 72 Q56 79 84 70" />
        <path d="M34 70 L30 92 M44 75 L47 92 M74 74 L70 92 M84 70 L88 92" />
        <path d="M24 64 Q8 60 11 44 Q13 35 6 29" />
    </>
);

const PeekingCat = () => (
    <>
        <path d="M8 82 H112" />
        <path d="M34 82 Q34 50 60 48 Q86 50 86 82" />
        <path d="M38 62 L35 38 L52 50 M68 50 L85 38 L82 62" />
        <circle cx="50" cy="66" r="4" />
        <circle cx="70" cy="66" r="4" />
        <path d="M57 74 l3 3 l3 -3" />
        <path d="M38 82 q6 -10 12 0 M70 82 q6 -10 12 0" />
    </>
);

const PawPrint = () => (
    <>
        <path d="M60 104 Q38 104 36 86 Q36 70 60 66 Q84 70 84 86 Q82 104 60 104 Z" />
        <ellipse cx="34" cy="56" rx="8" ry="11" />
        <ellipse cx="50" cy="40" rx="8" ry="11" />
        <ellipse cx="70" cy="40" rx="8" ry="11" />
        <ellipse cx="86" cy="56" rx="8" ry="11" />
    </>
);

const CATS = [
    { Shape: SittingCat, color: '#d0559f', width: 100, rotate: -6, style: { left: '1%', top: '16%' }, delay: '0s' },
    { Shape: CatFace, color: '#8fd3ff', width: 84, rotate: 8, style: { right: '1.5%', top: '12%' }, delay: '2.5s' },
    { Shape: SleepingCat, color: '#8a6bff', width: 120, rotate: 0, style: { left: '1%', bottom: '6%' }, delay: '5s' },
    { Shape: WalkingCat, color: '#d0559f', width: 104, rotate: 0, style: { right: '0.5%', bottom: '20%' }, delay: '1.2s', desktopOnly: true },
    { Shape: PeekingCat, color: '#8a6bff', width: 88, rotate: -4, style: { right: '1%', top: '46%' }, delay: '3.7s', desktopOnly: true },
    { Shape: PawPrint, color: '#4a8dff', width: 46, rotate: -18, style: { left: '2.5%', top: '52%' }, delay: '6.3s', desktopOnly: true },
];

export const NeonCats = () => {
    return (
        <div className="neon-cats" aria-hidden="true">
            {CATS.map(({ Shape, color, width, rotate, style, delay, desktopOnly }, i) => (
                <div
                    key={i}
                    className={`neon-cat ${desktopOnly ? 'desktop-only' : ''}`}
                    style={{ ...style, color, '--w': `${width}px`, animationDelay: delay }}
                >
                    <svg viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: `rotate(${rotate}deg)` }}>
                        <Shape />
                    </svg>
                </div>
            ))}
        </div>
    );
};
