import IntroductionIelts from "@/components/IntroductionIelts";
import News from "@/components/news";
import SlidesShow from "@/components/slidesShow";

export default function Ielts() {
    <div className="grid grid-cols-1 gap-6">
        <div className="w-full h-[520px] flex">
            <SlidesShow/>
        </div>
        <div>
            <IntroductionIelts/>
            <News/>
        </div>
    </div>
}