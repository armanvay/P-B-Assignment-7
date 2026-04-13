import React from 'react';
import { Link } from 'react-router';

const AllCard = ({card}) => {




    const { id,name, picture,  status, tags, days_since_contact } =
      card;
    return (
      <Link to={`/detis/${id}`} className="bg-white shadow rounded-xl p-6 text-center cursor-pointer">
        <img
          src={picture}
          alt="David Kim"
          className="w-20 h-20 rounded-full mx-auto object-cover"
        />

        <h2 className="text-xl font-bold text-slate-800 mt-4">{name}</h2>

        <p className="text-sm text-gray-500 mt-1">
          <span className="font-bold mr-1 ">{days_since_contact}</span>ago
        </p>

        <div className="mt-3 gap-2 mb-2">
          {tags.map((tag, i) => {
            return (
              <span
                key={i}
                className="bg-green-100 text-green-700 px-2 py-1 mr-2 rounded-full text-xs"
              >
                {tag}
              </span>
            );
          })}
        </div>
        <div>
          <span
            className={` px-2 py-1 rounded-full text-xs ${status === "overdue" ? "bg-red-500 text-white font-bold" : ""} ${status === "almost due" ? "bg-yellow-300  font-bold text-white" : ""} ${status === "on-track" ? "bg-green-800 text-white font-bold":""}`}
          >
            {status}
          </span>
        </div>
      </Link>
    );
};

export default AllCard;