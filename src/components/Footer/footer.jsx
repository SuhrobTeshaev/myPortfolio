
import vk from './../../img/icons/vk.svg';
import i from './../../img/icons/instagram.svg';
import t from './../../img/icons/twitter.svg';
import g from './../../img/icons/gitHub.svg';
import tg from './../../img/icons/icons8-telegram.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="https://vk.com/id266155257"><img    src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img   src={i} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img    src={t}alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/SuhrobTeshaev"><img    src={g} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img    src={tg} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p></p>
                </div>
            </div>
        </div>
    </footer> 
     );
}
 
export default Footer;