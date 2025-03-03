import TargetCourse from "./target_course";
import TeachingMethods from "./teaching_methods";

export default function Introduction4Skills() {
    return (
        <div className="max-w-[1060px] mx-[auto] text-center p-[16px] grid gap-10 bg-white mb-[30px]">
            <h1 className="uppercase text-[38px] font-bold text-[rgb(211,47,47)]" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>tiếng anh mất gốc (4 skill)</h1>
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
                    Ðối tượng: Học viên đã có nền tảng Ngữ pháp, chưa đủ kĩ năng để nói chuyện lưu loát, tự tin với người nước ngoài
                </p>
            </div>
            <TeachingMethods course="4skill"/>
            <TargetCourse course="4skill"/>
        </div>
    )
}