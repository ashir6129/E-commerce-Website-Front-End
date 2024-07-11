import React from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import Button from '../Shared/Button';

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <div className={`fixed inset-0 z-50 ${orderPopup ? 'block' : 'hidden'}`}>
      {/* Overlay with blur effect */}
      <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md"></div>
      
      {/* Popup content */}
      <div className="w-[300px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-md">
        {/* Header Section */}
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">Order Now</h1>
          <div onClick={() => setOrderPopup(false)} className="cursor-pointer">
            <IoMdCloseCircleOutline size={24} />
          </div>
        </div>

        {/* Form Section */}
        <div>
          <input 
            type="text"
            placeholder="Name"
            className="form-input"
          />
          <input 
            type="text"
            placeholder="Address"
            className="form-input"
          />
           <input 
            type="text"
            placeholder="Phone No"
            className="form-input"
          />
           <input 
            type="text"
            placeholder="Email "
            className="form-input"
          />          
        </div>
        <div className="flex justify-center mt-4">
          <Button 
            text="Order Now"
            bgColor="bg-primary"
            textColor="text-white"
          />
        </div>
        {/* Add your form content here */}
      </div>
    </div>
  );
};

export default Popup;
