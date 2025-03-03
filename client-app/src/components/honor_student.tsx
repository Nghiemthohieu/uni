'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
export default function HonorStudent() {
    const honor = [
        {
            image: "/image/6575c9e016ee7.webp",
            topic: "885 toeic",
            description: "Tâm điểm chú ý là học viên Nguyễn Mạnh Hà đã xuất sắc ẵm trọn 885 TOIEC với Listening 475 và Reading 410 Tâm điểm chú ý là học viên Nguyễn Mạnh Hà đã xuất sắc ẵm trọn 885 TOIEC với Listening 475 và Reading 410.",
            name: "Nguyễn Mạnh Hà",
        },
        {
            image: "/image/6575c9e016ee7.webp",
            topic: "885 toeic",
            description: "Tâm điểm chú ý là học viên Nguyễn Mạnh Hà đã xuất sắc ẵm trọn 885 TOIEC với Listening 475 và Reading 410.",
            name: "Nguyễn Mạnh Hà",
        },
        {
            image: "/image/6575c9e016ee7.webp",
            topic: "885 toeic",
            description: "Tâm điểm chú ý là học viên Nguyễn Mạnh Hà đã xuất sắc ẵm trọn 885 TOIEC với Listening 475 và Reading 410.",
            name: "Nguyễn Mạnh Hà",
        },
        {
            image: "/image/6575c9e016ee7.webp",
            topic: "885 toeic",
            description: "Tâm điểm chú ý là học viên Nguyễn Mạnh Hà đã xuất sắc ẵm trọn 885 TOIEC với Listening 475 và Reading 410.",
            name: "Nguyễn Mạnh Hà",
        },
    ]
    return (
        <div className="bg-white">
            <div className="max-w-[1060px] mx-auto text-center p-[16px]">
                <h2 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)] pt-[20px]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>góc vinh danh học viên xuất sắc</h2>
                <div className="mf-auto mr-auto relative overflow-hidden z-[1] w-full flex">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1} // Mặc định là 1
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]} // Chỉ dùng Pagination
                        breakpoints={{
                            640: {
                                slidesPerView: 2, // Khi màn hình > 640px thì hiển thị 2 slide
                            },
                            810: {
                                slidesPerView: 3, // Khi màn hình > 810px thì hiển thị 3 slide
                            }
                        }}
                    >
                        {honor.map((honors, index) => (
                            <SwiperSlide key={index} className="p-[10px] flex h-full pb-[40px]">
                                <div className="shadow-[rgba(0,0,0,0.2)_0px_4px_8px_0px,rgba(0,0,0,0.19)_0px_6px_20px_0px] p-[10px] h-full flex flex-col">
                                    <div className="flex justify-center text-center items-center mt-[5px] flex-col">
                                        <div className="basis-[100%] w-[100%] mb-[30px] relative flex-grow">
                                            <span className="uppercase inline-block overflow-hidden size-auto bg-transparent opacity-[1] m-0 border-none p-0 relative w-[100%]">
                                                <span className="uppercase block size-auto aspect-square bg-transparent opacity-[1] m-0 border-none p-0 max-w-[100%]">
                                                    <Image src="/image/remove-bg.png" alt="" aria-hidden="true" className="block w-full size-auto aspect-square bg-transparent opacity-[1] border-none m-0 p-0 cursor-pointer" />
                                                </span>
                                                <Image src={honors.image} alt="img" className="absolute inset-0 uppercase p-0 border-none m-auto block size-0 min-h-full max-h-full min-w-full max-w-full"/>
                                            </span>
                                            <div className="absolute text-white left-[-5px] bottom-[-10px] bg-gradient-to-br from-red-500 to-orange-500">
                                                <h5 className="capitalize m-0 text-[1.25rem] leading-[1.334] tracking-[0em] px-[16px] py-[8px] font-medium">{honors.name}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="pb-[4px] text-left">
                                            <b className="font-bold">Thành tích: </b>
                                            <p className="pl-[10px] inline text-[rgb(211,47,47)] uppercase">{honors.topic}</p>
                                        </div>
                                        <div className="pb-[4px] text-left">
                                            <p>{honors.description}</p>
                                        </div>
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