import React from 'react';
import Image1 from "../../assets/Category/earphone.png";
import Image2 from "../../assets/Category/macbook.png";
import Image3 from "../../assets/Category/watch.png";
import Button from '../Shared/Button';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init();

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/*first column */}
          <div
            className="py-10 pl-5 bg-gradient-to-t from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] flex items-end"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-gray-200"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl xl:text-5xl font-bold opacity-20 mb- ">EarPhone</p>
                <Button
                  text="Browse"
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <img
              src={Image1}
              alt=""
              className="w-[320px] absolute bottom-0"
            />
          </div>
          {/*second column*/}
          <div
            className="py-10 pl-5 bg-gradient-to-t from-brandYellow/90 to-brandYellow/70 text-white rounded-3xl relative h-[320px] flex items-end"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div>
              <div className="mb-4">
                <p className="mb-[2px] text-white"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl xl:text-5xl font-bold opacity-40 mb-2">Gadget</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-brandYellow"}
                />
              </div>
            </div>
            <img
              src={Image3}
              alt=""
              className="w-[320px] absolute -right-4 lg:top-[40px]"
            />
          </div>
          {/*third column*/}
          <div
            className="col-span-2 py-10 pl-5 bg-gradient-to-t from-primary to-primary text-white rounded-3xl relative h-[320px] flex items-end"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div>
              <div className="mb-4">
                <p className="text-white"> Enjoy</p>
                <p className="text-2xl font-semibold mb-[2px]">with</p>
                <p className=" text-4xl xl:text-5xl font-bold opacity-40 mb-2">Laptop</p>
                <Button
                  text="Browse"
                  bgColor={"bg-white"}
                  textColor={"text-primary"}
                />
              </div>
            </div>
            <img
              src={Image2}
              alt=""
              className="w-[250px] absolute top-1/2 -translate-y-1/2  -right-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
