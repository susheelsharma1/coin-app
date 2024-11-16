import React, { useState } from "react";


const Task = () => {
    const data = [
        {
           taskname:"Join COIN community",
           tokenearn:"+100",
        },
        {
           taskname:"Join COIN on X",
           tokenearn:"+100",
        },
        {
           taskname:"Telegram Premium",
           tokenearn:"+100",
        },
        {
           taskname:"Invite 5 friends to COIN",
           tokenearn:"+1000",
        },
        {
           taskname:"Invite 5 friends to COIN",
           tokenearn:"+2000",
        },
        {
           taskname:"Retweet 'Let's get Coin'",
           tokenearn:"+100",
        },
        {
           taskname:"Retweet 5 Mil on Coin'",
           tokenearn:"+100",
        },
        {
           taskname:"Play SNAKES",
           tokenearn:"+200",
        },
        {
           taskname:"Join SNANKES Community",
           tokenearn:"+200",
        },
        {
           taskname:"Follow SNAKES on X",
           tokenearn:"+200",
        },
        ]
    return (
        <>

        <div className=''>
        {
            data.map((item,index) =>(
                <div key={index} className="vertical-tasks">
                    <div className='tasks-list'>
                        <h5 className="vertical-timeline-time">{item.taskname}</h5>
                        <h6 className="vertical-timeline-time">{item.tokenearn}</h6>
                    </div>
                    <div className='tasks-button'>
                        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Open</button>
    
                    </div>
                </div>
            ))
        }
        </div>
        
        </>
       
    );
}

export default Task;