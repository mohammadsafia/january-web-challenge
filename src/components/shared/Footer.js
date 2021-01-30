import { Container } from "reactstrap";
import logo from '../../assets/images/logo-2.svg';
import { footerData } from "../../data/footer";
import { IoLogoGooglePlaystore, AiOutlineApple, BsChevronCompactUp } from 'react-icons/all'
import { goToTheTopPage } from "../../utils";
const Footer = () => {
  return (
    <section id="footer" className="mt-5">
      <Container>
        <div className="row footer__wrapper">
          <div className="col-md-3">
            <ul className="list-unstyled">
              <li>
                <div>
                  <img className="scale-icon" src={logo} alt="logo" />
                </div>
              </li>
              <li>
                <div className="footer__wrapper__supported-stores">
                  <div className="footer__wrapper__supported-stores--logo">
                    <AiOutlineApple size={30} />
                  </div>
                  <div className="footer__wrapper__supported-stores--description">
                    <span className="footer__wrapper__supported-stores--description--s-label">Download on the</span>
                    <span className="footer__wrapper__supported-stores--description--xl-label">App Store</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="footer__wrapper__supported-stores">
                  <div className="footer__wrapper__supported-stores--logo">
                    <IoLogoGooglePlaystore size={30} />
                  </div>
                  <div className="footer__wrapper__supported-stores--description">
                    <span className="footer__wrapper__supported-stores--description--s-label">GET IN ON</span>
                    <span className="footer__wrapper__supported-stores--description--xl-label">Play Store</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {footerData.mainAddresses.map(address => {
            return (
              <div key={address.id} className="col-md-3">
                <ul className="list-unstyled footer__wrapper__list">
                  <h3 className="footer__wrapper__list--header">{address.header}</h3>
                  {address.categories.map(category => {
                    return (
                      <li key={category.id}>
                        <span className="footer__wrapper__list--label">{category.label}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <span onClick={goToTheTopPage} className="footer__up scale-icon">
          <BsChevronCompactUp size={30} />
        </span>
      </Container>
    </section>
  );
};

export default Footer;
