import TargetCourse from "./target_course";
import TeachingMethods from "./teaching_methods";

export default function IntroductionCommunication() {
    return (
        <div className="max-w-[1060px] mx-[auto] text-center p-[16px] grid gap-10 bg-white mb-[30px]">
            <h1 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>tiếng anh giao tiếp</h1>
            <div>
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
                    Ðối tượng: Học viên chưa có nền tảng tiếng Anh, đang yếu cả về ngữ pháp, ngữ âm và nghe nói
                </p>
            </div>
            <TeachingMethods course="GT"/>
            <TargetCourse course="GT"/>
        </div>
    )
}