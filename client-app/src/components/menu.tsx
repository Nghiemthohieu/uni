'use client'
import { useState } from "react";

export default function Menu() {
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);


    // Toggle khi click
    const toggleSubMenu = (menu: string) => { 
        setOpenSubMenu(openSubMenu === menu ? null : menu);
    };

    // Mở menu khi hover
    const handleMouseEnter = (menu: string) => { 
        setOpenSubMenu(menu);
    };

    

    // Đóng menu khi rời khỏi
    const handleMouseLeave = () => {
        setOpenSubMenu(null);
    };

    return (
        <div className="h-full flex flex-col">
            <button className="text-left p-4 hover:border-b-[3px] hover:border-solid hover:border-[rgb(211,47,47)] hover:text-[rgb(211,47,47)] hover:bg-[#f1f1f1]">Trang chủ</button>
            <button className="text-left p-4 hover:border-b-[3px] hover:border-solid hover:border-[rgb(211,47,47)] hover:text-[rgb(211,47,47)] hover:bg-[#f1f1f1]">Tiếng anh mất gốc</button>
            <button className="text-left p-4 hover:border-b-[3px] hover:border-solid hover:border-[rgb(211,47,47)] hover:text-[rgb(211,47,47)] hover:bg-[#f1f1f1][">Tiếng anh giao tiếp</button>

            {/* Luyện thi TOEIC */}
            <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('toeic')}
                onMouseLeave={handleMouseLeave}
            >
                <div 
                    className={`p-4 flex items-center cursor-pointer ${openSubMenu === 'toeic' ? 'border-b-[3px] border-[rgb(211,47,47)] text-[rgb(211,47,47)] bg-[#f1f1f1]' : ''}`}
                    onClick={() => toggleSubMenu('toeic')}
                >
                    <button className="text-left w-full">Luyện thi TOEIC</button>
                    <span className="material-symbols-outlined">
                        {openSubMenu === 'toeic' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    </span>
                </div>

                {openSubMenu === 'toeic' && (
                    <div className="left-0 top-full w-full bg-white shadow-md border">
                        <button className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)] w-full text-left">
                            Khóa học TOEIC 450+
                        </button>
                        <button className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)] w-full text-left">
                            Khóa học TOEIC 650+
                        </button>
                    </div>
                )}
            </div>

            {/* Luyện thi IELTS */}
            <div 
                className="relative"
                onMouseEnter={() => handleMouseEnter('ielts')}
                onMouseLeave={handleMouseLeave}
            >
                <div 
                    className={`p-4 flex items-center cursor-pointer ${openSubMenu === 'ielts' ? 'border-b-[3px] border-[rgb(211,47,47)] text-[rgb(211,47,47)] bg-[#f1f1f1]' : ''}`}
                    onClick={() => toggleSubMenu('ielts')}
                >
                    <button className="text-left w-full">Luyện thi IELTS</button>
                    <span className="material-symbols-outlined">
                        {openSubMenu === 'ielts' ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
                    </span>
                </div>

                {openSubMenu === 'ielts' && (
                    <div className="left-0 top-full w-full bg-white shadow-md border">
                        <button className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)] w-full text-left">
                            Khóa học IELTS 0 - 3.0+
                        </button>
                        <button className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)] w-full text-left">
                            Khóa học IELTS 3.0 - 5.0+
                        </button>
                        <button className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)] w-full text-left">
                            Khóa học IELTS 5.0 - 6.5+
                        </button>
                    </div>
                )}
            </div>

            <button className="text-left p-4 hover:border-b-[3px] hover:border-solid hover:border-[rgb(211,47,47)] hover:text-[rgb(211,47,47)] hover:bg-[#f1f1f1]">Test miễn phí</button>
            <button className="text-left p-4 hover:border-b-[3px] hover:border-solid hover:border-[rgb(211,47,47)] hover:text-[rgb(211,47,47)] hover:bg-[#f1f1f1]">Chính sách</button>
            <button className="text-left p-4 hover:border-b-[3px] hover:border-solid hover:border-[rgb(211,47,47)] hover:text-[rgb(211,47,47)] hover:bg-[#f1f1f1]">Liên hệ</button>
        </div>
    );
}
