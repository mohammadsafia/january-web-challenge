import { Container } from "reactstrap";
import AOS from "aos";
import { loremText245, overviewData } from "../data";

const Overview = () => {
  AOS.init();
  return (
    <section data-aos="fade-left" data-aos-duration="1000" id="product-overview">
      <Container>
        <div data-aos="fade-right" data-aos-duration="2000" className="row">
          <div className="product-overview__description col-md-6">
            <h2>
              <strong className="main-title main-heading">{overviewData.title}</strong> From
            </h2>
            <h2 className="mb-4">{overviewData.story}</h2>
            <p className="mb-5">
              {loremText245}
            </p>
            <div>
              <button className="custom-btn btn-red">{overviewData.textButton}</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Overview;
