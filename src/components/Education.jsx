import { Container, Row, Col } from "react-bootstrap";
import { Mortarboard, GeoAlt } from "react-bootstrap-icons";
import TrackVisibility from 'react-on-screen';
import { EDUCATION } from "../shared/education";
import { useLanguage } from "../i18n/LanguageContext";

export const Education = () => {
    const { t } = useLanguage();

    return (
        <section className="education" id="education">
            <div className="stars" aria-hidden="true"></div>
            <Container>
                <div className="section-heading">
                    <h2>{t.education.title}</h2>
                    <p>{t.education.subtitle}</p>
                </div>
                <Row>
                    {EDUCATION.map((school) => {
                        const content = t.education.items[school.id];
                        return (
                            <Col key={school.id} xs={12} lg={6} className="mb-4">
                                <TrackVisibility once partialVisibility style={{ height: '100%' }}>
                                    {({ isVisible }) =>
                                        <div className={`edu-card glass-card ${isVisible ? 'animate__animated animate__fadeInUp' : 'invisible-until-seen'}`}>
                                            <div className="edu-header">
                                                <span className="edu-icon"><Mortarboard size={26} /></span>
                                                <div>
                                                    <span className="date-badge">{school.years}</span>
                                                    <h3>{school.institution}</h3>
                                                    <span className="edu-school">{school.school}</span>
                                                </div>
                                            </div>
                                            <h4>{content.degree}</h4>
                                            <span className="location"><GeoAlt size={14} />{content.location}</span>
                                            <h5>{t.education.coursework}</h5>
                                            <div className="chips">
                                                {content.courses.map((course) => <span key={course} className="chip">{course}</span>)}
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
