import Image from "next/image";

export default function TargetCourse({ course }: { course: string }){
    const dataMap: Record<string, { img: string, content: string }[]> = {
        "4skill": [
            {
                img:  "/image/target_1.png",
                content: "Nắm vững tất cả hiện tượng ngữ pháp thường gặp nhất, vượt qua nỗi sợ “Mất gốc Tiếng Anh”, làm hành trang khi học lên những chứng chỉ quốc tế cao hơn."
            },
            {
                img:  "/image/target_2.png",
                content: "Xoá bỏ nỗi e dè, tạo sự tự tin trong việc phát âm “Chuẩn Tây”."
            },
            {
                img:  "/image/target_3.png",
                content: "Nắm vững hơn 1500 Từ vựng căn bản, không lo “bí từ” khi giao tiếp tiếng Anh."
            },
            {
                img:  "/image/target_4.png",
                content: "Ứng dụng Nghe - Nói các chủ đề cơ bản trong cuộc sống với những mẫu câu đơn giản nhưng thực tế."
            },
            {
                img:  "/image/target_5.png",
                content: "Phát âm chuẩn bảng phiên âm và áp dụng thành thạo ngữ âm trong giao tiếp."
            },
        ],
        "GT": [
            {
                img:  "/image/target_1.png",
                content: "Nắm vững tất cả hiện tượng ngữ pháp thường gặp nhất, vượt qua nỗi sợ “Mất gốc Tiếng Anh”, làm hành trang khi học lên những chứng chỉ quốc tế cao hơn."
            },
            {
                img:  "/image/target_2.png",
                content: "Sở hữu kho tàng 1500 từ vựng cùng 300 cấu trúc câu thông dụng, phục vụ cho việc giao tiếp thành thạo và tự tin hơn."
            },
            {
                img:  "/image/target_3.png",
                content: "Học các thành ngữ, tục ngữ, tiếng lóng bắt kịp những xu hướng mới nhất của giới trẻ áp dụng được nhiều ngữ cảnh trong đời sống hiện đại."
            },
            {
                img:  "/image/target_4.png",
                content: "Mở rộng ý tưởng khi trình bày giao tiếp, không chỉ dừng lại ở câu trả lời ngắn, tự tin khi “chém gió” với người nước ngoài."
            },
            {
                img:  "/image/target_5.png",
                content: "Tăng tư duy và khả năng phản xạ khi giao tiếp cùng những tình huống thực tế trong cuộc sống."
            },
        ],
        "toeic450+": [
            {
                img:  "/image/target_1.png",
                content: "Tiếp cận những mẹo làm bài, các chủ điểm thường gặp trong form đề thi mới nhất."
            },
            {
                img:  "/image/target_2.png",
                content: "Cam kết đạt từ 450-550 TOEIC khi đi thi tại Hội đồng."
            },
        ],
        "toeic650+": [
            {
                img:  "/image/target_1.png",
                content: "Cam kết đạt được trên 650 điểm TOEIC, sử dụng chứng chỉ phục vụ cho công việc và tương lai sau này."
            },
        ],
        "ielts3.0": [
            {
                img:  "/image/target_1.png",
                content: "Học chuyên sâu các CẤU TRÚC NGỮ PHÁP từ dễ đến khó và luyện tập thường xuyên để biết cách vận dụng nhuần nhuyễn, nắm rõ lý thuyết được truyền đạt."
            },
            {
                img:  "/image/target_2.png",
                content: "Học cách sử dụng từ vựng, câu văn đơn giản, mở rộng VỐN TỪ Academic căn bản nhất, thường xuất hiện trong bài thi IELTS."
            },
            {
                img:  "/image/target_3.png",
                content: "Xây dựng nền tảng của cả 4 kỹ năng trong kỳ thi IELTS dựa trên việc tiếp xúc với đề thi thật, nắm vững cấu trúc đề thi IELTS."
            },
        ],
        "ielts5.0": [
            {
                img:  "/image/target_1.png",
                content: "CAM KẾT ÐẦU RA 5.0+."
            },
        ],
        "ielts6.5": [
            {
                img:  "/image/target_1.png",
                content: "Liên kết với IDP hỗ trợ đăng kí thi trên máy tính và làm thủ tục thi tại hội đồng."
            },
        ],
    }
    const datas = dataMap[course] || [];
    return (
        <div className="grid gap-8 mt-[16px]">
            <h5 className="text-[1.5rem] leading-[1.334] font-[600] text-[rgb(211,47,47)]">Mục tiêu khóa học</h5>
            <div className="box-border flex flex-row text-left justify-center">
                {
                    datas.map((data, index)=>(
                        <div key={index} className="bg-white mt-[16px] ml-[16px]" style={{ width: `${100 / datas.length}%`  , maxWidth: '25%', marginLeft: datas.length <= 4 ? '64px' : undefined }}>
                            <div className="w-full">
                                <Image src={data.img} alt="" className="w-full h-full rounded-[50%] border-[3px] border-dotted border-[#ff0000]"/>
                            </div>
                            <div className="p-[8px]">
                                <p className="font-[400] text-[1rem] leading-[1.5] pl-[8px]">
                                    {data.content}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}