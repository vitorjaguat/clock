import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const clockStyle = {
    borderRadius: '50%',
    border: '2px solid black',
    width: '300px',
    height: '300px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const clockFaceStyle = {
    borderRadius: '50%',
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const clockPointerStyle = {
    width: '60%',
    height: '2px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '50%',
    transformOrigin: 'bottom',
  };

  const handleClick = (e) => {
    console.log(e.target.innerText);
  };

  const secondsDegrees = (time.getSeconds() / 60) * 360;
  const minutesDegrees = (time.getMinutes() / 60) * 360 + secondsDegrees / 60;
  const hoursDegrees = (time.getHours() / 12) * 360 + minutesDegrees / 12;

  return (
    <div style={clockStyle}>
      <div style={clockFaceStyle}>
        {[...Array(12)].map((_, i) => {
          const sliceDegrees = 360 / 12;
          const rotation = sliceDegrees * i;
          return (
            <div
              key={i}
              style={{
                ...clockFaceStyle,
                transform: `rotate(${rotation}deg)`,
              }}
              onClick={handleClick}
            >
              <div>{i + 1}</div>
            </div>
          );
        })}
        <div
          style={{
            ...clockPointerStyle,
            transform: `rotate(${secondsDegrees}deg)`,
          }}
        ></div>
        <div
          style={{
            ...clockPointerStyle,
            transform: `rotate(${minutesDegrees}deg)`,
          }}
        ></div>
        <div
          style={{
            ...clockPointerStyle,
            transform: `rotate(${hoursDegrees}deg)`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Clock;

// import { useState, useEffect } from 'react';
// import './Clockmtc.css';

// export default function Clock() {
//   const [time, setTime] = useState(new Date());
//   const [isHover, setIsHover] = useState(false);

//   //updating time every 1s:
//   useEffect(() => {
//     const interval = setInterval(() => setTime(new Date()), 1000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [time]);

//   let hr = time.getHours();
//   const min = time
//     .getMinutes()
//     .toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }); //.toLocaleString is just to make sure our number is in a 2-digit form (for digital version of the clock)
//   const sec = time.getSeconds();
//   let ampm = '';

//   function hour12() {
//     let hour = time.getHours();

//     if (hour < 12) {
//       ampm = 'am';
//     }

//     if (hour >= 12) {
//       hour -= 12;
//       ampm = 'pm';
//     }

//     if (hour === 0) {
//       hour = 12;
//     }

//     return hour;
//   }

//   //hover li:
//   let boxStyle = {
//     overflow: 'hidden',
//     position: 'absolute',
//     top: '0',
//     right: '0',
//     width: '50%',
//     height: '50%',
//     transformOrigin: '0% 100%',
//     transform: !isHover ? 'scale(1)' : 'scale(1.2',
//   };

//   return (
//     <div className="whole">
//       <ul className="circle">
//         <li
//           style={{
//             // overflow: 'hidden',
//             position: 'absolute',
//             top: '0',
//             right: '0',
//             width: '50%',
//             height: '50%',
//             transform: `rotate(-15deg) skewY(-60deg), ${
//               isHover ? 'scale(1.2)' : 'scale(1)'
//             }`,
//             transformOrigin: '0% 100%',
//             // transform: isHover ? 'scale(1.2)' : 'scale(1)',
//           }}
//           onMouseEnter={() => setIsHover(true)}
//           onMouseLeave={() => setIsHover(false)}
//         >
//           <div className="text">心</div>
//         </li>
//         <li>
//           <div className="text">小肠</div>
//         </li>
//         <li>
//           <div className="text">膀胱</div>
//         </li>
//         <li>
//           <div className="text">肾</div>
//         </li>
//         <li>
//           <div className="text">心包</div>
//         </li>
//         <li>
//           <div className="text">三焦</div>
//         </li>
//         <li>
//           <div className="text">胆</div>
//         </li>
//         <li>
//           <div className="text">肝</div>
//         </li>
//         <li>
//           <div className="text">肺</div>
//         </li>
//         <li>
//           <div className="text">大肠</div>
//         </li>
//         <li>
//           <div className="text">胃</div>
//         </li>
//         <li>
//           <div className="text">脾</div>
//         </li>
//       </ul>

//       <div className="face">
//         <div
//           id="secondHand"
//           className="hand second"
//           style={{ transform: `rotate(${sec * 6 - 180}deg)` }}
//         ></div>
//         <div
//           id="minuteHand"
//           className="hand minute"
//           style={{ transform: `rotate(${min * 6 - 180}deg)` }}
//         ></div>
//         <div
//           id="hourHand"
//           className="hand hour"
//           style={{ transform: `rotate(${hr * 30 + min * 0.5 - 180}deg)` }}
//         ></div>
//         <div className="hand center"></div>
//       </div>
//     </div>
//   );
// }

// // https://javascript.plainenglish.io/how-to-build-an-analog-clock-using-hooks-f33adf51ed9f
