import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Envelope, Linkedin } from "react-bootstrap-icons";
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import { useLanguage } from "../i18n/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null);

  const form = useRef();

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      await emailjs.sendForm('service_pty5cks', 'template_g3mct0r', form.current, 'WqRl_eIxbYwhVqklc');
      setStatus({ success: true });
      setFormDetails(formInitialDetails);
    } catch (error) {
      console.log(error.text);
      setStatus({ success: false });
    }
    setSending(false);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-start">
          <Col xs={12} md={5} className="mb-4 mb-md-0">
            <h2>{t.contact.title}</h2>
            <p className="contact-subtitle">{t.contact.subtitle}</p>
            <ul className="contact-info">
              <li>
                <span className="contact-info-icon"><Envelope size={18} /></span>
                <a href="mailto:jrativamedina@gmail.com">jrativamedina@gmail.com</a>
              </li>
              <li>
                <span className="contact-info-icon"><Linkedin size={18} /></span>
                <a href="https://www.linkedin.com/in/jrativamedina" target="_blank" rel="noreferrer">linkedin.com/in/jrativamedina</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={7}>
            <TrackVisibility once partialVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <form ref={form} onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" required value={formDetails.firstName} placeholder={t.contact.firstName} aria-label={t.contact.firstName} name="user_firstname" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder={t.contact.lastName} aria-label={t.contact.lastName} name="user_lastname" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="email" required value={formDetails.email} placeholder={t.contact.email} aria-label={t.contact.email} name="user_email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col xs={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder={t.contact.phone} aria-label={t.contact.phone} name="user_phone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col xs={12} className="px-1">
                      <textarea rows="6" required value={formDetails.message} placeholder={t.contact.message} aria-label={t.contact.message} name="message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit" disabled={sending}><span>{sending ? t.contact.sending : t.contact.send}</span></button>
                    </Col>
                    {
                      status &&
                      <Col xs={12} className="px-1">
                        <p className={status.success ? "success" : "danger"} role="status">{status.success ? t.contact.success : t.contact.error}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
