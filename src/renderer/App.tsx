/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import { ReactComponent as Loader } from '../../assets/loader.svg';

function Button({ uploadToServer, text, loading, disabled }) {
  return (
     <button className="bg-red-700 min-h-80 min-w-80 text-7xl text-white " onClick={uploadToServer} disabled={disabled}>
        {!loading ? text : <Loader className="spinner" />}
     </button>
  );
}
function Home() {
  const [showLoader, setShowLoader] = useState(false)
  const [image, setImage] = useState(null);
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setImage(i);
    }
  };
  const uploadToServer = async () => {
    const body = new FormData();
    body.append('file', image);
    console.log(image);
    setShowLoader(true);
    const response = await fetch('http://35.246.54.118:5000/upload', {
      method: 'POST',
      body,
    });
    setShowLoader(false);
  };
  function onSubmit() {
    setShowLoader(true);
    setTimeout(() => {
      return setShowLoader(false);
    }, 100);
  }
  return (
    <div className="m-40">
             <input
          accept="image/*"
          id="files"
          type="file"
          name="file"
          onChange={uploadToClient}
        />
      <Button text="Submit"  loading={showLoader} disabled={showLoader} uploadToServer={uploadToServer}/>
    </div>
  );
}


function AlprdStream() {
  return (
    <div className=" border-solid border-4 border-red-500 flex  flex-col items-center justify-between mt-40 p-24 shadow">
      <div className="z-10 -w-5xl w-full items-center justify-between font-mono text-sm">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit  lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/index.js</code>
          <Home/>
        </p>
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
