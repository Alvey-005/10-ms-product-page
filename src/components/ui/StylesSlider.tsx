import Slider, {Settings} from "react-slick";
import Testimonials from "./Testimonial";
import { useRef } from "react";

const settings: Settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "linear",
    lazyLoad: "ondemand",
    slidesToShow:  2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

const StyledSlider = ({items}:any) => {
  const sliderRef = useRef<Slider>(null);

  const handlePrevious = () => {
    sliderRef.current?.slickPrev();
  };

  const handleSlideNext = () => {
    sliderRef.current?.slickNext();
  };

    return (
      <div className="relative">
        <button onClick={handlePrevious} className="absolute top-1/2 left-[0] transform -translate-y-1/2 z-10 bg-[#FCE0D6] rounded-full h-[38px] w-[38px] flex items-center justify-center" id="quote">
        <svg  width="12" height="20" viewBox="0 0 12 20" fill="none">
<path d="M3.01285 10.0017L11.461 1.55337C11.816 1.19834 11.816 0.622761 11.461 0.26773C11.106 -0.0873005 10.5304 -0.0873005 10.1753 0.267791L1.08442 9.35896C0.913873 9.52938 0.818115 9.7606 0.818115 10.0017C0.818115 10.2428 0.913933 10.4741 1.08442 10.6445L10.1753 19.7352C10.3528 19.9127 10.5855 20.0015 10.8181 20.0015C11.0508 20.0015 11.2835 19.9127 11.461 19.7352C11.816 19.3801 11.816 18.8046 11.461 18.4495L3.01285 10.0017Z" fill="#FF000059"/>
</svg>
        </button>
        <button onClick={handleSlideNext} className="absolute top-1/2 right-[0] transform -translate-y-1/2 z-10 bg-[#FCE0D6] rounded-full h-[38px] w-[38px] flex items-center justify-center" id="quote">
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none">
<path d="M9.53256 10.0012L1.08443 18.4496C0.729397 18.8046 0.729397 19.3802 1.08443 19.7352C1.43946 20.0902 2.01504 20.0902 2.37007 19.7351L11.461 10.644C11.6315 10.4735 11.7273 10.2423 11.7273 10.0012C11.7273 9.76009 11.6315 9.52888 11.461 9.35839L2.37007 0.267708C2.19261 0.0901921 1.95994 0.00146436 1.72728 0.00146436C1.49461 0.00146436 1.26194 0.0901925 1.08443 0.267769C0.729397 0.6228 0.729397 1.19838 1.08443 1.55341L9.53256 10.0012Z" fill="#FF000059"/>
</svg>
        </button>

        <Slider {...settings} ref={sliderRef}>
          {items.map((item:any) => (
              <Testimonials name={item.name} description={item.description} image={item.profile_image} testimonial={item.testimonial}/>

          ))}
        </Slider>
        </div>
    )
}
export default StyledSlider;