import TargetCourse from "./target_course";
import TeachingMethods from "./teaching_methods";

export default function IntroductionToeic() {
    return (
        <div className="max-w-[1060px] mx-[auto] text-center p-[16px] grid gap-10 bg-white mb-[30px]">
            <h1 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>luyện thi toeic</h1>
            <span className="box-border inline-block overflow-hidden size-auto opacity-[1] m-0 p-0 relative max-w-full">
                <span className="box-border block size-auto opacity-[1] m-0 p-0 max-w-full border-none relative">
                    <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271200%27%20height=%27200%27/%3e" alt="" className="block w-full size-auto bg-transparent opacity-[1] border-none m-0 p-0"/>
                </span>
                <img src="/image/toiec_target.webp" alt="" className="absolute inset-0 uppercase p-0 border-none m-auto block size-0 min-h-full max-h-full min-w-full max-w-full"/>
            </span>
            <div className="grid gap-3">
                <h4 className="text-[2.135rem] leading-[1.235] font-[600] text-[rgb(211,47,47)] mb-[16px]">Khóa hoc TOEIC 450+</h4>
                <p className="icon__boil flex justify-center">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                        schedule
                    </span>
                    Thời gian học: 25 buổi tương ứng 37.5h, 2 buổi/tuần, 1,5h/ buổi
                </p>
                <p className="icon__boil flex justify-center items-start">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                        group
                    </span>
                    Ðối tượng: Học viên có nền tảng Ngữ pháp, chưa từng tiếp xúc với Ðề thi TOEIC
                </p>
                <TeachingMethods course="toeic450+"/>
                <TargetCourse course="toeic450+"/>
            </div>
            <div className="grid gap-3">
                <h4 className="text-[2.135rem] leading-[1.235] font-[600] text-[rgb(211,47,47)] mb-[16px]">Khóa hoc TOEIC 650+</h4>
                <p className="icon__boil flex justify-center">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                        schedule
                    </span>
                    Thời gian học: 25 buổi tương ứng 37.5h, 2 buổi/tuần, 1,5h/ buổi
                </p>
                <p className="icon__boil flex justify-center items-start">
                    <span className="material-symbols-outlined" style={{fontSize: '20px'}}>
                        group
                    </span>
                    Ðối tượng: Học viên có mức điểm từ 450- 500 TOEIC, đã nắm bắt cấu trúc đề
                </p>
                <TeachingMethods course="toeic650+"/>
                <TargetCourse course="toeic650+"/>
            </div>
        </div>
    )
}