import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image1 from '../../assets/Hero/headphone.png';
import Image2 from '../../assets/Hero/watch.png';
import Button from '../Shared/Button';

const HeroSlide = [
  {
    id: 1,
    img: Image1,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Headphone',
  },
  {
    id: 2,
    img: Image2,
    subtitle: 'Beats Solo',
    title: 'Wireless',
    title2: 'Virtual',
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HeroSlide.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] hero-bg-color flex justify-center items-center">
        <div className="relative w-full h-full">
          {HeroSlide.map((data, index) => (
            <motion.div
              key={data.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentIndex === index ? 1 : 0 }}
              transition={{ duration: 2 }}
              className={`absolute inset-0 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold">{data.subtitle}</h1>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">{data.title}</h1>
                  <h1 className="text-4xl sm:text-6xl lg:text-8xl uppercase text-white dark:text-white/5 font-bold">{data.title2}</h1>
                  <div>
                    <Button
                      text="Shop by Category"
                      bgColor="bg-primary"
                      textColor="text-white"
                      handleOrderPopup={handleOrderPopup}
                    />
                  </div>
                  <div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark">Shop Now</button>
                  </div>
                </div>
                {/* Img section */}
                <div className="order-1 sm:order-2 flex justify-center items-center">
                  <img
                    src={data.img}
                    alt={data.subtitle}
                    className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[350px] lg:h-[350px] object-contain drop-shadow-lg relative z-40"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
