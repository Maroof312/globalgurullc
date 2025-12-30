import { memo, useMemo, useCallback } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./DataExpertise.scss";

// Import logos with responsive srcset
import Yardi from "../../assets/images/Yardi_logo.webp?w=120;200&format=webp&as=srcset";
import YardiFallback from "../../assets/images/Yardi_logo.webp?w=200";
import sap from "../../assets/images/sap_logo.webp?w=120;200&format=webp&as=srcset";
import sapFallback from "../../assets/images/sap_logo.webp?w=200";
import appFolio from "../../assets/images/app-folio-logo.webp?w=120;200&format=webp&as=srcset";
import appFolioFallback from "../../assets/images/app-folio-logo.webp?w=200";
import rentManager from "../../assets/images/rent-manager-logo.webp?w=120;200&format=webp&as=srcset";
import rentManagerFallback from "../../assets/images/rent-manager-logo.webp?w=200";
import sequentra from "../../assets/images/sequentra_logo.webp?w=120;200&format=webp&as=srcset";
import sequentraFallback from "../../assets/images/sequentra_logo.webp?w=200";
import lucernex from "../../assets/images/lucernex_logo.webp?w=120;200&format=webp&as=srcset";
import lucernexFallback from "../../assets/images/lucernex_logo.webp?w=200";
import ProLease from "../../assets/images/ProLease_logo.webp?w=120;200&format=webp&as=srcset";
import ProLeaseFallback from "../../assets/images/ProLease_logo.webp?w=200";
import Buildium from "../../assets/images/buildium-logo.webp?w=120;200&format=webp&as=srcset";
import BuildiumFallback from "../../assets/images/buildium-logo.webp?w=200";
import Monarch from "../../assets/images/Monarch_logo.webp?w=120;200&format=webp&as=srcset";
import MonarchFallback from "../../assets/images/Monarch_logo.webp?w=200";
import CoStar from "../../assets/images/CoStar_logo.webp?w=120;200&format=webp&as=srcset";
import CoStarFallback from "../../assets/images/CoStar_logo.webp?w=200";
import mri from "../../assets/images/mri_logo.webp?w=120;200&format=webp&as=srcset";
import mriFallback from "../../assets/images/mri_logo.webp?w=200";
import vl from "../../assets/images/vl_logo.webp?w=120;200&format=webp&as=srcset";
import vlFallback from "../../assets/images/vl_logo.webp?w=200";
import LeaseHarbor from "../../assets/images/LeaseHarbor_logo.webp?w=120;200&format=webp&as=srcset";
import LeaseHarborFallback from "../../assets/images/LeaseHarbor_logo.webp?w=200";
import Fis from "../../assets/images/Fis_logo.webp?w=120;200&format=webp&as=srcset";
import FisFallback from "../../assets/images/Fis_logo.webp?w=200";
import triangle from "../../assets/images/triangle_logo.webp?w=120;200&format=webp&as=srcset";
import triangleFallback from "../../assets/images/triangle_logo.webp?w=200";
import Leverton from "../../assets/images/Leverton_logo.webp?w=120;200&format=webp&as=srcset";
import LevertonFallback from "../../assets/images/Leverton_logo.webp?w=200";

/* ✅ FIXED: removed invalid ';webp' */
import oracle from "../../assets/images/oracle.webp?w=120;200&format=webp&as=srcset";
import oracleFallback from "../../assets/images/oracle.webp?w=200";
import quickbook from "../../assets/images/quickbooks.webp?w=120;200&format=webp&as=srcset";
import quickbookFallback from "../../assets/images/quickbooks.webp?w=200";
import qad from "../../assets/images/qad-alliances.webp?w=120;200&format=webp&as=srcset";
import qadFallback from "../../assets/images/qad-alliances.webp?w=200";

const expertiseData = [
  { src: Yardi, fallback: YardiFallback, alt: "Yardi Software" },
  { src: sap, fallback: sapFallback, alt: "SAP Software" },
  { src: appFolio, fallback: appFolioFallback, alt: "AppFolio Software" },
  { src: rentManager, fallback: rentManagerFallback, alt: "Rent Manager Software" },
  { src: sequentra, fallback: sequentraFallback, alt: "Sequentra Software" },
  { src: lucernex, fallback: lucernexFallback, alt: "Lucernex Software" },
  { src: ProLease, fallback: ProLeaseFallback, alt: "ProLease Software" },
  { src: Buildium, fallback: BuildiumFallback, alt: "Buildium Property" },
  { src: Monarch, fallback: MonarchFallback, alt: "Monarch Software" },
  { src: CoStar, fallback: CoStarFallback, alt: "CoStar Software" },
  { src: mri, fallback: mriFallback, alt: "MRI Software" },
  { src: vl, fallback: vlFallback, alt: "VL Software" },
  { src: LeaseHarbor, fallback: LeaseHarborFallback, alt: "LeaseHarbor Software" },
  { src: Fis, fallback: FisFallback, alt: "Fis Software" },
  { src: triangle, fallback: triangleFallback, alt: "Triangle Software" },
  { src: Leverton, fallback: LevertonFallback, alt: "Leverton Software" },
  { src: oracle, fallback: oracleFallback, alt: "Oracle Software" },
  { src: quickbook, fallback: quickbookFallback, alt: "QuickBooks Software" },
  { src: qad, fallback: qadFallback, alt: "QAD Alliances Software" },
];

const DataExpertise = memo(() => {
  const autoplayOptions = useMemo(() => ({ delay: 2000, disableOnInteraction: false }), []);
  const breakpoints = useMemo(
    () => ({
      320: { slidesPerView: 2, spaceBetween: 14 },
      576: { slidesPerView: 3, spaceBetween: 16 },
      768: { slidesPerView: 4, spaceBetween: 18 },
      992: { slidesPerView: 5, spaceBetween: 22 },
      1200: { slidesPerView: 6, spaceBetween: 26 },
    }),
    []
  );

  const renderSlide = useCallback(
    (logo, index) => (
      <SwiperSlide key={index} className="logo-slide">
        <div className="logo-container">
          <img
            srcSet={logo.src}
            src={logo.fallback}
            alt={logo.alt}
            className="carousel-logo"
            loading="lazy"
            sizes="(max-width: 768px) 170px, 200px"
            width="200"
            height="64"
          />
        </div>
      </SwiperSlide>
    ),
    []
  );

  const slides = useMemo(() => expertiseData.map(renderSlide), [renderSlide]);

  return (
    <section className="data-expertise" aria-label="Data Expertise">
      <Container>
        <h2 className="text-center">Data Expertise</h2>
        <Swiper
          modules={[Autoplay]}
          slidesPerView={6}
          loop={true}
          autoplay={autoplayOptions}
          breakpoints={breakpoints}
          className="expertise-carousel"
        >
          {slides}
        </Swiper>
      </Container>
    </section>
  );
});

export default DataExpertise;
