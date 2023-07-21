import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import {WEB_PROJECTS, PROGRAMMING_LANGUAGES_PROJECTS} from '../shared/projects'
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/images/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                <Col size={12}>
                <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <h2>Projects</h2>
                        <p></p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Web projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Programming languages</Nav.Link>
                            </Nav.Item>
                            {/* <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item> */}
                        </Nav>
                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                WEB_PROJECTS.map((project, index) => {
                                    return (
                                    <ProjectCard key={index} {...project}/>
                                    );
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                    PROGRAMMING_LANGUAGES_PROJECTS.map((project, index) => {
                                        return (
                                        <ProjectCard key={index} {...project}/>
                                        );
                                    })
                                    }
                                </Row>
                            </Tab.Pane>
                            {/* <Tab.Pane eventKey="third">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                            </Tab.Pane> */}
                        </Tab.Content>
                        </Tab.Container>
                    </div>}
                    </TrackVisibility>
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
};