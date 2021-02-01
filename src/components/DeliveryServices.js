import { Container } from "reactstrap";
import AOS from "aos";
import { deliveryServicesData, loremText127 } from "../data";

const DeliveryServices = () => {
  AOS.init();
  return (
    <section id="delivery-services">
      <Container>
        <div className="delivery-services__title">
          <p className="sm-title">{deliveryServicesData.smTitle}</p>
          <h3 className="heading-secondary">{deliveryServicesData.bigTitle}</h3>
        </div>
        <div className="row delivery-services__cards">
          {deliveryServicesData.products.map(product => (
            <div data-aos={product.dataAos} data-aos-duration={product.duration} key={product.id} className="delivery-services__cards__card col-lg-4 col-md-6 col-sm-12">
              <img className='delivery-services__cards__card__img' src={product.image} alt={product.label} />
              <p className='delivery-services__cards__card__label  main-heading'>{product.label}</p>
              <p className='delivery-services__cards__card__description'>{loremText127}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DeliveryServices;
