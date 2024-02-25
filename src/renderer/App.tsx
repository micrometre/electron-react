import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';

function AlprPlatesSSe() {
  return (
    <div className=" border-solid border-4 border-red-500 bg-black text-white shadow">
      <h1>electron-react-boilerplate</h1>
      <h1>electron-react-boilerplate</h1>
      <h1>electron-react-boilerplate</h1>
      <h1>electron-react-boilerplate</h1>
      <h1>electron-react-boilerplate</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
}
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AlprPlatesSSe />} />
      </Routes>
    </Router>
  );
}
