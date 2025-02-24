import PropTypes from 'prop-types';

const ProjectCard = ({ title, image, link = "#", description, compact = false }) => {
  return (
    
    <article className="project">
      <h3>{title}</h3>
      <a>
         <img src={image} alt={title} />
      </a>
      <p>{description}</p>
      <a 
        href={link} 
        className="btn" 
        style= {{display: compact ? "none" : "inline-block"}}
        target="_blank">
          View Project
      </a>
      
    </article>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  description: PropTypes.string.isRequired,
  compact: PropTypes.bool,
};

export default ProjectCard;

