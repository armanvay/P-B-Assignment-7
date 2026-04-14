import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaComments, FaExclamationCircle, FaUserFriends } from 'react-icons/fa';
import AllCard from '../ShowCard/AllCard';
import { HashLoader } from 'react-spinners';



// const cardFormis = fetch("/data.json").then((res) => res.json());


const CardLode = () => {
        // const card =use(cardFormis)

         const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setCard(data);
          setLoading(false);
        }, 2500);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <HashLoader color="#008000" size={70} />
      </div>
    );
  }
        
    


    return (
      <div className="max-w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10  mb-10">
          <div className="bg-white shadow rounded-xl p-6 text-center ">
            <div className="text-2xl text-emerald-700 flex justify-center mb-2">
              <FaUserFriends />
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">{card.length}</h2>
            <p className="text-gray-500 mt-1">Total Friends</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center ">
            <div className="text-2xl text-emerald-700 flex justify-center mb-2">
              <FaCheckCircle />
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">3</h2>
            <p className="text-gray-500 mt-1">On Track</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center ">
            <div className="text-2xl text-emerald-700 flex justify-center mb-2">
              <FaExclamationCircle />
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">6</h2>
            <p className="text-gray-500 mt-1">Need Attention</p>
          </div>

          <div className="bg-white shadow rounded-xl p-6 text-center ">
            <div className="text-2xl text-emerald-700 flex justify-center mb-2">
              <FaComments />
            </div>
            <h2 className="text-3xl font-bold text-emerald-800">12</h2>
            <p className="text-gray-500 mt-1">Interactions This Month</p>
          </div>
        </div>
        <div>
          <p className='font-bold text-2xl mb-5 '> Your Friends</p>
          <div className='grid md:grid-cols-4 gap-4 mb-20'>
            {card.map((card,i) =><AllCard key={i} card={card}></AllCard>)}
          </div>
        </div>
      </div>
    );
};

export default CardLode;