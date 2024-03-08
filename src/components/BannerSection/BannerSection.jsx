import { username } from "../../data/user";
import bannerImg from "../../assets/banner-img.png";

const BannerSection = () => {
    return (
        <section className="banner__container"> 
            <div className="banner__left">
                <div className="banner__username">{username}</div>
                <h1 className="banner__welcome">Bem-vindo ao meu portfólio</h1>
                <p>Uma frase interessante sobre mim</p>
                <button className="banner__button">Saiba mais</button>
            </div>
            <div className="banner__right">
                <img src={bannerImg} alt="Banner do Portfólio" />
            </div>
      </section>
    )
}

export default BannerSection;