import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import coinIcon from './assets/coin-icon.png'
import './App.css'
import MyRoutes from './MyRoutes';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="task" element={<MyRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>

    <div className='home-app'>
    <div className="app-logo">
      <img src={coinIcon} alt="Coin Logo" className='coin' style={{display:'flex', margin:'0 auto',maxWidth:'150px'}}/>
      </div>
        
        <div className='app-title inline-block align-middle'>
          <h3>Muzik Coin</h3>
        </div>
        <div className="card fixed">
          <button 
          // onClick={() => setCount((count) => count + 1)}
          >
            Tokens 0
            {/* {count} */}
          </button>
          
        </div>
    </div>
     
        <div className="wrap">
        <div className="drop-outer">
            <img src={coinIcon} alt="" className="drop"/>
            {/* <svg className="drop" viewBox="0 0 40 40" version="1.1"
    xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="20"/>
    </svg> */}
        </div>
        
        <div className="drop-outer1">
          <img src={coinIcon} alt="" className="drop"/>
        </div>
        <div className="drop-outer2">
          <img src={coinIcon} alt="" className="drop" />
        </div>

      </div>
<div className="fixed bottom-0 left-0 z-50 h-16 footer-nav">
    <div className="grid max-w-lg grid-cols-4 mx-auto font-medium">
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
        </svg>

            <span className="text-sm dark:text-gray-400">Home</span>
        </button>
        <Link to ="/task">
          <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 4h3a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3m0 3h6m-6 7 2 2 4-4m-5-9v4h4V3h-4Z"/>
          </svg>

              <span className="text-sm dark:text-gray-400">Tasks</span>
          </button>
          </Link>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeWidth="2" d="M11.083 5.104c.35-.8 1.485-.8 1.834 0l1.752 4.022a1 1 0 0 0 .84.597l4.463.342c.9.069 1.255 1.2.556 1.771l-3.33 2.723a1 1 0 0 0-.337 1.016l1.03 4.119c.214.858-.71 1.552-1.474 1.106l-3.913-2.281a1 1 0 0 0-1.008 0L7.583 20.8c-.764.446-1.688-.248-1.474-1.106l1.03-4.119A1 1 0 0 0 6.8 14.56l-3.33-2.723c-.698-.571-.342-1.702.557-1.771l4.462-.342a1 1 0 0 0 .84-.597l1.753-4.022Z"/>
        </svg>


            <span className="text-sm  dark:text-gray-400">Leaderboard</span>
        </button>
        <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
          </svg>
            <span className="text-sm dark:text-gray-400">Friends</span>
        </button>
    </div>
</div>
    </>
  )
}

export default App
