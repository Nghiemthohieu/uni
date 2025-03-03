import IntroductionToeic from "@/components/introductionToeic";
import News from "@/components/news";
import SlidesShow from "@/components/slidesShow";

export default function Toeic() {
    return (
        <div className="grid grid-cols-1 gap-6">
            <div className="w-full h-[520px] flex">
                <SlidesShow/>
            </div>
            <div>
                <IntroductionToeic/>
                <News/>
            </div>
        </div>
    )
}