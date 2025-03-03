import IntroductionCommunication from "@/components/introductionCommunication";
import News from "@/components/news";
import SlidesShow from "@/components/slidesShow";

export default function Communication() {
    return(
        <div className="grid grid-cols-1 gap-6">
            <div className="w-full h-[520px] flex">
                <SlidesShow/>
            </div>
            <div>
                <IntroductionCommunication/>
                <News/>
            </div>
        </div>
    )
}