import React from "react";
import Slider from "react-slick";
import style from '../../../styles/coments.module.css'
import { data } from "../../../utils/coments.json";
import { BsLinkedin } from 'react-icons/bs'
interface cardItemType {
    img: string,
    text: string,
    externalLink: string,
}

const SliderComents = () => {
    function SampleNextArrow(props) {
        const {className, style, onClick} = props
        return (
            <div
                className="slick-arrow"
                style={{...style, display: 'block'}}
                onClick={onClick}
            >
                proximo
                {/* <img src={ARROW_left} alt="arrow_left"/> */}
            </div>
        );
    }
      
    const SamplePrevArrow = (props) => {
        const { className, onClick } = props
        return (
            <div 
                className={className}
                onClick={onClick}
            >
                <BsLinkedin size={25} />
                {/* <FontAwesomeIcon
                    icon={Icons.faAngleLeft}
                    color="#000"
                    size="2x"
                /> */}
            </div>
        );
    }

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    const CardComent = (item: cardItemType) => {
        return (
            <div className={style.itemCardComent}>
                <img className={style.imageCardComent} src={item.img} alt="Coment Images" />
                <hr className={style.lineCardComent} />
                <div>
                    <p className={style.textCardComent}>{item.text}</p>
                </div>
                <hr className={style.lineCardComent} />
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