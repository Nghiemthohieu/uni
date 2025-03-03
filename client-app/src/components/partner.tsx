'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Partner() {
    const datas = [
        {
            img: "./image/logo-idp.webp",
        },
        {
            img: "./image/logo-bc.webp",
        },
        {
            img: "./image/logo-elsa.webp",
        },
    ]
    const slides = datas.length <= 3 ? [...datas, ...datas] : datas;
    return (
        <div className="bg-white">
            <div className="max-w-[1060px] mx-auto text-center p-[16px] grid gap-6">
                <h2 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)] pt-[20px]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>đối tác khách hàng</h2>
                <div className="mf-auto mr-auto relative overflow-hidden z-[1] w-full flex">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        modules={[Autoplay]} // ✅ Đảm bảo có đủ module
                        autoplay={{ delay: 1000 }} // ✅ Tự động chạy nếu cần
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            810: { slidesPerView: 3 }
                        }}
                    >

                        {slides.map((data, index) => (
                            <SwiperSlide key={index} className="justify-center pt-[24x] pl-[16px] pr-[16px] mb-[40px]" style={{display: `flex`}}>
                                <div className="flex-grow-0 w-full">
                                    <div className="py-[24px] shadow-[rgba(136,136,136,0.35)_0px_10px_40px_0px] ">
                                        <span className="box-border inline-block overflow-hidden size-auto bg-none opacity-[1] border-none p-0 m-0 relative max-w-full">
                                            <span className="box-border block size-auto bg-auto opacity-[1] border-none p-0 m-0 relative max-w-full">
                                                <img src="/image/remove-bg2.png" alt="" className="block max-w-full size-auto bg-none opacity-[1] border-none p-0 m-0" />
                                            </span>
                                            <img src={data.img} alt="Partner-image" className="absolute inset-0 box-border p-0 border-none m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full"/>
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}