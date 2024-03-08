const TechCard = ({name, img}) => {
    return (
        <li className="tech__card">
            <img src={img} alt="#" />
            <p>{name}</p>
        </li>
    )
}

export default TechCard;