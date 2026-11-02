import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import headerImg from "../assets/images/cat_programming_bg_removed.png";
import { useEffect, useState } from "react";
import { useLanguage, CV_FILES } from "../i18n/LanguageContext";

export const Banner = () => {
    const { t, lang } = useLanguage();
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = t.banner.roles;
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    // Restart the typing effect when the language changes
    useEffect(() => {
        setText("");
        setIsDeleting(false);
        setIndex(0);
    }, [lang]);

    useEffect(() => {
        let timer = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(timer);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text, delta]);

    const tick = () => {
        let i = index % toRotate.length;
        let fullText = toRotate[i];
        let textToDisplay = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(textToDisplay);

        if (isDeleting) {
            setDelta(prevDelta => Math.max(prevDelta / 2, 40));
        }
        if (!isDeleting && textToDisplay === fullText) {
            setDelta(period);
            setIsDeleting(true);
        }
        else if (isDeleting && textToDisplay === "") {
            setIsDeleting(false);
            setIndex(prevIndex => prevIndex + 1);
            setDelta(300 - Math.random() * 100);
        }
        else if (!isDeleting) {
            setDelta(120);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={7} className="banner-left">
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
                    <Col xs={12} md={5} className="banner-right">
                        <img src={headerImg} alt="Jose Luis coding" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
