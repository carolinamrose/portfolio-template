import TechCard from "./TechCard/TechCard";
import { technologies } from "../../data/technologies";

const TechSection = () => {
    return (
        <section className="tech__container">
        <h1 className="tech__title">Tecnologias</h1>
        <ul className="tech__list">
            {technologies.map((el) => (
                <TechCard img={el.img} name={el.name}/>  
            ))}
        </ul>

      </section>
    )
}

export default TechSection;