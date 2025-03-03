'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Lecturer() {
    const lecturer = [
        {
            Image: './image/thanhphuong.webp',
            Name: 'Thanh Phương',
            Achievements: 'Chứng chi Toeic 935',
            graduation: 'Sư phạm Anh',
            experience: 'Kinh nghiệm trên 6 năm',
            gender : 'Nữ'
        },
        {
            Image: './image/congthanh.webp',
            Name: 'Công Thành',
            Achievements: 'Đạt B1 chứng chỉ TESOL',
            graduation: 'Tốt nghiệp trường Đại học UFA State Petroleum Technological, Đạt top 5 sinh viên nhận bằng đỏ với GPA 4.8/5.0',
            experience: 'Kinh nghiệm giảng dạy Tiếng Anh trên 5 năm',
            gender : 'Nam'
        },
        {
            Image: './image/quangthai.webp',
            Name: 'Thái Quang',
            Achievements: '900 Toeic Đạt B1 chứng chỉ TESOL',
            graduation: 'Nghiệp vụ sư phạm trường đại học sư phạm',
            experience: 'Trên 6 năm kinh nghiệm',
            gender : 'Nam'
        },
        {
            Image: './image/thanhphuong.webp',
            Name: 'Thanh Phương',
            Achievements: 'Chứng chi Toeic 935',
            graduation: 'Sư phạm Anh',
            experience: 'Kinh nghiệm trên 6 năm',
            gender : 'Nữ'
        },
        {
            Image: './image/congthanh.webp',
            Name: 'Công Thành',
            Achievements: 'Đạt B1 chứng chỉ TESOL',
            graduation: 'Tốt nghiệp trường Đại học UFA State Petroleum Technological, Đạt top 5 sinh viên nhận bằng đỏ với GPA 4.8/5.0',
            experience: 'Kinh nghiệm giảng dạy Tiếng Anh trên 5 năm',
            gender : 'Nam'
        },
        {
            Image: './image/quangthai.webp',
            Name: 'Thái Quang',
            Achievements: '900 Toeic Đạt B1 chứng chỉ TESOL',
            graduation: 'Nghiệp vụ sư phạm trường đại học sư phạm',
            experience: 'Trên 6 năm kinh nghiệm',
            gender : 'Nam'
        },
    ];

    return (
        <div className="bg-[rgb(240,240,240)]">
            <div className="max-w-[1060px] mx-auto text-center p-[16px] grid gap-5">
                <h2 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)] pt-[20px]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>đội ngũ giảng viên</h2>
                <p className="pb-[16px]">Uni English Center có đội ngũ giảng viên ưu tú hàng đầu</p>
                <div className="mf-auto mr-auto relative overflow-hidden z-[1] w-full flex">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1} // Mặc định là 1
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[Pagination]} // Chỉ dùng Pagination
                    breakpoints={{
                        640: {
                            slidesPerView: 2, // Khi màn hình > 640px thì hiển thị 2 slide
                        },
                        810: {
                            slidesPerView: 3, // Khi màn hình > 810px thì hiển thị 3 slide
                        }
                    }}
                >
                        {lecturer.map((lecturers, index) => (
                            <SwiperSlide key={index} className="justify-center pb-[40px]" style={{display: `flex`}}>
                                <div className="max-w-[350px] h-full pt-[130px] mr-[6px] transform-gpu flex flex-col">
                                    <div className="max-w-[350px] shadow-[rgba(0,0,0,0.2)_0px_4px_8px_0px,rgba(0,0,0,0.19)_0px_6px_20px_0px] bg-white text-left ml-[8px] mr-[8px] mb-[8px] h-full flex flex-col justify-between">
                                        <div className="max-w-[350px] flex flex-col h-full">
                                            <div className="pt-[120px] px-[16px] pb-[16px] relative flex flex-col h-full">
                                                {/* Avatar */}
                                                <div className="w-[250px] absolute top-0 left-[50%]" style={{ transform: `translate(-50%, -50%)` }}>
                                                    <span className="box-border inline-block overflow-hidden size-auto aspect-square opacity-[1] m-0 relative max-w-full rounded-[50%] border-[10px] border-solid border-[rgb(240,240,240)]">
                                                        <span className="box-border block size-auto aspect-square opacity-[1] m-0 p-0 max-w-full border-none">
                                                            <Image src="/image/remove-bg.png" alt="" aria-hidden="true" className="block w-full size-auto aspect-square bg-transparent opacity-[1] border-none m-0 p-0" />
                                                        </span>
                                                        <Image src={lecturers.Image} alt="avatar" className="absolute inset-0 uppercase p-0 border-none m-auto block size-0 min-h-full max-h-full min-w-full max-w-full" />
                                                    </span>
                                                </div>

                                                {/* Nội dung giảng viên */}
                                                <h6 className="text-[20px] font-bold text-[rgb(211,47,47)] mb-[10px] w-full flex text-center justify-center">
                                                    {lecturers.gender === "Nam" ? "Mr." : "Ms."} {lecturers.Name}
                                                </h6>

                                                <div className="pb-[8px]">
                                                    <b className="font-bold">Thành tích: </b>
                                                    <p className="pl-[10px] inline">{lecturers.Achievements}</p>
                                                </div>

                                                <div className="pb-[8px]">
                                                    <b className="font-bold">Tốt nghiệp: </b>
                                                    <p className="pl-[10px] inline">{lecturers.graduation}</p>
                                                </div>

                                                <div className="pb-[8px]">
                                                    <b className="font-bold">Kinh nghiệm: </b>
                                                    <p className="pl-[10px] inline">{lecturers.experience}</p>
                                                </div>

                                                {/* Đẩy nội dung xuống dưới để làm chiều cao bằng nhau */}
                                                <div className="flex-grow"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
