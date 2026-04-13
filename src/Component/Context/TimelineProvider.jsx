import { useState } from 'react';
import { TimelineContext } from './TimelineContext';




const TimelineProvider = ({ children }) => {
  const  [timeline, setTimeline]  =useState([])



  const data = {
    timeline,
    setTimeline,
  };
  return (
    <TimelineContext.Provider value={data}>
        {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;