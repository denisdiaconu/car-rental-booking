import React, { useState } from 'react';
import Title from '../../components/owner/Title';
import { assets } from '../../assets/assets';

const AddCar = () => {
  const [image, setImage] = useState(null);
  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: '',
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="px-4 py-10 md:px-10 flex-1">
      <Title
        title="Add New Car"
        subTitle="Fill in the details to list a new car for booking, including pricing, availability, and specifications."
      />
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm mt-6 max-w-xl"
      >
        <label htmlFor="car-image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_icon}
            alt="image"
            className="h-14 rounded cursor-pointer"
          />
          <input id="car-image" type="file" accept="image/*" hidden/>
        </label>
      </form>
    </div>
  );
};

export default AddCar;
