import React from 'react';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaShoppingCart } from 'react-icons/fa';
import Darkmode from './Darkmode';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const MenuLinks = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Shop', link: '/#shop' },
  { id: 3, name: 'About', link: '/#about' },
  { id: 4, name: 'Blogs', link: '/#blog' },
];

const DropdownLinks = [
  { id: 1, name: 'Home', link: '/#' },
  { id: 2, name: 'Shop', link: '/#' },
  { id: 3, name: 'About', link: '/#' },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div
      className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40"
      data-aos="fade-down"
    >
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex justify-between items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            {/* Menu Items */}
            <div>
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li
                    key={index}
                    className="inline-block px-4 font-semibold text-gray-900 dark:text-gray-50 hover:text-black dark:hover:text-white duration-200"
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
                {/* Drop Down */}
                <li className="relative cursor-pointer group" data-aos="fade-up" data-aos-delay={MenuLinks.length * 100}>
                  <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-900 dark:text-white py-2">
                    Quicklinks
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>
                  {/* Drop Down Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                    <ul className="space-y-2">
                      {DropdownLinks.map((data, index) => (
                        <li key={index}>
                          <a className="text-gray-900 dark:text-gray-500 hover:text-black dark:hover:text-white duration-200" href={data.link}>
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar Section */}
            <div className="relative group hidden sm:block" data-aos="fade-left">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
            {/* Order Button Section */}
            <button className="relative p-3" onClick={handleOrderPopup} data-aos="fade-left">
              <FaShoppingCart className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark mode Section */}
            <div data-aos="fade-left">
              <Darkmode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
