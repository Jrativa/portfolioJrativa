import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/images/cat_programming_bg_removed.png";
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
                    <Col xs={12} md={6} className="banner-left">
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{`Hi, I am Jose Luis`} <span className="wrap">{text}</span></h1>
                        <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum</p>
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