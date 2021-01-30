import { Container } from "reactstrap";
import AOS from "aos";
import { testimonialData, loremText245 } from "../data";
import { AiFillStar } from 'react-icons/all'

const Testimonials = () => {
  AOS.init();
  return (
    <section id="testimonials">
      <div className="testimonials__title mb-5">
        <p className="sm-title">{testimonialData.smTitle}</p>
        <h3 className="heading-secondary">{testimonialData.bigTitle}</h3>
      </div>
      <Container>
        <div className="row testimonials__cards">
          {testimonialData.testimonials.map(testimonial => (
            <div data-aos={testimonial.dataAos} data-aos-duration={testimonial.duration} key={testimonial.id} className={`testimonials__cards__card col-lg-4 col-md-6 col-sm-12 ${testimonial.className}`}>
              <div className={`testimonials__cards__card__wrapper`}>
                <div className="testimonials__cards__card__stars">
                  <span><AiFillStar color={'#e96a20'} size={16} /></span>
                  <span><AiFillStar color={'#e96a20'} size={16} /></span>
                  <span><AiFillStar color={'#e96a20'} size={16} /></span>
                  <span><AiFillStar color={'#e96a20'} size={16} /></span>
                  <span><AiFillStar color={'#e96a20'} size={16} /></span>
                </div>
                <p>{loremText245} </p>
                <div className="testimonials__cards__card--media">
                  <img className='testimonials__cards__card__img' src={testimonial.image} alt={testimonial.name} />
                  <div className="testimonials__cards__card__description">
                    <p className='testimonials__cards__card__name  main-heading mb-0'>{testimonial.name}</p>
                    <p className='testimonials__cards__card__nick-name mb-0'>{testimonial.nickName}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
