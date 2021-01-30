import { Container } from "reactstrap";
import AOS from "aos";
import deliveryImg from '../assets/images/delivery-img.svg'
import { fastDeliveryData } from "../data";
const FastDelivery = () => {
  AOS.init();
  return (
    <section id="delivery-fast" className="my-5">
      <Container>
        <div className="row">
          <div data-aos="fade-up" data-aos-duration="3000" className="col-md-6">
            <div className="mt-5">
              <p className="sm-title">{fastDeliveryData.smTitle}</p>
              <h3 className="heading-secondary mb-4">{fastDeliveryData.bigTitle}</h3>
              <p> {fastDeliveryData.description}</p>
              <div>
                <button className="custom-btn btn-red">{fastDeliveryData.textButton}</button>
              </div>
            </div>
          </div>

          <div data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="col-md-6 my-4">
            <div>
              <img src={deliveryImg} alt="delivery" width="100%" height="100%" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FastDelivery;
