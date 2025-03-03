import Image from "next/image"

export default function News() {
    const data = [
        {

        }
    ]
    return (
        <div className="bg-[rgb(240,240,240)]">
            <div className="max-w-[1060px] mx-auto text-center p-[16px] grid gap-5">
                <h2 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)] pt-[20px]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
                    tin tức - sự kiện
                </h2>
                <div className="mf-auto mr-auto relative overflow-hidden z-[1] w-full grid md:grid-cols-2 grid-cols-1">
                    <div className="shadow-[rgba(0,0,0,0.2)_0px_4px_8px_0px,rgba(0,0,0,0.19)_0px_6px_20px_0px] flex flex-col m-[10px] bg-white">
                        <div className="flex justify-center text-center items-center flex-col">
                            <div className="basis-[100%] w-[100%] relative flex-grow">
                                <span className="uppercase inline-block overflow-hidden size-auto bg-transparent opacity-[1] m-0 border-none p-0 relative w-[100%]">
                                    <span className="uppercase block size-auto bg-transparent opacity-[1] m-0 border-none p-0 max-w-[100%]">
                                        <Image src="/image/remove-bg1.png" alt="" aria-hidden="true" className="block w-full size-auto bg-transparent opacity-[1] border-none m-0 p-0 cursor-pointer" />
                                    </span>
                                    <Image src="" alt="img" className="absolute inset-0 uppercase p-0 border-none m-auto block size-0 min-h-full max-h-full min-w-full max-w-full"/>
                                </span>
                            </div>
                            <div className="p-[16px] w-full text-left">
                                <h6 className="mb-[16px] text-[1.25rem] leading-[1.6] font-[600] text-[rgb(0,51,89)] w-full"><p>❌ UNI ENGLISH CENTER CHÍNH THỨC LÀ ĐỐI TÁC CỦA ELSA VIỆT NAM ❌</p></h6>
                                <p className="w-full font-[400] text-[1rem] leading-[1.5]">Ngày 14/9/2022, UNI English Center với đại diện là Cô Nguyễn Hoàng Anh, Giám đốc Học thuật, và ELSA Việt Nam cùng sự góp mặt của Giám đốc Quốc gia, Ông Michael Ngô, đã chính thức ký kết hợp tác.Qua đó, UNI English Center sẽ sử dụng tài khoản ELSA Pro do ELSA cung cấp để ứng dụng ...</p>
                                <div className="flex justify-between p-[5px]">
                                    <button className="uppercase text-[14px] font-bold flex justify-center items-center text-center p-[5px] text-[rgb(25,118,210)] hover:bg-[rgba(25,118,210,0.04)]">
                                        đọc tiếp 
                                        <span className="material-symbols-outlined">
                                            keyboard_double_arrow_right
                                        </span>
                                    </button>
                                    <h6 className="font-[500] text-[0.875rem] leading-[1.57] flex justify-center items-center">20/09/2022</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}