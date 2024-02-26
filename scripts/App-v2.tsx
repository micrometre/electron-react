/* eslint-disable react/jsx-no-bind */
/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable no-console */
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import 'tailwindcss/tailwind.css';
import { Button, FileInput, Label} from 'flowbite-react';
import { ReactComponent as Loader } from '../../assets/loader.svg'


// eslint-disable-next-line react/prop-types
export function SpinnerButton({ onSubmit, text, loading, disabled }) {
  return (
     // eslint-disable-next-line react/button-has-type
     <button className="bg-red-700 min-h-80 min-w-80 text-7xl text-white " onClick={onSubmit} disabled={disabled}>
        {!loading ? text : <Loader className="spinner" />}
     </button>
  );
}


function UploadImage() {
  const [image, setImage] = useState(null);
  const [showLoader, setShowLoader] = useState(false)
  function onSubmit() {
    setShowLoader(true);
    setTimeout(() => {
      return setShowLoader(false);
    }, 1000);
  }
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
    setShowLoader(true);
      setImage(i);
    }
  };
  const uploadToServer = async () => {
    const body = new FormData();
    body.append('file', image);
    console.log(image);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch('http://35.246.54.118:5000/upload', {
      method: 'POST',
      body,
    });
  };
  return (
    <div className=" border-solid border-4 border-blue-500 flex  items-center justify-between p-4 shadow">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      <div>
      <SpinnerButton text="Submit" onSubmit={onSubmit} loading={showLoader} disabled={showLoader}  />

      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload Image" />
        <h2 className="mb-3 text-2xl font-semibold">Image File</h2>
      </div>
      <FileInput
          id="image-upload"
          accept="image/*"
          name="file"
          onChange={uploadToClient}
      />
    </div>
        <div>
          <Button
            className="btn btn-primary"
            type="submit"
            onClick={uploadToServer}
          >
            Send to server
          </Button>
        </div>
      </div>
    </div>
  );
}
// eslint-disable-next-line react/prop-types
function UploadVideo({loading, text, disabled}) {
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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = await fetch('http://35.246.54.118:5000/uploadvideo', {
      method: 'POST',
      body,
    });
  };
  return (
    <div className=" border-solid border-4 border-blue-500 flex  items-center justify-between p-4 shadow">
      <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <h2 className="mb-3 text-2xl font-semibold">Upload Video</h2>
        <input
          accept="image/*"
          id="files"
          type="file"
          name="file"
          onChange={uploadToClient}
        />
        <div>
          <Button
            className="submit-btn"
            type="submit"
            onClick={uploadToServer}
            disabled={disabled}
          >
           {!loading ? text : <Loader className="spinner" />}

            Send to server
          </Button>
        </div>
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


function VoideoStream() {
  return (
      <video controls width="30%" className="videoPlayer" src="http://35.246.54.118:5000/video" />
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
      <div className="border-solid border-4 border-red-500 flex  flex-col items-center justify-between p-2 shadow">
        <VoideoStream />
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
