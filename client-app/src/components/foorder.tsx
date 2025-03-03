export default function Foorder() {
    const dataMaps = [
        { address: "Số 44 ngõ 40, Tạ Quang Bửu, Bách Khoa, Hà Nội" },
        { address: "Số 9C8 ngõ 261 Trần Quốc Hoàn, Cầu Giấy" },
        { address: "Lô 6 Khu biệt thự liền kề 96 Nguyễn Huy Tưởng, Thanh Xuân" },
        { address: "Số 104 ngõ 40, Tạ Quang Bửu, Bách Khoa, Hà Nội" },
        { address: "Số 3/34 Nguyễn Hoàng, Mỹ Đình, Nam Từ Liêm" }
    ];

    const dataCourse = [
        { course: "Tiếng Anh mất gốc" },
        { course: "Tiếng Anh giao tiếp" },
        { course: "Luyện thi TOEIC" },
        { course: "Luyện thi IELTS" }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 bg-[rgb(0,51,89)] text-white p-6 gap-6">
            
            {/* Logo & Giới thiệu */}
            <div className="col-span-12 md:col-span-1 lg:col-span-3 flex flex-col items-center text-center space-y-4">
                <img src="/image/logo_footer.webp" alt="UNI-Image" className="w-32" />
                <p className="font-normal text-base leading-relaxed">
                    Uni English Center là trung tâm tiếng Anh hàng đầu
                </p>
            </div>

            {/* Chương trình đào tạo */}
            <div className="col-span-12 md:col-span-1 lg:col-span-2 flex flex-col space-y-2">
                <h6 className="uppercase text-lg font-semibold mb-4">Chương trình tại UNI</h6>
                {dataCourse.map((data, index) => (
                    <p key={index} className="flex items-center text-sm icon__boil">
                        <span className="material-symbols-outlined pr-2 text-[15px]">school</span>
                        {data.course}
                    </p>
                ))}
            </div>

            {/* Hệ thống cơ sở */}
            <div className="col-span-12 md:col-span-1 lg:col-span-4 flex flex-col space-y-2">
                <h6 className="uppercase text-lg font-semibold mb-4">Hệ thống Uni English Center</h6>
                {dataMaps.map((data, index) => (
                    <p key={index} className="flex items-center text-sm pb-2">
                        <span className="material-symbols-outlined pr-2 text-[15px] text-red-500">location_on</span>
                        Cs: {data.address}
                    </p>
                ))}
            </div>

            {/* Liên hệ */}
            <div className="col-span-12 md:col-span-1 lg:col-span-3 flex flex-col space-y-4">
                <h6 className="uppercase text-lg font-semibold">Liên hệ chúng tôi</h6>
                <iframe
                    width="100%"
                    height="150"
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUniLanguageCenter&tabs=timeline&width=300&height=70&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    title="fanpage"
                    className="border-none"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
