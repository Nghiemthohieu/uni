'use client'

import Image from "next/image";
import ImgIcon from "../../public/image/logo2.png";
import Menu from "./menu";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [isOpen, setisOpen] = useState(false);

  const toggleSubMenu = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  useEffect(() => {
   if(isOpen) {
    document.body.style.overflow = 'hidden';
   } else {
    document.body.style.overflow = 'auto';
   }

   return () => {
    document.body.style.overflow = 'auto';
   }
  },[isOpen]);

  return (
    <div className="pl-8 min-h-[64px] max-h-20 border-b shadow-md absolute w-full bg-white z-50">
      <div className="flex flex-nowrap w-full">
        <Image
          aria-hidden
          src={ImgIcon}
          alt="UNI ENGLISH CENTER"
          height={40}
          width={110}
          className="cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <div className="w-full flex justify-end md:justify-center md:pr-10 items-center font-bold relative">

          <a href="\" className="md:flex cursor-pointer">Trang chủ</a>
          <div className="relative group h-full">
            <button className="hidden xl:hidden md:flex cursor-pointer items-center px-[8px] gap-1 h-full group-hover:border-b-[3px] group-hover:border-solid group-hover:border-[rgb(211,47,47)] group-hover:text-[rgb(211,47,47)] group-hover:bg-[#f1f1f1]">
              Khóa học
            </button>
            <div className="absolute hidden group-hover:block bg-white border shadow-md top-full left-0 w-64">
              <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Tiếng anh mất gốc</p>
              <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Tiếng anh giao tiếp</p>
              <div className="relative group/toeic">
                <p className="group-hover/toeic:bg-gray-100 cursor-pointer p-4 group-hover/toeic:text-[rgb(211,47,47)] w-full">
                  Luyện thi TOEIC
                </p>
                <div className="absolute hidden group-hover/toeic:block left-full top-0 bg-white border shadow-md w-64">
                  <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học TOEIC 450+</p>
                  <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học TOEIC 650+</p>
                </div>
              </div>
              <div className="relative group/ielts">
                <p className="group-hover/ielts:bg-gray-100 cursor-pointer p-4 group-hover/ielts:text-[rgb(211,47,47)] w-full">Luyện thi IELTS</p>
                <div className="absolute hidden group-hover/ielts:block left-full bottom-0 bg-white border shadow-md w-64">
                  <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học IELTS 0 - 3.0+</p>
                  <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học IELTS 3.0 - 5.0+</p>
                  <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học IELTS 5.0 - 6.5+</p>
                </div>
              </div>     
            </div>
          </div>
          <a href="/4skills" className="xl:flex md:hidden cursor-pointer">Tiếng anh mất gốc</a>
          <a href="/communication" className="xl:flex md:hidden cursor-pointer">Tiếng anh giao tiếp</a>

          {/* Luyện thi TOEIC */}
          <div className="relative group h-full">
            <button className="hidden xl:flex md:hidden cursor-pointer items-center px-[8px] gap-1 h-full group-hover:border-b-[3px] group-hover:border-solid group-hover:border-[rgb(211,47,47)] group-hover:text-[rgb(211,47,47)] group-hover:bg-[#f1f1f1]">
              Luyện thi TOEIC
              <span className="material-symbols-outlined">expand_more</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white border shadow-md top-full left-0 w-64 z-10">
              <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học TOEIC 450+</p>
              <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học TOEIC 650+</p>
            </div>
          </div>

          {/* Luyện thi IELTS */}
          <div className="relative group h-full">
            <button className="hidden xl:flex md:hidden cursor-pointer px-[8px] items-center gap-1 h-full group-hover:border-b-[3px] group-hover:border-solid group-hover:border-[rgb(211,47,47)] group-hover:text-[rgb(211,47,47)] group-hover:bg-[#f1f1f1]">
              Luyện thi IELTS
              <span className="material-symbols-outlined">stat_minus_1</span>
            </button>
            <div className="absolute hidden group-hover:block bg-white border shadow-md top-full left-0 w-64 ">
              <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học IELTS 0 - 3.0+</p>
              <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học IELTS 3.0 - 5.0+</p>
              <p className="hover:bg-gray-100 cursor-pointer p-4 hover:text-[rgb(211,47,47)]">Khóa học IELTS 5.0 - 6.5+</p>
            </div>
          </div>

          <a href="" className="md:flex cursor-pointer">Test miễn phí</a>
          <a href="" className="md:flex cursor-pointer">Chính sách</a>
          <a href="" className="md:flex cursor-pointer">Liên hệ</a>
          <div className="relative h-full flex items-center">
            <button className="md:hidden cursor-pointer hover:bg-slate-100 p-4 flex items-center rounded h-full" onClick={() => {toggleSubMenu('menu'); setisOpen(true)}}>
              <span className="material-symbols-outlined">menu</span>
            </button>
            {openMenu === 'menu' && (
              <motion.div 
              initial={{ x: "100%", opacity: 0 }}  // Bắt đầu ngoài màn hình (bên phải)
              animate={{ x: "0%", opacity: 1 }}    // Hiển thị vào màn hình
              exit={{ x: "100%", opacity: 0 }}      // Trượt ra ngoài khi đóng
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className={`absolute  border shadow-md top-full right-0 w-screen bg-black md:hidden`} style={{ height: `calc(100vh - 64px)` }}>
                    <Menu/>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}