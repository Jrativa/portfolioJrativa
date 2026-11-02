import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Linkedin, Github, Instagram } from "react-bootstrap-icons";
import { useLanguage, LANGUAGES } from "../i18n/LanguageContext";

const SECTIONS = ['home', 'experience', 'education', 'skills', 'projects'];

// eslint-disable-next-line react-refresh/only-export-components
export const SOCIAL_LINKS = [
  { href: 'https://www.linkedin.com/in/jrativamedina', label: 'LinkedIn', Icon: Linkedin },
  { href: 'https://github.com/Jrativa', label: 'GitHub', Icon: Github },
  { href: 'https://www.instagram.com/jlrm1106/', label: 'Instagram', Icon: Instagram },
];

export const NavBar = () => {
  const { t, lang, setLang } = useLanguage();
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in the middle of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveLink(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Navbar expand="lg" collapseOnSelect className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="brand">
          JL<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {SECTIONS.map((id) => (
              <Nav.Link
                key={id}
                href={`#${id}`}
                eventKey={id}
                className={activeLink === id ? 'active navbar-link' : 'navbar-link'}
                onClick={() => setActiveLink(id)}
              >
                {t.nav[id]}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="lang-switch" role="group" aria-label="Language">
              {LANGUAGES.map((code) => (
                <button
                  key={code}
                  type="button"
                  className={lang === code ? 'active' : ''}
                  aria-pressed={lang === code}
                  onClick={() => setLang(code)}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <div className="social-icon">
              {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a href="#connect">
              <button className="vvd"><span>{t.nav.contact}</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
