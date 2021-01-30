import { Container } from "reactstrap";
import AOS from "aos";
import receivedImg from '../assets/images/received-img.svg'
import { contactLessData } from "../data";
const ContactLess = () => {
  AOS.init();
  return (
    <section id="contact-less" className="my-5">
      <Container>
        <div className="row">
          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="col-md-6 my-4">
            <div>
              <img src={receivedImg} alt="received" width="100%" height="100%" />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="3000" className="col-md-6">
            <div className="c-margin-top-8">
              <p className="sm-title">{contactLessData.smTitle}</p>
              <h3 className="heading-secondary mb-4">{contactLessData.bigTitle}</h3>
              <p> {contactLessData.description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactLess;
