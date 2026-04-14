import { useState } from 'react';
import { TimelineContext } from './TimelineContext';




const TimelineProvider = ({ children }) => {
    const [filter, setFilter] = useState("all");
  
  const  [timeline, setTimeline]  =useState([])


  



  const data = {
    timeline,
    setTimeline,
    filter,
    setFilter,
  };
  return (
    <TimelineContext.Provider value={data}>
        {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;