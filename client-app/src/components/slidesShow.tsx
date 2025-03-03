'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SlidesShow () {
    const slides = [
        {
            ImageSrc : '/image/475786889_1028591562628726_466323718988762663_n.jpg'
        },
        {
            ImageSrc : '/image/475832958_1028591602628722_3608868426054246080_n.jpg'
        },
        {
            ImageSrc : '/image/475847270_1028591625962053_1653825087658122433_n.jpg'
        },
        {
            ImageSrc : '/image/475901244_1028591585962057_3497042177469414244_n.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState<number>(0); // Định nghĩa kiểu dữ liệu là number

    // Hàm thay đổi slide tự động
    const handleChangeSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // useEffect để thiết lập interval tự động chuyển slide
    useEffect(() => {
        const interval = setInterval(handleChangeSlide, 4000);
        return () => clearInterval(interval); // Xóa interval khi component unmount
    }, []);

    // Chuyển sang slide tiếp theo
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Chuyển về slide trước
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    // Xử lý khi nhấn vào chấm tròn (dot)
    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };
    return (
        <div className="w-full h-full overflow-hidden">
            <div className="flex flex-col items-center justify-center text-[#081c36] bg-while select-none">
                <div className="flex justify-center relative">
                    <div className="absolute left-[10px] text-[1.5rem] w-[2.5rem] h-[2.5rem] leading-[0px] mt-[-12px] z-[1] p-[8px] cursor-pointer" style={{top: `calc(50% - 20px)`}}  onClick={handlePrev}>
                        <span className="text-[30px] font-light material-symbols-outlined">
                            arrow_back_ios
                        </span>
                    </div>
                    <div className="flex flex-col items-center overflow-hidden h-full">
                        <div className="flex relative h-[520px] slideshow__content" style={{ left: `${currentIndex * -100}%`, height: '100%', width: 'calc(100% * 4)', margin: 'auto' }}>
                            {slides.map((pages, index) => (
                                <div key={index} className="relative w-full text-center flex flex-col justifi-center items-center">
                                    <Image src={pages.ImageSrc} alt={pages.ImageSrc} className="h-[520px] object-cover relative z-10" draggable="false" style={{ objectFit: 'contain'}}/>
                                    <div className="absolute inset-0 bg-black/30 backdrop-blur-lg z-0"></div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-[30px] mb-[10px] text-center absolute bottom-0 z-[11]">
                            {slides.map((_, index) => (
                                <span
                                    key={index}
                                    className={`bg-[#e6e8ea] inline-block h-[8px] w-[8px] mx-[7px] rounded-[100%] cursor-pointer ${currentIndex === index ? 'selected__bottom__dot' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                    <div className="absolute right-[10px] text-[1.5rem] w-[1.5rem] h-[1.5rem] leading-[0px] mt-[-12px] z-[1] p-[8px] cursor-pointer" style={{top: `calc(50% - 20px)`}}  onClick={handleNext}>
                        <span className="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}