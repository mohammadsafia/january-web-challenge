import { Container } from "reactstrap";
import AOS from "aos";
import { AiFillStar } from 'react-icons/all'
import aboutImg from '../assets/images/about-img.svg'
import { aboutData } from "../data/about";
const AboutUs = () => {
  AOS.init();
  return (
    <section id="about-us">
      <Container>
        <div className="row">
          <div data-aos='flip-left' data-aos-duration="1000" className="col-md-6 my-4">
            <div className="about-us__image-container">
              <img src={aboutImg} alt="about" />
            </div>
          </div>
          <div data-aos='flip-right' data-aos-duration="1000" className="col-md-6">
            <div className="about-us__description-container">
              <p className="sm-title">{aboutData.smTitle}</p>
              <h3 className="heading-secondary mb-4">{aboutData.bigTitle}</h3>
              <p> {aboutData.description}</p>
              <div className="about-us__rating d-flex align-items-center">
                <p className="mb-0">
                  <strong>Rating 4.8</strong>
                </p>
                <AiFillStar color={'#e96a20'} size={16} />
                <AiFillStar color={'#e96a20'} size={16} />
                <AiFillStar color={'#e96a20'} size={16} />
                <AiFillStar color={'#e96a20'} size={16} />
                <AiFillStar color={'#e96a20'} size={16} />
              </div>

              <ul className="about-us__statistics list-unstyled">
                <li className="list-inline-item">
                  <div>
                    <span>1M+</span>
                    <span>Download</span>
                  </div>
                </li>
                <li>
                  <div className="about-us__statistics__border-right" />
                </li>
                <li className="list-inline-item">
                  <div>
                    <span>234K+</span>
                    <span>Happy User</span>
                  </div>
                </li>
                <li>
                  <div className="about-us__statistics__border-right" />
                </li>
                <li className="list-inline-item">
                  <div>
                    <span>34K+</span>
                    <span>Reviews</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
