import React, { useContext,  } from 'react';
import { TimelineContext } from '../Context/TimelineContext';
import callImg from "../../assets/call.png";
import textImg from "../../assets/text.png";
import videoImg from "../../assets/video.png";
import { FiClock, FiHome, FiMessageSquare, FiPhone, FiVideo } from 'react-icons/fi';
import { Link } from 'react-router';




const Timeline = () => {
  const { timeline } = useContext(TimelineContext);
//   console.log(timeline);

  const {filter, setFilter} =useContext(TimelineContext)

  const filteredTimeline = filter === "all" ? timeline: timeline.filter((item) => item.actionType === filter);

  return (
    <div className="max-w-6xl mx-auto mt-10 mb-10 px-4">
      <h1 className="text-4xl font-bold mb-6 text-slate-800">Timeline</h1>
      <label className="select mb-10">
        <span className="label">Filter timeline</span>
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="all">ALL</option>
          <option value="call">Call</option>
          <option value="video">Video</option>
          <option value="text">Text</option>
        </select>
      </label>

      {filteredTimeline.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center bg-white shadow rounded-xl p-10">
          <FiClock size={60} className="text-gray-400 mb-4" />

          <h2 className="text-2xl font-bold text-slate-700">No Activity Yet</h2>

          <p className="text-gray-500 mt-2">
            You havent made any call, text or video yet.
          </p>

          <Link to="/">
            <button className="mt-5 flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800">
              <FiHome />
              Go Home
            </button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredTimeline.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-xl p-5 flex justify-between items-center"
            >
              <div className="flex items-center gap-4">
                <img
                  src={
                    item.actionType === "call"
                      ? callImg
                      : item.actionType === "text"
                        ? textImg
                        : videoImg
                  }
                  alt={item.actionType}
                  className="w-12 h-12 object-cover"
                />

                <div>
                  <h2 className="font-bold text-lg text-slate-800">
                    {item.actionType} With{" "}
                    <span className="text-[15px] text-gray-500">
                      {" "}
                      {item.name}
                    </span>
                  </h2>
                  <p className="text-sm text-gray-500">{item.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {item.actionType === "call" && (
                  <span className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <FiPhone /> {item.date}
                  </span>
                )}

                {item.actionType === "text" && (
                  <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <FiMessageSquare /> {item.date}
                  </span>
                )}

                {item.actionType === "video" && (
                  <span className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                    <FiVideo /> {item.date}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};;

export default Timeline;