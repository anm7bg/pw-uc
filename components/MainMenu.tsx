import React from 'react';
import Link from 'next/link';
import { FaHome } from 'react-icons/fa';
import { BsTools } from "react-icons/bs";
import { ImBlog } from "react-icons/im";

const MainMenu = () => {
  return (
    <ul className='main-menu'>
        <li><Link href="/"><FaHome /> Начало</Link></li>
        <li><Link href="/instrumenti"><BsTools /> Инструменти</Link></li>
        <li><Link href="/blog"><ImBlog /> Публикации</Link></li>
    </ul>
  )
}

export default MainMenu 