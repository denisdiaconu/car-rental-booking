import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { assets, dummyCarData } from '../assets/assets';

const CarDetails = () => {
  const [car, setCar] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setCar(dummyCarData.find((car) => car._id === id));
  }, [id]);
  return car ? (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16 ">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-500 cursor-pointer"
      >
        <img
          src={assets.arrow_icon}
          alt="arrow"
          className="rotate-180 opacity-65"
        />
        Back to All Cars
      </button>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetails;
