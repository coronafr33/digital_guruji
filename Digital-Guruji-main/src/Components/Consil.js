import React from 'react';
import Card from './Card'; 

const Consil = () => {
  return (
    <div className="flex justify-between items-center p-4">
      
        <h1 className="bungee-spice-regular bold text-3xl p-8">
          DO YOU WANT TO CONSULT<br></br> WITH MUMBAI'S TOP DOCTOR
        </h1>
      <div className="w-[50%] rounded-lg overflow-hidden shadow-lg border-4">
        <iframe
          src="https://www.nanavatimaxhospital.org/doctor/psychiatrist-in-mumbai"
          frameBorder="0"
          width="100%"
          height="600"
          className="rounded-lg"
        />
      </div>

      {/* Button/Card Section */}
      <div className="ml-8 Consulting">
        <a href="https://telemanas.mohfw.gov.in/home" target="_blank" rel="noopener noreferrer">
         {/* <Link src="https://telemanas.mohfw.gov.in/home"> */}
         <button className=" text-white font-bold py-4 px-8 rounded-lg shadow-lg">
            <Card />
          </button>
          {/* </Link>  */}
        </a>
      </div>
    </div>
  );
};

export default Consil;
