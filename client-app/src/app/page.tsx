import HonorStudent from "@/components/honor_student";
import Introdution from "@/components/introduction";
import Lecturer from "@/components/lecturer";
import News from "@/components/news";
import Partner from "@/components/partner";
import SlidesShow from "@/components/slidesShow";

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-6">
      <div className="w-full h-[520px] flex">
        <SlidesShow/>
      </div>
      <div className="body">
        <Introdution/>
        <Lecturer/>
        <HonorStudent/>
        <News/>
        <Partner/>
      </div>
    </div>
  );
}
