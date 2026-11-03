import { useTypewriter } from "../hooks/useTypewriter";

// Roles typed inside the `role` string, like the banner heading
const ROLES = ['AI Engineer', 'Software Engineer', 'Full Stack Developer'];

// Each line is a list of [tokenType, text] pairs; tokenType maps to a .tok-* class
const k = (text) => ['key', text];
const p = (text) => ['punct', text];
const s = (text) => ['str', `'${text}'`];

const list = (...items) => [
    p('['),
    ...items.flatMap((item, i) => (i === 0 ? [s(item)] : [p(', '), s(item)])),
    p(']'),
];

const ROLE_LINE = 1;
const LINES = [
    [['kw', 'const'], ['plain', ' '], ['name', 'jose'], ['plain', ' '], p('= {')],
    null, // role line, rendered with the typewriter
    [['plain', '  '], k('focus'), p(': '), ...list('GenAI', 'Agents', 'Full Stack'), p(',')],
    [['plain', '  '], k('stack'), p(': '), ...list('PyTorch', 'TypeScript', 'React'), p(',')],
    [['plain', '  '], k('languages'), p(': '), ...list('EN', 'FR', 'ES'), p(',')],
    [p('};')],
];

export const CodeCard = () => {
    const role = useTypewriter(ROLES);

    return (
        <div className="code-card" aria-label={`const jose = { role: ${ROLES.join(', ')} }`}>
            <div className="code-card-bar">
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-dot"></span>
                <span className="code-tab">jose.ts</span>
            </div>
            <pre className="code-card-body">
                <code>
                    {LINES.map((line, i) => (
                        <span key={i} className="code-line">
                            <span className="code-ln">{i + 1}</span>
                            {i === ROLE_LINE
                                ? <>
                                    <span className="tok-plain">{'  '}</span>
                                    <span className="tok-key">role</span>
                                    <span className="tok-punct">: </span>
                                    <span className="tok-str">&apos;{role}<span className="code-cursor"></span>&apos;</span>
                                    <span className="tok-punct">,</span>
                                </>
                                : line.map(([type, text], j) => <span key={j} className={`tok-${type}`}>{text}</span>)}
                        </span>
                    ))}
                </code>
            </pre>
        </div>
    );
};
