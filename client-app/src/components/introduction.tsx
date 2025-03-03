export default function Introdution() {
    const Img = [
        {
            imgSrc : '/image/course_1.webp',
            Course : 'Tiếng anh mất gốc'
        },
        {
            imgSrc : '/image/course_2.webp',
            Course : 'Tiếng anh giao tiếp'
        },
        {
            imgSrc : '/image/course_3.webp',
            Course : 'Luyện thi TOEIC'
        },
        {
            imgSrc : '/image/course_4.webp',
            Course : 'Luyện thi IELTS'
        }
    ]
    return (
        <div className="max-w-[1060px] mx-[auto] text-center p-[16px] grid gap-5" >
            <h2 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>tự tin tiếng anh, sánh tầm quốc tế</h2>
            <p className="font-[400] text-[1rem]" >
                Anh ngữ Uni English Center tự hào là một trong những đơn vị đào tạo có nhiều kinh nghiệm với đội ngũ giảng viên có chuyên môn cao, dày dặn kinh nghiệm trong lĩnh vực Tiếng Anh. Với phương châm Tâm - Tầm - Trí Tín trung tâm cam kết tận tâm đồng hành cùng phụ huynh, học sinh trên chặng đường xây dựng và phát triển cho từng học viên.
                <br />
                Chúng tôi vô cùng vinh dự đạt Top 10 Thương hiệu - Nhãn hiệu nổi tiếng đất Việt 2021. Đồng thời, đây cũng là thương hiệu đào tạo Tiếng Anh tiêu biểu tại Việt Nam trong khu vực ASEAN 2021.
            </p>
            <div className="uppercase flex flex-wrap ml-[-13px] justify-around" style={{width: `calc(100% + 24px)`}}>
                {Img.map((page, index) =>(
                    <div key={index} className="basis-[95%] max-w-[95%] sm:basis-[48%] sm:w-[48%] mb-[30px] relative">
                        <span className="uppercase inline-block overflow-hidden size-auto bg-transparent opacity-[1] m-0 border-none p-0 relative w-[100%] cursor-pointer"> 
                            <span className="uppercase block size-auto aspect-square bg-transparent opacity-[1] m-0 border-none p-0 max-w-[100%]">
                                <img src="/image/remove-bg.png" alt="" aria-hidden="true" className="block w-full size-auto aspect-square bg-transparent opacity-[1] border-none m-0 p-0 cursor-pointer" />
                            </span>
                            <img src={page.imgSrc} alt="img" className="absolute inset-0 uppercase p-0 border-none m-auto block size-0 min-h-full max-h-full min-w-full max-w-full"/>
                        </span>
                        <div className="absolute text-white right-0 bottom-[-10px] bg-gradient-to-br from-red-500 to-orange-500">
                            <h5 className="uppercase m-0 text-[1.5rem] leading-[1.334] tracking-[0em] px-[16px] py-[8px] font-medium">{page.Course}</h5>
                        </div>
                    </div>
                ))}
            </div>
            <div className="grid gap-5">
                <h2 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)] mb-[10px]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>giới thiệu uni english center</h2>
                <p className="">Tại Uni, các giáo viên không chỉ có trình độ chuyên môn cao mà còn rất nhiệt tình, tâm huyết và yêu nghề.</p>
                <div className="flex flex-wrap w-full ml-auto mr-auto">
                    <div className="w-full basis-full sm:w-[58.3333%] sm:basis-[58.3333%] grow-0">
                        <iframe
                            width="100%"
                            height="350"
                            src="https://www.youtube.com/embed/FuPc4iPdI3U"
                            title="YouTube video player"
                            style={{ border: "none" }}  // Loại bỏ viền
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="basis-full sm:w-[41.6667%] sm:basis-[41.6667%] grow-0 sm:flex sm:flex-col justify-center sm:pl-[32px] sm:text-left pt-[20px] sm:pt-0">
                        <p className="font-[400]">Mỗi giờ học đều sẽ được ghi dấu bởi tình yêu, và mong muốn truyền cảm hứng, niềm yêu thích học tiếng Anh dành cho học viên giúp các bạn đạt được những mục tiêu của mình trong công việc và cuộc sống. Hơn 2500 học viên đã đạt 7.0 - 8.5 IELTS chính là minh chứng rõ nét nhất về điều này.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}