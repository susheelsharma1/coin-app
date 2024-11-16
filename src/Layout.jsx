import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import coinIcon from "./assets/coin-icon.png";
const Layout = () => {
    return (
      <div className="layout">
        {/* Header */}
        <header className="header fixed top-0 w-full z-50 bg-gray-100 dark:bg-gray-800 p-4">
          <h1 className="text-center text-2xl font-bold">Muzik Coin</h1>
        </header>
  
        {/* Main Content */}
        <main className="main-content mt-16">
          <Outlet />
        </main>

      </div>
        
    );
  }
  export default Layout;
  function Home() {
    return (
      <div className="home-app">
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
        <div className="app-title inline-block align-middle">
          <h3>Muzik Coin</h3>
        </div>
        <div className="card fixed">
          <button>Tokens 0</button>
        </div>
        <div className="wrap">
          <div className="drop-outer">
            <img src={coinIcon} alt="Coin Drop" className="drop" />
          </div>
          <div className="drop-outer1">
            <img src={coinIcon} alt="Coin Drop" className="drop" />
          </div>
          <div className="drop-outer2">
            <img src={coinIcon} alt="Coin Drop" className="drop" />
          </div>
        </div>
      </div>
    );
  }

  
