import React, { useContext } from 'react';
import { TimelineContext } from '../Context/TimelineContext';

const Timeline = () => {
      const { timeline } = useContext(TimelineContext);
      console.log(timeline)
    
    return (
        <div>
            im a timeline
        </div>
    );
};

export default Timeline;