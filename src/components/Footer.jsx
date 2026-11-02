import { Container } from "react-bootstrap";
import { Envelope } from "react-bootstrap-icons";
import { SOCIAL_LINKS } from "./NavBar";
import { useLanguage } from "../i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <Container>
        <div className="footer-inner">
          <a href="#home" className="brand">JL<span>.</span></a>
          <div className="social-icon">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}>
                <Icon size={16} />
              </a>
            ))}
            <a href="mailto:jrativamedina@gmail.com" aria-label="Email"><Envelope size={16} /></a>
          </div>
        </div>
        <p>© {new Date().getFullYear()} Jose Luis Rativa Medina. {t.footer.rights}</p>
      </Container>
    </footer>
  )
}
