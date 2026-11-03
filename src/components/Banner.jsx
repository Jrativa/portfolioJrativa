import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import { CodeCard } from "./CodeCard";
import { useLanguage, CV_FILES } from "../i18n/LanguageContext";
import { useTypewriter } from "../hooks/useTypewriter";

export const Banner = () => {
    const { t, lang } = useLanguage();
    const text = useTypewriter(t.banner.roles);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} lg={7} className="banner-left">
                        <span className="tagline">{t.banner.tagline}</span>
                        <h1>{t.banner.greeting}<br /><span className="wrap">{text}</span></h1>
                        <p>{t.banner.profile}</p>
                        <div className="banner-actions">
                            <a href="#connect" className="btn-primary-grad">
                                {t.banner.ctaContact}<ArrowRightCircle size={22} />
                            </a>
                            <a href={CV_FILES[lang]} download className="btn-outline">
                                <Download size={18} />{t.banner.ctaCv}
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} lg={5} className="banner-right">
                        <CodeCard />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
