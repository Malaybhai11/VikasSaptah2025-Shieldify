'use client';

import Spline from '@splinetool/react-spline';
import MovingTextAnimation from './Movingtext';

// Removed unused imports

const Hero = () => {
  return (
    <>
      <div className="h-[85vh] w-full bg-black p-8 flex align-middle justify-center font-poppins gap-4">

        <div className="leftdiv h-[75vh] w-[55vw] border-b border-t   border-gray-200 rounded-tl-[40px] rounded-bl-[40px]">

          <div className="flex flex-col justify-center h-full px-6  ">

            <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-5xl leading-tight drop-shadow-lg mb-3 animate-fade-in flex items-center gap-2 flex-wrap">
              The <span className="bg-gradient-to-r from-blue-500 via-blue-700 to-blue-800 bg-clip-text text-transparent">AI-powered</span>

            </h1>

            <h1 className="text-white font-extrabold text-4xl md:text-6xl lg:text-4xl leading-tight drop-shadow-lg mb-1 animate-fade-in delay-100">
              Web Application
            </h1>

            <h1 className="text-white font-black text-5xl md:text-5xl lg:text-6xl leading-tight mt-2 tracking-tight drop-shadow-2xl animate-fade-in delay-200">
              <span className="bg-gradient-to-r from-gray-300 via-gray-600 to-gray-700 bg-clip-text text-transparent">Firewall</span>
            </h1>

            <p className="text-gray-300 text-sm mt-4 max-w-lg animate-fade-in delay-300">
              Shieldify – The AI-Powered Web Application Firewall
              Always-on protection for your servers.
              Real-time AI threat detection. Zero friction.
            </p>

            <div className="btncontainer animate-fade-in delay-400">
              <button className="mt-6 px-7 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900">
                Get API Key
              </button>

            </div>


          </div>



        </div>

        <div className="rightdiv relative h-[75vh] w-[70vw]  p-6 shadow-2xl rounded-tr-[40px] rounded-br-[40px] flex items-center justify-center overflow-hidden hover:cursor-pointer
         border-b border-t  border-gray-100">

          <Spline
            scene="https://prod.spline.design/vl3A6gvfbzycit9g/scene.splinecode"
            className="rounded-[40px] h-full w-[70vw] z-10 transition-transform duration-500"
          />

          <div className="divtxt drop-shadow-[0_0_6px_rgba(59,130,246,0.6)] absolute bottom-8 left-10 text-white z-20 bg-transparent p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 backdrop:filter(blur(10px))">
            <h5>cyber security</h5>
          </div>
          <div className="divtxt2 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] absolute bottom-8 right-60 text-white z-20 bg-transparent p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 backdrop:filter(blur(10px))">
            <h5>Aegis</h5>
          </div>
          <div className="divtxt3 drop-shadow-[0_0_10px_rgba(59,130,246,0.6)] absolute bottom-8 right-5 text-white z-20 bg-transparent p-4 rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 backdrop:filter(blur(10px))">
            <h5>Smarter. Faster. Safer.</h5>
          </div>
        </div>

      </div>

       <div>
      <MovingTextAnimation />
    </div>



      
    </>
  );
};

export default Hero;