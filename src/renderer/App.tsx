import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'tailwindcss/tailwind.css';

function UploadImage() {
  return (
    <div className=" border-solid border-4 border-blue-500 flex  items-center justify-between p-4 shadow">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Upload Image</h2>
      </div>
    </div>
  );
}
function UploadVideo() {
  return (
    <div className=" border-solid border-4 border-blue-500 flex  items-center justify-between p-4 shadow">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Upload Video</h2>
      </div>
    </div>
  );
}
function AlprPlatesImagesSse() {
  return (
    <div className=" border-solid border-4 border-blue-500 flex  items-center justify-between p-4 shadow">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Alpr Images</h2>
      </div>
    </div>
  );
}

function AlprPlatesSse() {
  return (
    <div className=" border-solid border-4 border-green-500 flex items-center justify-between p-4 shadow">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Alpr Plates</h2>
      </div>
    </div>
  );
}
function AlprdStream() {
  return (
    <div className=" border-solid border-4 border-red-500 flex  flex-col items-center justify-between p-24 shadow">
      <div className="z-10 -w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
        </p>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <UploadImage />
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <UploadVideo />
        </div>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <AlprPlatesImagesSse />
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <AlprPlatesSse />
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AlprdStream />} />
      </Routes>
    </Router>
  );
}
