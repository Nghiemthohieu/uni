import Introduction4Skills from "@/components/introduction_4skills";
import News from "@/components/news";
import SlidesShow from "@/components/slidesShow";

export default function forSkillsPage() {
    return(
        <div className="grid grid-cols-1 gap-6">
            <div className="w-full h-[520px] flex">
                <SlidesShow/>
            </div>
            <div>
                <Introduction4Skills/>
                <News/>
            </div>
        </div>
    )
}