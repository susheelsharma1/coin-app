import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Task from './Task';

function MyRoutes() {
    return (
        <div>
            <Routes>
                <Route >
                    <Route path="task" element={<Task/>}/>
                    
                
                </Route>
            </Routes>
        </div>
    );
}

export default MyRoutes;