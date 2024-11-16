import React, { useState } from "react";
import coinIcon from "./assets/coin-icon.png";

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
        const reward = [
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

        <div className='task-view'>
            <div className="task-point-earnd">
                <div className="app-logo">
                    <img
                    src={coinIcon}
                    alt="Coin Logo"
                    className="coin"
                    style={{
                        display: "flex",
                        margin: "0 auto",
                        maxWidth: "150px",
                    }}
                    />
                </div>
                <div className="token-earns">
                    <h4>1.23</h4>
                    <h5>Tokens</h5>
                </div>
            </div>
            <div className="heading"><h6>Task</h6></div>
        {
            data.map((item,index) =>(
                <div key={index} className="vertical-tasks">
                    <div className='tasks-list'>
                        <h5 className="vertical-timeline-time">{item.taskname}</h5>
                        <h6 className="vertical-timeline-time">{item.tokenearn}</h6>
                    </div>
                    <div className='tasks-button'>
                        <button type="submit" className="flex rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Open</button>
    
                    </div>
                </div>
            ))
        }
        </div>
                <div className="rewards-earnd">
                    <div className="heading"><h6>Rewards</h6></div>
                    {
                    reward.map((item,index) =>(
                <div key={index} className="vertical-tasks">

                    <div className='tasks-list'>
                        <h5 className="vertical-timeline-time">{item.taskname}</h5>
                        <h6 className="vertical-timeline-time">{item.tokenearn}</h6>
                    </div>
                    <div className='tasks-button'>
                        <button type="submit" className="flex rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Open</button>
    
                    </div>
                </div>
            ))
            }
                </div>
        
        </>
       
    );
}

export default Task;