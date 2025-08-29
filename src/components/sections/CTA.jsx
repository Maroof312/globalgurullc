import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './CTA.scss'

export default function CTA({
  title = "Ready to transform your business?",
  description = "Contact us today to discuss how we can help you achieve your goals.",
  buttonText = "Get Started",
  buttonLink = "/contact",
  backgroundColor = "primary",
  textColor = "white",
  buttonVariant = "light",
  animationDirection = "horizontal"
}) {
  // Determine animation directions based on prop
  const getAnimations = () => {
    if (animationDirection === "horizontal") {
      return {
        textInitial: { opacity: 0, x: -30 },
        textAnimate: { opacity: 1, x: 0 },
        buttonInitial: { opacity: 0, x: 30 },
        buttonAnimate: { opacity: 1, x: 0 }
      }
    } else if (animationDirection === "vertical") {
      return {
        textInitial: { opacity: 0, y: -30 },
        textAnimate: { opacity: 1, y: 0 },
        buttonInitial: { opacity: 0, y: 30 },
        buttonAnimate: { opacity: 1, y: 0 }
      }
    } else {
      return {
        textInitial: { opacity: 0 },
        textAnimate: { opacity: 1 },
        buttonInitial: { opacity: 0 },
        buttonAnimate: { opacity: 1 }
      }
    }
  }

  const animations = getAnimations()

  return (
    <section className={`cta-section py-5 bg-${backgroundColor} text-${textColor}`}>
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <motion.div
              initial={animations.textInitial}
              whileInView={animations.textAnimate}
              transition={{ duration: 0.5 }}
            >
              <h2 className="display-5 fw-bold mb-3">{title}</h2>
              <p className="lead mb-0">
                {description}
              </p>
            </motion.div>
          </Col>
          <Col md={4} className="text-md-end mt-4 mt-md-0">
            <motion.div
              initial={animations.buttonInitial}
              whileInView={animations.buttonAnimate}
              transition={{ duration: 0.5 }}
            >
              <Button 
                variant={buttonVariant} 
                size="lg" 
                href={buttonLink}
                className="cta-button"
              >
                {buttonText}
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}