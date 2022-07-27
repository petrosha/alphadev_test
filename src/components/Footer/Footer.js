import "./Footer.css";
import { ReactComponent as Logo } from "../Logo/Logo.svg";
import Icons from "../Icons/Icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapper">
        <div className="footer-grid">
          <div className="footer__logo-column">
            <Logo />
          </div>
          <div className="footer__first-column">
            <a className="footer__link" href="#3">
              <p className="footer__text">Политика конфиденциальности</p>
            </a>
            <a className="footer__link" href="#3">
              <p className="footer__text">Публичная оферта</p>
            </a>
            <a className="footer__link" href="#3">
              <p className="footer__text">+7 912 123-45-67</p>
            </a>
            <a className="footer__link" href="#3">
              <p className="footer__text">about@microsoftforum.com</p>
            </a>
          </div>
          <div className="footer__second-column">
            <a className="footer__link" href="#3">
              <p className="footer__text">о мероприятии</p>
            </a>
            <a className="footer__link" href="#3">
              <p className="footer__text">темы</p>
            </a>
            <a className="footer__link" href="#3">
              <p className="footer__text">расписание</p>
            </a>
            <a className="footer__link" href="#3">
              <p className="footer__text">спикеры</p>
            </a>

            <a className="footer__link" href="#3">
              <p className="footer__text">контакты</p>
            </a>
          </div>
          <div className="footer__icons-column">
            <Icons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
