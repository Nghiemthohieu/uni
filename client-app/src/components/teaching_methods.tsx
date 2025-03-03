export default function TeachingMethods({ course }: { course: string }) {
    const dataMap: Record<string, { img: string, content: string }[]> = {
        "4skill": [
            { img: "/image/method_1.webp", content: "Sử dụng slides kết hợp giáo trình chi tiết, nhiều hình ảnh do chính giảng viên trung tâm biên soạn." },
            { img: "/image/method_2.webp", content: "Ðược học và thực hành luyện tập phát âm chuẩn âm Anh- Mỹ dựa trên bảng phiên âm quốc tế IPA cùng với dàn giảng viên phát âm cực “Tây”." },
            { img: "/image/method_3.webp", content: "Hệ thống toàn bộ ngữ pháp căn bản một cách tinh gọn, dễ nhớ, ứng dụng trong giao tiếp căn bản và cũng là nền tảng theo học các chứng chỉ quốc tế." },
            { img: "/image/method_4.webp", content: "Cung cấp 500+ từ vựng theo các chủ đề cùng hình ảnh minh hoạ và 1000+ từ vựng thông qua các bài nghe và luyện ngữ âm giúp dễ dàng “vào đầu” mà không cần ghi chép quá nhiều." },
            { img: "/image/method_5.webp", content: "Luyện tập khả năng nghe từ cơ bản đến nâng cao thông qua phương thức luyện tập đa dạng, hiệu quả, không gây nhàm chán." },
            { img: "/image/method_6.webp", content: "Kết hợp 4 kĩ năng: Ngữ Âm - Ngữ Pháp - Nghe nói ứng dụng vào các chủ điểm giao tiếp căn bản." },
        ],
        "GT": [
            { img: "/image/method_3.webp", content: "Casting: Nhập vai, trải nghiệm vào các tình huống thực tế trong cuộc sống hàng ngày ngay tại lớp học." },
            { img: "/image/method_2.webp", content: "Multi- sense: Hệ thống học và ghi nhớ đa giác quan, kết hợp nghe, nói và sử dụng hành động để mô tả các mẫu câu, cụm từ giúp khắc sâu vào tiềm thức một cách tự động mà không cần cố gắng ghi nhớ" },
            { img: "/image/method_4.webp", content: "Short- story: Hệ thống các bài học ngắn, minigame, nghe và trả lời câu hỏi tự động với tốc độ cao rèn luyện khả năng tư duy và phản xạ bằng Tiếng Anh" },
            { img: "/image/method_1.webp", content: "4 buổi học và trải nghiệm thực tế cùng giảng viên Nước Ngoài với sự hỗ trợ của giảng viên chính và trợ giảng, tạo không khí gần gũi, thoải mái và thân thiện" },
        ],
        "toeic450+": [
            { img: "/image/method_3.webp", content: "Sở hữu các MẸO khi làm bài thi TOEIC 2 Kỹ năng: NGHE - ÐỌC." },
            { img: "/image/method_6.webp", content: "Toàn bộ giáo trình luôn được giảng viên chuyên môn của trung tâm với kinh nghiệm luyện thi TOEIC nhiều năm biên soạn và cập nhật chuẩn form đề mới nhất của hội đồng IIG theo định kỳ 3 tháng/lần." },
            { img: "/image/method_2.webp", content: "Học viên luôn luôn được tiếp cận với đề thi thử sát với đề TOEIC hàng tháng và trải nghiệm môi trường thi thật." },
            { img: "/image/method_4.webp", content: "Ôn tập, củng cố chủ điểm ngữ pháp quan trọng cho phần thi IELTS WRITING • Thực hành kĩ năng viết đi từ các mệnh đề, câu đơn câu phức nâng cao tới hoàn thành 1 đoạn văn học thuật." },
            { img: "/image/method_5.webp", content: "Trong quá trình học luôn được giám sát và đánh gía trình độ khách quan nhất với phương châm HỌC THẬT, THI THẬT." },
        ],
        "toeic650+": [
            { img: "/image/method_5.webp", content: "Tổ chức những buổi giải đề và học theo lộ trình chuẩn nhất, sát nhất, NÓI KHÔNG với việc cho đề dễ hơn với đề thi thật tạo sự chủ quan cho học viên." },
            { img: "/image/method_6.webp", content: "Cập nhật các thay đổi mới nhất từng quý của hội đồng thi TOEIC IIG." },
        ],
        "ielts3.0": [
            { img: "/image/method_2.webp", content: "Nắm vững cấu trúc đề thi IELTS." },
            { img: "/image/method_5.webp", content: "Làm quen với những dạng đề trong đề thi IELTS Reading& Listening." },
            { img: "/image/method_1.webp", content: "Nắm vững trọng tâm SPEAKING Part 1 với phương pháp phát triển ý kết hợp vận dụng từ vựng và giới thiệu sơ lược Part 2." },
            { img: "/image/method_3.webp", content: "Ôn tập, củng cố chủ điểm ngữ pháp quan trọng cho phần thi IELTS WRITING • Thực hành kĩ năng viết đi từ các mệnh đề, câu đơn câu phức nâng cao tới hoàn thành 1 đoạn văn học thuật" },
            { img: "/image/method_4.webp", content: "Làm chủ những kiến thức sơ lược nhất về kì thi IELTS, làm bước đệm nâng lên những band điểm cao hơn." },
        ],
        "ielts5.0": [
            { img: "/image/method_1.webp", content: "4 kĩ năng Nghe- Nói - Ðọc Viết được luyện tập đan xen 1-2 kĩ năng/ buổi học tạo cảm giác thoải mái, không gây áp lực." },
            { img: "/image/method_2.webp", content: "Speaking: Ðưa ra từ vựng và cách paraphrase cùng form trả lời để câu trả lời hay và đạt band điểm cao trong phần thi Nói part 1." },
            { img: "/image/method_3.webp", content: "Học cách phân bổ thời gian nói cho từng đoạn trong Part 2 áp dụng cho các chủ đề nói căn bản của đề thi IELTS." },
            { img: "/image/method_4.webp", content: "Luôn đưa tới tay học viên những chủ đề và các dạng câu hỏi thường gặp và mới nhất sẽ ra trong kì thi IELTS cập nhật hàng quý." },
            { img: "/image/method_5.webp", content: "Nắm vững các phương pháp trả lời và ôn luyện kĩ năng nói band 5.0 ." },
            { img: "/image/method_6.webp", content: "Listening + Reading: Tiếp cận và luyện tập các dạng câu hỏi kinh điển trong đề thi (T/F/NG, Form completion, Matching Heading,..) và mẹo làm bài tập" },
            { img: "/image/method_6.webp", content: "Writing: Áp dụng ngữ pháp và nâng cao để hoàn thành đoạn văn hoàn chỉnh sử dụng những từ ngữ chuyên ngành, đa dạng để “ăn điểm” tuyệt đối, xoá bỏ nỗi lo sợ phần thi khó nhất trong kì thi IELTS." },
        ],
        "ielts6.5": [
            { img: "/image/method_1.webp", content: "Tập trung giải các đề thi IELTS với cường độ cao, hoàn tất các kĩ năng để sẵn sàng làm bài thi IELTS tại các hội đồng quốc tế BC, IDP." },
            { img: "/image/method_2.webp", content: "Các bài giảng sử dụng slide và giáo trình chuyên sâu do giảng viên IELTS dày kinh nghiệm (8.5 IELTS) biên soạn và cập nhật các dạng đề mới nhất." },
            { img: "/image/method_3.webp", content: "Hệ thống toàn bộ ngữ pháp căn bản một cách tinh gọn, dễ nhớ, ứng dụng trong giao tiếp căn bản và cũng là nền tảng theo học các chứng chỉ quốc tế." },
        ],
    };

    const datas = dataMap[course] || [];
    return(
        <div className="grid gap-8">
            <h5 className="text-[1.5rem] leading-[1.334] font-[600] text-[rgb(211,47,47)]">Phương pháp giảng dạy</h5>
            <div className="box-border flex flex-row text-left justify-center">
                {
                    datas.map((data, index)=>(
                        <div key={index} className="shadow-lg bg-[rgb(196,255,252)] mt-[16px] ml-[16px]" style={{ width: `${100 / datas.length}%` , maxWidth: '25%', marginLeft: datas.length <= 4 ? '64px' : undefined }}>
                            <span className="box-border inline-block overflow-hidden size-auto bg-none opacity-[1] border-none m-0 p-0 relative max-w-full">
                                <span className="box-border block size-auto bg-auto opacity-[1] border-none m-0 p-0 max-w-full">
                                    <img src="/image/remove-bg.png" alt="" className="block w-full size-auto bg-auto opacity-[1] border-none m-0 p-0"/>
                                </span>
                                <img src={data.img} alt="courses" className="absolute inset-0 uppercase p-0 border-none m-auto block size-0 min-h-full max-h-full min-w-full max-w-full"/>
                            </span>
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