/* eslint-disable react/prop-types */
import { Col } from "react-bootstrap";
import { Box, PersonBoundingBox, ShieldLock, CodeSlash } from "react-bootstrap-icons";

const ICONS = { box: Box, person: PersonBoundingBox, shield: ShieldLock };

export const ProjectCard = ({ name, description, image, icon, tags }) => {
  const Icon = ICONS[icon] || CodeSlash;
  return (
    <Col xs={12} sm={6} lg={4}>
      <div className="proj-card">
        <div className="proj-imgbx">
          {image
            ? <img src={image} alt={name} />
            : <div className="proj-placeholder"><Icon size={64} /></div>}
        </div>
        <div className="proj-body">
          <h4>{name}</h4>
          <p>{description}</p>
          {tags.length > 0 &&
            <div className="chips">
              {tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
            </div>}
        </div>
      </div>
    </Col>
  )
}
