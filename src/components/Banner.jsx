import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/cat_programming_bg_removed.png";
import { useEffect, useState } from "react";

export const Banner = () => {
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "FrontEnd Developer", "BackEnd Developer"];
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
                    <Col xs={12} md={6} className="banner-left">
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi, I am  Jose Luis  `} <span className="wrap">{text}</span></h1>
                        <p>I am an undergraduate student in systems and computer engineering at the national university of Colombia. I consider myself a curious person who likes to learn about new technologies related to systems engineering and computer science. Passionate about mathematics, physics, chemistry and solving problems and exercises through programming.</p>
                        <button onClick={()=>console.log('connect')}>{`Let's make amazing things :)`}<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} className="banner-right">
                        <img src={headerImg} alt="Header image" />
                    </Col>
                </Row>

            </Container>
        </section>
    );
};