'use client';
import Slider from "react-slick";
import Image from "next/image";
import {useRef, useState} from "react";
import Icon from "@/components/ui/svgIcon/Icon";

interface ReviewsSliderProps {
    reviews: {
        reviewText: string;
        name: string;
        profession: string;
        image: string;
    }[]
}

export default function ReviewsSlider({reviews}: ReviewsSliderProps) {

    const sliderRef = useRef<Slider>(null);
    const [currentSlide, setCurrentSlide] = useState(1);
    const settings = {
        dots: false,
        infinite: false,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_: number, next: number) => setCurrentSlide(next + 1),
        adaptiveHeight: true,
    };
    return (
        <div className={'w-full lg:w-[calc(100%-270px-160px)] flex flex-col gap-4'}>
            <Slider {...settings} ref={sliderRef} className={'mb-4'}>
                {reviews.map(review => (
                    <div key={Math.random()}>
                        <div className={'flex flex-col gap-5 md:flex-row items-start justify-start'}>
                            <Image src={review.image} alt={review.name} width={100} height={100} className={'mb-5 md:mb-0 w-[100px] min-w-[100px]'}/>
                            <div className={'flex flex-col'}>
                                <p className={'font-light text-lg text-gray-2 mb-4 md:mb-[30px]'}>{review.reviewText}</p>
                                <span className={'text-dark-gray text-lg'}>{review.name}</span>
                                <span className={'text-dark-gray text-lg'}>{review.profession}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className={'flex gap-2 justify-center items-center'}>
                <button onClick={() => sliderRef.current?.slickPrev()} className={currentSlide === 1 ? 'opacity-0' : 'cursor-pointer'}><Icon name={'icon-arrow'} className={'rotate-180 w-[75px] h-4'} /></button>
                <span className="text-black text-base font-light">{currentSlide} / {reviews.length}</span>
                <button onClick={() => sliderRef.current?.slickNext()} className={currentSlide === reviews.length ? 'opacity-0' : 'cursor-pointer'}><Icon name={'icon-arrow'} className={'w-[75px] h-4'} /></button>
            </div>
        </div>
    )
}