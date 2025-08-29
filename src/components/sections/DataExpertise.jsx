import { Container } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import './DataExpertise.scss'

import Yardi from '../../assets/images/Yardi_logo.webp'
import sap from '../../assets/images/sap_logo.webp'
import appFolio from '../../assets/images/app-folio-logo.webp'
import rentManager from '../../assets/images/rent-manager-logo.webp'
import sequentra from '../../assets/images/sequentra_logo.webp'
import lucernex from '../../assets/images/lucernex_logo.webp'
import ProLease from '../../assets/images/ProLease_logo.webp'
import Monarch from '../../assets/images/Monarch_logo.webp'
import CoStar from '../../assets/images/CoStar_logo.webp'
import mri from '../../assets/images/mri_logo.webp'
import vl from '../../assets/images/vl_logo.webp'
import LeaseHarbor from '../../assets/images/LeaseHarbor_logo.webp'
import Fis from '../../assets/images/Fis_logo.webp'
import triangle from '../../assets/images/triangle_logo.webp'
import Leverton from '../../assets/images/Leverton_logo.webp'
import oracle from '../../assets/images/oracle.avif'
import quickbook from '../../assets/images/quickbooks.avif'
import qad from '../../assets/images/qad-alliances.avif'

const expertiseImages = [
  Yardi, sap, appFolio, rentManager, sequentra, lucernex, 
  ProLease, CoStar, Monarch, mri, vl, LeaseHarbor,
  Fis, triangle, Leverton, oracle, quickbook, qad
]

export default function DataExpertise() {
  return (
    <section className="data-expertise">
      <Container>
        <h2 className="text-center mb-5">Data Expertise</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            576: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            992: { slidesPerView: 5 },
            1200: { slidesPerView: 6 },
          }}
          className="expertise-carousel"
        >
          {expertiseImages.map((image, index) => (
            <SwiperSlide key={index} className="logo-slide">
              <div className="logo-container">
                <img
                  src={image}
                  alt={`Logo ${index + 1}`}
                  className="carousel-logo"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  )
}