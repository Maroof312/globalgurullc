import { Container, Row, Col, Carousel } from 'react-bootstrap'
import { motion } from 'framer-motion'
// import testimonial1 from '../../assets/images/testimonials-1.webp'
// import testimonial2 from '../../assets/images/testimonials-2.webp'
// import testimonial3 from '../../assets/images/testimonials-3.webp'
import './Testimonials.scss'

const testimonials = [
  {
    name: "CFO",
    role: "Property operations",
    content: "Global Guru transformed our business operations completely. Their strategic insights helped us increase revenue by 40% in just six months.",
    // avatar: testimonial1
  },
  {
    name: "Property Manager",
    role: "",
    content: "The team's expertise in financial consulting is unmatched. They identified cost-saving opportunities we never would have found on our own.",
    // avatar: testimonial2
  },
  {
    name: "CEO",
    role: "Property Services",
    content: "Our marketing strategy was completely revamped by Global Guru. The results have been phenomenal with a 300% increase in lead generation.",
    // avatar: testimonial3
  }
]

export default function Testimonials() {
  return (
    <section className="testimonials-section py-5 bg-light">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="display-5 fw-bold mb-3">Client Testimonials</h2>
              <p className="lead">
                Hear what our clients say about our services
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row>
          <Col>
            <Carousel indicators={false} interval={5000} pause="hover">
              {testimonials.map((testimonial, index) => (
                <Carousel.Item key={index}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="testimonial-item"
                  >
                    <div className="testimonial-content">
                      <p className="testimonial-text">"{testimonial.content}"</p>
                      <div className="testimonial-author">
                        {/* <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          width={60}
                          height={60}
                          loading=  "lazy"
                          className="rounded-circle"
                        /> */}
                        <div>
                          <h5 className="mb-0">{testimonial.name}</h5>
                          <small className="text-muted">{testimonial.role}</small>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  )
}