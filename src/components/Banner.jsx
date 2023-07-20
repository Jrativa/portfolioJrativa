import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/header-img.svg";
import { useEffect, useState } from "react";

export const Banner = () => {
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Front End Developer", "Back End Developer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000; 

    useEffect(() => {
        let timer = setInterval(() => {
            time()
        }, delta);
        return () => {
            clearInterval(timer);
        }
    }, [text]);

    const time = () => {
        let i = index % toRotate.length;
        let fullText = toRotate[i];
        let textToDisplay = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(textToDisplay);

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        if(!isDeleting && textToDisplay === fullText){
            setDelta(period);
            setIsDeleting(true);
        }
        else if(isDeleting && textToDisplay === ""){
            setIsDeleting(false);
            setIndex(prevIndex => prevIndex+1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi, I am Jose Luis`} <span className="wrap">{text}</span></h1>
                        <button onClick={()=>console.log('connect')}>Lets build amazing things :)<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={7} className="banner-right">
                        <img src={headerImg} alt="Header image" />
                    </Col>
                </Row>

            </Container>
        </section>
    );
};