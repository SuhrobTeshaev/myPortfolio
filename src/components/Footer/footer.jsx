
import vk from './../../img/icons/vk.svg';
import i from './../../img/icons/instagram.svg';
import t from './../../img/icons/twitter.svg';
import g from './../../img/icons/gitHub.svg';
import l from './../../img/icons/linkedIn.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img    src={vk} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img   src={i} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img    src={t}alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/SuhrobTeshaev"><img    src={g} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img    src={l} alt="Link"/></a></li>
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