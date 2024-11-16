import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Task from './Task';
import Layout from './Layout';
import App from './App';


function MyRoutes() {
    return (
        <div>
            <Routes>
                <Route >
                <Route path="/" element={<App />}>
          {/* <Route index element={<Home />} /> */}
          <Route path="task" element={<Task />} />
        </Route>
                
                </Route>
            </Routes>
        </div>
    );
}

export default MyRoutes;