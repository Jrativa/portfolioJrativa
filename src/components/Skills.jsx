import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import colorSharp from '../assets/images/color-sharp.png';
import { SKILLS, SKILL_CATEGORIES, CERTIFICATION } from '../shared/skills';
import { useLanguage } from '../i18n/LanguageContext';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};

export const Skills = () => {
    const { t } = useLanguage();

    const groups = [
        ...SKILL_CATEGORIES.map((category) => ({ title: t.skills.categories[category.key], items: category.items })),
        { title: t.skills.languages, items: t.skills.languagesList },
        { title: t.skills.certification, items: [CERTIFICATION], accent: true },
        { title: t.skills.soft, items: t.skills.softList },
    ];

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className='skill-bx'>
                            <h2>{t.skills.title}</h2>
                            <p>{t.skills.subtitle}</p>
                            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2500} arrows={true} swipeable={true} draggable={true} className='skill-slider'>
                                {SKILLS.map((skill) => (
                                    <div key={skill.id} className='skill-item'>
                                        <img src={skill.image} alt={skill.name} />
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                            <div className='skill-groups'>
                                {groups.map((group) => (
                                    <div key={group.title} className='skill-group'>
                                        <h6>{group.title}</h6>
                                        <div className='chips'>
                                            {group.items.map((item) => <span key={item} className={group.accent ? 'chip chip-accent' : 'chip'}>{item}</span>)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    );
};
