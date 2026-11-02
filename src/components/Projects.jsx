import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { AI_PROJECTS, WEB_PROJECTS, PROGRAMMING_LANGUAGES_PROJECTS } from '../shared/projects';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { useLanguage } from "../i18n/LanguageContext";

const TABS = [
    { key: 'ai', projects: AI_PROJECTS },
    { key: 'web', projects: WEB_PROJECTS },
    { key: 'languages', projects: PROGRAMMING_LANGUAGES_PROJECTS },
];

export const Projects = () => {
    const { t } = useLanguage();

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col xs={12}>
                        <TrackVisibility once partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="section-heading">
                                        <h2>{t.projects.title}</h2>
                                        <p>{t.projects.subtitle}</p>
                                    </div>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="ai">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            {TABS.map((tab) => (
                                                <Nav.Item key={tab.key}>
                                                    <Nav.Link eventKey={tab.key}>{t.projects.tabs[tab.key]}</Nav.Link>
                                                </Nav.Item>
                                            ))}
                                        </Nav>
                                        <Tab.Content>
                                            {TABS.map((tab) => (
                                                <Tab.Pane key={tab.key} eventKey={tab.key}>
                                                    <Row className="justify-content-center">
                                                        {tab.projects.map((project) => (
                                                            <ProjectCard key={project.id} {...project} {...t.projects.items[project.id]} />
                                                        ))}
                                                    </Row>
                                                </Tab.Pane>
                                            ))}
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    );
};
