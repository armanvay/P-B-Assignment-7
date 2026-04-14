import React from 'react';
import not from "../../assets/not.png"
import { Link } from 'react-router';

const NotFund = () => {
    return (
      <div>
        <div className="flex justify-center items-center">
          <img className="md:w-[50%]" src={not} alt="" />
        </div>
        <div className='flex justify-center items-center'>
          <Link c to={"/"}>
            <button className="btn bg-green-800 text-white font-bold">
              Go To Home
            </button>
          </Link>
        </div>
      </div>
    );
};

export default NotFund;