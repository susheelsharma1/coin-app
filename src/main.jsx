import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from './Task.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

  <BrowserRouter>
  <Routes>
      <Route index element={<App />} />
      <Route path="/tasks" element={<Task />} />
  </Routes>
</BrowserRouter>
)

