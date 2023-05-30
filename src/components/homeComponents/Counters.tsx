import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Counters = () => {

    // const [counters, setCounters] = useState([
    //     { label: 'Completed Projects', value: 50, target: 100 },
    //     { label: 'Counties', value: 16, target: 30 },
    //     { label: 'Services', value: 10, target: 20 },
    //     { label: 'Tech Stack', value: 15, target: 25 },
    // ]);

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    const [counter4, setCounter4] = useState(0);
  
    useEffect(() => {
      let completedCounters = 0;
  
      const timer = setInterval(() => {
        // Counter 1
        setCounter1(prevCounter1 => {
          if (prevCounter1 < 50) {
            return prevCounter1 + 5;
          } else {
            completedCounters++;
            if (completedCounters === 4) {
              clearInterval(timer);
            }
            return prevCounter1;
          }
        });
  
        // Counter 2
        setCounter2(prevCounter2 => {
          if (prevCounter2 < 16) {
            return prevCounter2 + 2;
          } else {
            completedCounters++;
            if (completedCounters === 4) {
              clearInterval(timer);
            }
            return prevCounter2;
          }
        });
  
        // Counter 3
        setCounter3(prevCounter3 => {
          if (prevCounter3 < 10) {
            return prevCounter3 + 1;
          } else {
            completedCounters++;
            if (completedCounters === 4) {
              clearInterval(timer);
            }
            return prevCounter3;
          }
        });
  
        // Counter 4
        setCounter4(prevCounter4 => {
          if (prevCounter4 < 15) {
            return prevCounter4 + 3;
          } else {
            completedCounters++;
            if (completedCounters === 4) {
              clearInterval(timer);
            }
            return prevCounter4;
          }
        });
      }, 200); 
  
      return () => clearInterval(timer);
    }, []);


    return (
        <>
            <div className="d-flex bg-color-yellow padding-x-100px py-4">
                <div className="col-12 row row-cols-1 row-cols-sm-2 row-cols-lg-4">
                    <div className="col txt-color-white text-center">
                        <h1 className='font-72px font-700 mb-0' >{counter1} +</h1>
                        <p className='font-22 font-600 mb-0 font-inter'>Completed Projects </p>
                    </div>
                    <div className="col txt-color-white text-center">
                        <h1 className='font-72px font-700 mb-0' >{counter2} +</h1>
                        <p className='font-22 font-600 mb-0 font-inter'>Counties</p>
                    </div>
                    <div className="col txt-color-white text-center">
                        <h1 className='font-72px font-700 mb-0' >{counter3}+</h1>
                        <p className='font-22 font-600 mb-0 font-inter'>Services</p>
                    </div>
                    <div className="col txt-color-white text-center">
                        <h1 className='font-72px font-700 mb-0' >{counter4}+</h1>
                        <p className='font-22 font-600 mb-0 font-inter'>Tech Stack</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Counters



