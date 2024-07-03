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
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 12,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className='custom-container1 py-10'>
            <div className="slider-container">
                <Slider {...settings} className={`grid grid-cols-${carModels.length} items-center gap-6`}>
                    {
                        carModels.map(index => (
                            <div key={index}>
                                <div className="h-auto lg:h-[150px] w-full mx-3 lg:mx-10 gap-10 flex items-center justify-center">
                                    <Image src={index} alt={index} width={100} height={100} className="w-[50px] h-[50px] object-contain" />
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