import wppImg from "../../assets/whatsapp-icon.png";
import linkedinImg from "../../assets/linkedin-icon.png";
import githubImg from "../../assets/github-icon.png";
import {user} from "../../data/user";

const Footer = () => {
    return (
        <footer className="footer__container">
            <div className="footer__box">
                <h1 className="footer__title">Contato</h1>
                <ul className="footer__social"> 
                    <li><a href="#"><img src={wppImg} alt="Contato por Whatsapp"/></a></li>
                    <li><a href="#"><img src={linkedinImg} alt="Contato por Linkedin"/></a></li>
                    <li><a href="#"><img src={githubImg} alt="Contato por GitHub"/></a></li>
                </ul>
            </div>
            <div className="footer__copyright">
                <p className="copyright">Todos os direitos reservados - {user}</p>
            </div>
            
        </footer>
    )
}

export default Footer;