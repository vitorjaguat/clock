import { useState, useEffect } from 'react';
import './Clock.css';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  //updating time every 1s:
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  let hr = time.getHours();
  const min = time
    .getMinutes()
    .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); //.toLocaleString is just to make sure our number is in a 2-digit form (for digital version of the clock)
  const sec = time.getSeconds();
  let ampm = '';

  function hour12() {
    let hour = time.getHours();

    if (hour < 12) {
      ampm = 'am';
    }

    if (hour >= 12) {
      hour -= 12;
      ampm = 'pm';
    }

    if (hour === 0) {
      hour = 12;
    }

    return hour;
  }

  // moving the hands:
  // const hourHand = document.getElementById('hourHand');
  // const minuteHand = document.getElementById('minuteHand');
  // const secondHand = document.getElementById('secondHand');
  // hourHand.style.transform = `rotate(${hr * 30 + min * 0.5 - 180}deg)`;
  // minuteHand.style.transform = `rotate(${min * 6 - 180}deg)`;
  // secondHand.style.transform = `rotate(${sec * 6 - 180}deg)`;

  return (
    <div className="clock">
      <div className="face">
        <div
          id="secondHand"
          className="hand second"
          style={{ transform: `rotate(${sec * 6 - 180}deg)` }}
        ></div>
        <div
          id="minuteHand"
          className="hand minute"
          style={{ transform: `rotate(${min * 6 - 180}deg)` }}
        ></div>
        <div
          id="hourHand"
          className="hand hour"
          style={{ transform: `rotate(${hr * 30 + min * 0.5 - 180}deg)` }}
        ></div>
        <div className="hand center"></div>
      </div>
    </div>
  );
}
