import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { GeoAlt, CalendarEvent } from "react-bootstrap-icons";
import TrackVisibility from 'react-on-screen';
import { EXPERIENCE } from "../shared/experience";
import { useLanguage } from "../i18n/LanguageContext";

// 'YYYY-MM' -> absolute month index
const toMonth = (value) => {
    const [year, month] = value.split('-').map(Number);
    return year * 12 + month - 1;
};

// Chart window: a couple of months of padding around all jobs (end months are inclusive)
const RANGE_START = Math.min(...EXPERIENCE.map((job) => toMonth(job.start))) - 2;
const RANGE_END = Math.max(...EXPERIENCE.map((job) => toMonth(job.end) + 1)) + 2;
const toPercent = (month) => ((month - RANGE_START) / (RANGE_END - RANGE_START)) * 100;

const YEAR_TICKS = [];
for (let year = Math.ceil(RANGE_START / 12); year * 12 <= RANGE_END; year++) {
    YEAR_TICKS.push({ year, left: toPercent(year * 12) });
}

export const Experience = () => {
    const { t, formatDate } = useLanguage();
    const [activeId, setActiveId] = useState(null);

    const stateClass = (id) => activeId === null ? '' : activeId === id ? 'is-active' : 'is-dimmed';

    const scrollToCard = (id) => {
        document.getElementById(`exp-${id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <section className="experience" id="experience">
            <Container>
                <div className="section-heading">
                    <h2>{t.experience.title}</h2>
                    <p>{t.experience.subtitle}</p>
                </div>

                <div className="exp-chart glass-card" onMouseLeave={() => setActiveId(null)}>
                    <div className="exp-labels">
                        {EXPERIENCE.map((job) => (
                            <div key={job.id} className={`exp-label ${stateClass(job.id)}`} onMouseEnter={() => setActiveId(job.id)}>
                                <span className={`exp-dot accent-${job.accent}`}></span>
                                <div>
                                    <strong>{job.company}</strong>
                                    <span>{t.experience.items[job.id].role}</span>
                                    <span className="exp-label-dates">{formatDate(job.start)} – {formatDate(job.end)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="exp-plot">
                        {YEAR_TICKS.map((tick) => (
                            <span key={tick.year} className="exp-gridline" style={{ left: `${tick.left}%` }}></span>
                        ))}
                        {EXPERIENCE.map((job) => {
                            const left = toPercent(toMonth(job.start));
                            const width = toPercent(toMonth(job.end) + 1) - left;
                            return (
                                <div key={job.id} className="exp-track">
                                    <span className="exp-track-label">{job.company} · {formatDate(job.start)} – {formatDate(job.end)}</span>
                                    <button
                                        type="button"
                                        className={`exp-bar accent-${job.accent} ${stateClass(job.id)}`}
                                        style={{ left: `${left}%`, width: `${width}%` }}
                                        onMouseEnter={() => setActiveId(job.id)}
                                        onFocus={() => setActiveId(job.id)}
                                        onBlur={() => setActiveId(null)}
                                        onClick={() => scrollToCard(job.id)}
                                        aria-label={`${job.company}: ${formatDate(job.start)} – ${formatDate(job.end)}`}
                                    ></button>
                                </div>
                            );
                        })}
                        <div className="exp-axis">
                            {YEAR_TICKS.map((tick) => (
                                <span key={tick.year} style={{ left: `${tick.left}%` }}>{tick.year}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <Row>
                    {EXPERIENCE.map((job) => {
                        const content = t.experience.items[job.id];
                        return (
                            <Col key={job.id} xs={12} lg={6} className="mb-4">
                                <TrackVisibility once partialVisibility style={{ height: '100%' }}>
                                    {({ isVisible }) =>
                                        <div
                                            id={`exp-${job.id}`}
                                            className={`exp-card glass-card accent-${job.accent} ${stateClass(job.id)} ${isVisible ? 'animate__animated animate__fadeInUp' : 'invisible-until-seen'}`}
                                            onMouseEnter={() => setActiveId(job.id)}
                                            onMouseLeave={() => setActiveId(null)}
                                        >
                                            <span className="date-badge">
                                                <CalendarEvent size={14} />
                                                {formatDate(job.start)} – {formatDate(job.end)}
                                            </span>
                                            <h3>{content.role}</h3>
                                            <h4>
                                                {job.company}
                                                <span className="location"><GeoAlt size={14} />{content.location}</span>
                                            </h4>
                                            <ul>
                                                {content.bullets.map((bullet, j) => <li key={j}>{bullet}</li>)}
                                            </ul>
                                            <div className="chips">
                                                {job.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
                                            </div>
                                        </div>
                                    }
                                </TrackVisibility>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};
