import { Container } from "reactstrap";
import partner1 from '../assets/images/partner-1.svg'
import partner2 from '../assets/images/partner-2.svg'
import partner3 from '../assets/images/partner-3.svg'
import partner4 from '../assets/images/partner-4.svg'

import AOS from "aos";
const Partner = () => {
  AOS.init();
  return (
    <section id="partner" className="mt-5">
      <Container>
        <div className="row">
          <div data-aos="fade-down" data-aos-duration="1000" className="col-lg-3 col-md-6 col-sm-12 text-center">
            <img className="scale-icon" src={partner1} alt="partner1" />
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="col-lg-3 col-md-6 col-sm-12 text-center">
            <img className="scale-icon" src={partner2} alt="partner2" />
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="col-lg-3 col-md-6 col-sm-12 text-center">
            <img className="scale-icon" src={partner3} alt="partner3" />
          </div>
          <div data-aos="fade-down" data-aos-duration="2000" className="col-lg-3 col-md-6 col-sm-12 text-center">
            <img className="scale-icon" src={partner4} alt="partner4" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Partner;
