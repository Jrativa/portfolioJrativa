import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/images/color-sharp.png';
import {SKILLS} from '../shared/skills'

export const Skills = () => {
    
    const Skills = SKILLS.map((skill) => {
        return (
            <div key={skill.id} className='skill-item'>
                <img src={skill.image} alt="Image" />
                <h5>{skill.name}</h5>
            </div>
        );
    });
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className='skill-bx'>
                            <h2>
                                Skills
                            </h2>
                            <p></p>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                                {Skills}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
};