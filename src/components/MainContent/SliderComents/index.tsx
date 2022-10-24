import React from "react";
import Slider, { SwipeDirection } from "react-slick";
import style from '../../../styles/coments.module.css'
import { data } from "../../../utils/coments.json";
import { BsLinkedin } from 'react-icons/bs'

// import RightArrow from '../../../../public/img/Arrow_rigth.png'
// import LeftArrow from '../../../../public/img/Arrow_left.png';

interface cardItemType {
    img: string,
    text: string,
    externalLink: string,
}

const SliderComents = () => {
    // const renderArrows = () => {
    //     return (
    //       <div className="slider-arrow">
    //         <button
    //           className="arrow-btn prev"
    //           onClick={() => {SwipeDirection('left')}}
    //         >
    //           {/* <ArrowLeft /> */}
    //           left
    //         </button>
    //         <button
    //           className="arrow-btn next"
    //           // onClick={() => slider.slickNext()}
    //         >
    //           {/* <ArrowRight /> */}
    //           rigth
    //         </button>
    //       </div>
    //     );
    //   };
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <img className={style.arrowLeft} src='/img/Arrow_left.png' alt="prevArrow" {...props} />
    );
  
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <img className={style.arrowRight} src='/img/Arrow_rigth.png' alt="nextArrow" {...props} />
    );

    
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SlickArrowRight currentSlide={undefined} slideCount={undefined} />,
        prevArrow:  <SlickArrowLeft currentSlide={undefined} slideCount={undefined} />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerPadding: "10px",
              }
            }
          ]
    };

    const CardComent = (item: cardItemType) => {
        return (
            <div className={style.itemCardComent}>
                <img className={style.imageCardComent} src={item.img} alt="Coment Images" />
                <hr className={style.lineCardComent} />
                <div>
                    <p className={style.textCardComent}>{item.text}</p>
                </div>
                <hr className={style.secondlineCardComent} />
                <div>
                    <a className={style.linkCardComent} href={item.externalLink} target="_blank" rel="noreferrer">
                        <BsLinkedin size={25} />
                    </a>
                </div>
            </div>
        )
    }

    return (
      <div className={style.comentSection}>
        <h2 className={style.comentTitleSection}> Testimonial </h2>
        <div className={style.sliderContainer}>
            {/* {renderArrows()} */}
            <Slider {...settings}>
                {data && 
                    data.map((item, index) => { 
                        return ( 
                            <CardComent 
                                {...item} 
                                key={index} 
                            /> 
                        ) 
                    })
                }
            </Slider>
        </div>
      </div>
    );
}

export default SliderComents;