import React from 'react';
import logo from './logo.svg';
import './input.css';
import NavBar from './components.tsx/navbar';

function App() {
  return (   
    
  <html className='bg-primary h-screen' >
    <body className=' p-0 m-0 flex items-center justify-center text-center bg-primary text-quaternary ' id='main'>  

     <div className=''>
          <NavBar />
      </div>  

      <div className="mt-9 w-2/4 flex justify-center text-center flex-col" id='main'>         

        <div className="m-12">
          <h1 className='text-5xl m-0 p-8 font-bold'>What-Now</h1>
        </div>

        <div className='relative mt-48 pt-14 rounded-lg bg-secondary border-solid border-secondary' id="formContainer">
          <form id="form">
            <input
              className="h-12 w-4/6 m-4 p-0 bg-transparent rounded-lg cursor-pointer outline-none bg-quaternary placeholder:opacity-100 placeholder-quaternary font-bold text-2xl"
              type="text"
              id="username"
              name="fname"
              placeholder="Name"
            />
            <div className='bg-quaternary m-auto text-center rounded-3xl h-1 w-4/6 mb-4' id="quaternary"></div>
            <input
              className="h-12 w-4/6 m-4 p-0 bg-transparent rounded-lg cursor-pointer outline-none bg-quaternary placeholder:opacity-100 placeholder-quaternary font-bold text-2xl"
              type="password"
              id="password"
              name="lname"
              placeholder="Password"
            />
            <div className="bg-quaternary m-auto text-center rounded-3xl h-1 w-4/6 mb-4" id="quaternary"></div>
            <input
              className="h-12 w-4/6 m-4 p-0 text-center mt-12 mb-12 bg-tertiary decoration-none text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded-lg cursor-pointer font-bold text-2xl"
              type="submit"
              value="Login"
              id="Tertiary SubmitButton"
            />
          </form>
        </div>     
      </div>

      <div id="StyleToggleContainer" className='fixed left-20 bottom-10'>
        {/* <li id="list" className="li"></li>           */}
        <label className="switch">
          <script src="/dist/Functions.js"></script>
            <input type="checkbox" id="ColourToggle"  />
          <span className="slider"></span>
        </label>
      </div>

    </body>    
  </html>
  );
}

export default App;
