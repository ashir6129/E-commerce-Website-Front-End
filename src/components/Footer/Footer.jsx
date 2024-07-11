import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Footer = () => {
  const FooterLinks = [
    { title: 'Home', link: '#' },
    { title: 'Shop', link: '#' },
    { title: 'About', link: '#' },
    { title: 'Contact', link: '#' },
    // Add more links as needed
  ];

  return (
    <div className="dark:bg-gray-950" data-aos="fade-in">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*about area*/}
          <div className="py-8 px-4" data-aos="fade-up">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
            >
              Eshop
            </a>
            <p className="text-slate-600 py-3 pr-6 text-lg text-justify dark:text-slate-400">
              EShop is an ecommerce platform that allows you to purchase digital
              products and services from a variety of vendors. You can browse
              our catalog, search for products and read reviews from other
              customers.
            </p>
          </div>
          {/*company links */}
          <div className="py-8 px-4" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-lg sm:text-xl dark:text-white">
              Company Links
            </h3>
            <ul className="pt-4">
              {FooterLinks.map((link, index) => (
                <li key={index} className="py-2" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <a
                    href={link.link}
                    className="text-lg text-gray-500 hover:text-primary duration-200 dark:text-gray-400 dark:hover:text-primary"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Subcription area */}
          <div className="py-8 px-4" data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-lg sm:text-xl dark:text-white">
              Join Our Newsletter
            </h3>
            <p className="text-slate-600 py-3 text-lg dark:text-slate-400">
              Subscribe to our newsletter and stay updated.
            </p>
            <div className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-4 bg-slate-100 dark:bg-gray-800 dark:text-white text-lg focus:ring-0 outline-none border-none"
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <button
                className="uppercase text-lg text-white p-4 bg-primary"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t py-4 dark:border-gray-800 border-slate-200" data-aos="fade-in">
          <p className="text-center text-lg text-slate-500 dark:text-gray-400">
            &copy; 2023 EShop - All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;