import { Container, Row, Col, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Testimonials.scss";

const testimonials = [
  {
    name: "Director of Property Management",
    role: "NYC Real Estate Firm",
    content:
      "Partnering with Global Guru Solution has been a game-changer for our portfolio. Their team has handled thousands of CAM reconciliations with precision and accuracy, saving us both time and unnecessary disputes. We've seen a noticeable boost in efficiency and peace of mind knowing deadlines are never missed",
  },
  {
    name: "CFO",
    role: "National Commercial Real Estate Company",
    content:
      "We were struggling with backlogs in our lease accounting and CAM reconciliations. Global Guru's team stepped in seamlessly, managing over 10,000 CAM recs for us while reducing payroll costs significantly. Their professionalism and responsiveness make them an invaluable extension of our team.",
  },
  {
    name: "Managing Partner",
    role: "Commercial Property Investment Group",
    content:
      "Global Guru Solution has transformed how we manage our real estate finances. With their expertise, our accounting department is leaner, more productive, and completely reliable. The cost savings and accuracy we've gained with their services far exceed our expectations.",
  },
  {
    name: "Controller",
    role: "California Real Estate Firm",
    content:
      "Working with Global Guru Solution has completely optimized our accounting operations. Their expertise in AR/AP, bank reconciliations, and full end-to-end property accounting has given us accuracy and peace of mind. What impressed us most was their proficiency with Yardi – they not only managed our system seamlessly but also helped us maximize its reporting capabilities. The result: streamlined processes, cost savings, and faster decision-making across our portfolio.",
  },
];

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
                      <p className="testimonial-text">
                        "{testimonial.content}"
                      </p>
                      <div className="testimonial-author">
                        <div>
                          <h5 className="mb-0">{testimonial.name}</h5>
                          <small className="text-muted">
                            {testimonial.role}
                          </small>
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
  );
}