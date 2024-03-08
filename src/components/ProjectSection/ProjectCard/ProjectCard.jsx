import gitImg from "../../../assets/git-icon.svg";

const ProjectCard = ({name, description}) => {
    return (
        <li className="projects__card">
            <img className="card__icon" src={gitImg} alt="Icon do Git"></img>
            <h3 className="card__title">{name}</h3>
            <p className="card__description">{description}</p>
            <a className="card__link" href="#" alt="#">Saiba mais</a>
        </li>
    )
}

export default ProjectCard;