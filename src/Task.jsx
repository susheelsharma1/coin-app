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
               taskname:"Coin rewards clamed",
               tokenearn:"+100",
               days:"2"
            },
            {
               taskname:"Coin rewards clamed",
               tokenearn:"+100",
               days:"3"
            },
            {
               taskname:"Ocean menbers",
               tokenearn:"+100",
               days:"4"
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
                        <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center  dark:bg-red-600 dark:hover:bg-red-700 ">Open</button>
    
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
                    <div className='reward-days'>
                        <p>{item.days}<span>days</span></p>
    
                    </div>
                </div>
            ))
            }
                </div>
        
        </>
       
    );
}

export default Task;