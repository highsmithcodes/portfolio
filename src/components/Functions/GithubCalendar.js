import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GithubCalendar = () => {
  const [calendarData, setCalendarData] = useState(null);

  useEffect(() => {
    const fetchCalendarData = async () => {
      try {
        const response = await axios.get('https://evening-castle-95872-7f68a3b15505.herokuapp.com/calendar');
        setCalendarData(response.data);
      } catch (error) {
        console.error('Error fetching calendar data:', error);
      }
    };

    fetchCalendarData();
  }, []);

  return (
    <div>
      {calendarData ? (
        <div dangerouslySetInnerHTML={{ __html: calendarData }} />
      ) : (
        <p>Loading calendar data...</p>
      )}
    </div>
  );
};

export default GithubCalendar;
