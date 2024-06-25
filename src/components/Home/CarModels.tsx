"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { carModels } from "@/mocks/carModels";
import Image from "next/image";

const CarModels = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 12,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 500,
        cssEase: "linear"
    };
    return (
        <section className='custom-container1 py-10'>
            <div className="slider-container">
                <Slider {...settings} className={`grid grid-cols-${carModels.length} items-center gap-6`}>
                    {
                        carModels.map(index => (
                            <div key={index}>
                                <div className="h-[150px] mx-10 gap-10 flex items-center justify-center">
                                    <Image src={index} alt={index} width={140} height={140} className="object-cover" />
                                </div>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        </section>
    )
}

export default CarModels