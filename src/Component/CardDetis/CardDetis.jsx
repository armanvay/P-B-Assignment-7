import React, { use, useContext, } from 'react';
import { Link, useParams } from 'react-router';
import {
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiClock,
  FiArchive,
  FiTrash2,
} from "react-icons/fi";
import { IoMdText } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { FaVideo } from 'react-icons/fa';
import { TimelineContext } from '../Context/TimelineContext';

const cardFormis = fetch("/data.json").then((res) => res.json());

const CardDetis = ({params}) => {
    const {id} =useParams(params)

    const cardid =use(cardFormis)

    const actipeCard =cardid.find(card =>card.id ==id)
    // console.log(actipeCard)
  const {timeline, setTimeline} = useContext(TimelineContext);
    const {
      name,
      picture,
      email,
      status,
      tags,
      bio,
      goal,
      next_due_date,
      days_since_contact,
    } = actipeCard;
    

    const addTimeline=(actipeCard)=>{
        setTimeline([...timeline,actipeCard])

    }
  
   
    return (
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1  md:grid-cols-3 gap-6 bg-gray-50 rounded-xl mt-10 mb-10">
        {/* Left Sidebar */}
        <div className="bg-white rounded-xl p-5 shadow">
          <div className="bg-white shadow rounded-xl p-6 text-center cursor-pointer">
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
                className={` px-2 py-1 rounded-full text-xs ${status === "overdue" ? "bg-red-500 text-white font-bold" : ""} ${status === "almost due" ? "bg-yellow-300  font-bold text-white" : ""} ${status === "on-track" ? "bg-green-800 text-white font-bold" : ""}`}
              >
                {status}
              </span>
              <div className="">
                <p className="font-semibold  text-gray-400">
                  Preferred:{email}
                </p>
                <p className="font-bold ">
                  Bio : <span className="text-green-800"> {bio}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3 font-semibold">
            <Link to={"/"}>
              <button className="w-full gap-2 p-2 border bg-black text-white rounded cursor-pointer">
                Back Now
              </button>
            </Link>
            <button className="w-full flex items-center gap-2 p-2 border rounded cursor-pointer mt-2 hover:bg-gray-100">
              <FiClock /> Snooze 2 Weeks
            </button>

            <button className="w-full flex items-center gap-2 p-2 border rounded cursor-pointer hover:bg-gray-100">
              <FiArchive /> Archive
            </button>

            <button className="w-full flex items-center gap-2 p-2 border text-red-500 rounded hover:bg-red-50">
              <FiTrash2 /> Delete
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:col-span-2 space-y-4">
          {/* Top Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold text-xl">{days_since_contact}</h3>
              <p className="text-xs text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold text-xl">{goal}</h3>
              <p className="text-xs text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded shadow text-center">
              <h3 className="font-bold text-xl">{next_due_date}</h3>
              <p className="text-xs text-gray-500">Next Due</p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-sm text-gray-500">Connect every {goal} days</p>
            </div>
            <button className="text-sm border px-3 py-1 rounded">Edit</button>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-3">
              <button  onClick={()=>addTimeline(actipeCard)} className="flex flex-col items-center p-3 border rounded hover:bg-gray-100">
                <FiPhone size={20} />
                <span className="text-xs mt-1">Call</span>
              </button>

              <button onClick={()=>addTimeline(actipeCard)} className="flex flex-col items-center p-3 border rounded hover:bg-gray-100">
                <FiMessageSquare size={20} />
                <span className="text-xs mt-1">Text</span>
              </button>

              <button onClick={()=>addTimeline(actipeCard)} className="flex flex-col items-center p-3 border rounded hover:bg-gray-100">
                <FiVideo size={20} />
                <span className="text-xs mt-1">Video</span>
              </button>
            </div>
          </div>

          {/* Recent */}
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold mb-3">Recent Interactions</h3>

            <div className="space-y-3 text-sm font-bold">
              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <IoMdText className="size-5" /> Text - Asked for career advice
                </span>
                <span className="text-gray-400">Jan 28, 2026</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <IoCall className="size-5" /> Meetup br - Industry conference
                </span>
                <span className="text-gray-400">Jan 28, 2026</span>
              </div>

              <div className="flex justify-between">
                <span className="flex items-center gap-2">
                  <FaVideo className="size-5" /> Video - Career advice
                </span>
                <span className="text-gray-400">Jan 28, 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CardDetis;